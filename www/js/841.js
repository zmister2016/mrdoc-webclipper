(globalThis["webpackChunkmrdoc_webclipper"] = globalThis["webpackChunkmrdoc_webclipper"] || []).push([[841],{

/***/ 2715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PopupPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(9835);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(1957);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(6970);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/PopupPage.vue?vue&type=template&id=48c2e0b5


const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" MrDoc 浏览器扩展 ");

const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("切换到「文档搜索」");

const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("切换到「文档速记」");

const _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("前往配置页面");

const _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 填充当前网页标题 ");

const _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)(" 刷新文集列表 ");

const _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("div", {
  id: "mrdoc-clipper-editor-container"
}, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)("textarea", {
  id: "editor",
  style: {
    "display": "none"
  }
})], -1);

const _hoisted_8 = {
  class: "q-px-md"
};

const _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("网页正文");

const _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("标题链接");

const _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("Markdown");

const _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.Uk)("富文本");

const _hoisted_13 = {
  class: "q-ma-md",
  style: {
    "max-height": "100px"
  }
};
const _hoisted_14 = {
  key: 1,
  class: "q-pa-md text-caption"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-avatar");

  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar-title");

  const _component_q_tooltip = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-tooltip");

  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn");

  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toolbar");

  const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-header");

  const _component_q_input = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-input");

  const _component_q_select = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-select");

  const _component_q_editor = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-editor");

  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page");

  const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-page-container");

  const _component_q_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-toggle");

  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-label");

  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item-section");

  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-item");

  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-list");

  const _component_q_btn_dropdown = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-btn-dropdown");

  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-icon");

  const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-footer");

  const _component_q_infinite_scroll = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-infinite-scroll");

  const _component_q_scroll_area = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-scroll-area");

  const _component_q_spinner_bars = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-spinner-bars");

  const _component_q_inner_loading = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-inner-loading");

  const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.up)("q-layout");

  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("close-popup");

  const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.Q2)("ripple");

  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_layout, {
    view: "hHh lpr fFf",
    class: "bg-white"
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_header, {
      class: "bg-white text-black",
      "height-hint": "98"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
            icon: "set"
          })]),
          _: 1
        }), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "white",
          "text-color": "black",
          unelevated: "",
          icon: "search",
          onClick: $options.switchMode
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_2]),
            _: 1
          })]),
          _: 1
        }, 8, ["onClick"]), [[runtime_dom_esm_bundler/* vShow */.F8, $data.currentIndex == 'clipper']]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "white",
          "text-color": "black",
          unelevated: "",
          icon: "eva-brush-outline",
          onClick: $options.switchMode
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_3]),
            _: 1
          })]),
          _: 1
        }, 8, ["onClick"]), [[runtime_dom_esm_bundler/* vShow */.F8, $data.currentIndex == 'search']]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "white",
          "text-color": "black",
          unelevated: "",
          icon: "eva-settings-outline",
          onClick: $options.toOptions
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),
            _: 1
          })]),
          _: 1
        }, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
          color: "white",
          "text-color": "black",
          unelevated: "",
          icon: "close",
          onClick: $options.closePopup
        }, null, 8, ["onClick"])]),
        _: 1
      })]),
      _: 1
    }), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, {
      class: "q-pa-md",
      style: {
        "padding-top": "50px",
        "padding-bottom": "40px"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page, {
        class: "scroll"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
          modelValue: $data.title,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.title = $event),
          placeholder: "文档名称",
          "stack-label": "",
          dense: true,
          color: "grey-10"
        }, {
          after: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            round: "",
            dense: "",
            flat: "",
            icon: "eva-brush-outline",
            onClick: $options.getPageTitle
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, {
              anchor: "bottom middle",
              self: "top middle",
              offset: [10, 10]
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_5]),
              _: 1
            })]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_select, {
          modelValue: $data.selProject,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $data.selProject = $event),
          dense: true,
          options: $data.projects,
          "emit-value": "",
          "map-options": "",
          label: "选择文集",
          class: "q-mb-xs",
          color: "grey-10"
        }, {
          after: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
            round: "",
            dense: "",
            flat: "",
            icon: "eva-refresh-outline",
            onClick: $options.getProjects
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_tooltip, {
              anchor: "bottom middle",
              self: "top middle",
              offset: [10, 10]
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),
              _: 1
            })]),
            _: 1
          }, 8, ["onClick"])]),
          _: 1
        }, 8, ["modelValue", "options"]), _hoisted_7, (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_editor, {
          modelValue: $data.docContent,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => $data.docContent = $event),
          onPaste: _cache[3] || (_cache[3] = evt => $options.handlePaste(evt))
        }, null, 8, ["modelValue"]), [[runtime_dom_esm_bundler/* vShow */.F8, $data.editorMode == '3']])]),
        _: 1
      })]),
      _: 1
    }, 512), [[runtime_dom_esm_bundler/* vShow */.F8, $data.currentIndex == 'clipper']]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_footer, {
      class: "bg-white text-black"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_8, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_toggle, {
        modelValue: $data.useMouse,
        "onUpdate:modelValue": [_cache[4] || (_cache[4] = $event => $data.useMouse = $event), $options.toggleMouse],
        label: "鼠标选择",
        "left-label": "",
        color: "grey-10"
      }, null, 8, ["modelValue", "onUpdate:modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn_dropdown, {
        color: "white",
        unelevated: "",
        "text-color": "black",
        "dropdown-icon": "eva-arrow-down-outline",
        label: "剪藏"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            onClick: $options.getPageBody
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_9]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["onClick"])), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            onClick: $options.getPageTitleAndLink
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_10]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          }, 8, ["onClick"])), [[_directive_close_popup]])]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn_dropdown, {
        color: "white",
        unelevated: "",
        "text-color": "black",
        "dropdown-icon": "eva-arrow-down-outline",
        label: "编辑器"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_list, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            onClick: _cache[5] || (_cache[5] = $event => $options.toggleEditorMode(1))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_11]),
                _: 1
              })]),
              _: 1
            }), $data.editorMode == 1 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
              key: 0,
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "eva-checkmark-outline",
                color: ""
              })]),
              _: 1
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
            _: 1
          })), [[_directive_close_popup]]), (0,runtime_core_esm_bundler/* withDirectives */.wy)(((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item, {
            clickable: "",
            onClick: _cache[6] || (_cache[6] = $event => $options.toggleEditorMode(3))
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),
                _: 1
              })]),
              _: 1
            }), $data.editorMode == 3 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_item_section, {
              key: 0,
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_icon, {
                name: "eva-checkmark-outline",
                color: ""
              })]),
              _: 1
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
            _: 1
          })), [[_directive_close_popup]])]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_btn, {
        style: {
          "float": "right",
          "top": "5px"
        },
        label: "保存",
        rounded: "",
        size: "sm",
        onClick: $options.saveDoc
      }, null, 8, ["onClick"])])]),
      _: 1
    }, 512), [[runtime_dom_esm_bundler/* vShow */.F8, $data.currentIndex == 'clipper']]), (0,runtime_core_esm_bundler/* withDirectives */.wy)((0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_page_container, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createElementVNode */._)("div", _hoisted_13, [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_input, {
        dense: "",
        rounded: "",
        outlined: "",
        modelValue: $data.kw,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => $data.kw = $event),
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
        append: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_avatar, {
          icon: "eva-search"
        })]),
        _: 1
      }, 8, ["modelValue", "value", "onInput", "onKeydown"])]), $data.docs.length > 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createBlock */.j4)(_component_q_scroll_area, {
        key: 0,
        style: {
          "height": "400px",
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
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true), $data.kw != '' && $data.docs.length == 0 ? ((0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)("div", _hoisted_14, " 没有在你的 MrDoc 中发现「" + (0,shared_esm_bundler/* toDisplayString */.zw)($data.kw) + "」相关文档 ", 1)) : (0,runtime_core_esm_bundler/* createCommentVNode */.kq)("", true)]),
      _: 1
    }, 512), [[runtime_dom_esm_bundler/* vShow */.F8, $data.currentIndex == 'search']]), (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_q_inner_loading, {
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
;// CONCATENATED MODULE: ./src/pages/PopupPage.vue?vue&type=template&id=48c2e0b5

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__(6727);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(702);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url.js
var web_url = __webpack_require__(4641);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.url-search-params.js
var web_url_search_params = __webpack_require__(3269);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(8964);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar.js
var use_quasar = __webpack_require__(9302);
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__(4376);
// EXTERNAL MODULE: ./node_modules/easymde/src/js/easymde.js
var easymde = __webpack_require__(496);
var easymde_default = /*#__PURE__*/__webpack_require__.n(easymde);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9981);
// EXTERNAL MODULE: ./node_modules/turndown/lib/turndown.browser.es.js
var turndown_browser_es = __webpack_require__(3383);
// EXTERNAL MODULE: ./node_modules/turndown-plugin-gfm/lib/turndown-plugin-gfm.es.js
var turndown_plugin_gfm_es = __webpack_require__(2157);
// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(3632);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/PopupPage.vue?vue&type=script&lang=js














/* harmony default export */ const PopupPagevue_type_script_lang_js = ({
  setup() {
    const $q = (0,use_quasar/* default */.Z)();
  },

  data() {
    return {
      title: "",
      // 文档标题
      projects: [],
      // 文集列表
      selProject: this.$q.localStorage.getItem("defaultProject"),
      // 所选文集
      editorMode: this.$q.localStorage.getItem("editorMode") == "3" ? "3" : "1",
      // 编辑器模式
      docContent: "",
      // 文档内容
      useMouse: this.$q.localStorage.getItem("useMouse") == true ? true : false,
      // 鼠标选择
      mrdocUrl: this.$q.localStorage.getItem("mrdocUrl"),
      mrdocUserToken: this.$q.localStorage.getItem("mrdocUsertoken"),
      loading: false,
      currentIndex: "clipper",
      // 当前页面模式，clipper表示剪藏界面，search表示搜索界面
      kw: "",
      // 搜索文档关键词
      page: 1,
      // 搜索文档的页数
      hasNextPage: true,
      // 搜索文档是否还有下一页
      docs: [] // 搜索文档列表

    };
  },

  mounted() {
    // 读取配置信息
    this.mrdocClipperOptions = chrome.storage.local;
    this.readConfig(); // 实例化一个HTML转Markdown组件

    this.turndownService = new turndown_browser_es/* default */.Z({
      headingStyle: "atx",
      // 标题风格
      hr: "---",
      // 水平分割线
      bulletListMarker: "-",
      // 列表项
      codeBlockStyle: "fenced" //代码块样式

    }).use(turndown_plugin_gfm_es/* gfm */.r0); // console.log(this.selProject);
    // 初始化Markdown编辑器

    this.editor = new (easymde_default())({
      element: document.getElementById("editor"),
      autosave: {
        enabled: false
      },
      autoDownloadFontAwesome: false,
      toolbar: ["heading", "bold", "italic", "strikethrough", "|", "quote", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview"],
      status: false,
      tabSize: 4,
      maxHeight: "300px",
      minHeight: "300px"
    }); // 默认编辑器为富文本时，隐藏Markdown编辑器

    if (this.editorMode == 3) {
      document.getElementsByClassName("EasyMDEContainer")[0].setAttribute("style", "display:none;");
    } // 为 Markdown 编辑器绑定粘贴事件


    document.querySelector(".EasyMDEContainer").addEventListener("paste", this.handlePaste, true); // 获取content-script发来的网页标题

    this.$q.bex.on("returnPageTitle", event => {
      console.log(event);
      this.title = event["data"]["title"];
    }); // 获取content-script发来的网页标题和链接

    this.$q.bex.on("returnPageTitleAndLink", event => {
      console.log(event);
      this.title = event["data"]["title"];

      if (this.editorMode == 1) {
        this.editor.value(event["data"]["link"]);
      } else if (this.editorMode == 3) {
        this.docContent = event["data"]["link"];
      }
    }); // 获取content-script发来的网页正文内容

    this.$q.bex.on("returnPageBody", event => {
      // console.log(event);
      this.title = event.data.title;
      this.parseHTML(event.data.content);
    }); // 获取content-script发来的鼠标选择标记的网页内容

    this.$q.bex.on("returnMouseMarkContent", event => {
      console.log(event);
      this.parseHTML(event.data.data);
    }); // 获取 background 发来的粘贴图片的结果

    this.$q.bex.on("returnPasteImg", event => {
      console.log(event);
      const payload = event.data;

      if (payload.status) {
        const imgUrl = payload.data.startsWith("/") ? `${this.mrdocUrl}${payload.data}` : payload.data;

        if (this.editorMode == "1") {
          this.editor.codemirror.replaceSelection(`![](${imgUrl})\n`);
        } else {
          this.docContent += `<img src="${imgUrl}" />`;
        }
      } else {
        this.$q.notify({
          message: payload.data,
          icon: "error",
          position: "top"
        });
      }

      this.loading = false;
    }); // 获取 background 发来的文集列表

    this.$q.bex.on("returnProjects", event => {
      // console.log(event);
      if (event.data.data) {
        this.projects = event.data.data;
        this.$q.notify({
          message: "文集列表已更新！",
          icon: "info",
          position: "top"
        });
      } else {
        this.$q.notify({
          message: "获取文集列表失败！",
          icon: "error",
          position: "top"
        });
      }
    }); // 获取background保存文档的状态

    this.$q.bex.on("returnSaveDoc", event => {
      console.log(event);

      if (event.data.status) {
        this.loading = false;
        this.title = "";
        this.editor.value("");
        this.docContent = "";
        this.$q.notify({
          message: "文档保存成功",
          icon: "info",
          position: "top"
        });
      } else {
        this.$q.notify({
          message: event.data.data,
          icon: "error",
          position: "top"
        });
      }
    }); // 获取 background 发来的文档搜索结果

    this.$q.bex.on("returnSearchDoc", event => {
      this.loading = false;
      this.page++; // console.log(event);
      // this.docs = event.data.data;

      this.docs = this.docs.concat(event.data.data);

      if (event.data.data.length == 0) {
        this.hasNextPage = false;
      }
    });
  },

  watch: {
    // 侦听鼠标选择开关的切换
    editorMode: function (newVal, oldVal) {
      console.log(newVal, oldVal);

      if (newVal == 3) {
        document.getElementsByClassName("EasyMDEContainer")[0].setAttribute("style", "display:none;");
      } else {
        document.getElementsByClassName("EasyMDEContainer")[0].setAttribute("style", "display:block;");
      }
    }
  },
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
          this.$q.bex.send("getProjects", {
            mrdocUrl: this.mrdocUrl,
            mrdocUserToken: this.mrdocUserToken
          });
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

        if (this.useMouse) {
          this.toggleMouse();
        }
      });
      await this.mrdocClipperOptions.get(["saveImg"], r => {
        this.saveImg = r["saveImg"] == true ? true : false;
      });
      return;
    },

    // 关闭窗口
    closePopup() {
      this.$q.bex.send("closePopup", {
        someData: "someValue "
      }).then(r => {
        console.log("Text has been highlighted");
      });
    },

    // 切换 popup 显示模式
    switchMode() {
      if (this.currentIndex == "clipper") {
        this.currentIndex = "search";
      } else if (this.currentIndex == "search") {
        this.currentIndex = "clipper";
      }
    },

    // 切换编辑器模式
    toggleEditorMode(val) {
      this.editorMode = val;
    },

    // 切换鼠标模式
    toggleMouse() {
      if (this.useMouse) {
        this.$q.bex.send("openMouseSelect", {
          someData: "someValue "
        }).then(r => {
          console.log("Text has been highlighted");
        });
      } else {
        this.$q.bex.send("closeMouseSelect", {
          someData: "someValue "
        }).then(r => {
          console.log("Text has been highlighted");
        });
      }

      console.log(this.useMouse);
    },

    // 获取网页的标题
    getPageTitle() {
      this.$q.bex.send("getPageTitle", {
        someData: "someValue "
      }).then(r => {
        console.log(r);
      });
    },

    // 获取网页标题+链接
    getPageTitleAndLink() {
      this.$q.bex.send("getPageTitleAndLink", {}).then(r => {
        console.log(r);
      });
    },

    // 获取整个网页
    getEntirePage() {
      this.$q.bex.send("getEntirePage", {}).then(r => {
        console.log(r);
      });
    },

    // 获取网页正文
    getPageBody() {
      this.loading = true;
      this.$q.bex.send("getPageBody", {}).then(r => {
        console.log(r);
      });
    },

    // 获取文集列表
    getProjects() {
      this.$q.bex.send("getProjects", {
        mrdocUrl: this.mrdocUrl,
        mrdocUserToken: this.mrdocUserToken
      });
    },

    // 保存文档
    saveDoc() {
      if (this.title == "") {
        this.$q.notify({
          message: "文档名称不能为空",
          icon: "error",
          position: "top"
        });
        return;
      }

      if (this.selProject == "") {
        this.$q.notify({
          message: "必须指定一个文集",
          icon: "error",
          position: "top"
        });
        return;
      }

      this.loading = true; // console.log(docData);

      this.$q.bex.send("saveDoc", {
        mrdocUrl: this.mrdocUrl,
        mrdocUserToken: this.mrdocUserToken,
        pid: this.selProject,
        title: this.title,
        editor_mode: this.editorMode,
        doc: this.editorMode == "3" ? this.docContent : this.editor.value()
      });
    },

    // 处理编辑器粘贴事件
    handlePaste(event) {
      this.loading = true;
      event.stopPropagation();
      event.preventDefault();
      var that = this;
      let textHTML;
      let textPlain;
      let files;

      if ("clipboardData" in event) {
        textHTML = event.clipboardData.getData("text/html");
        textPlain = event.clipboardData.getData("text/plain");
        files = event.clipboardData.files;
      } else {
        textHTML = event.dataTransfer.getData("text/html");
        textPlain = event.dataTransfer.getData("text/plain");

        if (event.dataTransfer.types.includes("Files")) {
          files = event.dataTransfer.items;
        }
      }

      console.log(textHTML);
      console.log(textPlain);
      console.log(files);

      if (textPlain.trim() !== "") {
        console.log("解析HTML");
        this.parseHTML(textHTML);
      } else if (files.length > 0) {
        console.log("上传图片");
        var items = (event.clipboardData || event.originalEvent.clipboardData).items;

        for (var index in items) {
          var item = items[index];
          console.log(item);

          if (item.kind === "file") {
            var blob = item.getAsFile(); // console.log(blob)

            var reader = new FileReader();

            reader.onload = function (event) {
              // let formData = new FormData();
              console.log(event);
              var base64 = event.target.result; // console.log("图片编码：", base64);

              that.$q.bex.send("pasteImg", {
                mrdocUrl: that.mrdocUrl,
                mrdocUserToken: that.mrdocUserToken,
                data: base64
              });
            }; // data url!
            // var url = reader.readAsDataURL(blob);


            reader.readAsDataURL(blob);
          }
        }
      }
    },

    // 解析HTML
    parseHTML(html) {
      this.loading = false; // 根据当前编辑器模式处理文本

      if (this.editorMode == 1) {
        const mdContent = this.turndownService.turndown(html);
        this.editor.codemirror.replaceSelection(mdContent);
      } else if (this.editorMode == 3) {
        this.docContent += html;
      } // 转存图片


      const htmlEle = jquery_default()(html); // console.log(html, htmlEle);
      // console.log("HTML中的图片", htmlEle.find("img"));

      for (const img of htmlEle.find("img")) {
        // console.log(img.src);
        if (img.src != "") {
          this.imgUrlToBase64(img.src);
        }
      }
    },

    // 获取URL图片的base64数据
    imgUrlToBase64(url) {
      const that = this;
      window.URL = window.URL || window.webkitURL;
      var xhr = new XMLHttpRequest();
      xhr.open("get", url, true); // 至关重要

      xhr.responseType = "blob";

      xhr.onload = function () {
        if (this.status == 200) {
          //得到一个blob对象
          var blob = this.response; // console.log("blob", blob);
          // 至关重要

          let oFileReader = new FileReader();

          oFileReader.onloadend = function (e) {
            // 此处拿到的已经是 base64的图片了
            let base64 = e.target.result;
            let img_info = {
              base: base64,
              url: url
            };
            that.$q.bex.send("uploadImgUrl", {
              mrdocUrl: that.mrdocUrl,
              mrdocUserToken: that.mrdocUserToken,
              data: img_info
            }).then(response => {
              // console.log("上传URL图片的响应", response);
              that.replaceUrlImg(response);
            });
          };

          oFileReader.readAsDataURL(blob);
        }
      };

      xhr.send();
    },

    // 替换URL图片
    replaceUrlImg(response) {
      const payload = response.data;

      if (payload.status) {
        const imgUrl = payload.data.url.startsWith("/") ? `${this.mrdocUrl}${payload.data.url}` : payload.data.url;

        if (this.editorMode == "1") {
          this.mdContent = this.editor.value();
          this.mdContent = this.mdContent.replace(payload.data.src, imgUrl);
          this.editor.value(this.mdContent);
        } else {
          this.docContent = this.docContent.replace(payload.data.src, imgUrl);
        }
      } else {
        this.$q.notify({
          message: payload.data,
          icon: "error",
          position: "top"
        });
      }

      this.loading = false;
    },

    // 获取文档列表
    getDocs(index, done) {
      if (this.hasNextPage) {
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
      }
    },

    // 搜索
    onSearch() {
      this.hasNextPage = true;
      this.page = 1;
      this.docs = [];
      this.getDocs();
    },

    // 更新输入值
    updateKw(value) {
      // alert(value)
      this.kw = value;
    },

    // 打开文档页面
    openDoc(doc) {
      window.open(`${this.mrdocUrl}/doc/${doc.id}/`);
    },

    // 时间格式化
    dateFormat(d) {
      return date/* default.formatDate */.ZP.formatDate(d, "YYYY-MM-DD HH:mm");
    },

    // 前往设置页面
    toOptions() {
      window.open(chrome.runtime.getURL("www/index.html#/options"));
    }

  }
});
;// CONCATENATED MODULE: ./src/pages/PopupPage.vue?vue&type=script&lang=js
 
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(8879);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tooltip/QTooltip.js
var QTooltip = __webpack_require__(6858);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(2133);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(9885);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__(6611);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 6 modules
var QSelect = __webpack_require__(752);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/editor/QEditor.js + 3 modules
var QEditor = __webpack_require__(71);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(1378);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js + 1 modules
var QToggle = __webpack_require__(7137);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-dropdown/QBtnDropdown.js + 1 modules
var QBtnDropdown = __webpack_require__(8479);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3246);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(490);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(1233);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3115);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(2857);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js + 2 modules
var QScrollArea = __webpack_require__(1019);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/infinite-scroll/QInfiniteScroll.js
var QInfiniteScroll = __webpack_require__(6870);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__(854);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerBars.js
var QSpinnerBars = __webpack_require__(3382);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js
var QField = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ClosePopup.js
var ClosePopup = __webpack_require__(2146);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__(1136);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(9984);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/PopupPage.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(PopupPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const PopupPage = (__exports__);
;


























runtime_auto_import_default()(PopupPagevue_type_script_lang_js, 'components', {QLayout: QLayout/* default */.Z,QHeader: QHeader/* default */.Z,QToolbar: QToolbar/* default */.Z,QToolbarTitle: QToolbarTitle/* default */.Z,QAvatar: QAvatar/* default */.Z,QBtn: QBtn/* default */.Z,QTooltip: QTooltip/* default */.Z,QPageContainer: QPageContainer/* default */.Z,QPage: QPage/* default */.Z,QInput: QInput/* default */.Z,QSelect: QSelect/* default */.Z,QEditor: QEditor/* default */.Z,QFooter: QFooter/* default */.Z,QToggle: QToggle/* default */.Z,QBtnDropdown: QBtnDropdown/* default */.Z,QList: QList/* default */.Z,QItem: QItem/* default */.Z,QItemSection: QItemSection/* default */.Z,QItemLabel: QItemLabel/* default */.Z,QIcon: QIcon/* default */.Z,QScrollArea: QScrollArea/* default */.Z,QInfiniteScroll: QInfiniteScroll/* default */.Z,QInnerLoading: QInnerLoading/* default */.Z,QSpinnerBars: QSpinnerBars/* default */.Z,QField: QField/* default */.Z});runtime_auto_import_default()(PopupPagevue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.Z,Ripple: Ripple/* default */.Z});


/***/ }),

/***/ 2562:
/***/ (() => {

/* (ignored) */

/***/ })

}]);