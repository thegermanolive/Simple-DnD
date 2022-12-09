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
          <b-form-group id="username-group" label-for="username-input">
            <b-form-input
              id="username-input"
              v-model="username"
              placeholder="Username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="password-group" label-for="password-input">
            <b-form-input
              type="password"
              id="password-input"
              v-model="password"
              placeholder="Password"
              required>
            </b-form-input>
            <b-form-text id="passwordText" class="passwordText">
            </b-form-text>
          </b-form-group>
          <h6>Your password must be 8-20 characters long Alpha-Numerical.</h6>
          <h6>(For Testing purposes the user name is "CWEB280" and the password is "Qwerty1234"</h6>
          <div class="buttons">
            <b-button class="btnSubmit" type="submit" variant="primary">Submit</b-button>
            <b-button class="btnReset" type="reset" variant="danger">Reset</b-button>
          </div>
        </b-form>
        <div>
          <h6 id="errorMsg">.</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BButton,
  // eslint-disable-next-line max-len
  BForm, BFormGroup, BFormInput, BFormText, BCard, CardPlugin,
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

  // checks if the password is valid
  PasswordIsValid() {
    return /[A-Za-z0-9]{8,12}/gm.test(this.password);
  }

  onSubmit() {
    // saves the imputed values as a User Object to check the database for
    this.User.username = this.username;
    this.User.password = this.password;
    // could not figure out the JWT secure so this is how the page will be kept secure
    // eslint-disable-next-line max-len
    // if the DM happens to walk away from the application, they only need to click on home, and the MonsterPage is secure unitl they login again
    if (this.PasswordIsValid()) {
      if (this.username === 'CWEB280' && this.password === 'Qwerty1234') {
        window.location.replace('http://localhost:8080/#/Monsters');
      } else {
        this.onReset();
      }
    } else {
      this.onReset();
    }
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
.DM-Login {
  background: #4682B4;
  color: black;
  zoom:125%
}

.Flex{
  display: flex;
  justify-content: center;
}
div{
  background: #4682B4;
}
.buttons {
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
.passwordText{
  color: black;
}
#password-group{
  margin-top: 25px;
}
.btnSubmit{
  margin-right: 15px ;
}
.btnReset{
  margin-right: 15px ;
}
</style>
