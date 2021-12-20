Vue.component('mycomp',{
    data(){
        return {
            name:'Иван',
            year:1990,
            show:true
        }
    },
    template: `
                   <div>
                        <h1>Привет, {{ name }}. Вы родились в {{ year }} году</h1>
                        <slot></slot>
                   </div>

                `
});

