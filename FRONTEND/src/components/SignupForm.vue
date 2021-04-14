<template>
  <div class="wrapper">
    <form @submit.prevent="signup()">
      <nav>
        <router-link to="/login" class="inactive">Se connecter</router-link> |
        <router-link to="/signup" class="active">S'inscrire</router-link>
      </nav>
      <label for="signup-nom">Nom :</label>
      <input id="signup-nom" type="text" placeholder="Nom" v-model="signupNom" aria-label="Nom" pattern="[a-zA-ZÀ-ÿ]{1,30}" required/>

      <label for="signup-prenom">Prénom :</label>
      <input id="signup-prenom" type="text" placeholder="Prénom" v-model="signupPrenom" aria-label="Prénom" pattern="[a-zA-ZÀ-ÿ]{1,30}" required/>

      <label for="signup-email">E-mail :</label>
      <input id="signup-email" type="email" placeholder="E-mail" v-model="signupEmail"
      aria-label="E-mail"
      pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}" required />
      
      <label for="signup-password">Mot de passe :</label>
      <input
        id="signup-password"
        type="password"
        placeholder="Mot de passe" aria-label="Mot de passe"
        required
      />

      <label for="signup-password-verification"
        >Vérification du mot de passe :</label
      >
      <input
        id="signup-password-verification"
        type="password"
        placeholder="Retaper mot de passe"
        aria-label="Vérifier mot de passe"
        required
      />


      <div class="error-message">{{ message }}</div>

      <button id="signup-btn" type="submit" aria-label="S'inscrire">S'inscrire</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignupForm",
  data() {
    return {
      message: "",
      signupNom: "",
      signupPrenom: "",
      signupEmail: "",
    };
  },
  methods: {
    signup() {
      const password = document.getElementById('signup-password').value;
      const passwordVerif = document.getElementById(
        "signup-password-verification"
      ).value;
      if (password === passwordVerif) {
        axios
          .post(
            `${this.$apiUrl}/auth/signup`,
            {
              nom: this.signupNom,
              prenom: this.signupPrenom,
              password,
              email: this.signupEmail,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((res) => {
            if (res.status === 201) {
              alert("Votre compte à bien été créé. Connectez-vous à présent !")
              this.$router.push('/login');
            }
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.message = "Email non disponible.";
            }
          });
      } else if (password != passwordVerif) {
        this.message = "Vérifier le mot de passe";
      }
    },
  },
};
</script>

<style lang="scss">
@media screen and (min-width: 767px) {
  #signup-btn {
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: white;
  border: none;
  border-radius: 10px;
  transition-duration: 0.2s;
  cursor: pointer;
}
}
.wrapper {
  max-width: 500px;
  margin: 90px auto;
}
.inactive{
    color: white im !important;
}
img {
  width: 100%;
  // background: rgba(30, 130, 76, .5);
}
nav {
  font-size: 1.05rem;
  margin: 20px;
}
.active {
  color: white;
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
.error-message {
  background-color: rgba(255, 0, 0, 0.301);
}
form input {
  font-size: 1rem;
  padding: 10px;
  margin-bottom: 15px;
  text-align: center;
  border: none;
  border-radius: 10px;
}
#signup-btn {
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: #091f43;
  border: none;
  border-radius: 10px;
  transition-duration: 0.2s;
  cursor: pointer;
}
#signup-btn:hover {
  transform: scale(1.025);
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

// media queries toujours à la fin du fichier style
@media (min-width: 320px) {
  .wrapper {
    padding: 15px;
  }
}
</style>