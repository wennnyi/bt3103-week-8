<template>
<div>
  <p>Menu:</p>
  <ul id="list">
    <li v-for="item in items" :key="item.name">
        {{item[0]}} x {{item[1]}}
    </li>
  </ul>
    <button id="subtotal" type="button" v-on:click="findTotal();"> Calculate Total </button>
    <p v-show="clicked">SubTotal: ${{ this.total }}</p>
    <p v-show="clicked">GrandTotal: ${{ sumTotal }}</p>
    <br><br>
    <button type="button" v-on:click="sendOrder()"> Add Order </button>

</div>
</template>

<script>
import database from "../firebase.js"

export default {
  props:{
    items:{
      type: Array
    }
  },
  data() {
    return {
      total: 0,
      clicked: false
    }
  },
  methods: {
    findTotal: function() {
      this.clicked=true;
      this.total = 0;
      var i;
      for (i=0;i<this.items.length;i++) {
        var item = this.items[i];
        this.total += item[1] * item[2];
      }
    },
    sendOrder: function() {
      var food = {
        "Prawn omelette": 0,
        "Dry Beef Hor Fun": 0,
        "Sambal KangKung": 0,
        "Pork Fried Rice": 0,
        "Mapo Tofu": 0,
        "Cereal Prawn": 0,
      };
      this.items.forEach((item) => {
        food[item[0]] = item[1];
      });
      database.collection("orders").add(food).then(() => location.reload());
    }  
  },
  computed: {
    sumTotal: function() {
      return (this.total * 1.07).toFixed(2);
    }
  }
}
</script>

<style scoped>
li {
  font-size: 25px;
  margin: 20px;
}

p {
  font-size:25px;
}

button {
   height: 50px;
   width: 100px;
   font-size: 15px;
   text-align: center;
   border-radius: 8px;
   background-color: pink;
}

</style>
