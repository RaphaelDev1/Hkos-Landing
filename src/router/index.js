import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectionView from '../views/ConnectionView.vue'
import DashboardView from '../views/DashboardView.vue'

import DevisView from '../views/DevisView.vue'
import FactureView from '../views/FactureView.vue'

import ContratView from '../views/ContratView.vue'
import ContratGenerateurView from '../views/ContratGenerateurView.vue'
import DevisGenerateurView from '../views/DevisGenerateurView.vue'
import FactureGenerateurView from '../views/FactureGenerateurView.vue'

import NewAccountView from '../views/NewAccountView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connection',
    name: 'connection',
    component: ConnectionView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView


  },
  {
    path: '/devis',
    name: 'devis',
    component: DevisView


  },
  {
    path: '/facture',
    name: 'facture',
    component: FactureView


  },

  {
    path: '/contrat',
    name: 'contrat',
    component: ContratView


  },

  {
    path: '/generateur-devis',
    name: 'generateur-devis',
    component: DevisGenerateurView


  },

  {
    path: '/generateur-facture',
    name: 'generateur-facture',
    component: FactureGenerateurView


  },

  {
    path: '/generateur-contrat',
    name: 'generateur-contrat',
    component: ContratGenerateurView


  },
  {
    path: '/new-account',
    name: 'new-account',
    component: NewAccountView


  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
