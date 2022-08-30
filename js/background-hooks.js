// Hooks added here have a bridge allowing communication between the BEX Background Script and the BEX Content Script.
// Note: Events sent from this background script using `bridge.send` can be `listen`'d for by all client BEX bridges for this BEX

// More info: https://quasar.dev/quasar-cli/developing-browser-extensions/background-hooks
import axios from "axios";
export default function attachBackgroundHooks(
  bridge /* , allActiveConnections */
) {
  bridge.on("storage.get", (event) => {
    const payload = event.data;
    if (payload.key === null) {
      chrome.storage.local.get(null, (r) => {
        const result = [];

        // Group the items up into an array to take advantage of the bridge's chunk splitting.
        for (const itemKey in r) {
          result.push(r[itemKey]);
        }
        bridge.send(event.eventResponseKey, result);
      });
    } else {
      chrome.storage.local.get([payload.key], (r) => {
        bridge.send(event.eventResponseKey, r[payload.key]);
      });
    }
  });

  bridge.on("storage.set", (event) => {
    const payload = event.data;
    chrome.storage.local.set({ [payload.key]: payload.data }, () => {
      bridge.send(event.eventResponseKey, payload.data);
    });
  });

  bridge.on("storage.remove", (event) => {
    const payload = event.data;
    chrome.storage.local.remove(payload.key, () => {
      bridge.send(event.eventResponseKey, payload.data);
    });
  });
  // 获取文集列表
  bridge.on("getProjects", (event) => {
    const payload = event.data;
    // console.log(payload);
    axios
      .request({
        url:
          payload.mrdocUrl +
          "/api/get_projects/?token=" +
          payload.mrdocUserToken,
        method: "get",
      })
      .then((r) => {
        // console.log(r);
        if (r.data.status) {
          var projects = [];
          for (var i = 0; i < r.data.data.length; i++) {
            projects.push({
              label: r.data.data[i]["name"],
              value: r.data.data[i]["id"].toString(),
            });
          }
          bridge.send(event.eventResponseKey, { data: projects });
        } else {
          bridge.send(event.eventResponseKey, { data: false });
        }
      })
      .catch(() => {
        bridge.send(event.eventResponseKey, { data: false });
      });
  });
  // 粘贴上传图片
  bridge.on("pasteImg", (event) => {
    const payload = event.data;
    let imgData = new FormData();
    imgData.append("data", JSON.stringify(payload.data));
    axios
      .request({
        url:
          payload.mrdocUrl + "/api/upload_img/?token=" + payload.mrdocUserToken,
        method: "post",
        data: imgData,
      })
      .then((r) => {
        if (r.data.success == 1) {
          bridge.send(event.eventResponseKey, {
            status: true,
            data: r.data.url,
          });
        } else {
          bridge.send(event.eventResponseKey, {
            status: false,
            data: "上传失败",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        bridge.send(event.eventResponseKey, {
          status: false,
          data: "上传异常",
        });
      });
  });
  // 上传URL图片
  bridge.on("uploadImgUrl", (event) => {
    console.log("上传URL图片", event);
    const payload = event.data;
    const imgUrl = payload.data.url;
    const imgBase64 = payload.data.base;
    let imgData = new FormData();
    imgData.append("data", JSON.stringify(imgBase64));
    axios
      .request({
        url:
          payload.mrdocUrl + "/api/upload_img/?token=" + payload.mrdocUserToken,
        method: "post",
        data: imgData,
      })
      .then((r) => {
        if (r.data.success == 1) {
          console.log("上传图片成功", imgUrl, r.data.url);
          bridge.send(event.eventResponseKey, {
            status: true,
            data: { url: r.data.url, src: imgUrl },
          });
        } else {
          bridge.send(event.eventResponseKey, {
            status: false,
            data: "上传失败",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        bridge.send(event.eventResponseKey, {
          status: false,
          data: "上传异常",
        });
      });
  });
  // 保存文档
  bridge.on("saveDoc", (event) => {
    const payload = event.data;
    // console.log(payload);
    let docData = new FormData();
    docData.append("pid", payload.pid);
    docData.append("title", payload.title);
    docData.append("editor_mode", payload.editor_mode);
    docData.append("doc", payload.doc);
    axios
      .request({
        url:
          payload.mrdocUrl + "/api/create_doc/?token=" + payload.mrdocUserToken,
        method: "post",
        data: docData,
      })
      .then((r) => {
        // console.log(r);
        if (r.data.status) {
          bridge.send(event.eventResponseKey, { status: true });
        } else {
          bridge.send(event.eventResponseKey, {
            status: false,
            data: r.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        bridge.send(event.eventResponseKey, {
          status: false,
          data: "保存文档异常",
        });
      });
  });
  // 搜索文档
  bridge.on("searchDoc", (event) => {
    // console.log(event);
    const payload = event.data;
    axios
      .request({
        url: `${payload.mrdocUrl}/api/get_self_docs/?sort=1&token=${payload.mrdocUserToken}&page=${payload.page}&kw=${payload.kw}`,
        method: "get",
      })
      .then((r) => {
        // console.log(r)
        if (r.data.status) {
          bridge.send(event.eventResponseKey, { data: r.data.data });
        } else {
          bridge.send(event.eventResponseKey, { data: [] });
        }
      })
      .catch((e) => {
        console.log(e);
        bridge.send(event.eventResponseKey, { data: [] });
      });
  });
  /*
  // EXAMPLES
  // Listen to a message from the client
  bridge.on('test', d => {
    console.log(d)
  })

  // Send a message to the client based on something happening.
  chrome.tabs.onCreated.addListener(tab => {
    bridge.send('browserTabCreated', { tab })
  })

  // Send a message to the client based on something happening.
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url) {
      bridge.send('browserTabUpdated', { tab, changeInfo })
    }
  })
   */
}

// 获取文集列表
function getProjects() {
  axios
    .request({
      url: this.mrdocUrl + "/api/get_projects/?token=" + this.mrdocUserToken,
      method: "get",
    })
    .then((r) => {
      console.log(r);
      if (r.data.status) {
        var projects = [];
        for (var i = 0; i < r.data.data.length; i++) {
          projects.push({
            label: r.data.data[i]["name"],
            value: r.data.data[i]["id"].toString(),
          });
        }
      } else {
        this.$q.notify({
          message: "获取文集列表失败！",
          icon: "error",
          position: "top",
        });
      }
    })
    .catch(() => {
      this.$q.notify({
        message: "获取文集列表出错！",
        icon: "error",
        position: "top",
      });
    });
}
