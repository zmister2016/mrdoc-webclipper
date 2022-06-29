// Background code goes here

var chromeSchemeReg = /chrome:\/\/.*/gi; // Chrome配置项地址的正则表达式

// 侦听浏览器上扩展图标被点击
chrome.browserAction.onClicked.addListener(function (tab) {
  if (!chrome.runtime.sendMessage) {
    var msg =
      "抱歉，MrDoc 速记暂时不支持该版本的浏览器，请将浏览器升级到最新稳定版本。";
    notifyTipsFail(msg);
    return;
  }
  var match = tab.url.match(/^(.*?):/),
    scheme = match[1].toLowerCase();
  if (
    chromeSchemeReg.test(tab.url) ||
    (scheme != "http" && scheme != "https")
  ) {
    notifyTipsFail("不能在设置选项卡打开！");
    return;
  }
  createPopup(); //创建popup窗口
});

// 创建 popup 遮罩窗口
createPopup = function () {
  const showPopup = `
  document
    .getElementById("mrdoc-clipper-div")
    .setAttribute("style", "display:block;");`;
  chrome.tabs.executeScript(null, {
    code: showPopup,
  });
};

// 关闭 popup 遮罩窗口
function closePopup() {
  const close_script = `document.getElementById("mrdoc-clipper-iframe").src = '';
  document
    .getElementById("mrdoc-clipper-div")
    .setAttribute("style", "display:none;");`;
  chrome.tabs.executeScript(null, { code: "" });
}
