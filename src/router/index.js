import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "@/components/Dashboard.vue";
import SampleComponent from "@/components/SampleComponent.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sample-component",
    name: "Sample",
    component: SampleComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;