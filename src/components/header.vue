<template>
  <header id="main-header" class="">
    <nav class="navbar navbar-expand-sm bg-dark fixed-top navbar-dark">
      <div class="container ml-0">
        <a href="/home" class="navbar-brand">
          User Managment System <i class="fas fa-users"></i>
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collaspe navbar-collapse" id="navCollapse">
        <ul class="navbar-nav ml-5">
          <li class="nav-item">
            <a href="/dashboard" class="nav-link" :class='getActiveStatus("dashBoard")'>DashBoard</a>
          </li>
          <li class="nav-item">
            <a href="/userlist" class="nav-link" :class='getActiveStatus("users")'>Users</a>
          </li>
          <li class="nav-item dropdown">
            <a
              href="#"
              class="nav-link"
              data-toggle="dropdown"
              data-target="user-options"
            >
              <i class="fas fa-user"></i>
            </a>
            <div class="dropdown-menu" id="user-options">
              <a class="dropdown-item" href="/settings">
                <i class="fas fa-cog"></i>
                Settings
              </a>
              <a class="dropdown-item" href="#" @click="logoutUser()">
                <i class="fas fa-user-times pr-2"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar d-none navbar-expand-sm navbar-dark bg-dark p-3">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          User Managment System <i class="fas fa-users"></i
        ></a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">DashBoard</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Users</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="fas fa-user"></i>
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-3 dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                <i class="fas fa-user"></i> Welcome Praneeth
              </a>
              <div class="dropdown-menu">
                <a href="profile.html" class="dropdown-item">
                  <i class="fas fa-user-circle"></i> Profile
                </a>
                <a href="settings.html" class="dropdown-item">
                  <i class="fas fa-cog"></i> Settings
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a href="login.html" class="nav-link">
                <i class="fas fa-user-times"></i> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  </header>
</template>
<script>

export default {
  name: "HeaderTop",
  methods: {
    logoutUser() {
      sessionStorage.removeItem("isRememberMeChecked");
      location.href = "/";
    },
    getActiveStatus(name)
    {
      if((this.$store.state.currentPage).toLowerCase()==name.toLowerCase())
      {
        return "active";
      }
    }
  },
};
</script>