Vue.component('mycomp',{
    data(){
        return {
            name:'Иван',
            year:1990,
            show:true
        }
    },
    template: `<div>
                   <div>
                        <h1>Привет, {{ name }}. Вы родились в {{ year }} году</h1>
                   </div>

                   <div>
                        <h1>Добрый день, {{ name }}. Ваш возраст {{ new Date().getFullYear() - year }}</h1>
                   </div>
                </div>
                `
});

