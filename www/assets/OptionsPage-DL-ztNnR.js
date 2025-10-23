import { u as useFormProps, a as useDarkProps, b as useDark, o as optionSizes, c as useRefocusTarget, d as useFormInject, Q as QToolbar, e as QToolbarTitle, f as QHeader, g as QInput, h as QSelect, i as QToggle, j as QPageContainer, k as QLayout, l as useQuasar } from "./use-quasar-Cevi8TBl.js";
import { f as createComponent, c as computed, h, j as hMergeSlot, u as useSizeProps, g as getCurrentInstance, k as useSize, r as ref, t as toRaw, Q as QIcon, l as hSlot, s as stopAndPrevent, m as clientList, p as planClientUpdate, _ as _export_sfc, n as createBlock, q as openBlock, v as withCtx, d as createVNode, x as createBaseVNode, y as createTextVNode, z as QBtn } from "./index-DZjX_O6B.js";
import { a as axios } from "./index-DlpfNMFu.js";
import "./_commonjsHelpers-BWERQOLb.js";
const alignValues = ["top", "middle", "bottom"];
const QBadge = createComponent({
  name: "QBadge",
  props: {
    color: String,
    textColor: String,
    floating: Boolean,
    transparent: Boolean,
    multiLine: Boolean,
    outline: Boolean,
    rounded: Boolean,
    label: [Number, String],
    align: {
      type: String,
      validator: (v) => alignValues.includes(v)
    }
  },
  setup(props, { slots }) {
    const style = computed(() => {
      return props.align !== void 0 ? { verticalAlign: props.align } : null;
    });
    const classes = computed(() => {
      const text = props.outline === true ? props.color || props.textColor : props.textColor;
      return `q-badge flex inline items-center no-wrap q-badge--${props.multiLine === true ? "multi" : "single"}-line` + (props.outline === true ? " q-badge--outline" : props.color !== void 0 ? ` bg-${props.color}` : "") + (text !== void 0 ? ` text-${text}` : "") + (props.floating === true ? " q-badge--floating" : "") + (props.rounded === true ? " q-badge--rounded" : "") + (props.transparent === true ? " q-badge--transparent" : "");
    });
    return () => h("div", {
      class: classes.value,
      style: style.value,
      role: "status",
      "aria-label": props.label
    }, hMergeSlot(slots.default, props.label !== void 0 ? [props.label] : []));
  }
});
const createSvg = () => h("svg", {
  key: "svg",
  class: "q-radio__bg absolute non-selectable",
  viewBox: "0 0 24 24"
}, [
  h("path", {
    d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12"
  }),
  h("path", {
    class: "q-radio__check",
    d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6"
  })
]);
const QRadio = createComponent({
  name: "QRadio",
  props: {
    ...useDarkProps,
    ...useSizeProps,
    ...useFormProps,
    modelValue: { required: true },
    val: { required: true },
    label: String,
    leftLabel: Boolean,
    checkedIcon: String,
    uncheckedIcon: String,
    color: String,
    keepColor: Boolean,
    dense: Boolean,
    disable: Boolean,
    tabindex: [String, Number]
  },
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const { proxy } = getCurrentInstance();
    const isDark = useDark(props, proxy.$q);
    const sizeStyle = useSize(props, optionSizes);
    const rootRef = ref(null);
    const { refocusTargetEl, refocusTarget } = useRefocusTarget(props, rootRef);
    const isTrue = computed(() => toRaw(props.modelValue) === toRaw(props.val));
    const classes = computed(
      () => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (props.disable === true ? " disabled" : "") + (isDark.value === true ? " q-radio--dark" : "") + (props.dense === true ? " q-radio--dense" : "") + (props.leftLabel === true ? " reverse" : "")
    );
    const innerClass = computed(() => {
      const color = props.color !== void 0 && (props.keepColor === true || isTrue.value === true) ? ` text-${props.color}` : "";
      return `q-radio__inner relative-position q-radio__inner--${isTrue.value === true ? "truthy" : "falsy"}${color}`;
    });
    const icon = computed(
      () => (isTrue.value === true ? props.checkedIcon : props.uncheckedIcon) || null
    );
    const tabindex = computed(() => props.disable === true ? -1 : props.tabindex || 0);
    const formAttrs = computed(() => {
      const prop = { type: "radio" };
      props.name !== void 0 && Object.assign(prop, {
        // see https://vuejs.org/guide/extras/render-function.html#creating-vnodes (.prop)
        ".checked": isTrue.value === true,
        "^checked": isTrue.value === true ? "checked" : void 0,
        name: props.name,
        value: props.val
      });
      return prop;
    });
    const injectFormInput = useFormInject(formAttrs);
    function onClick(e) {
      if (e !== void 0) {
        stopAndPrevent(e);
        refocusTarget(e);
      }
      if (props.disable !== true && isTrue.value !== true) {
        emit("update:modelValue", props.val, e);
      }
    }
    function onKeydown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        stopAndPrevent(e);
      }
    }
    function onKeyup(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        onClick(e);
      }
    }
    Object.assign(proxy, { set: onClick });
    const svg = createSvg();
    return () => {
      const content = icon.value !== null ? [
        h("div", {
          key: "icon",
          class: "q-radio__icon-container absolute-full flex flex-center no-wrap"
        }, [
          h(QIcon, {
            class: "q-radio__icon",
            name: icon.value
          })
        ])
      ] : [svg];
      props.disable !== true && injectFormInput(
        content,
        "unshift",
        " q-radio__native q-ma-none q-pa-none"
      );
      const child = [
        h("div", {
          class: innerClass.value,
          style: sizeStyle.value,
          "aria-hidden": "true"
        }, content)
      ];
      if (refocusTargetEl.value !== null) {
        child.push(refocusTargetEl.value);
      }
      const label = props.label !== void 0 ? hMergeSlot(slots.default, [props.label]) : hSlot(slots.default);
      label !== void 0 && child.push(
        h("div", {
          class: "q-radio__label q-anchor--skip"
        }, label)
      );
      return h("div", {
        ref: rootRef,
        class: classes.value,
        tabindex: tabindex.value,
        role: "radio",
        "aria-label": props.label,
        "aria-checked": isTrue.value === true ? "true" : "false",
        "aria-disabled": props.disable === true ? "true" : void 0,
        onClick,
        onKeydown,
        onKeyup
      }, child);
    };
  }
});
const createMetaMixin = (metaOptions) => {
  const mixin = {
    activated() {
      this.__qMeta.active = true;
      planClientUpdate();
    },
    deactivated() {
      this.__qMeta.active = false;
      planClientUpdate();
    },
    unmounted() {
      clientList.splice(clientList.indexOf(this.__qMeta), 1);
      planClientUpdate();
      this.__qMeta = void 0;
    }
  };
  if (typeof metaOptions === "function") {
    Object.assign(mixin, {
      computed: {
        __qMetaOptions() {
          return metaOptions.call(this) || {};
        }
      },
      watch: {
        __qMetaOptions(val) {
          this.__qMeta.val = val;
          this.__qMeta.active === true && planClientUpdate();
        }
      },
      created() {
        this.__qMeta = { active: true, val: this.__qMetaOptions };
        clientList.push(this.__qMeta);
        planClientUpdate();
      }
    });
  } else {
    mixin.created = function() {
      this.__qMeta = { active: true, val: metaOptions };
      clientList.push(this.__qMeta);
      planClientUpdate();
    };
  }
  return mixin;
};
const _sfc_main = {
  mixins: [
    createMetaMixin(function() {
      return {
        title: this.pageTitle
      };
    })
  ],
  setup() {
    useQuasar();
  },
  data() {
    return {
      pageTitle: "选项页 - MrDoc速记",
      defaultProject: "",
      // 默认文集
      projects: [],
      // 文集列表
      editorMode: "1",
      // 默认编辑器模式
      mrdocUrl: "",
      // mrdoc服务地址
      mrdocUserToken: "",
      // 用户token
      useMouse: false,
      // 鼠标选择
      saveImg: false,
      // 图片转存
      showSearchResult: false
      //搜索引擎显示结果
    };
  },
  computed: {},
  mounted() {
    this.mrdocClipperOptions = chrome.storage.local;
    this.readConfig();
  },
  methods: {
    // 读取配置
    async readConfig() {
      await this.mrdocClipperOptions.get(["mrdocUrl"], (r) => {
        this.mrdocUrl = r["mrdocUrl"];
      });
      await this.mrdocClipperOptions.get(["mrdocUserToken"], (r) => {
        this.mrdocUserToken = r["mrdocUserToken"];
        if (this.mrdocUrl != "" && this.mrdocUserToken != "") {
          this.getProjects();
        }
      });
      await this.mrdocClipperOptions.get(["defaultProject"], (r) => {
        this.defaultProject = r["defaultProject"];
      });
      await this.mrdocClipperOptions.get(["editorMode"], (r) => {
        this.editorMode = r["editorMode"] == "3" ? "3" : "1";
      });
      await this.mrdocClipperOptions.get(["useMouse"], (r) => {
        this.useMouse = r["useMouse"] == true ? true : false;
      });
      await this.mrdocClipperOptions.get(["saveImg"], (r) => {
        this.saveImg = r["saveImg"] == true ? true : false;
      });
      await this.mrdocClipperOptions.get(["showSearchResult"], (r) => {
        this.showSearchResult = r["showSearchResult"] == true ? true : false;
      });
      return;
    },
    // 处理 MrDoc URL 字符串
    handleMrdocUrl() {
      if (this.mrdocUrl.endsWith("/")) {
        let length = this.mrdocUrl.length;
        let newArr = this.mrdocUrl.split("");
        newArr[length - 1] = "";
        this.mrdocUrl = newArr.join("");
      }
    },
    // 保存配置
    onSubmit() {
      console.log("submit!");
      this.handleMrdocUrl();
      this.mrdocClipperOptions.set({
        mrdocUrl: this.mrdocUrl,
        mrdocUserToken: this.mrdocUserToken,
        editorMode: this.editorMode,
        defaultProject: this.defaultProject,
        useMouse: this.useMouse,
        saveImg: this.saveImg,
        showSearchResult: this.showSearchResult
      });
      this.$q.notify({ message: "保存成功！", icon: "check", position: "top" });
    },
    // 验证配置
    checkToken() {
      this.handleMrdocUrl();
      if (this.mrdocUrl == "" || this.mrdocUserToken == "") {
        this.$q.notify({
          message: "表单不能为空",
          icon: "warning",
          position: "top"
        });
        return;
      }
      this.$q.loading.show();
      axios.request({
        url: this.mrdocUrl + "/api/get_projects/?token=" + this.mrdocUserToken,
        method: "get"
      }).then((r) => {
        this.$q.loading.hide();
        if (r.data.status) {
          for (var i = 0; i < r.data.data.length; i++) {
            this.projects.push({
              label: r.data.data[i]["name"],
              value: r.data.data[i]["id"].toString()
            });
          }
          this.$q.notify({
            message: "验证成功！",
            icon: "check",
            position: "top"
          });
        } else {
          this.$q.notify({
            message: "验证失败！",
            icon: "error",
            position: "top"
          });
        }
      }).catch(() => {
        this.$q.loading.hide();
        this.$q.notify({
          message: "验证出错！",
          icon: "error",
          position: "top"
        });
      });
    },
    // 获取文集列表
    getProjects() {
      axios.request({
        url: this.mrdocUrl + "/api/get_projects/?token=" + this.mrdocUserToken,
        method: "get"
      }).then((r) => {
        if (r.data.status) {
          for (var i = 0; i < r.data.data.length; i++) {
            this.projects.push({
              label: r.data.data[i]["name"],
              value: r.data.data[i]["id"].toString()
            });
          }
        } else {
          this.$q.notify({
            message: "获取文集列表失败！",
            icon: "error",
            position: "top"
          });
        }
      }).catch(() => {
        this.$q.notify({
          message: "获取文集列表出错！",
          icon: "error",
          position: "top"
        });
      });
    }
  }
};
const _hoisted_1 = { class: "text-h5 text-weight-bold text-center" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" MrDoc速记 - 配置中心");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" v1.1.4 ");
const _hoisted_4 = { class: "q-mt-md" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" 文档模式： ");
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_8 = { class: "q-mt-md option-btns" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("div", { class: "q-mt-lg q-pt-lg text-center" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-light" }, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://mrdoc.pro",
      target: "_blank"
    }, "MrDoc 觅思文档"),
    /* @__PURE__ */ createTextVNode(" - 私有化在线文档和知识库系统")
  ]),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createBaseVNode("span", { class: "text-weight-light" }, [
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://gitee.com/zmister/MrDoc",
      target: "_blank"
    }, "Web 开源版"),
    /* @__PURE__ */ createTextVNode(" | "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://gitee.com/zmister/mrdoc-desktop-release",
      target: "_blank"
    }, "桌面客户端"),
    /* @__PURE__ */ createTextVNode(" | "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://gitee.com/zmister/mrdoc-app-release",
      target: "_blank"
    }, "移动客户端"),
    /* @__PURE__ */ createTextVNode(" | "),
    /* @__PURE__ */ createBaseVNode("a", {
      href: "https://gitee.com/zmister/mrdoc-webclipper",
      target: "_blank"
    }, "浏览器扩展")
  ])
], -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(QLayout, {
    view: "hHh lpr fFf",
    class: "bg-white q-ma-lg q-pa-lg position-relative",
    style: { "max-width": "600px", "margin": "0 auto" }
  }, {
    default: withCtx(() => [
      createVNode(QHeader, {
        class: "bg-white text-black",
        "height-hint": "98"
      }, {
        default: withCtx(() => [
          createVNode(QToolbar, null, {
            default: withCtx(() => [
              createVNode(QToolbarTitle)
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(QPageContainer, { class: "q-pa-lg" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            _hoisted_2,
            createVNode(QBadge, { color: "blue" }, {
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(QInput, {
              color: "black",
              modelValue: $data.mrdocUrl,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.mrdocUrl = $event),
              label: "MrDoc服务地址"
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "cloud" })
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(QInput, {
              color: "black",
              modelValue: $data.mrdocUserToken,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.mrdocUserToken = $event),
              label: "用户Token",
              placeholder: "获取地址：个人中心 -> Token管理"
            }, {
              prepend: withCtx(() => [
                createVNode(QIcon, { name: "key" })
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(QSelect, {
              modelValue: $data.defaultProject,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.defaultProject = $event),
              options: $data.projects,
              "emit-value": "",
              "map-options": "",
              label: "默认归属文集",
              color: "grey-10"
            }, null, 8, ["modelValue", "options"]),
            _hoisted_5,
            createVNode(QRadio, {
              modelValue: $data.editorMode,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.editorMode = $event),
              val: "1",
              label: "Markdown",
              color: "grey-10"
            }, null, 8, ["modelValue"]),
            createVNode(QRadio, {
              modelValue: $data.editorMode,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.editorMode = $event),
              val: "3",
              label: "富文本",
              color: "grey-10"
            }, null, 8, ["modelValue"]),
            _hoisted_6,
            createVNode(QToggle, {
              color: "grey-10",
              modelValue: $data.useMouse,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.useMouse = $event),
              label: "鼠标选择：",
              "left-label": ""
            }, null, 8, ["modelValue"]),
            _hoisted_7
          ]),
          createBaseVNode("div", _hoisted_8, [
            createVNode(QBtn, {
              class: "q-pl-ld q-pr-ld",
              onClick: $options.checkToken,
              "text-color": "black",
              label: "验证",
              icon: "eva-globe-outline"
            }, null, 8, ["onClick"]),
            createVNode(QBtn, {
              class: "",
              onClick: $options.onSubmit,
              label: "保存",
              icon: "eva-save-outline"
            }, null, 8, ["onClick"])
          ]),
          _hoisted_9
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const OptionsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  OptionsPage as default
};
