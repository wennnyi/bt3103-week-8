import Home from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import DashBoard from './components/Dashboard.vue'

export default [
  { path: '/', component: Home },
  { path: '/orders', component: Orders },
  { path: '/modify/:doc_id', name: 'modify', component: Modify, props: true },
  { path: '/dashboard', component: DashBoard }
]
