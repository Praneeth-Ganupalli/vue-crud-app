<template>
  <div class="modal show fade" id="userModalWrapper" style="display: block">
    <div class="modal-dialog modal-dialog-centered">
      <template v-if="role == 'add'">
        <div class="modal-content">
          <div class="modal-header bg-primary text-white">
            <h3 class="modal-title">Add User</h3>
            <button class="close" data-dismiss="modal">
              <span class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit="validateForm($event)">
              <div class="form-group">
                <label for="fname">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="fname"
                  placeholder="First Name"
                  id="fname"
                  v-model="name"
                  @input="checkInputErrors('fname')"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="lname">Lastname</label>
                <input
                  type="text"
                  class="form-control"
                  name="lname"
                  placeholder="Last Name"
                  id="lname"
                  v-model="username"
                  @input="checkInputErrors('lname')"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="phno">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  name="phno"
                  id="phno"
                  placeholder="Phone Number"
                  v-model="phoneNumber"
                  @input="checkInputErrors('phno')"
                />
                <div class="invalid-feedback"></div>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="user-email"
                  name="email"
                  placeholder="Email"
                  v-model="email"
                  @input="checkInputErrors('user-email')"
                />
                <div class="invalid-feedback"></div>
              </div>
            </form>
            <!-- <input type="submit" class="form-control btn btn-primary btn-block" value="Submit"> -->
          </div>
          <div class="modal-footer">
            <button
              @click="validateForm($event)"
              class="btn btn-primary text-white"
              data-dismiss="close"
            >
              Submit
            </button>
            <button class="btn btn-outline-secondary" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </template>
      <template v-if="role == 'delete'">
        <div class="modal-content">
          <div class="modal-header bg-danger text-white">
            <h3 class="modal-title">Delete User</h3>
            <button class="close" data-dismiss="modal" @click="closePopup()">
              <span class="text-white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="lead">
              You are about to Delete Record of the User Name
              <b>{{ user.name }}</b>
            </p>
          </div>
          <div class="modal-footer">
            <button
              @click="deleteUser()"
              class="btn btn-danger text-white"
              data-dismiss="close"
            >
              Delete
            </button>
            <button class="btn btn-outline-secondary" @click="closePopup()">
              Close
            </button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import {formHandler,duplicateUser} from "@/helpers/utils.js"
export default {
  name: "UserModal",
  props: {
    modalFlag: Boolean,
    role: String,
    user: Object,
  },
  data() {
    return {
      name: "",
      username: "",
      phoneNumber: "",
      email: "",
    };
  },
  methods: {
    closePopup() {
      this.$emit("close");
      window.$(".close").click();
    },
    checkInputErrors(elementId) {
      let validationSet = [
        {
          dataProp: "name",
          errorMessage: "Please Provide First Name",
          dataId: "fname",
        },
        {
          dataProp: "username",
          errorMessage: "Please Provide Last Name",
          dataId: "lname",
        },
        {
          dataProp: "phoneNumber",
          errorMessage: "Please Provide Contact Number",
          dataId: "phno",
        },
        {
          dataProp: "email",
          errorMessage: "Please Provide Email",
          dataId: "user-email",
        },
      ];
      validationSet.forEach((ele) => {
        if(ele.dataId==elementId)
        {
            if (!this[ele.dataProp]) {
          window
            .$("#" + ele.dataId)
            .addClass("is-invalid")
            .next()
            .text(ele.errorMessage);
        } else {
          window
            .$("#" + ele.dataId)
            .removeClass("is-invalid")
            .next()
            .text("");
        }
        }
      });
    },
    validateForm(e) {
      e.preventDefault();
      let isValid = false;
      let validationSet = [
        {
          dataProp: "name",
          errorMessage: "Please Provide First Name",
          dataId: "fname",
        },
        {
          dataProp: "username",
          errorMessage: "Please Provide Last Name",
          dataId: "lname",
        },
        {
          dataProp: "phoneNumber",
          errorMessage: "Please Provide Contact Number",
          dataId: "phno",
        },
        {
          dataProp: "email",
          errorMessage: "Please Provide Email",
          dataId: "user-email",
        },
      ];
      let emailObject={
          dataProp: "email",
          errorMessage: "Email Already Exists",
          dataId: "user-email",
          email: this.email
        }
      isValid=formHandler(validationSet);
      if(isValid)
      {
         isValid=duplicateUser(emailObject);
      }
      if (isValid) {
        let newUser = {
          username: this.username,
          name: this.name,
          phone: this.phoneNumber,
          email: this.email,
          status: "Inactive",
          id:this.$store.state.userlist.userList.length+1
        };
        this.$emit("userAdded", newUser);
        this.$emit("close");
        this.destructFormData();
        window.$(".close").click();
        let notObj={
        visibility:true,
        type:"alert-success",
        content:"You have successfully added " + newUser.name + " to the List",
        title:"Success!.."
     }
      this.$store.commit("setNotificationHeader", notObj);
      }
    },
    destructFormData() {
      this.name = "";
      this.username = "";
      this.phoneNumber = "";
      this.email = "";
      let validationSet = [
        {
          dataProp: "name",
          errorMessage: "Please Provide First Name",
          dataId: "fname",
        },
        {
          dataProp: "username",
          errorMessage: "Please Provide Last Name",
          dataId: "lname",
        },
        {
          dataProp: "phoneNumber",
          errorMessage: "Please Provide Contact Number",
          dataId: "phno",
        },
        {
          dataProp: "email",
          errorMessage: "Please Provide Email",
          dataId: "user-email",
        },
      ];
      validationSet.forEach((ele) => {
        window
          .$("#" + ele.dataId)
          .removeClass("is-invalid")
          .next()
          .text("");
      });
    },
    deleteUser() {
      this.$emit("userDeleted", this.user.id);
      this.$emit("close");
      window.$(".close").click();
      let notObj={
        visibility:true,
        type:"alert-warning",
        content:"You have Deleted " + this.user.name + " from  the List",
        title:"Hmm!.."
     }
      this.$store.commit("setNotificationHeader", notObj);
    },
  },
};
</script>
<style>
#userModalWrapper {
  text-align: initial;
}
</style>