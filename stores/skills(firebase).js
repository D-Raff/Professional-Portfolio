import { defineStore } from 'pinia'

export const useSkillStore = defineStore('skillStore', {
    state: () => ({
        Skills: []
    }),
    actions: {
        // fetching all skills
        async fetchSkills(){
            try {
                let res = await fetch(dataUrl)
                let {skills} = await res.json();
                this.Skills = skills               
            } catch (error) {
                console.log(error);
                
            }
        }
    }
})