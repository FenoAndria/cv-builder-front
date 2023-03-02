<template>
  <div>
    <head-title>LOGIN</head-title>
    <div class="" v-if="this.userNotAuthenticated">
      <single-error
        >Compte non identifié. Cliquez ici pour s'enregistrer</single-error
      >
    </div>
    <div class="">
      <form @submit.prevent="submit()">
        <div class="">
          <validation-error :errors="FORM_VALIDATION_ERRORS" column="email" />
          <label for="email">Email</label>
          <input class="" type="text" v-model="email" />
        </div>
        <div class="">
          <validation-error
            :errors="FORM_VALIDATION_ERRORS"
            column="password"
          />
          <label for="password">Mot de passe</label>
          <input class="" type="text" v-model="password" />
        </div>
        <submit-button>Sign In</submit-button>
      </form>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import HeadTitle from "../../components/Layouts/HeadTitle.vue";
import SingleError from '../../components/Layouts/SingleError.vue';
import SubmitButton from "../../components/Layouts/SubmitButton.vue";
import ValidationError from "../../components/Layouts/ValidationError.vue";
export default {
  name: "Login",
  data() {
    return {
      email: "oleta.hamill@example.org",
      password: "password",
      userNotAuthenticated: false,
    };
  },
  computed: {
    ...mapGetters(["LOADING_SUBMIT", "FORM_VALIDATION_ERRORS"]),
  },
  methods: {
    submit() {
      let user = {
        email: this.email,
        password: this.password,
      };
      this.$store.commit("SET_LOADING_SUBMIT", true);
      this.$store
        .dispatch("LOGIN", user)
        .then((result) => {
          this.userNotAuthenticated = false;
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit("SET_FORM_VALIDATION_ERRORS", "");
          localStorage.setItem("userToken", result.data.user.token);
          // console.log(result.data);
          this.$router.push({ name: "profil" });
        })
        .catch((err) => {
          this.$store.commit("SET_LOADING_SUBMIT", false);
          this.$store.commit(
            "SET_FORM_VALIDATION_ERRORS",
            err.response.data.errors
          );
          this.userNotAuthenticated = false;
          if (err.response.status == 403) {
            this.userNotAuthenticated = true;
          }
          //   console.log(err.response.status);
        });
    },
  },
  components: {
    HeadTitle,
    SubmitButton,
    ValidationError,
    SingleError,
  },
};
</script>