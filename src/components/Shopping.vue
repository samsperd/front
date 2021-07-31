<template>
<div>
  <div>
    <b-button v-for="(food, index) in foods" :key="index" v-b-modal.modalme  @click="sendInfo(food)">{{food.name}}---N{{food.price}}</b-button>
  <br>

    <b-modal
      id="modalme"
      ref="modal"
      title="Submit Your Name"
      scrollable
      size="xl"
      @show="resetModal"
      @hidden="closeModal"
      @ok="handleOk"
    >
<div>
      <div v-for="(radioGroup, indexed) in radioGroups" :key="indexed">
        <p>{{radioGroup.label}}</p>
          <div v-for="(item, indexeds) in radioGroup.items" :key="indexeds">
            <input type="radio"
            v-model="selected[radioGroup.label]"
            :name="radioGroup.label + item.id"
            :value="item"
            :id="radioGroup.label"         
            >
            <label :for="radioGroup.label">{{ item.name }} - {{ item.value }}</label>
          </div>
        <hr>
      </div>
  
</div>

<div>
      <div v-for="(option, inf) in options" :key="inf">
        <div v-if="selectedUser.id == option.food_id">
          <div v-if="option.option_type === 'checkbox'">
            <b-form-checkbox-group>
              <b-form-checkbox v-model="checkedBoxes" :name="'some-radios' + inf" :value="option">
                {{option.name}}--- {{option.price}}
              </b-form-checkbox>
            </b-form-checkbox-group>
          </div>

        <div v-if="option.option_type === 'select'">
          <hr>
          <p>{{ option.name }}</p>
          <b-form-select v-model="selects[option.name]" class="mb-3">
              <b-form-select-option value="">Please select an option</b-form-select-option>
              <b-form-select-option :value="option.price * 1">1</b-form-select-option>
              <b-form-select-option :value="option.price * 2">2</b-form-select-option>
              <b-form-select-option :value="option.price * 3">3</b-form-select-option>
              <b-form-select-option :value="option.price * 4">4</b-form-select-option>
              <b-form-select-option :value="option.price * 5">5</b-form-select-option>
          </b-form-select>
        </div>

        </div>
      </div>
</div>




      <div class="mt-3">Selected:
        <pre> 
        <strong>{{ selected }}</strong>
        </pre>
        </div>

        <div slot="modal-footer" class="container-fluid">
          <b-button variant="light" class="float-left">
            Price: &#8358;{{ selectedPrice }}
          </b-button>
    Pack:
  <b-form-spinbutton class="float-center" id="sb-inline" v-model="value" inline>
  </b-form-spinbutton>
          <b-button class="text-white float-right" variant="success" @click="clickButton, handleSubmit()">Add to Cart</b-button>
        </div>
      </b-modal>
  </div>
  {{selectedPrice}}
  <hr>
  {{selected}}
  <hr>
  {{ checkedBoxes }}
  <hr>
  {{selects}}
  </div>
</template>

<script>
export default {
      data() {
      return {
        selectedUser: [],
        value: 1,
        selects: {},
        checkedBoxes: [],
        selectedPrice: '',
        selected: {},
        foods: [
          {
            name: 'Beans',
            price: '100',
            id: '0'
          },
          {
            name: 'Jollof Rice',
            price: '250',
            id: '1'
          },
          {
            name: 'Fried Rice',
            price: '250',
            id: '2'
          },
        ],
        options: [
          {
            name: 'CheckBox 1',
            price: '100',
            food_id: '0',
            inputname: 'check1',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 2',
            price: '100',
            food_id: '0',
            inputname: 'check2',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 3',
            price: '100',
            food_id: '0',
            inputname: 'check3',
            option_type: 'checkbox'
          },
          {
            name: 'CheckBox 4',
            price: '100',
            food_id: '0',
            inputname: 'check4',
            option_type: 'checkbox'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '0',
            inputname: 'first',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '0',
            inputname: 'first',
            option_type: 'radio'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '0',
            inputname: 'second',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '0',
            inputname: 'second',
            option_type: 'radio'
          },



          {
            name: 'CheckBox 1',
            price: '100',
            food_id: '1',
            inputname: 'check1',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 2',
            price: '100',
            food_id: '1',
            inputname: 'check2',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 3',
            price: '100',
            food_id: '1',
            inputname: 'check3',
            option_type: 'checkbox'
          },
          {
            name: 'CheckBox 4',
            price: '100',
            food_id: '1',
            inputname: 'check4',
            option_type: 'checkbox'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '1',
            inputname: 'first',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '1',
            inputname: 'first',
            option_type: 'radio'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '1',
            inputname: 'second',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '1',
            inputname: 'second',
            option_type: 'radio'
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
            name: 'Select 1',
            price: '100',
            food_id: '1',
            inputname: 'first',
            option_type: 'select'
          },

          {
            name: 'Select 2',
            price: '100',
            food_id: '1',
            inputname: 'second',
            option_type: 'select'
          },
          {
            name: 'Select 1',
            price: '100',
            food_id: '2',
            inputname: 'first',
            option_type: 'spin'
          },

          {
            name: 'Select 2',
            price: '100',
            food_id: '2',
            inputname: 'second',
            option_type: 'select'
          },//uhjj

          {
            name: 'CheckBox 1',
            price: '100',
            food_id: '2',
            inputname: 'check1',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 2',
            price: '100',
            food_id: '2',
            inputname: 'check2',
            option_type: 'checkbox'
          },

          {
            name: 'CheckBox 3',
            price: '100',
            food_id: '2',
            inputname: 'check3',
            option_type: 'checkbox'
          },
          {
            name: 'CheckBox 4',
            price: '100',
            food_id: '2',
            inputname: 'check4',
            option_type: 'checkbox'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '2',
            inputname: 'first',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '2',
            inputname: 'first',
            option_type: 'radio'
          },
          {
            name: 'Radio 1',
            price: '100',
            food_id: '2',
            inputname: 'second',
            option_type: 'radio'
          },

          {
            name: 'Radio 2',
            price: '100',
            food_id: '2',
            inputname: 'second',
            option_type: 'radio'
          },

        ]
      }
    },
    computed: {
      radioGroups() {
          const obj = {};
          
          this.options.forEach(option => {
            if (option.option_type === 'radio') {
              if (option.food_id === this.selectedUser.id) {
                
                if (!obj[option.inputname+option.food_id]) {
                  obj[option.inputname+option.food_id] = [];
                }
                
                obj[option.inputname+option.food_id].push({name: option.name, value: option.price, id: option.food_id})
              }
            }
          })
        
        return Object.entries(obj).map(([key, value]) => {
          return {
            label: key,
            items: value,
          }
        })
      },
      clickButton() {


          sessionStorage.setItem('shoppingCart', JSON.stringify(this.selected));


          
      }

    },
    mounted() {
      
    },
    updated(){
        var checkbox = this.checkedBoxes.reduce((acc, item) => acc + Number(item.price), 0);
        const total = Object.values(this.selected).reduce((t, {value}) => t + Number(value), 0);
        this.selectedPrice = this.value * (total + Number(this.selectedUser.price) + checkbox + 150);
        console.log(total)
    },
    methods: {
      resetModal() { 

      },
      closeModal(){
        this.selected = {}
        this.checkedBoxes = []
      },

      sendInfo(item) {
        this.selectedUser = item;
                        // var lds = [];
                // var ids = [];
                // var them = this.options

                // for (let d = 0; d < them.length; d++) {
                //     const ee = them[d].food
                //     for (let xd = 0; xd < ee.length; xd++) {
                //         const element = ee[xd].id;
                //         ids.push(element);
                //     }
                    
                // }
                // console.log(ids);

      },

      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },

      handleSubmit() {
    //     // Exit when the form isn't valid
    //     if (!this.checkFormValidity()) {
    //       return
    //     }
    //     // Push the name to submitted names
    //     this.submittedNames.push(this.name)
    //     // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modalme')
        })
      }
    }
}
</script>
<style>
#modalme {
  overflow: hidden;
}
</style>
