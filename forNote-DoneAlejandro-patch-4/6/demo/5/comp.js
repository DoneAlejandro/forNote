Vue.component('mycomp',{
    props: ['x','name','title'],
    data(){
        return {
            name:'Иван',
            year:1990,
            show:true
        }
    },
    template: `
                   <div>
                        <h1>Привет, {{ $data.name }} и {{ name }}. Вы родились в {{ year }} году</h1>
                        <h2>Параметры, которые поступили из верстки: x = {{ x }};title={{ title }}</h2>
                   </div>

                `
});

