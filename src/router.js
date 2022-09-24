import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import EditUser from "@/views/EditUser.vue";
import DashBoard from "@/views/dashboard.vue"
import UserList from "@/views/userslist.vue"
import AppSettings from "@/views/settings.vue"
import HomePage from "@/views/homePage.vue"
//import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/EditUser/:id",
    name: "EditUser",
    component: EditUser,
  },
  {
    path:"/dashboard",
    name:"DashBoard",
    component:DashBoard
  },
  {
    path:"/userlist",
    name:"UserList",
    component:UserList
  },
  {
    path:"/settings",
    name:"AppSettings",
    component:AppSettings
  },
  {
    path:"/home",
    name:"Homepage",
    component:HomePage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 