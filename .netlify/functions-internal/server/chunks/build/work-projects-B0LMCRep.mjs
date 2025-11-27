import { u as useStore } from './skills-DpRuOJrd.mjs';
import { useSSRContext, withAsyncContext, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  __name: "ProjectCardComponent",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Store = useStore();
    [__temp, __restore] = withAsyncContext(() => Store.fetchProjects()), await __temp, __restore();
    let projects = Store.projects || [];
    console.log("ProjectCardComponent - Projects data:", projects);
    console.log("ProjectCardComponent - Projects length:", projects.length);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-carousel" }, _attrs))} data-v-45a36ca7><div class="head" data-v-45a36ca7><h1 class="title" data-v-45a36ca7>Projects <section class="stack-under-projects" data-v-45a36ca7></section></h1></div><div class="container" data-v-45a36ca7>`);
      if (unref(projects) && unref(projects).length > 0) {
        _push(`<div class="slide" data-v-45a36ca7><!--[-->`);
        ssrRenderList(unref(projects), (project, index) => {
          _push(`<div class="item" style="${ssrRenderStyle(`background-image: url('${project.image}')`)}" data-v-45a36ca7><div class="content" data-v-45a36ca7><div class="name" data-v-45a36ca7>${ssrInterpolate(project.name)}</div><div class="des" data-v-45a36ca7>${ssrInterpolate(project.description)}</div><div class="buttons" data-v-45a36ca7><a class="seeMore" target="_blank"${ssrRenderAttr("href", project.link)} data-v-45a36ca7><button data-v-45a36ca7>Site</button></a><a class="seeMore" target="_blank"${ssrRenderAttr("href", project.gitHub)} data-v-45a36ca7><button data-v-45a36ca7>Github</button></a></div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="slide" data-v-45a36ca7><div class="item" data-v-45a36ca7><div class="content" data-v-45a36ca7><div class="name" data-v-45a36ca7>No Projects Yet</div><div class="des" data-v-45a36ca7> Projects will be displayed here once they are added to the data source. </div><a class="seeMore" target="_blank" href="#" data-v-45a36ca7><button data-v-45a36ca7>Coming Soon</button></a></div></div></div>`);
      }
      _push(`<div class="button" data-v-45a36ca7><button class="prev" data-v-45a36ca7>\u25C1</button><button class="next" data-v-45a36ca7>\u25B7</button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCardComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-45a36ca7"]]);
const _sfc_main = {
  __name: "work-projects",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const Store = useStore();
    [__temp, __restore] = withAsyncContext(() => Store.fetchWork()), await __temp, __restore();
    let workProjects2 = Store.work;
    [__temp, __restore] = withAsyncContext(() => Store.fetchProjects()), await __temp, __restore();
    Store.projects;
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectCardComponent = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ id: "work-projects" }, _attrs))} data-v-7b2862cd><section class="work-experience py-16" data-v-7b2862cd><div class="head" data-v-7b2862cd><h1 class="title" data-v-7b2862cd>Work &amp; Projects <section class="stack-under-work" data-v-7b2862cd></section></h1></div><div class="container mx-auto px-4" data-v-7b2862cd><div class="experience-timeline" data-v-7b2862cd><!--[-->`);
      ssrRenderList(unref(workProjects2), (item, index) => {
        _push(`<div class="${ssrRenderClass([{ "right": index % 2 === 0 }, "experience-item"])}" data-v-7b2862cd><div class="main-card p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300" data-v-7b2862cd><span class="timeframe text-sm text-gray-500" data-v-7b2862cd>${ssrInterpolate(item.year)}</span><h3 class="place text-xl font-semibold mt-2" data-v-7b2862cd>${ssrInterpolate(item.place)} <section class="stack-under-work" data-v-7b2862cd></section></h3><h4 class="desc mb-3" data-v-7b2862cd>${ssrInterpolate(item.description)}</h4><div class="skill-wrapper d-flex flex-wrap" data-v-7b2862cd><!--[-->`);
        ssrRenderList(item.skills, (skill, skillIndex) => {
          _push(`<span class="work-skill" data-v-7b2862cd>${ssrInterpolate(skill)}</span>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="projects py-16" data-v-7b2862cd>`);
      _push(ssrRenderComponent(_component_ProjectCardComponent, null, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/work-projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const workProjects = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7b2862cd"]]);

export { workProjects as default };
//# sourceMappingURL=work-projects-B0LMCRep.mjs.map
