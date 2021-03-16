<template>
  <div>
      <br><br>
      <p v-for="(count, name) in datapacket" v-bind:key="name">
        <label>{{name}}: {{count}}</label><br><br>
        <input v-bind:id="name" placeholder=0 type="number" min=0 max=10><br>
      </p>
      <br><br>
    <button v-on:click="updateOrder()">Update Order</button>
  </div>
</template>

<script>
import database from "../firebase.js"

export default {
  data() {
    return {
      datapacket: [],
      count: 0
    }
  },
  props: {
    doc_id: {
      type: String
    }
  },
  methods:{
    fetchItems: function() {
      let item = {};
        database.collection('orders').get().then((querySnapShot)=>{
          querySnapShot.forEach(doc=>{
          if (doc.id == this.doc_id) {
            item = doc.data();
            this.datapacket = item;
          }
        });
      });
    },
    updateOrder: function() {
      let copy = this.datapacket;
      copy["Cereal Prawn"] = Number(document.getElementById("Cereal Prawn").value);
      copy["Dry Beef Hor Fun"] = Number(document.getElementById("Dry Beef Hor Fun").value);
      copy["Mapo Tofu"] = Number(document.getElementById("Mapo Tofu").value);
      copy["Pork Fried Rice"] = Number(document.getElementById("Pork Fried Rice").value);
      copy["Prawn omelette"] = Number(document.getElementById("Prawn omelette").value);
      copy["Sambal KangKung"] = Number(document.getElementById("Sambal KangKung").value);
      for (var item in copy) {
        this.count += copy[item]
      }
      if (this.count == 0) {
        database.collection('orders').doc(this.doc_id).delete().then(() => {
          this.$router.push({ path: '/orders' })
        });
      } else {
        database.collection('orders').doc(this.doc_id).update(copy).then(() => {
          this.$router.push({ path: '/orders' })
        });
      }
    }
  },
  created() {
    this.fetchItems()  
  }
}
</script>

<style scoped>
label, input {
  font-size: 18px;
  width: 180px;
}

button {
  width: 200px;
  height: 50px;
  background-color: #f7cac9;
  border-radius: 10px;
  border-width: 1px;
  font-size: 20px;
}
</style>
