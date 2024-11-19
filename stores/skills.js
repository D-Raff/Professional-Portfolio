import { defineStore } from 'pinia'
const dataUrl = 'https://d-raff.github.io/VueJS-Portfolio-data/data/'

export const useStore = defineStore('dataStore', {
    state: () => ({
        skills: [],
        work: [],
    }),
    actions: {
        // fetching all skills
        async fetchSkills(){
            const result = await fetch(dataUrl);
            let Data = await result.json()                        

            this.skills = Data.skills         
        },
        //fetching my work experience
        async fetchWork(){
            const result = await fetch(dataUrl);
            let Data = await result.json()                        
            
            this.work = Data.work            
        }

    }
})