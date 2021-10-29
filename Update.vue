<template>
<Header />
<img class="logo" src='./logo.png'>
<h1>Hello User,Welcome to Update restaurant page</h1>
<form class="update">
    <input type="text" placeholder="Restaurant name" name="name" v-model="name">
    <input type="text" placeholder="Restaurant Address" name="address" v-model="address">
    <input type="text" placeholder="Contact no" name="contact" v-model="contact">
    <button type="button" @click="updateRestaurant">Update Restaurant</button>
 </form>
</template>
<script>
import Header from './Header.vue'
import axios from 'axios'
export default{
    name:"Update",
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
       async updateRestaurant(){
            console.warn("function called", this.name, this.contact,this.address)

            //now to update the existing records we will be using the put command with the specific id of the res.
            let result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name:this.name,
                Address: this.address,
                Contact: this.contact

            })
            if(result.status == 200){
                alert("Records Update Sucessfull")
                this.name=''
                this.address=''
                this.contact=''
                this.$router.push({name:"Home"})
            }
        }
    },
    async mounted(){
        console.warn("mount")
        let user = localStorage.getItem('user-info')
        if(!user){
            this.$router.push({name:"Login"})
        }

        //to extract anything from the ur
        console.log(this.$route.params.id)

        const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
        // console.warn(result)
        this.name = result.data.name;
        this.contact = result.data.Contact;
        this.address = result.data.Address
    }
}
</script>
<style>
.update input{
    display: block;
    width: 300px;
    height: 40px;
    margin-left:auto;
    margin-right:auto;
    padding:8px;
    margin-bottom: 20px;
    border: 1px solid #333;
}
.update button{
    width:320px;
    height:40px;
    background-color: #333;
    color:#ddd;
    cursor:pointer;
}
</style>