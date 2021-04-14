<template>
  <div class="onePost">
    <div class="test">
      <router-link to="/"
        ><img
          class="back-button"
          src="../assets/back-button.png"
          alt="Retour aux articles"
      /></router-link>
    </div>
    <article class="post-wrapper" v-if="!modify">
      <div class="post-header">
        <h2 class="post-title">{{ this.post.title }}</h2>
      </div>
      <div class="post-content" v-html="this.post.content"></div>
      <div class="post-info">
        <span
          class="post-modify"
          v-if="authorized && !modify"
          @click="modify = true"
          aria-label="Modifier"
          >Modifier</span
        >
        <span><a class="post-comment" href="#comment">Commentaires</a></span>
        <span v-if="authorized" class="delete-btn" @click="deleteOnePost()" aria-label="Supprimer le post"
          >Supprimer le post</span
        >
      </div>
    </article>

    <div class="modify-wrapper" v-if="modify">
      <label for="modify-title">Modifier le titre :</label>
      <input type="text" id="modify-title" v-model="this.post.title" />

      <label for="modify-content">Modifier le contenu :</label>
      <editor
        :initialValue="this.post.content"
        apiKey="pwm5eqs0wnsqf0ip208nkercdytlgj4hyr2nx8544cd44c8k"
        v-model="modifiedContent"
        :init="{
          menubar: true,
          a11y_advanced_options: true,
          automatic_uploads: true,
          paste_data_images: true,
          plugins: [
            'advlist autolink lists link',
            'searchreplace visualblocks code fullscreen',
            'print preview anchor insertdatetime media',
            'paste code help wordcount table',
            'emoticons',
            'media',
            'image',
          ],
          image_advtab: true,
          toolbar:
            'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | emoticons |media | image | link | help | ',
        }"
      >
        <textarea id="modify-content" v-model="this.post.content" aria-label="Contenu du texte"></textarea>
      </editor>
    </div>
    <!-- <button v-if="!modify"><router-link to="/">Revenir aux articles</router-link></button> -->

    <button v-if="modify" @click="modify = false" aria-label="Annuler">Annuler</button>
    <button v-if="modify" @click="modifyOnePost()" aria-label="Publier les modifications">
      Publier les modifications
    </button>
  </div>
</template>

<script>
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "OnePost",

  components: {
    editor: Editor,
  },

  data() {
    return {
      modifiedContent: "",
      post: [],
      authorized: false,
      modify: false,
    };
  },

  mounted() {
    this.getOnePost();
  },

  methods: {
    getOnePost() {
      const postId = this.$route.params.id;

      axios
        .get(`${this.$apiUrl}/posts/${postId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.$token}`,
          },
        })
        .then((res) => {
          this.post = res.data[0];
          console.log(res.data[0]);

          if (this.$user.userId === this.post.userId || this.$user.admin == 1) {
            this.authorized = true;
          } else {
            this.authorized = false;
          }
        });
    },

    deleteOnePost() {
      const postId = this.$route.params.id;

      if (confirm("Es-tu sûr de vouloir supprimer ? ")) {
        axios
          .delete(`${this.$apiUrl}/posts/${postId}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          })
          .then(response => {
            console.log(response);
            location.href = "/"
            });
      }
    },

    modifyOnePost() {
      const postId = this.$route.params.id;
      const title = document.querySelector("#modify-title").value;
      const content = this.modifiedContent;

      axios
        .put(
          `${this.$apiUrl}/posts/${postId}`,
          {
            postId,
            title,
            content,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.$token}`,
            },
          }
        )
        .then((location.href = "/"));
    },
  },
};
</script>

<style scoped lang="scss">
.test {
  text-align: left;
  margin-left: 100px;
}
.back-button {
  height: 30px;
  width: auto;
  transition-duration: 1s;
  &:hover {
    color: red;
    transform: scale(1.5);
  }
}

/* Post style */
.post-wrapper {
  margin: 40px auto 30px auto;
  padding: 20px;
  max-width: 800px;
  text-align: left;
  box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.1);
  border-bottom: solid #d1515a 1px;
  border-radius: 5px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-date {
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.post-title {
  margin: 0;
  color: #d1515a;
  font-size: 2rem;
}

.post-content {
  margin-top: 20px;
}

.post-modify {
  font-size: 1rem;
}

.post-info span {
  margin-right: 1.5rem;
  color: grey;
  font-size: 14px;
  padding: 8px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: rgba(191, 191, 191, 0.5);
  }
}

/* Modify style */

.modify-wrapper {
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 30px;
  max-width: 800px;
  text-align: left;
  box-shadow: 0px 0px 50px -7px rgba(0, 0, 0, 0.1);
  border-bottom: solid #d1515a 5px;
}

#modify-title {
  margin: 0;
  margin-bottom: 20px;
  color: #d1515a;
  font-size: 2rem;
}

#modify-content {
  margin-top: 20px;
  height: 400px;
  width: calc(100% - 22px);
  padding: 10px;
  resize: none;
  overflow-y: scroll;
}

.onePost button {
  margin-top: 20px;
  padding: 8px;
  font-size: 0.9rem;
  color: white;
  background-color: rgb(43, 42, 42);
  border: none;
  border-radius: 10px;
  transition-duration: 0.2s;
  cursor: pointer;
  /* margin: 0px 20px 50px 20px; */
  margin: 10px 20px;
}

.delete-btn:hover {
  background-color: red !important;
  color: white;
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
