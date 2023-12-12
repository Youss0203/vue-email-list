const { createApp } = Vue;

createApp({
    data() {
        return {
            email:"",
        }
    },

    methods: {
       getRandomEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) =>{
                console.log(response);
                this.email = response.data.response;
            });
        }
    },

    created() {
        this.getRandomEmail();
    },
}).mount('#app');