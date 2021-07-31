<template>
<div class="container">

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" v-model="password">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button @click="login" type="submit" class="btn btn-primary">Submit</button>

</div>
</template>

<script>
export default {
    data () {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        login () {
          var data = {
            client_id: 2,
            client_secret: 'EKrmbP0sPHpp85JrlgLxkZC8tu968qQIw8jbT1vS',
            grant_type: 'password',
            username: this.email,
            password: this.password
          }
            this.$http.post("http://localhost/twoproject/public/oauth/token", data)
            .then(response => {
              console.log(response)
            })
            // .then(function (response) {
            //     console.log(response)
            // })
        }
    }
}
</script>

<style >

</style>