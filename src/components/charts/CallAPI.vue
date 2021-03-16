<template>
  <div class="chart">
      <header>
        <h1>Line Chart</h1>
    </header>
        <chart></chart>
  </div>
</template>

<script>
import Chart from "./CallAPI.js";
export default {
  components: {
    Chart
  }
};
</script>

<style>
header {
  font-size: 30px;
  text-align: center;
  background:#6699cc;
  color: white;
  margin-top: -40px;
  }
</style>