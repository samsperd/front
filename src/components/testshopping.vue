<template>
<div>
  <div>
    <b-button v-for="(food, index) in foods" :key="index" v-b-modal.modalme  @click="sendInfo(food), getPrice(food.price)">{{food.name}}---N{{food.price}}</b-button>
  <br>

    <b-modal
      id="modalme"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="closeModal"
      @ok="handleOk"
    >
    <b-form-group label="Individual radios">
    <div v-for="(option, indexs) in options" :key="indexs">
      <div v-if="selectedUser.id == option.food_id">
        <div v-if="option.option_type == 'checkbox'">
          <b-form-checkbox-group @change="calculatePrice(option.price)">
            <b-form-checkbox v-model="selected.checkedBoxes" :name="'some-radios' + indexs" :value="option">
              {{option.name}}--- {{option.price}}
            </b-form-checkbox>
          </b-form-checkbox-group>
        </div>
        <div v-if="option.option_type == 'select'">

            <b-form-radio v-model="selected.selectedOption" @change="radioButtonPrice(option.price)"  :name="'some-radios' + indexs" :value="option">
          {{option.name}}--- {{option.price}}
          
        </b-form-radio>



        </div>



        <!-- <div v-if="option.option_type == 'select'">
          {{option.name}} ----- {{option.price}}
          <b-form-select v-model="selected.selectedOption" @change="calculatePrice(option.price)" class="mb-3">
            <b-form-select-option :value="''">Please select an option</b-form-select-option>
            <b-form-select-option :value="option" >{{option.name}}</b-form-select-option>
          </b-form-select>
        </div> -->
        
      </div>

    </div>
    </b-form-group>

    
      <div class="mt-3">Selected:
        <pre> 
        <strong>{{ selected }}</strong>
        </pre>
        </div>
      <!-- <h3>{{combined}}</h3> -->

        <div slot="modal-footer" class="container-fluid">
          <b-button variant="light" class="float-left">
            {{selectedPrice}} || {{selectedUser.price}}
          </b-button>
          <b-button class="text-white float-right" variant="success" @click="clickButton, handleSubmit()">Add to Cart</b-button>
        </div>
    </b-modal>
      <!-- {{selected}}
      <div class="mt-3">Cart:
        <pre> 
        <strong>{{ cart }}</strong>
        </pre>
        </div>     -->
  </div>
  <div class="container border mb-5">
    
    <h1>Cart<sup variant="white" v-if="cart.length > 0">
      <b-badge variant="danger">{{ cart.length}}</b-badge>
      </sup>
    </h1>
  <div v-for="(item, id) in cart" :key="id">
    <ul>
      <li>
        {{ item }}
      </li>
      <hr>
    </ul>
    
    <div class="container border">
      <h1>
        {{ item.name }}
      </h1>
      <h3>
        {{ item.price }}
      </h3>
    </div>
    <div v-for="(addons, adder) in item.selected" :key="adder">
      
      <div v-if="adder =='checkedBoxes'">
      <div v-for="(checking, checker) in addons" :key="checker">
        {{checking.name}}
        
      </div>
      </div>
        {{ addons. name}}  
    </div>



  </div>
  </div>



  </div>
</template>

<script>
export default {
      data() {
      return {
        selected: {
          checkedBoxes: [],
          radioButtons: '',
          selectedOption: '',
          food_id: ''
        },
        cart: [],
        beforecart: [],
        // combined: [],
        selectedPrice: 0,
        selectedUser: [],
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
            name: 'White Rice',
            price: '100',
            food_id: '0',
            option_type: 'checkbox'
          },

          {
            name: 'Plantain',
            price: '50',
            food_id: '0',
            option_type: 'select'
          },

          {
            name: 'Salad',
            price: '150',
            food_id: '0',
            option_type: 'select'
          },
          {
            name: 'Beans',
            price: '100',
            food_id: '1',
            option_type: 'checkbox'
          },

          {
            name: 'Fried Rice',
            price: '100',
            food_id: '1',
            option_type: 'checkbox'
          },
          {
            name: 'Jollof Rice',
            price: '150',
            food_id: '2',
            option_type: 'checkbox'
          },

          {
            name: 'Moi-Moi',
            price: '150',
            food_id: '2',
            option_type: 'select'
          },
        ]
      }
    },
    computed: {
      
      clickButton: function() {
        // let trim
        // for (let index of this.selected.checkedBoxes) {
        //   trim = index;
        //   break;
        //   return trim;
        // }
        //   console.log(trim)
        
let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented 
        // every time an element is added.
        [].push.call(this, elem)
    }
}
// return obj
// Let's add some empty objects just to illustrate.
obj.addElem(this.selectedUser)
obj.addElem(this.selectedPrice)
obj.addElem(this.selected)
this.cart.push(obj)
console.log(obj)        
        // this.selectedUser.selected = this.selected
        // console.log(this.selectedUser)
        //   this.beforecart.push(this.selectedUser),
        // sessionStorage.setItem('shoppingCart', JSON.stringify(this.beforecart));
        // this.cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
        //   console.log(this.cart);
      }

      // resetModal() {
      //   this.selected = null,
      //   this.selectedPrice = 0
      // }
    },
    mounted() {
      
    },
    methods: {
    //   checkFormValidity() {
    //     const valid = this.$refs.form.checkValidity()
    //     this.nameState = valid
    //     return valid
    //   },
      getPrice(price){
        this.selectedPrice += Number(price);
      },
      radioButtonPrice(price){
          this.selectedPrice += Number(price);
      },
      calculatePrice(price){
        if (event.target.checked == true) {
          this.selectedPrice += Number(price);
        } else
        if(event.target.checked == false) {
          this.selectedPrice -= Number(price);
        }
      },
      resetModal() {
      this.selected = {
          checkedBoxes: [],
          radioButtons: '',
          selectedOption: ''
        }
        
      
      },
      closeModal(){
        this.selected = {
          checkedBoxes: [],
          radioButtons: '',
          selectedOption: ''
        },
        this.selectedPrice = 0,
        this.combined = []
      },

    // funcToProcessVal(){
    //   this.combined.push(this.selected)
    //   console.log(combined);
    // },

      sendInfo(item) {
        this.selectedUser = item;
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

</style>