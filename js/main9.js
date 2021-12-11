const App = {
    data(){
        return{
            messages:[],
        }
    }, 
    methods:{
        addToArray(){
                this.messages.push(textArea.value) 
                textArea.value = ''
        },
        deleteElem(index){
            this.messages.splice(index, 1)
        }
    },
   
}
Vue.createApp(App).mount('#app')