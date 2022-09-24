<template>
  <div class="userinfo-parent-container">
    <div class="container">
      <div class="row">
        <div class="col-md-3 ml-auto mb-2">
          <button
            class="btn btn-primary ml-auto btn-block"
            data-toggle="modal"
            data-target="#userModalWrapper"
            @click="modalActivate()"
          >
            + Add New User
          </button>
        </div>
      </div>
    </div>
    <section class="user-top-header-section">
      <div class="bg-light p-2 text-dark d-flex align-items-center">
        <div class="font-weight-bold user-header-label">List of Users</div>

        <div class="container">
          <div class="row">
            <div class="col-md-4 ml-auto">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here.."
                  v-model="searchKey"
                />
                <div class="input-group-append">
                  <button class="btn btn-secondary">Search</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="user-info-section text-left table-responsive">
      <table class="table table-bordered table-condensed">
        <tr>
          <th v-for="col in tableColumns" :key="col">{{ col }}</th>
        </tr>
        <template v-if="userDisplayInformation && userDisplayInformation.length > 0">
          <tr v-for="user in userDisplayInformation" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>{{ user.status }}</td>
            <td>
              <i
                class="fas fa-trash action-icon"
                @click="deleteUser(user)"
                alt="delete"
                data-toggle="modal"
                data-target="#userModalWrapper"
              ></i>
              <i class="fa pl-3 action-icon" @click="editUser(user)" alt="Edit">
                &#xf4ff;</i
              >
            </td>
          </tr>
        </template>
      </table>
      <template v-if="userDisplayInformation.length == 0">
        <section class="no-results-area">
          <h1>No Results Found</h1>
          <img src="@/assets/notallowed.svg" alt="No" class="small-icon" />
        </section>
      </template>
    </section>
    <template v-if="isModalOpen">
      <UserModal
        @close="modalClose"
        @userAdded="updateUserList"
        :role="role"
        :user="curruser"
        @userDeleted="removeUser"
      />
    </template>
  </div>
</template>

<script>
import axios from "axios";
import UserModal from "./userModal.vue";
import { mapGetters } from "vuex";
export default {
  name: "UserList",
  components: {
    UserModal,
  },
  data() {
    return {
      userDetails: [],
      tableColumns: [
        "Name",
        "Surname",
        "Email",
        "Phone Number",
        "Activate",
        "Action",
      ],
      isModalOpen: false,
      role: "",
      curruser: {},
      searchKey: "",
    };
  },
  mounted() {
    if (!this.userInformation || this.userInformation.length == 0) {
      this.$store.dispatch("userlist/getUserList");
    }
    this.$store.commit("setCurrentPageBreadCrumb", "Users");
  },
  computed: {
    ...mapGetters({
      // map `this.userInformation` to `this.$store.getters.listOfUsers`
      userInformation: "userlist/listOfUsers",
    }),
    userDisplayInformation()
    {
      if(this.searchKey)
      {
        return this.searchFunction(this.userInformation,this.searchKey)
      }
      else{
        return this.userInformation;
      }
    }
  },
  methods: {
    getUserList() {
      axios.get("/users.json").then((response) => {
        this.userDetails = response.data;
      });
      this.$store.dispatch("userlist/getUserList");

      console.log("storeedata", this.userStorage);
    },
    modalActivate() {
      this.isModalOpen = true;
      this.role = "add";
    },
    deleteUser(user) {
      this.isModalOpen = true;
      this.role = "delete";
      this.curruser = user;
    },
    modalClose() {
      this.isModalOpen = false;
    },
    updateUserList(user) {
      this.$store.commit("userlist/addUser", user);
    },
    removeUser(userId) {
      this.$store.commit("userlist/removeUser", userId);
      console.log("removed");
    },
    editUser(user) {
      this.$store.dispatch("userlist/getPersonImage");
      this.$router.push({
        path: "/EditUser/" + user.id,
      });
      //this.$emit("editAction",user);
    },
    searchFunction(array, keyword) {
      const regExp = new RegExp(keyword, "gi");
      const check = (obj) => {
        if (obj !== null && typeof obj === "object") {
          return Object.values(obj).some(check);
        }
        if (Array.isArray(obj)) {
          return obj.some(check);
        }
        return (
          (typeof obj === "string" || typeof obj === "number") &&
          regExp.test(obj)
        );
      };
      return array.filter(check);
    },
  },
};
</script>

<style>
.userinfo-parent-container {
  width: 75vw;
  padding-left: 17px;
}
.action-icon {
  cursor: pointer;
}
.blue-action-btn {
  background: blue;
  color: white;
  border: none;
  padding: 5px;
  margin-left: auto;
}
.user-top-info-child-wrapper {
  display: flex;
  align-items: center;
}
.user-top-header-section {
  border: 1px solid #ddd;
}
/* table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}*/

tr:nth-child(even) {
  background-color: #dddddd;
}
.small-icon {
  cursor: pointer;
  height: 20px;
  width: 20px;
  padding-right: 10px;
}
.no-results-area {
  display: inline-flex;
  gap: 20px;
  align-items: center;
  font-size: 24px;
  width: 100%;
  background-color: #f4f4f4;
  justify-content: center;
}
.user-header-label {
  white-space: nowrap;
}
</style>
