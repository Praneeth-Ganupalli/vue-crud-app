<template>
  <main>
    <section class="visible-content">
      <HeaderTop />
      <!-- MAin Content staart-->
      <section id="main-content">
        <div class="container">
          <div class="row">
            <div class="col">
              <BreadCrumb />
              <section class="userList">
                <section v-show="notEditMode">
                  <UserList @editAction="handleEditButton" ref="userListInfo" />
                </section>
                <section v-if="!notEditMode">
                  <UserDetails
                    :user="selectedUser"
                    @updatedUser="handleUpdateAction"
                  />
                </section>
              </section>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
//import SideNavBar from "./sideBarTest.vue";
import UserList from "./UserList.vue";
import UserDetails from "./UserDetails.vue";
import HeaderTop from "./header.vue";
import BreadCrumb from "./BreadCrumb.vue"
export default {
  name: "UserDashBoard",
  components: {
    //SideNavBar,
    UserList,
    UserDetails,
    HeaderTop,
    BreadCrumb
  },
  props: {
    msg: String,
  },
  data() {
    return {
      selectedUser: {},
      notEditMode: true,
      editedUser: {},
    };
  },
  methods: {
    handleEditButton(user) {
      this.notEditMode = false;
      this.selectedUser = user;
    },
    handleUpdateAction(user) {
      this.editedUser = user;
      this.$refs.userListInfo.updateUserList(user);
      this.$refs.userListInfo.removeUser(this.selectedUser.id);
      this.notEditMode = true;
    },
  },
};
</script>

<style lang="scss">
#breadcrumb-wrapper
{
  .breadcrumb{
    background-color: #fff;
    font-weight: bold;
    color: #000080 !important;
  }
}
#main-content
{
  margin-top:70px;
}
// .side-bar {
//   flex-basis: 20%;
//   max-width: 20%;
// }
.top-header-info img {
  height: 30px;
  width: 30px;
}
.top-header-info .profile-logo {
  position: absolute;
  right: 35px;
}
.top-header-info {
  width: 25%;
  margin-top: 17px;
}
.top-header-info .divider {
  width: 100vw;
}
.dashboard-info-class {
  display: inline-flex;
  gap: 25px;
  align-items: center;
}
.breadcrumb-content {
  width: 16%;
  margin-top: 15px;
}
.breadcrumb-content hr {
  width: 100vw;
}
.breadcrumb-path :first-child {
  color: #000080;
  font-weight: bold;
  padding-right: 0.3rem;
}
.breadcrumb-path {
  padding-bottom: 0.7em;
}
.breadcrumb-path :first-child::after {
  content: "/";
  padding: 0.2em;
}
.prev-path {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: absolute;
  right: 17px;
  top: 73px;
}
.prev-path img {
  height: 30px;
  width: 30px;
}
.userList,
.userDetail {
  background-color: #f4f4f4;
  height: auto;
  position: relative;
  bottom: 8px;
}
.userList{
  background-color: unset;
}
.opac-less {
  opacity: 0.5;
}
</style>