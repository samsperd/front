<template>
<div>
        <!-- <b-form-group v-for="(radioGroup, index) in radioGroups" :key="index" :label="radioGroup.label">
          <b-form-radio v-for="(item, indexx) in radioGroup.items" :key="indexx" v-model="selected[radioGroup.label]" :name="radioGroup.label + item.name" :value="item.value">
           {{ item.name }} - {{ item.value }}
          </b-form-radio>
        </b-form-group> -->
  <div>
      <div v-for="(radioGroup, indexed) in radioGroups" :key="indexed">
        <p>{{radioGroup.label}}</p>
          <div v-for="(item, indexeds) in radioGroup.items" :key="indexeds">
            <div v-if="item.checking == 1">
              <input type="radio"
              v-model="selected[radioGroup.label]"
              :name="radioGroup.label + item.id"
              :value="item"
              :id="radioGroup.label"
              :checked="item"        
              >
            </div>
            <div v-else>
              <input type="radio"
              v-model="selected[radioGroup.label]"
              :name="radioGroup.label + item.id"
              :value="item"
              :id="radioGroup.label"         
              >
            </div>
            <label :for="radioGroup.label">{{ item.name }} - {{ item.value }}</label>
          </div>
        <hr>
      </div>


  </div>

      <div v-for="(option, inf) in options" :key="inf" >
        <div v-if="option.option_type === 'select'">
          
          <hr>
          <p>{{ option.name }}</p>
          <b-form-select v-model="selects[option.name]" class="mb-3">
              <b-form-select-option value="">Please select an option</b-form-select-option>
              <b-form-select-option :value="option">1</b-form-select-option>
              <b-form-select-option :value="option">2</b-form-select-option>
              <b-form-select-option :value="option">3</b-form-select-option>
              <b-form-select-option :value="option">4</b-form-select-option>
              <b-form-select-option :value="option">5</b-form-select-option>
          </b-form-select>
        </div>
  </div>

        {{ selected }}
        <br>
        <pre>{{ selects }}</pre>
        

  </div>
</template>

<script>
export default {
  data(){
    return{
      options: [
        {
          name: 'Radio2',
          price: '100',
          inputname: 'rady',
          option_type: 'radio',
          important: 1
        },
        {
          name: 'Radio1',
          price: '50',
          inputname: 'rady',
          option_type: 'radio',
          important: 0
        },
        {
          name: 'Radio2',
          price: '50',
          inputname: 'brady',
          option_type: 'radio',
          important: 0
        },
        {
          name: 'Radio1',
          price: '60',
          inputname: 'brady',
          option_type: 'radio',
          important: 0
        },
          {
            name: 'Select 1',
            price: '100',
            food_id: '0',
            inputname: 'first',
            option_type: 'select'
          },

          {
            name: 'Select 2',
            price: '100',
            food_id: '0',
            inputname: 'second',
            option_type: 'select'
          },

          {
            name: 'Select 3',
            price: '100',
            food_id: '1',
            inputname: 'first',
            option_type: 'select'
          },

          {
            name: 'Select 4',
            price: '100',
            food_id: '1',
            inputname: 'second',
            option_type: 'select'
          }
        
      ],
      
      selected: {},
      dancer: {},
      selects: {}
    }
  },
  updated(){

  },
  mounted() {
    var e = {};
    this.radioGroups.filter(function (radio) {
      radio.items.filter(function (rag) {
        if(rag.checking == 1)
        {
          e[radio.label] = rag;
        }
      })
    })
    this.selected = e;

  },

  computed: {
    radioGroups() {
      const obj = {};
      
      this.options.forEach(option => {
        if (option.option_type === 'radio') {
          if (!obj[option.inputname]) {
            obj[option.inputname] = [];
          }
          
          obj[option.inputname].push({name: option.name, value: option.price, checking: option.important})
        }
      })
      
      return Object.entries(obj).map(([key, value]) => {
        return {
          label: key,
          items: value,
        }
      })
    }
  }
}
</script>
<style>

</style>