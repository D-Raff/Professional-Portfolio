import { useSSRContext, withAsyncContext, ref, reactive, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrIncludeBooleanAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { u as useStore } from './skills-DpRuOJrd.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "reactor-container" }, _attrs))} data-v-0c42ad24><div class="jarv-container" data-v-0c42ad24><div class="stat circ" data-v-0c42ad24></div><div class="outerm circ" data-v-0c42ad24></div><div class="out circ" data-v-0c42ad24></div><div class="mid circ" data-v-0c42ad24></div><div class="mid2 circ" data-v-0c42ad24></div><div class="mid3 circ" data-v-0c42ad24></div><div class="in circ" data-v-0c42ad24></div><div class="inmost3 circ" data-v-0c42ad24></div><div class="inmost2 circ" data-v-0c42ad24></div><div class="inmost circ" data-v-0c42ad24></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Reactor.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0c42ad24"]]);
const _sfc_main = {
  __name: "Contact-me",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Store = useStore();
    [__temp, __restore] = withAsyncContext(() => Store.fetchContact()), await __temp, __restore();
    Store.contact || [];
    const isSubmitting = ref(false);
    const submitStatus = reactive({
      message: "",
      type: ""
      // 'success' or 'error'
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Reactor = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "Contact-me" }, _attrs))} data-v-2d51d180>`);
      _push(ssrRenderComponent(_component_Reactor, { class: "reactor" }, null, _parent));
      _push(`<h1 class="contact-title" data-v-2d51d180>Let&#39;s Connect</h1><div class="contact-section" data-v-2d51d180><form class="contact-form" data-v-2d51d180><div class="form-group" data-v-2d51d180><label for="name" data-v-2d51d180>Name</label><input type="text" id="name" name="name" required placeholder="Your name" data-v-2d51d180></div><div class="form-group" data-v-2d51d180><label for="email" data-v-2d51d180>Email</label><input type="email" id="email" name="email" required placeholder="your.email@example.com" data-v-2d51d180></div><div class="form-group" data-v-2d51d180><label for="subject" data-v-2d51d180>Subject</label><input type="text" id="subject" name="subject" required placeholder="What&#39;s this about?" data-v-2d51d180></div><div class="form-group" data-v-2d51d180><label for="message" data-v-2d51d180>Message</label><textarea id="message" name="message" required rows="6" placeholder="Your message here..." data-v-2d51d180></textarea></div><button type="submit"${ssrIncludeBooleanAttr(isSubmitting.value) ? " disabled" : ""} class="submit-btn" data-v-2d51d180>`);
      if (!isSubmitting.value) {
        _push(`<span data-v-2d51d180>Send Message</span>`);
      } else {
        _push(`<span data-v-2d51d180>Sending...</span>`);
      }
      _push(`</button>`);
      if (submitStatus.message) {
        _push(`<div class="${ssrRenderClass(["status-message", submitStatus.type])}" data-v-2d51d180>${ssrInterpolate(submitStatus.message)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Contact-me.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactMe = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d51d180"]]);

export { ContactMe as default };
//# sourceMappingURL=Contact-me-CThn6EIZ.mjs.map
