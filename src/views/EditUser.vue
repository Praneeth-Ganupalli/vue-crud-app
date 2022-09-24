<template>
<UserDetails :user="currentUser" @updatedUser="handleUpdatedUser"/>
</template>
<script>
import  UserDetails from "@/components/UserDetails.vue";
import { mapGetters } from "vuex";
export default {
  name: 'EditUser',
  components: {
    UserDetails
  },
  data() {
    return {
     currentUser:{},
    };
  },
  computed: {
    ...mapGetters({
      userInformation: "userlist/listOfUsers",
    }),
  },
  created()
  {
    //this.$store.dispatch("userlist/getUserList");
      let userId=this.$route.params.id;
      let totalUsersData=this.userInformation;
      let filteredUser=totalUsersData.filter(user=>{
        return user.id==userId
      });
      console.log(totalUsersData,"check")
      this.currentUser=filteredUser[0];

  },
  methods:{
    handleUpdatedUser(newUser,oldUser)
    {
        this.$store.commit("userlist/removeUser",oldUser.id);
        newUser.id=oldUser.id
        this.currentUser=newUser;
        this.$store.commit("userlist/addUser",newUser);
        let notObj={
        visibility:true,
        type:"alert-success",
        content:"You have Successfully updated all your changes navigate back to see updated status in the User list",
        title:"Success !.."
     }
      this.$store.commit("setNotificationHeader", notObj);
    }
  }
}
</script>
<style>

</style>