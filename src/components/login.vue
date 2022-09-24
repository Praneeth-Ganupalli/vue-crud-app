<template>
  <div class="container" id="loginwrapper">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
              <h3> Admin Login</h3>
            <form @submit="handleLoginForm($event)">
              <div class="form-group">
                <label for="usernamr">User Name</label>
                <input
                  type="text"
                  placeholder="Enter your User Name"
                  class="form-control"
                  v-model="username"
                  id="username"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  placeholder="*****"
                  class="form-control"
                  v-model="password"
                  id="password"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="isRememberedUser"
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Remember Me
                </label>
              </div>
              <input
                type="submit"
                class="btn btn-primary btn-block mt-4"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formHandler} from "@/helpers/utils.js"
export default {
  name: "LoginComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      username: "",
      password: "",
      isRememberedUser: false,
    };
  },
  methods: {
    handleLoginForm(e) {
      e.preventDefault();
      let validationRules = [
        {
          dataProp: "username",
          expectedValue: "admin",
          requiredMessage: "Please Enter the User Name",
          incorrectMessage: "Invalid User Name",
          dataId: "username",
          isExpectedValueValidation:true
        },
        {
          dataProp: "password",
          expectedValue: "nimda",
          requiredMessage: "Please Enter the Password",
          incorrectMessage: "Invalid Password",
          dataId: "password",
          isExpectedValueValidation:true
        },
      ];
      let isValidForm = formHandler(validationRules);
      if(isValidForm)
      {
        if(this.isRememberedUser)
        {
          sessionStorage.setItem("isRememberMeChecked",this.isRememberedUser);
        }
        this.$emit("loginSuccess");
      }
    },
  },
};
</script>
<style lang="scss">
#loginwrapper
{
  text-align: left;
  padding-top: 100px;
}
</style>
