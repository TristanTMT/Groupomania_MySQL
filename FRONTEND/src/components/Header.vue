<template>
  <nav class="navbar navbar-expand-md navbar-dark mb-4">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        ><img src="../../public/assets/2.png"
      /></router-link>
      <div>
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <div>
              <router-link to="/profile" class="nav-link"
                >Mon compte</router-link
              >
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link" id="disconnect-btn" @click="disconnect()">
              Se déconnecter
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",

  methods: {
    disconnect() {
      localStorage.removeItem("user");
      this.$router.push({ name: "Signup" });
    },
  },
};
</script>

<style scoped>
.navbar {
  background: #091f43;
  height: 100px;
}

.nav-item div {
  color: white !important;
  cursor: pointer;
}

.nav-item .nav-link {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
}

img {
  width: 150px;
  height: auto;
}

</style>
