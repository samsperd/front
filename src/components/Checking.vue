<template>
<div>
<h1> </h1>
<div class="container">
  <form class="row">
    <div class="col-xs-12 col-md-6">
      <h6>Person 1</h6>
      <hr/>
      <div class="form-group">
        <label>First Name</label>
        <input class="form-control" type="text" v-model="form[0].firstName"/>
      </div>
      <div class="form-group">
        <label>Last Name</label>
        <input class="form-control" type="text" v-model="form[0].lastName"/>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <h6>Person 2</h6>
      <hr/>
      <div class="form-group">
        <label>First</label>
        <input class="form-control" type="text" v-model="form[1].firstName"/>
      </div>
      <div class="form-group">
        <label>Input 2</label>
        <input class="form-control" type="text" v-model="form[1].lastName"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12">
        <pre v-show="form"><code> Data object is:
 
{{ form | json }}</code></pre>
        <h5 class="text-xs-center p-t-1" valid-v-else="v-else">No data yet... Fill out the form</h5>
      </div>
    </div>
  </form>
</div>
  </div>
</template>

<script>
export default {
  data: {
    form: ''
  }
  }
</script>
<style>

</style>