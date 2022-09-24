<template>
  <nav aria-label="breadcrumb" id="breadcrumb-wrapper">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/home">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">
                    {{this.$store.state.currentPage}}
                    </li>
                  </ol>
                </nav>
</template>

<script>
export default {
name:"BreadCrumb",
}
</script>

<style>

</style>