import { _ as _export_sfc, aP as defineComponent, ao as createElementBlock, q as openBlock, x as createBaseVNode, d as createVNode, z as QBtn } from "./index-DZjX_O6B.js";
const _sfc_main = defineComponent({
  name: "ErrorNotFound"
});
const _hoisted_1 = { class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { style: { "font-size": "30vh" } }, " 404 ", -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("div", {
  class: "text-h2",
  style: { "opacity": ".4" }
}, " Oops. Nothing here... ", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", null, [
      _hoisted_2,
      _hoisted_3,
      createVNode(QBtn, {
        class: "q-mt-xl",
        color: "white",
        "text-color": "blue",
        unelevated: "",
        to: "/",
        label: "Go Home",
        "no-caps": ""
      })
    ])
  ]);
}
const ErrorNotFound = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  ErrorNotFound as default
};
