<template>
  <div class="modal show fade" id="userListModal" style="display: block">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content" style="height: 400px">
        <div class="modal-header bg-primary text-white">
          <h3 class="modal-title">Select User</h3>
          <button class="close" data-dismiss="modal">
            <span class="text-white">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label class="d-block">Choose User from Drop Down</label>
              <select id="users" style="width: 300px" class="form-control">
                <option selected="true" disabled="disabled">Select</option>
                <template v-if="userInformation.length > 0">
                  <option
                    v-for="user in userInformation"
                    :key="user.id"
                    :data-id="user.id"
                  >
                    {{ user.name }}
                  </option>
                </template>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary text-white" data-dismiss="close" @click="viewSelectedUserDetails()">
            View
          </button>
          <button class="btn btn-outline-secondary" data-dismiss="modal">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserDropDownList",
  computed: {
    ...mapGetters({
      // map `this.userInformation` to `this.$store.getters.listOfUsers`
      userInformation: "userlist/listOfUsers",
    }),
  },
  methods: {
    viewSelectedUserDetails() {
    const selectedUser=window.$("#selectedUser").text();
    window.$(".close").click();
      this.$router.push({
        path: "/EditUser/" + selectedUser,
      });
    },
  },
};
</script>

<style lang="scss">
#userListModal {
  text-align: initial;
}
.select2-container--default .select2-results > .select2-results__options {
  max-height: 150px !important;
  overflow-y: auto;
}
</style>
