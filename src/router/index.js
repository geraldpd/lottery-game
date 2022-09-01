import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManualPickView from '../views/ManualPickView.vue'
import LuckyDipView from '../views/LuckyDipView.vue'
import QuickRunView from '../views/QuickRunView.vue'

import LottoResultView from '../views/LottoResultView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/manual-pick',
    name: 'manualPick',
    component: ManualPickView
  },
  {
    path: '/lucky-dip',
    name: 'luckyDip',
    component: LuckyDipView
  },
  {
    path: '/quick-run',
    name: 'quickRun',
    component: QuickRunView
  },
  {
    path: '/lotto-result',
    name: 'lottoResult',
    component: LottoResultView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
