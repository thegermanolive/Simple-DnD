<template>
  <div class="DM-Login">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>Login</h1>
    </div>
    <div class="Flex">
      <div>
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <b-form-group id="username-group" label="Username" label-for="username-input">
            <b-form-input
              id="username-input"
              v-model="username"
              placeholder="Enter Username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="password-group" label="Password" label-for="password-input">
            <b-form-input
              id="password-input"
              v-model="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <div class="buttons">
          </div>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BButton,
  // eslint-disable-next-line max-len
  BForm, BFormGroup, BFormInput, BFormText, BFormInvalidFeedback, BFormValidFeedback, BFormDatalist, BCard, CardPlugin,
} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
Vue.component('BButton', BButton);
Vue.component('BCard', BCard);
Vue.use(CardPlugin);

@Component
export default class DMLoginView extends Mixins(GlobalMixin) {
  id = '';

  username ='';

  password='';

  User = {
    id: '',
    username: '',
    password: '',
  }

  tempUser = this.User

  onSubmit() {
    // saves the imputed values as a User Object to check the database for
    this.User.username = this.username;
    this.User.password = this.password;
    window.location.replace('http://localhost:8080/#/Monsters');
    this.onReset();
  }

  // HandleLogin() {
  //   throw new Error('Method not implemented.');
  // }

  onReset() {
    // Since we disabled the default functions this will clear the text inputs
    this.username = '';
    this.password = '';
    // test to make sure its outputing properly
  }

  // eslint-disable-next-line class-methods-use-this
}
</script>

<style scoped>
h1{
  color: black;
}
div{
  background: #2c3e50;
}
.Flex{
  display: flex;
  justify-content: center;
}

p{
  color: black;
}
.buttons {
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

</style>
