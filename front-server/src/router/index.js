import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../Views/AccueilView.vue'; 
import Portfolio from '../Views/PortfolioView.vue'

const routes = [
    {
      path: '/',
      name: 'accueil',
      component: Accueil,
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio,
      },
  ];
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  });
  
  export default router;