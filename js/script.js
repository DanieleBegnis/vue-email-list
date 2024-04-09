/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista. */


const { createApp } = Vue;

createApp({
    data() {
        return {

        };
    },
    methods: {
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            const serverData = response.data;
            console.log(serverData)
        });
    }
}).mount('#app');