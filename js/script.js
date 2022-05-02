const app = new Vue({
    el: "#app",
    data:{
        mail: [],
    },
    methods:{

    },
    created(){
        for(let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res)=>{
            console.log(res.data.response)
            this.mail.push(res.data.response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    }
})