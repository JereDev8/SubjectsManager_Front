import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import CreateSubject from '../components/CreateSubject.vue'
import DatosGenerales from '@/components/DatosGenerales.vue'
import Gestores from '@/components/Gestores.vue'
import DatosMateria from '@/components/DatosMateria.vue'
import Competencias from '@/components/Competencias.vue'

const routes = [
  { path: '/', component: Home },
  { 
    path: '/:idCourse/create-subject',
    component: CreateSubject, 
    children:[
        {
            path: '/:idCourse/create-subject/datos-generales',
            component: DatosGenerales,
        },
        {
            path: '/:idCourse/create-subject/gestores',
            component: Gestores,
        },
        {
            path: '/:idCourse/create-subject/datos-materia',
            component: DatosMateria,
        },
        {
            path: '/:idCourse/create-subject/competencias',
            component: Competencias,
        }
    ] }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router