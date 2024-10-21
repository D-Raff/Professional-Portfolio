import { defineStore } from 'pinia'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export const useSkillsStore = defineStore('skillStore', {
    state: () => ({
        skills: []
    }),
    actions: {
        // fetching all skills
        async fetchSkills(){
            const result = await fetch(dataUrl);
            let Data = await result.json()            
            
            this.skills = Data.skills         
        }

    }
})