import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView       from './views/HomeView.vue'
import DisciplineView from './views/DisciplineView.vue'
import PowerView      from './views/PowerView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',                                  component: HomeView       },
    { path: '/disciplina/:id',                    component: DisciplineView },
    { path: '/disciplina/:id/poder/:powerId',     component: PowerView      },
    { path: '/:pathMatch(.*)*',                   redirect: '/'             },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
