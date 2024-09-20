import { defineStore } from 'pinia'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

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