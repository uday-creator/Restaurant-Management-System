<template>
<Header />
<img class="logo" src='./logo.png'>
<h1>Hello User, Please Add a restaurant</h1>
<form class="add">
    <input type="text" placeholder="Restaurant name" name="name" v-model="name">
    <input type="text" placeholder="Restaurant Address" name="address" v-model="address">
    <input type="text" placeholder="Contact no" name="contact" v-model="contact">
    <button type="button" @click="add">Add New Restaurant</button>
 </form>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default{
    name:"Add",
    components:{
        Header
    },
    data(){
        return{
            name:"",
            contact:"",
            address:""
        }
    },
    methods:{
        async add(){
            if(this.name==='' || this.address===''||this.contact===''){
                alert("Please fill out all fields")
                return
            }
            if(this.contact.length > 10){
                alert("Contact must be of 10 digit")
                this.contact=''
                return
            }
            if(this.contact.length < 10){
                alert("Contact must be of 10 digit")
                this.contact=''
                return
            }
            console.warn("Adding successfull",this.name,this.address)
            let result= await axios.post("http://localhost:3000/restaurants",{
                name:this.name,
                Contact:this.contact,
                Address:this.address
            }) 
            this.name=''
            this.address='',
            this.contact=''
            if(result.status == 201){
            alert("Restaurant added successfully")
            }
        }
    },
    mounted(){
        console.warn("mount")
        let user = localStorage.getItem('user-info')
        if(!user){
            alert("You are not logged in")
            this.$router.push({name:"Login"})
        }
    }
}
</script>
<style>
.add input{
    display: block;
    width: 300px;
    height: 40px;
    margin-left:auto;
    margin-right:auto;
    padding:8px;
    margin-bottom: 20px;
    border: 1px solid #333;
}
.add button{
    width:320px;
    height:40px;
    background-color: #333;
    color:#ddd;
    cursor:pointer;
}
</style>