const App = {
    data(){
        return{
            currentStep: 0,
            arrSteps: [
                {
                    number: 1,
                    name: "Начало"
                },
                {
                    number: 2,
                    name: "Проживающие"
                },
                {
                    number: 3,
                    name: "Кемпинг"
                },
                {
                    number: 4,
                    name: "Начало"
                },
                {
                    number: 5,
                    name: "Начало"
                },
                {
                    number: 6,
                    name: "Начало"
                },
            ],
        }
    }, 
    methods:{
        
    },
   
}
Vue.createApp(App).mount('#app')