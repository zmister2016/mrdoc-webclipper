(globalThis["webpackChunkmrdoc_webclipper"] = globalThis["webpackChunkmrdoc_webclipper"] || []).push([[220],{

/***/ 220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(1957);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
// EXTERNAL MODULE: ./src/assets/logo.png
var logo = __webpack_require__(744);
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/SearchPage.vue?vue&type=template&id=36ed4a0f



const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("img", {
  src: (logo_default())
}, null, -1);

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 从 MrDoc 搜索 ");

const _hoisted_3 = {
  key: 1,
  class: "q-pa-md"
};
const _hoisted_4 = {
  key: 2,
  class: "q-pa-md"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-separator");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_infinite_scroll = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-infinite-scroll");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_spinner_bars = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-bars");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "hHh lpr fFf",
    class: "bg-white shadow-5"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white text-black"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            size: "30px"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1]),
            _: 1
          }), _hoisted_2]),
          _: 1
        }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          modelValue: $data.kw,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.kw = $event),
          value: $data.kw,
          type: "search",
          color: "black",
          placeholder: "搜索文档",
          clearable: "",
          autofocus: "",
          onInput: $options.updateKw,
          onKeydown: (0,runtime_dom_esm_bundler/* withKeys */.D2)((0,runtime_dom_esm_bundler/* withModifiers */.iM)($options.onSearch, ["prevent"]), ["enter"]),
          ref: "searchInput"
        }, {
          before: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            icon: "eva-search"
          })]),
          _: 1
        }, 8, ["modelValue", "value", "onInput", "onKeydown"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          round: "",
          color: "black",
          size: "xs",
          icon: "eva-close",
          onClick: $options.closePage
        }, null, 8, ["onClick"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_separator)]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [$data.docs.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_scroll_area, {
        key: 0,
        style: {
          "height": "200px",
          "max-width": "500px"
        }
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_infinite_scroll, {
          onLoad: $options.getDocs,
          offset: 50
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, {
            bordered: "",
            separator: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [((0,runtime_core_esm_bundler/* openBlock */.wg)(true), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(runtime_core_esm_bundler/* Fragment */.HY, null, (0,runtime_core_esm_bundler/* renderList */.Ko)($data.docs, doc => {
              return (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
                clickable: "",
                key: doc.id
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, {
                  onClick: $event => $options.openDoc(doc)
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)(doc.name), 1)]),
                    _: 2
                  }, 1024), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, {
                    caption: ""
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.Uk)((0,shared_esm_bundler/* toDisplayString */.zw)($options.dateFormat(doc.modify_time)) + " - " + (0,shared_esm_bundler/* toDisplayString */.zw)(doc.project_name), 1)]),
                    _: 2
                  }, 1024)]),
                  _: 2
                }, 1032, ["onClick"])]),
                _: 2
              }, 1024)), [[_directive_ripple]]);
            }), 128))]),
            _: 1
          })]),
          _: 1
        }, 8, ["onLoad"])]),
        _: 1
      })) : $data.kw == '' ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_3, " 输入关键词从你的 MrDoc 中搜索文档 ")) : ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_4, " 没有在你的 MrDoc 中发现「" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.kw) + "」相关文档 ", 1))]),
      _: 1
    }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
      showing: $data.loading
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_spinner_bars, {
        color: "black",
        size: "2em"
      })]),
      _: 1
    }, 8, ["showing"])]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/SearchPage.vue?vue&type=template&id=36ed4a0f

// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(9302);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__(4376);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9981);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/SearchPage.vue?vue&type=script&lang=js



/* harmony default export */ const SearchPagevue_type_script_lang_js = ({
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
  },

  data() {
    return {
      loading: false,
      kw: "",
      page: 1,
      isSearch: false,
      docs: [],
      mrdocUrl: this.$q.localStorage.getItem("mrdocUrl"),
      mrdocUserToken: this.$q.localStorage.getItem("mrdocUsertoken")
    };
  },

  activated() {},

  mounted() {
    this.mrdocClipperOptions = chrome.storage.local;
    this.readConfig(); // 获取 background 发来的文档搜索结果

    this.$q.bex.on("returnSearchDoc", event => {
      this.loading = false;
      this.page++; // console.log(event);
      // this.docs = event.data.data;

      this.docs = this.docs.concat(event.data.data);
    });
  },

  computed: {},
  methods: {
    // 读取配置
    async readConfig() {
      // 从 chrome.storage.local 中读取配置信息
      await this.mrdocClipperOptions.get(["mrdocUrl"], r => {
        // console.log(r);
        this.mrdocUrl = r["mrdocUrl"];
      });
      await this.mrdocClipperOptions.get(["mrdocUserToken"], r => {
        // console.log(r);
        this.mrdocUserToken = r["mrdocUserToken"];

        if (this.mrdocUrl != "" && this.mrdocUserToken != "") {
          // 搜索文档
          if (this.kw !== "") {
            this.getDocs();
          }
        }
      });
      await this.mrdocClipperOptions.get(["defaultProject"], r => {
        this.defaultProject = r["defaultProject"];
      });
      await this.mrdocClipperOptions.get(["editorMode"], r => {
        this.editorMode = r["editorMode"] == "3" ? "3" : "1";
      });
      await this.mrdocClipperOptions.get(["useMouse"], r => {
        this.useMouse = r["useMouse"] == true ? true : false;
      });
      await this.mrdocClipperOptions.get(["saveImg"], r => {
        this.saveImg = r["saveImg"] == true ? true : false;
      });
      return;
    },

    // 获取文档列表
    getDocs(index, done) {
      this.loading = true;
      this.$q.bex.send("searchDoc", {
        kw: this.kw,
        page: this.page,
        mrdocUrl: this.mrdocUrl,
        mrdocUserToken: this.mrdocUserToken
      }).then(r => {
        console.log(r);
      });

      if (done) {
        done();
      }
    },

    // 切换顶部搜索框状态
    switchSearchStatus() {
      this.isSearch = !this.isSearch;
    },

    // 更新输入值
    updateKw(value) {
      // alert(value)
      this.kw = value;
    },

    // 搜索
    onSearch() {
      this.page = 1;
      this.docs = [];
      this.getDocs();
    },

    // 打开文档页面
    openDoc(doc) {
      window.open(`${this.mrdocUrl}/doc/${doc.id}/`);
    },

    // 关闭页面
    closePage() {
      this.$q.bex.send("closeSearchToolbar", {
        someData: "someValue "
      }).then(r => {
        console.log("Text has been highlighted");
      });
    },

    dateFormat(d) {
      return date/* default.formatDate */.ZP.formatDate(d, "YYYY-MM-DD HH:mm");
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/SearchPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(1639);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(249);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(6602);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(1663);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(1973);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(1357);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(8879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(926);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js + 2 modules
var QScrollArea = __webpack_require__(1019);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/infinite-scroll/QInfiniteScroll.js
var QInfiniteScroll = __webpack_require__(6870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(854);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBars.js
var QSpinnerBars = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(1136);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/SearchPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(SearchPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const SearchPage = (__exports__);
;


















runtime_auto_import_default()(SearchPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QAvatar: QAvatar/* default */.Z,QInput: QInput/* default */.Z,QBtn: QBtn/* default */.Z,QSeparator: QSeparator/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QInfiniteScroll: QInfiniteScroll/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z,QSpinnerBars: QSpinnerBars/* default */.Z,QField: QField/* default */.Z});runtime_auto_import_default()(SearchPagevue_type_script_lang_js, 'directives', {Ripple: Ripple/* default */.Z});


/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ })

}]);