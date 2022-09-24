<template>
  <div class="main-app-info-wrapper">
    <div class="container appinfo-wrapper">
      <div class="row justify-content-center">
        <div class="col-md-4 mb-3">
          <div class="card bg-warning">
            <div class="card-header text-white pt-4">
              <h4 class="dashboard-header">
                <img src="images/dashboard.png" height="50" alt="" />
              </h4>
            </div>
            <div class="card-body text-justify text-white">
              <p>
                This is Dashboard Option Which is readonly page which displays
                the List of users based on the account status.it has 3 tabs
              </p>
            </div>
            <div class="card-footer">
              <div class="text-right">
                <button
                  class="btn btn-outline-light"
                  @click="routeClickHandler('dashboard')"
                >
                  View Dashboard Page
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-info">
            <div class="card-header text-white">
              <h4 class="display-4">
                <img src="images/man.png" height="50" alt="" />
              </h4>
            </div>
            <div class="card-body text-justify text-white">
              <p>
                This is User List page Which displays All the available users
                and can perform Create,Read,Update,Delete and provides routing
                to view single user details
              </p>
            </div>
            <div class="card-footer">
              <div class="text-right">
                <button
                  class="btn btn-outline-light"
                  @click="routeClickHandler('userlist')"
                >
                  View Users Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-3">
        <div class="col-md-4">
          <div class="card bg-primary mb-3">
            <div class="card-header text-white">
              <h4 class="display-4">
                <i class="fas fa-user"></i>
              </h4>
            </div>
            <div class="card-body text-justify text-white">
              <p>
                This Opens A New Modal with Dropdown which contains User list
                and You can select any user and it will redirect you to the user
                details page
              </p>
            </div>
            <div class="card-footer">
              <div class="text-right">
                <button
                  class="btn btn-outline-light"
                  @click="openUserModal()"
                  data-toggle="modal"
                  data-target="#userListModal"
                >
                  View Users
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card bg-secondary">
            <div class="card-header text-white">
              <h4 class="display-4">
                <i class="fas fa-cog"></i>
              </h4>
            </div>
            <div class="card-body text-justify text-white">
              <p>
                This is Settings Page Can provide the options to edit few
                setting related to the application Note: Settings will apply to
                current Session Only
              </p>
            </div>
            <div class="card-footer">
              <div class="text-right">
                <button
                  class="btn btn-outline-light"
                  @click="routeClickHandler('settings')"
                >
                  View Settings Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div id="selectedUser" class="d-none"></div>
      <UserDropDownList v-show="isUserDropDownOpen" />
  </div>
</template>

<script>
import UserDropDownList from "./UserDropDownList.vue";
export default {
  name: "AppInfo",
  components: {
    UserDropDownList,
  },
  data() {
    return {
      isUserDropDownOpen: false,
    }
  },
  mounted()
  {
    window.$(document).ready(function() {
    window.$('#users').select2();
    window.$('#users').on('select2:select', function (e) {
    const data = e.params.data;
    const selectedUserId= data.element.getAttribute('data-id');
    window.$("#selectedUser").text(selectedUserId);
});
});
  },
  methods: {
    routeClickHandler(route) {
      this.$router.push({
        path: "/" + route,
      });
    },
    openUserModal()
    {
      this.isUserDropDownOpen=true;
    }
  },
};
</script>

<style lang="scss">
.appinfo-wrapper {
  margin-top: 80px;
  .dashboard-header {
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.2;
  }
}
</style>
