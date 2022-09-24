<template>
  <section class="user-edit-area bg-light">
    <div class="container pt-5 user-edit-wrapper">
      <div class="row">
        <div class="col-md-6">
          <div class="card bg-info text-white">
            <div class="card-header">
              <h3>Welcome {{ user.name }}</h3>
              <p>
                Please Check The Details Below You Can Edit and Save your
                Changes
              </p>
            </div>
            <div class="card-body">
              <form id="edit-form" @submit="handleSubmit($event)">
                <div class="form-group">
                  <label for="fname">First name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    class="form-control"
                    v-model="name"
                    @change="getEditStatus()"
                  />
                   <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="lname">Last name:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lname"
                    name="lname"
                    v-model="lname"
                    @change="getEditStatus()"
                  />
                  <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="phone">Phone Number:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="phone"
                    name="phone"
                    v-model="phoneNumber"
                    @change="getEditStatus()"
                  />
                  <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input
                    type="text"
                    class="form-control"
                    id="email"
                    name="email"
                    v-model="email"
                    @change="getEditStatus()"
                  />
                  <div class="invalid-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="status">Account Status:</label>
                  <select
                    v-model="status"
                    @change="getEditStatus()"
                    class="form-control"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
                <input
                  type="submit"
                  class="btn btn-lg"
                  :class="userEdited ? 'btn-success' : 'disable-button'"
                  value="Save"
                />
                <button class="btn btn-secondary btn-lg ml-3">Cancel</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
            <div class="card mb-3">
            <div class="card-header bg-primary text-white text-left">
              <h4 class="pt-2">Navigate Back To</h4>
            </div>
            <div class="card-body">
              <div class="container">
                <div class="row">
                  <div class="col-md-4">
                    <button class="btn btn-outline-warning btn-block" @click='routeClickHandler("dashboard")'>Dash Board</button>
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-outline-success btn-block" @click='routeClickHandler("userlist")'>User List</button>
                  </div>
                  <div class="col-md-4">
                    <button class="btn btn-outline-danger btn-block" @click='routeClickHandler("home")'>Home</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card bg-dark text-white ">
            <div class="card-body">
              <img src="@/assets/user-avatar-animated.png" alt="" />
              <h3>{{ user.name }}</h3>
              <div class="mt-3">
                <div class="d-flex justify-content-center text-primary">
                  <div>{{ userProfession }} at</div>
                  <div class="pl-2">{{ userOrganization }}</div>
                </div>
              </div>
              <div class="mt-3">
                <p class="lead text-justify">
                  I am Professional {{userProfession}} at {{userOrganization}} working from past 5 years.I am a Proactive team member and a person with good leadership skills
                  i will always try to get better at myself both professionally and personally. only constant goal in life is to accept the people how they are and accept yourself on how you are irrespective of any difference
                </p>
                <div class="d-flex icons-wrapper">
                <div class="facebook-wrapper">
                  <a href="https://www.facebook.com" class="text-white">
                    <i class="fab fa-facebook"> </i>
                  </a>
                </div>
                <div class="instagram-wrapper">
                  <a href="https://www.instagram.com" class="text-white">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div class="linked-in-wrapper">
                  <a href="https://www.linkedin.com" class="text-white">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {duplicateUser, formHandler} from "@/helpers/utils.js"
export default {
  name: "UserDetails",
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: "",
          email: "",
          lname: "",
          phone: "",
          status: "",
          id: "",
        };
      },
    },
  },
  data() {
    return {
      name: this.user.name,
      email: this.user.email,
      lname: this.user.username,
      phoneNumber: this.user.phone,
      status: this.user.status,
      userEdited: false,
      personImage: this.$store.state.userlist.personRandImage,
      randomProfessions: [
        "Programmer",
        "Analyst",
        "Data Base Maintainer",
        "Business Analyst",
        "Marketing Admin",
      ],
      randomCompanies: [
        "Corlys techs",
        "Otto Solutions",
        "Cipro Techs",
        "Genuine Raw Products",
        "Ebitech Solutions",
      ],
      userProfession: "Programmer",
      userOrganization: "Otto Solutions",
    };
  },
  mounted() {
    let randomnumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    this.userProfession = this.randomProfessions[randomnumber];
    this.userOrganization = this.randomCompanies[randomnumber];
  },
  methods: {
    getEditStatus() {
      let currData = {
        name: this.name,
        email: this.email,
        lname: this.lname,
        phoneNumber: this.phoneNumber,
        status: this.status,
      };
      let propData = {
        name: this.user.name,
        email: this.user.email,
        lname: this.user.username,
        phoneNumber: this.user.phone,
        status: this.user.status,
      };
      this.userEdited = JSON.stringify(currData) !== JSON.stringify(propData);
    },
    handleSubmit(e) {
      e.preventDefault();
      let currData = {
        name: this.name,
        email: this.email,
        username: this.lname,
        phone: this.phoneNumber,
        status: this.status,
      };
      let validationSet = [
        {
          dataProp: "name",
          requiredMessage: "Please Provide First Name",
          dataId: "fname",
        },
        {
          dataProp: "username",
          requiredMessage: "Please Provide Last Name",
          dataId: "lname",
        },
        {
          dataProp: "phoneNumber",
          requiredMessage: "Please Provide Contact Number",
          dataId: "phone",
        },
        {
          dataProp: "email",
          requiredMessage: "Please Provide Email",
          dataId: "email",
        },
      ];
      let isValidForm=formHandler(validationSet);
      let isEmailChanged=(this.user.email).toLowerCase() != (this.email).toLowerCase();
      if(isEmailChanged && isValidForm)
      {
        let emailObject={
          dataProp: "email",
          errorMessage: "Email Already Exists",
          dataId: "email",
          email: this.email
        }
        isValidForm =duplicateUser(emailObject);
      }
      if(isValidForm)
      {
        this.$emit("updatedUser", currData, this.user);
        this.userEdited=false;
      }
      
    },
    getRandomImage() {
      let that = this;
      window.$.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function (data) {
          that.personImage = data.results[0].picture.medium;
        },
      });
    },
    routeClickHandler(route)
    {
        this.$router.push({
            path:"/"+route
        })
    }
  },
};
</script>
<style>
.user-edit-wrapper {
  margin-top: 30px;
}
.form-container label {
  display: inline-block;
  padding-bottom: 10px;
  padding-top: 10px;
  font-weight: bold;
}
.blue-button {
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 25px;
  color: #fff;
}
.activate {
  background-color: #001489;
}
.disable-button {
  background-color: #ccc;
  cursor: not-allowed;
  color: black;
  border: 2px solid #ccc;
}
.no-visible {
  visibility: hidden;
}
#edit-form {
  text-align: initial;
}
.icons-wrapper {
  justify-content: space-around;
}
/* @media only screen and (min-width: 998px) {
  .user-edit-area {
    height: 750px;
  }
} */
</style>