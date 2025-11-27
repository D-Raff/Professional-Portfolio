import { u as useStore } from './skills-DpRuOJrd.mjs';
import { withAsyncContext, computed, ref, onUnmounted, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Store = useStore();
    [__temp, __restore] = withAsyncContext(() => Store.fetchAbout()), await __temp, __restore();
    const aboutText = computed(() => {
      const about = Store.about;
      if (!about)
        return "";
      if (Array.isArray(about)) {
        if (about[0] && typeof about[0] === "object" && about[0].text) {
          return about[0].text;
        }
        if (typeof about[0] === "string") {
          return about.join(" ");
        }
        return about[0];
      }
      return about;
    });
    [__temp, __restore] = withAsyncContext(() => Store.fetchSkills()), await __temp, __restore();
    let skills = Store.skills;
    [__temp, __restore] = withAsyncContext(() => Store.fetchBadges()), await __temp, __restore();
    let badges = Store.badges;
    ref(false);
    onUnmounted(() => {
      resetAnimationState();
      enableScrolling();
    });
    function resetAnimationState() {
      const elementsToReset = [
        ".right-a",
        ".left-a",
        ".right-l",
        ".left-l",
        ".armor",
        "[data-helmet]",
        ".block",
        ".anim",
        ".spin",
        ".background",
        ".head",
        ".welcome",
        ".Home",
        "#Main",
        ".open",
        ".open2"
      ];
      elementsToReset.forEach((selector) => {
        const element = (void 0).querySelector(selector);
        if (element) {
          element.className = element.className.replace(/equip-\w+|armor-equip|helm-equip|cover|arc|flux|expand|lift-anim|shrink|scroll|display/g, "");
          if (selector === "#Main") {
            element.style.transform = "translateY(100vh)";
          }
          if (selector === ".open" || selector === ".open2") {
            element.style.transform = "translateX(0)";
          }
        }
      });
    }
    function enableScrolling() {
      (void 0).body.style.overflow = "";
      (void 0).documentElement.style.overflow = "";
      (void 0).removeEventListener("touchmove", preventDefault);
      (void 0).removeEventListener("wheel", preventDefault);
      (void 0).removeEventListener("scroll", preventDefault);
    }
    function preventDefault(e) {
      e.preventDefault();
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "content" }, _attrs))} data-v-e3a3ad5e><div class="Home" data-v-e3a3ad5e><div id="landing" class="landing" data-v-e3a3ad5e><div class="background" data-v-e3a3ad5e></div><div class="Animation" data-v-e3a3ad5e><div class="char-wrapper" data-v-e3a3ad5e><img src="https://iili.io/Jy4RwiJ.png" alt="chibi-img" data-v-e3a3ad5e><div class="suit" data-v-e3a3ad5e><img src="https://iili.io/Jy6nlCQ.png" alt="right-a" class="right-a" data-v-e3a3ad5e><img src="https://iili.io/Jy6nG3P.png" alt="left-a" class="left-a" data-v-e3a3ad5e><img src="https://iili.io/Jy4RjVa.png" alt="helmet" data-helmet data-v-e3a3ad5e><img src="https://iili.io/Jy6Ybu2.png" alt="armor" class="armor" loading="eager" data-v-e3a3ad5e><img src="https://iili.io/Jy6n16B.png" alt="left-l" class="left-l" data-v-e3a3ad5e><img src="https://iili.io/Jy6nV8F.png" alt="right-l" class="right-l" data-v-e3a3ad5e></div><div class="block" data-v-e3a3ad5e></div></div><div class="activate" data-v-e3a3ad5e><div class="btn-back" data-v-e3a3ad5e><div class="spin" data-v-e3a3ad5e></div><button class="anim" data-v-e3a3ad5e>equip</button></div></div></div><div class="welcome" data-v-e3a3ad5e><h1 class="head" data-v-e3a3ad5e>Hello,</h1><h2 class="name" data-v-e3a3ad5e>I&#39;m Damon,</h2><p class="title" data-v-e3a3ad5e> Aspiring Web Developer, Artist, Software Developer. </p></div></div></div><div id="Main" data-v-e3a3ad5e><div class="split" data-v-e3a3ad5e><div class="open" data-v-e3a3ad5e></div><div class="open2" data-v-e3a3ad5e></div></div><div class="content" data-v-e3a3ad5e><div id="About" class="container d-flex pt-5" data-v-e3a3ad5e><div class="square" data-v-e3a3ad5e><img src="https://iili.io/JhDRlWB.png" class="about-img" alt="profile" data-v-e3a3ad5e></div><div class="square-block" data-v-e3a3ad5e></div><div class="square2" data-v-e3a3ad5e><div class="info-text" data-v-e3a3ad5e><h2 class="name-head" data-v-e3a3ad5e>Damon Raffels</h2><div class="underline" data-v-e3a3ad5e></div><p class="pers-info" data-v-e3a3ad5e>${ssrInterpolate(aboutText.value)}</p></div></div></div><div id="Skills" class="container-fluid" data-v-e3a3ad5e><h1 class="title-skills" data-v-e3a3ad5e> Tech Stack <section class="stack-under" data-v-e3a3ad5e></section></h1><div class="skill-info" data-v-e3a3ad5e> With an evergrowing interest in more technologies and languages, I have an ever expanding library of skills. <section data-v-e3a3ad5e>I have beginner - intermediate skills with these languages and tools</section></div><div class="carousel-wrapper container" data-v-e3a3ad5e><div class="skill-carousel" data-v-e3a3ad5e><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(`<div data-v-e3a3ad5e><img${ssrRenderAttr("src", skill.logo)} alt="skill-logo" class="skill-img" data-v-e3a3ad5e></div>`);
      });
      _push(`<!--]--></div><div class="skill-carousel" data-v-e3a3ad5e><!--[-->`);
      ssrRenderList(unref(skills), (skill) => {
        _push(`<div data-v-e3a3ad5e><img${ssrRenderAttr("src", skill.logo)} alt="skill-logo" class="skill-img" data-v-e3a3ad5e></div>`);
      });
      _push(`<!--]--></div></div></div><div id="Badges" data-v-e3a3ad5e><div class="badge-showcase container-fluid" data-v-e3a3ad5e><div class="badge-wrapper container" data-v-e3a3ad5e><!--[-->`);
      ssrRenderList(unref(badges), (badge) => {
        _push(`<div class="badges card" data-v-e3a3ad5e><div class="card-body" data-v-e3a3ad5e><img${ssrRenderAttr("src", badge.badge)} alt="badge" data-badge data-v-e3a3ad5e></div><div class="card-footer" data-v-e3a3ad5e>${ssrInterpolate(badge.title)}</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e3a3ad5e"]]);

export { index as default };
//# sourceMappingURL=index-RailvQGn.mjs.map
