<template>
  <div class="dashboard sidebar-wrapper">
    <section class="navbar-container">
        <header><h3>Vue JS Practical</h3></header>
        <ul>
            <li><a href="#" class="nav-child">DashBoard</a></li>
            <li><a href="#" class="nav-child">Users</a></li>
        </ul>
    </section>
    </div>
</template>

<script>
export default {
  name: 'SideNavBar',
  props: {
    msg: String
  }
}
</script>


<style>
.sidebar-wrapper
{
    margin-top:49px;
}
.dashboard
{
    position: fixed;
    background-color: #19222a;
    font-weight: 400;
    font-size: 1.2em;
    padding-bottom: 6em;
    z-index: 9;
    overflow: hidden;
    width: 20%;
    height: 100vw;
    top: 0;
    color: #ffffff;
}
header h3
{
    padding: 18px;
    margin: 0;
    background-color: #080D11;
}
.navbar-container ul {
    list-style: none;
    display: block;
    padding: 0;
    margin: 0;
}
.navbar-container ul li {
    margin-left: 0;
    padding-left: 0;
    display: inline-block;
    width: 100%;
}
.navbar-container ul li:hover
{
    background-color:green;
}
.navbar-container ul li a {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.75em;
    padding: 1.05em 1em;
    position: relative;
    display: block;
    text-decoration: none;
}
</style>
