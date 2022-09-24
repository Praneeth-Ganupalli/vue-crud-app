<template>
  <section id="settings-content">
    <section id="actions" class="py-4 mb-3 bg-light">
      <div class="container">
        <div class="row">
          <div class="col-md-3 mb-3">
            <a class="btn btn-primary btn-block" href="/home">
              <i class="fas fa-arrow-left"></i> Back to Home Page
            </a>
          </div>
          <div class="col-md-3">
            <a class="btn btn-success btn-block" @click="handleSettingsSave()">
              <i class="fas fa-check"></i> Save Changes
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header">Edit Settings</div>
            <div class="card-body">
              <form>
                <fieldset class="form-group">
                  <legend>Remember My Login</legend>
                  <div class="form-check">
                    <label class="form-check-label" for="radio1">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio1"
                        name="rememberMeSettings"
                        value="yes"
                        checked
                      />Yes
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label" for="radio2">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="radio2"
                        name="rememberMeSettings"
                        value="no"
                      />No
                    </label>
                  </div>
                </fieldset>
                <fieldset class="form-group">
                  <legend>Home Page Default View</legend>
                  <div class="form-check">
                     <label class="form-check-label" for="home">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="home"
                        name="homePageView"
                        value="home"
                        checked
                      />Home
                    </label>
                  </div>
                  <div class="form-check">
                     <label class="form-check-label" for="dashboard">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="dashboard"
                        name="homePageView"
                        value="dashboard"
                      />DashBoard
                    </label>
                  </div>
                     <div class="form-check">
                     <label class="form-check-label" for="users">
                      <input
                        type="radio"
                        class="form-check-input"
                        id="users"
                        name="homePageView"
                        value="users"
                      />Users List
                    </label>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AppSettingsComponent",
  mounted()
  {
    const isSigedIn=sessionStorage.getItem("isRememberMeChecked");
    if(isSigedIn)
    {
        window.$("[name=rememberMeSettings][value='yes']").attr("checked",true)
    }
    else{
        window.$("[name=rememberMeSettings][value='no']").attr("checked",true)
    }
    const defaultView=sessionStorage.getItem("defaultPage");
     window.$("[name=homePageView][value="+defaultView+"]").attr("checked",true)

  },
  methods:{
    handleSettingsSave()
    {
        const rememberSettings= window.$("[name=rememberMeSettings]:checked").val();
        const defaultViewSettings=window.$("[name=homePageView]:checked").val();
        if(rememberSettings=="yes")
        {
            sessionStorage.setItem("isRememberMeChecked",true);
        }
         sessionStorage.setItem("defaultPage",defaultViewSettings);
         let notObj={
        visibility:true,
        type:"alert-success",
        content:"You have successfully Updated Your Settings for this Session logout and login again to see the changes",
        title:"Success!.."
     }
      this.$store.commit("setNotificationHeader", notObj);
    }
  },
};
</script>

<style>
#settings-content {
  margin-top: 70px;
  text-align: left;
}
</style>
