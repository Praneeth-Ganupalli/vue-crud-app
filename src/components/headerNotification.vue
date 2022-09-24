<template>
  <div class="notifcation-wrapper">
    <div
      class="alert  alert-dismissible fade show"
      v-if="globalNotification.visibility" :class="globalNotification.type"
    >
      <strong>{{globalNotification.title}}</strong>{{globalNotification.content}}
      <button type="button" class="btn btn-close" @click="closeNotification()">
        &times;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNotification",
  computed: {
    globalNotification() {
      return this.$store.state.notficationModal;
    },
  },
  methods: {
    closeNotification() {
     let notObj={
        visibility:false,
     }
      this.$store.commit("setNotificationHeader", notObj);
    },
  },
};
</script>

<style>
.notifcation-wrapper {
  margin-top: 53px;
}
</style>
