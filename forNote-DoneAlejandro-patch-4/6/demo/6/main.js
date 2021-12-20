const app = new Vue({
    el: "#app",
    data:{
        name: 'Игорь',
        name2:'Анна'
    },
    methods:{
        test(x){
            alert(`Имя пользователя - ${this.name}, возраст ${x}`)
        }
    }
});