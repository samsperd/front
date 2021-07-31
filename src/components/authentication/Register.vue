<template>
 <div class="container">

<form action="">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control"  placeholder="Enter name" v-model="name">
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control"  placeholder="Enter email" v-model="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control"  placeholder="Enter password" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary">Register</button>
</form>

</div>   
</template>

<script>
export default {
    data () {
        return {
            name: '',
            email: '',
            password: ''
        }
    }
}
</script>

<style >

</style>