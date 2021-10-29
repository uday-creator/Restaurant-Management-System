<template>
<Header />
<h1>Hello {{name}}, Welcome on the home page</h1>
<table id="customers">
    <tr>
        <th>ID</th><th>Name</th><th>Address</th><th>Contact</th><th>Actions</th>
    </tr>
    <tr v-for="item in restaurants" :key = "item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.Address}}</td>
        <td>{{item.Contact}}</td>
        <td><router-link :to="'/update-restaurant/'+item.id"><button class="act">Update</button></router-link>
        &nbsp;<button type="button" class="act" @click="remRestaurant(item.id)">Remove</button></td>
    </tr>
</table>
</template>
<script>
import axios from 'axios'
import Header from './Header.vue'
export default{
    name:"Home",
    components:{
        Header
    },
    data(){
        return{
        name:'',
        restaurants:[],
       }
    },
    methods:{
        async remRestaurant(id){
            let res = await axios.delete("http://localhost:3000/restaurants/"+id)
            if (res.status == 200)
            {
                this.loadData()
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info')
            this.name = JSON.parse(user).name
            if(!user){
                this.$router.push({name:"Login"})
            }
            let result = await axios.get("http://localhost:3000/restaurants")
            this.restaurants = result.data 
        }
    },
     mounted(){
        this.loadData()
        
    }
}
</script>
<style>
#customers{
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width:100%;
}
#customers td, #customers th{
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}
#customers tr:nth-child(even){
    background-color: #f2f2f2;
}
#customers tr:hover{
    background-color: #ddd;
}
#customers th{
    padding-top:12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #333;
    color: #f2f2f2;
}
.act{
    cursor:pointer;
    background-color: #333;
    color:#ddd;
    height: 30px;
    width:100px;
}
</style>
