<template>
  <div id="app">
    <a><button v-on:click="subtract()">-</button>
    {{ counter }}
    <button v-on:click="add()">+</button></a>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type: Object
    }
  },
  data() {
    return {
      counter: 0
    }
  },
  methods:{
    add: function() {
      if (this.counter == 10) {
        alert("You cannot buy more than 10 items.")
      } else {
        this.counter = this.counter + 1
      }
      this.$emit('counter', this.item, this.counter)
    },
    subtract: function() {
      if (this.counter >= 1) {
        this.counter = this.counter - 1
      }
      this.$emit('counter', this.item, this.counter)
    }
  }
}

</script>

<style scoped>
    button {
        border-radius: 10px;
        font-size: 30px;
        background: pink;
        text-align: center;
        height:50px;
        width:50px;
    }

    a {
        font-size: 30px;
    }

</style>
