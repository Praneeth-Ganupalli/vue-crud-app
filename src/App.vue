<template>

  <!-- <UserDashBoard/> -->
   <HeaderTop />
   <HeaderNotification />
<router-view /> 
<AppFooter />
</template>

<script>
import HeaderTop from "@/components/header.vue";
import HeaderNotification from "@/components/headerNotification.vue"
import AppFooter from "@/components/Footer.vue"
export default {
  name: 'App',
  components: {
    HeaderTop,
    HeaderNotification,
    AppFooter
  },
  mounted()
  {
   let savedUsers=window.sessionStorage.getItem("usersList");
        savedUsers=JSON.parse(savedUsers);
        if(savedUsers && savedUsers.length)
        {
          this.$store.commit("userlist/setUserData",savedUsers)
        }
        else
        {
          this.$store.dispatch("userlist/getUserList");
        }
        window.$('#copy-right-year').text(new Date().getFullYear());
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin:0
}
</style>
