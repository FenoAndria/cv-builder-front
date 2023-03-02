<template>
  <div>
    <head-title>Modifier Profil</head-title>
    <div v-if="LOADING_DATA">LOADING PROFIL...</div>
    <div v-else>
      <div class="" v-if="PROFIL">
        <form @submit.prevent="submit()">
          <div class="">
            <ValidationError :errors="errors" column="photo" />
            <file-pond
              ref="pond"
              class-name="my-pond"
              label-idle="Drop image here..."
              allow-multiple="false"
              accepted-file-types="image/jpeg, image/png"
              :server="server"
              :files="myFiles"
              v-on:init="handleFilePondInit"
              id="photofile"
            />
          </div>
          <div class="">
            <ValidationError :errors="errors" column="nom" />
            <label for="">Nom</label>
            <input type="text" v-model="PROFIL.nom" />
          </div>
          <div class="">
            <label for="">Prenom</label>
            <input type="text" v-model="PROFIL.prenom" />
          </div>
          <div class="">
            <ValidationError :errors="errors" column="dateNaissance" />
            <label for="">Date de naissance</label>
            <input type="date" v-model="PROFIL.dateNaissance" />
          </div>
          <div class="">
            <ValidationError :errors="errors" column="adresse" />
            <label for="">Adresse</label>
            <input type="text" v-model="PROFIL.adresse" />
          </div>
          <div class="">
            <ValidationError :errors="errors" column="telephone" />
            <label for="">Téléphone</label>
            <input type="tel" v-model="PROFIL.telephone" />
          </div>
          <div class="">
            <ValidationError :errors="errors" column="bio" />
            <label for="">Bio</label>
            <textarea
              class=""
              id=""
              cols="30"
              rows="5"
              v-model="PROFIL.bio"
            ></textarea>
          </div>
          <div class="mt-2">
            <submit-button>Enregistrer</submit-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
// import Pond from 'filepond'
import vueFilePond from "vue-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.esm.js";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
const FilePond = vueFilePond(FilePondPluginImagePreview);
import ValidationError from "../../components/Layouts/ValidationError.vue";
import SubmitButton from "../../components/Layouts/SubmitButton.vue";

export default {
  name: "ProfilEdit",
  data() {
    return {
      myFiles: "",
      photo: "",
      errors: "",
      server: {
        timeout: 3000,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["PROFIL", "LOADING_SUBMIT", "LOADING_DATA"]),
  },
  created() {
    this.$store.dispatch("GET_PROFIL");
  },
  methods: {
    fileChanged(e) {
      this.photo = e.target.files[0];
    },
    submit() {
      this.$store.commit("SET_LOADING_SUBMIT", true);
      let data = new FormData();
      let photoFile = this.$refs.pond.getFile();
      if (photoFile) {
        data.append("photo", photoFile.file);
      }
      data.append("nom", this.PROFIL.nom);
      data.append("prenom", this.PROFIL.prenom);
      data.append("dateNaissance", this.PROFIL.dateNaissance);
      data.append("adresse", this.PROFIL.adresse);
      data.append("telephone", this.PROFIL.telephone);
      data.append("bio", this.PROFIL.bio);

      this.$store
        .dispatch("MODIFIER_PROFIL", data)
        .then((result) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.errors = "";
          this.$router.push({name:'ProfilIndex'})
          console.log(result.data);
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          let { errors } = err.response.data;
          this.errors = errors;
          console.log(err.response.data);
        });
    },
    handleFilePondInit: function () {
      this.$refs.pond.getFiles();
    },
  },
  components: {
    FilePond,
    HeadTitle,
    ValidationError,
    SubmitButton,
  },
};
</script>