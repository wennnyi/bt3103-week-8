import { Bar } from 'vue-chartjs'
import database from "../../firebase.js"

export default {
  extends: Bar,
  data: function () {
    return {
        datacollection: {
            labels:  ["Pork Fried Rice", "Mapo Tofu","Sambal KangKung", "Cereal Prawn", "Dry Beef Hor Fun", "Prawn omelette"],
            datasets: [{  
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#2c3e50"],
                data: [0,0,0,0,0,0]
              }]
        },
        options: {
            legend: { 
              display: false
            },
            title: {
              display: true,
              text: 'Total Number of Each Dish'
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
            }
        }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, this.options)
  },
  methods: {
    fetchItems: function () {
        database.collection('orders').get().then(querySnapShot => {
          querySnapShot.forEach(doc => { 
            this.datacollection.datasets[0].data[0] += Number(doc.data()["Pork Fried Rice"])
            this.datacollection.datasets[0].data[1] += Number(doc.data()["Mapo Tofu"])
            this.datacollection.datasets[0].data[2] += Number(doc.data()["Sambal KangKung"])
            this.datacollection.datasets[0].data[3] += Number(doc.data()["Cereal Prawn"])
            this.datacollection.datasets[0].data[4] += Number(doc.data()["Dry Beef Hor Fun"])
            this.datacollection.datasets[0].data[5] += Number(doc.data()["Prawn omelette"])
        })
          this.renderChart(this.datacollection, this.options)
        })
    }
  },
    created () {
      this.fetchItems()
    }
}