<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="add-a-restaurant">Add Restaurant</router-link>
        <a href="" @click="log">{{logname}}</a>
    </div>
</template>
<script>


export default{
    name:'Header',
    data(){
        return{
            logname:'Login'
        }
    },
    methods:{
        log(){
            if(this.logname == 'Login'){
                this.logname = 'Logout'
                this.$router.push({name:'Login'})
            }
            else if(this.logname == 'Logout'){
                localStorage.clear()
                alert("Logging you out !!")
                // this.$router.push({name:'Login'})
            }
        }
    },
    mounted(){
        let user = localStorage.getItem('user-info')
        if(!user){
            this.logname='Login'
        }
        else{
            this.logname="Logout"
        }
    }
}

</script>
<style>
.nav{
    background-color: #333;
    overflow:hidden;
}
.nav a{
    float:left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 16px;
    margin-right:5px; 
}

.nav a:hover{
    background-color: #ddd;
    color: #222;
}
.nav a.active{
    background-color: #ddd;

}
</style>
