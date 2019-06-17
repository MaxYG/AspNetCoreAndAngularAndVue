<template>
  <form class="form-signin logincss">
  <img class="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" v-model="UserName" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">

  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" v-model="Password" id="inputPassword" class="form-control" placeholder="Password" required="">
  
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button @click="login" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
</form>
</template>

<script>
export default {
  name: 'Login',
  data:function(){
    return {
      UserName:'',
      Password:'',
    }
  },
  methods:{
    login:function(){
      this.$axios.post(this.$baseUrl+"api/User/authenticate", {
        UserName: this.UserName,
        Password: this.Password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
       this.$router.push('/main');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.logincss{
  width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
}

</style>
