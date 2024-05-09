import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home';
import InfoCharacter from '../views/InfoCharacter';

const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/character/:id',
      component: InfoCharacter,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router