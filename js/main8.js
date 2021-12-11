const App = {
    data(){
        return{
            inputs:[
                {
                    text:'приготовить завтрак',
                    done: false
                },
                {
                    text:'провести эфир',
                    done: false
                },
                {
                    text:'выгулять собаку',
                    done: false
                },
                {
                    text:'выполнить упражнения',
                    done: false
                },
                {
                    text:'сходить за покупками',
                    done: false
                }
            ]
        }
    }, 
    methods:{
        addToArray(){
        }
    }
}
Vue.createApp(App).mount('#app')