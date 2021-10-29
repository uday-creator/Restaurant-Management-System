<template>
    <img class="logo" src='./logo.png'>
    <h1>Login</h1>
    <div class ="login">
        <input type="text" placeholder="Enter Email" v-model="email">
        <input type = "password" placeholder="Enter pssword" v-model="password">
        <button class="bu" @click="login">Login</button>
        <p>
            Doesn't have an account, please <router-link to="/sign-up" style="text-decoration:none"> <button class="signup">Sign Up </button></router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Login",
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
           if(this.email === '' || this.password ===''){
               alert("Please fill all the fields")
               return
           }
            let result=await axios.get(
                //use to check if the existing user is giving the right email and password
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(result.status == 200 && result.data.length > 0){
                localStorage.setItem('user-info',JSON.stringify(result.data[0]))
                alert("Log in successfull");
                this.$router.push({name:"Home"})
            }
            else{
                alert("Username or password is incorrect!!")
            }   
        }
    },
    mounted(){
        console.warn("Mount")
        let user = localStorage.getItem('user-info')
        if(user){
            alert("You are already logged in !!")
            this.$router.push({name:"Home"})
        }
    }
}
</script>

<style>
.login input{
    width:300px;
    height:40px;
    padding-left: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right:auto;
    display: block;
    border: 1px solid skyblue;
}

.bu{
    width:320px;
    height: 40px;
    border: 1px solid skyblue;
    background-color: skyblue;
    color: #fff;
    cursor: pointer;
}
.signup{
    color:#fff;
    background-color: skyblue;
    border: 1px solid skyblue;
    width:100px;
    height:40px;
    cursor: pointer;
}
</style>
