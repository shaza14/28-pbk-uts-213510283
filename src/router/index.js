import {createRouter, createWebHistory} from 'vue-router';
import Home from '../components/Home.vue';
import task from '../components/Task.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/task',
    name: 'task',
    component: task
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
