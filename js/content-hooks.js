import $ from "jquery";
import Mercury from "@postlight/mercury-parser";

var regBackgroundRepeat = new RegExp(
  "background-repeat: no-repeat no-repeat;",
  "ig"
);

/**
 * Content hooks which listen for messages from the BEX in the iFrame
 * @param bridge
 */
export default function attachContentHooks(bridge) {
  // 关闭 Popup 遮罩窗口
  bridge.on("closePopup", (event) => {
    // Find a .some-class element and add our highlight CSS class.
    document
      .getElementById("mrdoc-clipper-div")
      .setAttribute("style", "display:none;");

    // Not required but resolve our promise.
    bridge.send(event.responseKey);
  });
  // 关闭搜索工具栏
  bridge.on("closeSearchToolbar", (event) => {
    // $("#mrdoc-clipper-search-toolbar-div").remove();
    $("#mrdoc-clipper-search-toolbar-div").hide();
    $("#mrdoc-clipper-search-btn").show();
  });
  // 获取网页标题
  bridge.on("getPageTitle", (event) => {
    const title = document.title;
    // Not required but resolve our promise.
    bridge.send(event.eventResponseKey, { title: title });
  });
  // 获取网页标题和链接
  bridge.on("getPageTitleAndLink", (event) => {
    const title = document.title;
    const link = document.location.href;
    // Not required but resolve our promise.
    bridge.send(event.eventResponseKey, { title: title, link: link });
  });
  // 获取网页正文
  bridge.on("getPageBody", (event) => {
    const url = document.location.href;
    Mercury.parse(url).then((result) => {
      // console.log(result);
      bridge.send(event.eventResponseKey, result);
    });
  }),
    // 获取整个网页
    bridge.on("getEntirePage", (event) => {}),
    // 开启鼠标选择
    bridge.on("openMouseSelect", (event) => {
      // 侦听鼠标移动
      document.body.onmousemove = function (e) {
        handleMouseMove(e);
      };
      // 侦听鼠标点击
      document.body.onmousedown = function (e) {
        // 获取HTML内容
        const content = handleMouseClick(e);
        bridge.send("returnMouseMarkContent", { data: content });
      };
    });
  // 关闭鼠标选择
  bridge.on("closeMouseSelect", (event) => {
    $("#mrdoc-clipper-mark-mask").hide();
    document.body.onmousemove = function () {};
    document.body.onmousedown = function () {};
  });
}

// 获取鼠标位置的元素
function elementFromPoint(e) {
  $("#mrdoc-clipper-mark-mask").hide();
  $("#mrdoc-clipper-mark-cover").hide();
  var pos = {
      top: e.pageY - $(window).scrollTop(),
      left: e.pageX,
    },
    target = $(document.elementFromPoint(pos.left, pos.top));
  $("#mrdoc-clipper-mark-mask").show();
  $("#mrdoc-clipper-mark-cover").show();
  return target;
}

// 鼠标移动的处理
function handleMouseMove(e) {
  $("#mrdoc-clipper-mark-mask").hide();
  $("#mrdoc-clipper-mark-cover").hide();
  var pos = {
    top: e.pageY - $(window).scrollTop(),
    left: e.pageX,
  };
  // console.log("鼠标位置：", pos);
  var target = $(document.elementFromPoint(pos.left, pos.top));
  // console.log("鼠标元素：", target);
  $("#mrdoc-clipper-mark-mask").show();
  $("#mrdoc-clipper-mark-cover").show();
  attachBox(target, $("#mrdoc-clipper-mark-mask"));
}

// 鼠标点击的处理
function handleMouseClick(e) {
  // 获取鼠标点击的元素
  var target = elementFromPoint(e);
  if (target.is("iframe, frame")) {
    console.log("无法获取iframe及frame里面的内容");
    return false;
  }
  // 获取元素的内容
  var html = getHTMLByNode(target);
  return html;
}

// 为元素添加黑色边框
function attachBox(target, el) {
  var body = $(document.body),
    size = {
      height: target.outerHeight(),
      width: target.outerWidth(),
    },
    pos = {
      left: target.offset().left,
      top: target.offset().top,
    };
  //box on the page edge
  //ajust the pos and size order to show the whole box
  var bodyOuterWidth = body.outerWidth();
  if (pos.left == 0) {
    if (size.width >= bodyOuterWidth) {
      size.width = bodyOuterWidth - 6;
    }
  } else if (pos.left + size.width >= bodyOuterWidth) {
    size.width = bodyOuterWidth - pos.left - 6;
  } else {
    pos.left -= 3;
  }
  if (pos.top == 0) {
    size.height -= 3;
  } else {
    pos.top -= 3;
  }
  el.css({
    left: pos.left,
    top: pos.top,
    height: size.height,
    width: size.width,
  });
}

// 从元素中获取HTML
function getHTMLByNode(node) {
  // 获取元素的标签名称
  var nodeTagName = node[0].tagName.toLowerCase();
  //如果标签名在过滤列表中，返回空字符串
  if (filterTagsObj[nodeTagName]) {
    return "";
  }
  var allEles = node[0].querySelectorAll("*"), // 元素的子元素
    allElesLength = allEles.length, // 元素的子元素数量
    nodeCSSStyleDeclaration = getComputedStyle(node[0]);

  // 如果元素没有子元素，且元素标签为img图片或a链接，且背景图片为空，那么返回空字符串
  if (allElesLength == 0) {
    if (
      !/^(img|a)$/.test(nodeTagName) &&
      node[0].innerHTML == 0 &&
      nodeCSSStyleDeclaration["background-image"] == "none"
    ) {
      return "";
    }
  }

  var cloneNode = node.clone(),
    allElesCloned = cloneNode[0].querySelectorAll("*"),
    el,
    cloneEl,
    color,
    cssStyleDeclaration,
    styleObj = {},
    cssValue,
    saveStyles = self.saveStyles;

  // 遍历元素的子元素
  for (var j = allElesLength - 1, tagName; j >= 0; j--) {
    cloneEl = allElesCloned[j];
    tagName = cloneEl.tagName.toLowerCase();
    // 如果标签名在过滤列表中或包含mrdoc clipper 属性，那么将其移除
    if (filterTagsObj[tagName] || cloneEl.getAttribute("mrclip")) {
      $(cloneEl).remove();
      continue;
    }
    // 如果标签为br换行，继续执行
    if (tagName == "br") {
      continue;
    }
    el = allEles[j];
    cssStyleDeclaration = getComputedStyle(el);
    cloneEl = $(cloneEl);
    color = cssStyleDeclaration.color;
    styleObj = {};
    // 图片转base64，然后上传到MrDoc
    // if (tagName == 'img') {
    //     console.log("存在图片,解析上传……",)
    //     self.img2base(cloneEl[0].src) // 图片转base64
    //     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    //         if(request.name == 'img2base64url'){
    //             console.log("获取上传图片URL：",request.data)
    //             cloneEl[0].src = request.data
    //         };
    //     });

    //     continue;
    // }

    // 遍历需要保留的样式属性
    for (var cssProperty in saveStyles) {
      cssValue = cssStyleDeclaration[cssProperty];
      if (cssValue == saveStyles[cssProperty]) continue;
      if (cssProperty == "color") {
        styleObj[cssProperty] = color == "rgb(255,255,255)" ? "#000" : color;
        continue;
      }
      styleObj[cssProperty] = cssValue;
    }
    if (tagName == "a") {
      cloneEl.attr("href", el.href);
    } else if (/^(ul|ol|li)$/.test(tagName)) {
      styleObj["list-style"] = cssStyleDeclaration["list-style"];
    }
    cloneEl.css(styleObj);
    removeAttrs(cloneEl);
  }
  if (nodeTagName == "body") {
    return cloneNode[0].innerHTML.replace(
      regBackgroundRepeat,
      "background-repeat: no-repeat;"
    );
  } else {
    color = nodeCSSStyleDeclaration.color;
    styleObj = {};
    for (var cssProperty in saveStyles) {
      cssValue = nodeCSSStyleDeclaration[cssProperty];
      if (cssValue == saveStyles[cssProperty]) continue;
      if (/^(margin|float)$/.test(cssProperty)) continue;
      if (cssProperty == "color") {
        styleObj[cssProperty] = color == "rgb(255,255,255)" ? "#000" : color;
        continue;
      }
      styleObj[cssProperty] = cssValue;
    }
    cloneNode.css(styleObj);
    removeAttrs(cloneNode);
    if (/^(img)$/.test(nodeTagName)) {
      var imgSrc = $(cloneNode[0]).attr("src");
      if (!/^http(s)?:\/\//.test(imgSrc)) {
        $(cloneNode[0]).attr(
          "src",
          window.location.protocol + "//" + window.location.host + "/" + imgSrc
        );
      }
    }
    return cloneNode[0].outerHTML.replace(
      regBackgroundRepeat,
      "background-repeat: no-repeat;"
    );
  }
}

// 需要过滤掉的标签对象
const filterTagsObj = {
  style: 1,
  script: 1,
  link: 1,
  iframe: 1,
  frame: 1,
  frameset: 1,
  noscript: 1,
  head: 1,
  html: 1,
  applet: 1,
  base: 1,
  basefont: 1,
  bgsound: 1,
  blink: 1,
  ilayer: 1,
  layer: 1,
  meta: 1,
  object: 1,
  embed: 1,
  input: 1,
  textarea: 1,
  button: 1,
  select: 1,
  canvas: 1,
  map: 1,
};

// 需要保留的样式
const saveStyles = {
  background:
    "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box",
  border: "0px none rgb(0, 0, 0)",
  bottom: "auto",
  "box-shadow": "none",
  clear: "none",
  color: "rgb(0, 0, 0)",
  cursor: "auto",
  display: "",
  //consider inline tag or block tag, this value must have
  float: "none",
  font: "",
  //this value must have, since it affect the appearance very much and style inherit is very complex
  height: "auto",
  left: "auto",
  "letter-spacing": "normal",
  "line-height": "normal",
  margin: "",
  "max-height": "none",
  "max-width": "none",
  "min-height": "0px",
  "min-width": "0px",
  opacity: "1",
  outline: "rgb(0, 0, 0) none 0px",
  overflow: "visible",
  padding: "",
  position: "static",
  right: "auto",
  "table-layout": "auto",
  "text-align": "start",
  "text-decoration": "",
  "text-indent": "0px",
  "text-shadow": "none",
  "text-overflow": "clip",
  "text-transform": "none",
  top: "auto",
  "vertical-align": "baseline",
  visibility: "visible",
  "white-space": "normal",
  width: "auto",
  "word-break": "normal",
  "word-spacing": "0px",
  "word-wrap": "normal",
  "z-index": "auto",
  zoom: "1",
};

// 需要移除的属性
function removeAttrs(node) {
  var removeAttrs = ["id", "class", "height", "width"];
  for (var i = 0, l = removeAttrs.length; i < l; i++) {
    node.removeAttr(removeAttrs[i]);
  }
  return node;
}

/**
 * 在页面中创建 MrDoc Clipper 的 Div
 */

const mrdocDiv = document.createElement("div");
mrdocDiv.id = "mrdoc-clipper-div";
mrdocDiv.mrclip = true;

/**
 * The code below will get everything going. Initialize the iFrame with defaults and add it to the page.
 *
 */
const mrdocIframe = document.createElement("iframe");
mrdocIframe.id = "mrdoc-clipper-iframe";
mrdocIframe.width = "100%";
mrdocIframe.src = chrome.runtime.getURL("www/index.html#/popup");

// 为iframe设置属性
Object.assign(mrdocIframe.style, {
  overflow: "visible",
  "max-height": "550px",
  height: "100%",
  border: 0,
});

//创建注入器
function createInspector() {
  // 创建一个 Cover div
  var coverDiv = $('<div id="mrdoc-clipper-mark-cover" mrclip></div>').css({
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
    "z-index": 99999998,
  });

  // 创建一个 mask div
  var maskDiv = $('<div id="mrdoc-clipper-mark-mask" mrclip></div>').css({
    "border-radius": 5,
    border: "3px dashed black",
    position: "absolute",
    top: -9999,
    left: -9999,
    width: 0,
    height: 0,
    "z-index": 99999998,
    background: "transparent",
  });

  //有些网页会把div强制为position:relative 导致选择区显示出错
  //手动将position强制为默认值
  //测试 http://www.smashingmagazine.com/2013/02/28/desktop-wallpaper-calendar-march-2013/

  // 创建一个最外层的div
  var markDiv = $(
    '<div id="mrdoc-clipper-markcontainer" style="position:static;" mrclip></div>'
  );
  markDiv.appendTo($(document.body)).append(coverDiv).append(maskDiv);
}

// 创建 MrDoc 搜索 iframe
function createMrdocSearchToolbar() {
  // 创建 搜索按钮
  const mrdocSearchBtn = document.createElement("div");
  mrdocSearchBtn.id = "mrdoc-clipper-search-btn";
  mrdocSearchBtn.onclick = function () {
    $("#mrdoc-clipper-search-toolbar-div").show();
    $("#mrdoc-clipper-search-btn").hide();
  };

  const mrdocSearchBtnIcon = document.createElement("div");
  const mrdocSearchBtnText = document.createElement("div");
  mrdocSearchBtnText.innerText = "MrDoc";
  mrdocSearchBtnText.id = "mrdoc-clipper-search-text";
  mrdocSearchBtnIcon.id = "mrdoc-clipper-search-icon";

  mrdocSearchBtn.appendChild(mrdocSearchBtnIcon);
  mrdocSearchBtn.appendChild(mrdocSearchBtnText);

  // 创建 搜索div
  const mrdocSearchDiv = document.createElement("div");
  mrdocSearchDiv.id = "mrdoc-clipper-search-toolbar-div";
  // 创建Iframe
  const mrdocSearchIframe = document.createElement("iframe");
  mrdocSearchIframe.id = "mrdoc-clipper-search-toolbar-iframe";
  mrdocSearchIframe.width = "100%";
  mrdocSearchIframe.height = "300px";
  Object.assign(mrdocSearchIframe.style, {
    overflow: "visible",
    border: "2px solid",
    "border-radius": "10px",
    // "max-height": "300px",
  });
  mrdocSearchIframe.src = chrome.runtime.getURL("www/index.html#/search");

  mrdocSearchDiv.appendChild(mrdocSearchIframe);
  document.body.appendChild(mrdocSearchBtn);
  document.body.appendChild(mrdocSearchDiv);
}

(function () {
  mrdocDiv.appendChild(mrdocIframe);
  document.body.appendChild(mrdocDiv);
  createInspector();
  // chrome.storage.local.get(["showSearchResult"], (r) => {
  //   console.log(r);
  //   const mrdocSearchToolbarStatus =
  //     r["showSearchResult"] == true ? true : false;
  //   if (mrdocSearchToolbarStatus) {
  // createMrdocSearchToolbar();
  //   }
  // });
})();
