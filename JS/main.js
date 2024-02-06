const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'API-Email Boolean',
            listEmail: [],
        };
    },

    methods: {},

    created(){},

    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{        
                const userEmail = response.data.response
                this.listEmail.push(userEmail)
                console.log(userEmail);
            })
        }
    },
});

app.mount('#app')

