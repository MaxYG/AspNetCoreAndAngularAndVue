<template>
    
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="user in Users" :key="user.Id">
        <td scope="row">{{user.Id}}</td>
        <td>{{user.Name}}</td>
        <td>{{user.Name1}}</td>
        <td>{{user.Name2}}</td>
      </tr>
   
  </tbody>
</table>
</template>
<script>
    export default {
        name: 'User',   
        data:function(){
          return {
            Users:[]
          }
        },
        created:function(){
          for(let i=0;i<10;i++){
            this.Users.push(   
              {
                Id:i+1,
                Name:"xx",
                Name1:"xx1",
                Name2:"xx2"
              }
            )
          }
        } 
    }
</script>