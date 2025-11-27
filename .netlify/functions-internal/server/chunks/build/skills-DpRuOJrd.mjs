import { d as defineStore } from './server.mjs';

const dataUrl = "https://d-raff.github.io/VueJS-Portfolio-data/data/";
const useStore = defineStore("dataStore", {
  state: () => ({
    skills: [],
    work: [],
    badges: [],
    projects: [],
    about: [],
    contact: []
  }),
  actions: {
    // fetching all skills
    async fetchSkills() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.skills = Data.skills;
    },
    //fetching my work experience
    async fetchWork() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.work = Data.work;
    },
    //fetching my badges
    async fetchBadges() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.badges = Data.Badges;
    },
    //fetching my projects
    async fetchProjects() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.projects = Data.projects;
    },
    //fetching my about
    async fetchAbout() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.about = Data.about;
    },
    //fetching my contact info
    async fetchContact() {
      const result = await fetch(dataUrl);
      let Data = await result.json();
      this.contact = Data.Contact;
    }
  }
});

export { useStore as u };
//# sourceMappingURL=skills-DpRuOJrd.mjs.map
