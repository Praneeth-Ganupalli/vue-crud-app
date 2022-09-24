<template>
<section >
    <LoginComponent @loginSuccess="handleLogin" />
</section>
</template>
<script>
import LoginComponent from '@/components/login.vue'
export default {
  name: 'UserHome',
  components: {
    LoginComponent,
  },
  data(){
    return {
      isSignedIn:false
    };
  },
  mounted()
  {
    if(sessionStorage.getItem("isRememberMeChecked"))
    {
      this.isSignedIn=true;
      window.$("#main-header,#main-footer").removeClass("d-none");
      location.href="/home";
    }
    else{
      window.$("#main-header,#main-footer").addClass("d-none");
    }
  },
  methods:
  {
    handleLogin()
    {
      this.isSignedIn=true;
      window.$("#main-header,#main-footer").removeClass("d-none");
      this.routeDefaultView();
    },
    routeDefaultView()
    {
      let routeList={
        users:"/userList",
        dashboard:"/dashboard"
      }
      let defaultPage=sessionStorage.getItem("defaultPage")
      if(defaultPage&&defaultPage!=="home")
      {
        this.$router.push({
          path:routeList[defaultPage]
        })
      }
      else{
        location.href="/home";
      }
    }
  }
}
</script>
<style>

</style>