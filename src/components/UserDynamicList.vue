<template>
  <section class="user-info-section text-left table-responsive">
    <table class="table table-bordered table-condensed">
      <tr>
        <th v-for="col in tableColumns" :key="col">{{ col }}</th>
      </tr>
      <template v-if="userShowList && userShowList.length > 0">
        <tr v-for="user in userShowList" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.status }}</td>
        </tr>
      </template>
    </table>
    <template v-if="userShowList.length == 0">
      <section class="no-results-area">
        <h1>No items</h1>
        <img src="@/assets/notallowed.svg" alt="No" class="small-icon" />
      </section>
    </template>
  </section>
</template>

<script>
export default {
  name: "UserDynamicList",
  props: {
    userShowList:{
        type:Array,
        default(){
            return [];
        }
    }
  },
  data() {
    return {
      tableColumns: [
        "Name",
        "Surname",
        "Email",
        "Phone Number",
        "Account Status",
      ],
    };
  },
};
</script>

<style></style>