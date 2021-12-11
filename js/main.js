let getRandom = (x, y)=>{
    return ~~(Math.random() * (Math.max(x, y)-Math.min(x, y))+Math.min(x,y))
}

const App = {
    data(){
        return{
            array: [
                {
                    title: 'JONG JAEHYUN',
                    content: 'img/jae.jpg'
                },
                {
                    title: 'MARK LEE',
                    content: 'img/mark.jpg'
                },
                {
                    title: 'LEE TAEYONG',
                    content: 'img/ty.jpg'
                },
                {
                    title: 'JOHNNY SUH',
                    content: 'img/johnny.jpg'
                },
                {
                    title: 'MOON TAEIL',
                    content: 'img/taeil.jpg'
                },
                {
                    title: 'LEE DONGHYUCK',
                    content: 'img/hyuck.jpg'
                },
                {
                    title: 'YUTA NAKAMOTO',
                    content: 'img/yuta.jpg'
                },
                {
                    title: 'KIM DONGYOUNG',
                    content: 'img/dy.jpg'
                },
                {
                    title: 'KIM JUNGWOO',
                    content: 'img/jongwoo.jpg'
                },
            ],
            animals: ['слон'],
            counts: [],
            currentTodo: '',
            currentItem: {},
            currentIndex: 0,
            start:0,
            end:0,
        }
    }, 
    created(){
        this.currentItem = this.array[this.currentIndex]
    },
    methods:{
        addTodoItem(){
            if(this.currentTodo.trim()!=''&& this.animals.findIndex(item=> item == this.currentTodo.trim())== -1){
                this.animals.push(this.currentTodo)
                document.querySelector('.error').textContent = ''
            }
            else {
                this.currentTodo = ''
                document.querySelector('.error').textContent = 'Необходимо ввести значение!'
            }
            this.currentTodo = ''
        },
        showContent(item){
            this.currentItem = item
            this.currentIndex = this.array.findIndex(x=> x.title == item.title)
            console.log(this.currentIndex)
        },
        addItem(){
            this.counts.push(getRandom(this.start, this.end))
        }
    },
   
}
Vue.createApp(App).mount('#app')