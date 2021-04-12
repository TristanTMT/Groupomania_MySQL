<template>
  <div class="wrapper">
    <!-- <div class="img">
            <img src="" alt="Groupomania logo">
        </div> -->
    <form @submit.prevent="login()">
      <nav>
        <router-link to="/" class="active">Se connecter</router-link> |
        <router-link to="/signup" class="inactive">S'inscrire</router-link>
      </nav>

      <label for="login-email">E-mail :</label>
      <input
        id="login-email"
        type="text"
        placeholder="E-mail"
        v-model="email"
        required
      />

      <label for="login-password">Mot de passe :</label>
      <input
        id="login-password"
        type="password"
        placeholder="Mot de passe"
        v-model="password"
        required
      />

      <div class="error-message">{{ message }}</div>

      <button id="login-btn" type="submit">Connexion</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",

  data() {
    return {
      message: "",
      email: "",
      password: "",
    };
  },

  methods: {
    login() {
      axios
        .post(
          `${this.$apiUrl}/auth/login`,
          {
            email: this.email,
            password: this.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          location.reload();
        //   this.$router.push("Profile");
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.message = "Utilisateur inconnu.";
          }
          if (error.response.status === 401) {
            this.message = "Email ou mot de passe invalide.";
          }
          if (error.response.status === 500) {
            this.message = "Erreur serveur.";
          }
        });
    },
  },
};
</script>

<style scoped>
.wrapper {
  max-width: 500px;
  margin: 90px auto;
}

.inactive {
  color: white;
}

img {
  width: 100%;
  background: rgba(30, 130, 76, 0.5);
}

nav {
  font-size: 1.05rem;
  margin: 20px;
}

.active {
  color: #b4b4b4;
  font-weight: bold;
}

form {
  display: flex;
  flex-direction: column;
}

form label {
  color: rgba(0, 0, 0, 0.5);
  margin: 10px;
}

form input {
  font-size: 1.05rem;
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
  border-radius: 10px;
  border: none;
}

#login-btn {
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: #091f43;
  border: none;
  border-radius: 10px;
  transition-duration: 0.2s;
  cursor: pointer;
}

#login-btn:hover {
  transform: scale(1.025);
}

.error-message {
  background-color: rgba(255, 0, 0, 0.301);
}

label {
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(109, 109, 109);
  text-align: left;
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
</style>
