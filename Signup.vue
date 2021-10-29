<template>
    <img class="logo" src='./logo.png'>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter name" v-model="name">
        <input type="email" placeholder="Enter email" v-model="email">
        <input type="password" placeholder="Enter Password" v-model="password">
        <button @click="signup"> Sign Up </button>
    </div>
        <p>
            Already have an account, please <router-link to='/login' style="text-decoration:none"><button class = "log">Login</button></router-link>
        </p>
</template>
<script>
import axios from 'axios' //axios is used to integrate the api with the website
export default{
    name:'Signup',
    data(){
        return {
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signup(){
            if(this.name==='' || this.email==='' || this.password===''){
                alert("Form can't be incomplete,Please fill out the incomplete fields");
                return
            }
            console.warn("singup successfull",this.name,this.email,this.password)
            let result = await axios.post("http://localhost:3000/users",{
                name:this.name,
                email:this.email,
                password:this.password
            });
            //post method is used as same as done in postman to post the new entry in db.json
            console.warn(result);
            
            if(result.status == 201){
                alert("You have been signed up, taking you to login page...")


            //when the user has singup suceessfully, he must be redirected to login page
            this.$router.push({name:"Login"})

            // //to check if the same user does'nt signup again
            // localStorage.setItem("user-info",JSON.stringify(result.data))

            //$router method is used to tell the browser to route the page
            //push method takes the perimeter, which is the name of the page to be directed 
            
             //user-info is he name of key to identify the value in the local storage
            //we have used json stringify to convert given object in string, since result.data is the object and loca; storage doesnt store the object
            
            }
           
        }
    },
    //mounted is the function which will always load 
    mounted(){
        console.warn('mount')
        let user = localStorage.getItem('user-info')
        if(user){
            alert("You have already Signed up!!")
            this.$router.push({name:"Home"})
        }
    }
}
</script>
<style>
.register input{
    width:300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left:auto;
    margin-right: auto;
    border: 1px solid skyblue;
}
.register button{
    width:320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
}
.log{
    width:100px;
    height:40px;
    color:#fff;
    background-color: skyblue;
    border: 1px solid skyblue;
    cursor:pointer
}
</style>