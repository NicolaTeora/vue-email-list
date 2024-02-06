const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Hello world',
        };
    },

    methods: {},

    mounted() {},
});

app.mount('#app')

for (let i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response)=>{        
        const userEmail = response.data.response
        console.log(userEmail);
    })
}