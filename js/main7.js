const App = {
    data(){
        return{
            amount: 0,
            messages:[]
        }
    }, 
    methods:{
        addToArray(){
            if (this.amount<=60){
                this.messages.push(textArea.value) 
                textArea.value = ''
                this.amount = 0
            }
        },
        countSymbols(event){
            this.amount = event.target.value.length
        },
        deleteElem(index){
            this.messages.splice(index, 1)
        }
    },
   
}
Vue.createApp(App).mount('#app')