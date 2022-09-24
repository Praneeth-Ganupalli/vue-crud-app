<template>
  <div class="container dashboard-wrapper text-left">
    <div class="row">
        <div class="col p-0">
            <BreadCrumb />
        </div>
    </div>
    <div class="row">
      <div
        class="col-md-4 bg-primary p-3 font-weight-bold text-white info-tab-item"
         @click="handleTabSelection(allUsersInfo)"
      >
        <div class="d-flex pt-2">
          <div>Total Users</div>
          <div class="ml-auto">{{allUserList.length}}</div>
        </div>
      </div>
      <div
        class="col-md-4 bg-success p-3 font-weight-bold text-white info-tab-item"
        @click="handleTabSelection(activeUsersInfo)"
      >
        <div class="d-flex pt-2">
          <div>Active Users</div>
          <div class="ml-auto">{{activeUserList.length}}</div>
        </div>
      </div>
      <div
        class="col-md-4 bg-danger p-3 font-weight-bold text-white info-tab-item"
         @click="handleTabSelection(InactiveUsersInfo)"
      >
        <div class="d-flex pt-2">
          <div>In-Active Users</div>
          <div class="ml-auto">{{inActiveUserList.length}}</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col p-3 text-white text-center" :class="currentDisplayInfo.activeClass">
        <h5>Displaying {{ currentDisplayInfo.headerText }} List</h5>
      </div>
    </div>
    <div class="row">
      <div class="col p-0">
        <template v-if="this.allUserList.length">
            <UserDynamicList :userShowList="this.userDisplayList" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import UserDynamicList from "./UserDynamicList.vue";
import BreadCrumb from "./BreadCrumb.vue"
import { mapGetters } from "vuex";
export default {
  name: "AppDashBoard",
  components: {
    UserDynamicList,
    BreadCrumb
  },
  data() {
    return {
      currentDisplayInfo: {},
      //userDisplayList:[],
      allUsersInfo: {
        activeFilter: "All",
        headerText: "All Users",
        activeClass: "bg-primary",
        userListProp:"allUserList",
      },
      activeUsersInfo: {
        activeFilter: "Active",
        headerText: "Active Users",
        activeClass: "bg-success",
        userListProp:"activeUserList"
      },
      InactiveUsersInfo: {
        activeFilter: "Inactive",
        headerText: "InActive Users",
        activeClass: "bg-danger",
        userListProp:"inActiveUserList"
      },
    };
  },
  computed:{
     ...mapGetters({
      allUserList: "userlist/listOfUsers",
      activeUserList:"userlist/activeUsers",
      inActiveUserList:"userlist/inActiveUsers"
    }),
    userDisplayList()
    {
       return this[this.currentDisplayInfo.userListProp]; 
    }
  },
  mounted() {
    this.currentDisplayInfo = this.allUsersInfo;
    this.$store.commit("setCurrentPageBreadCrumb","DashBoard");
  },
  methods:{
    handleTabSelection(filterInfo)
    {
        if(this.currentDisplayInfo.activeFilter!==filterInfo.activeFilter)
        {
            this.currentDisplayInfo=filterInfo;
        }
    }
  }
};
</script>

<style lang="scss">
.dashboard-wrapper {
  padding-top: 60px;
  .info-tab-item {
    cursor: pointer;
  }
}
</style>