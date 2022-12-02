<template>
  <div>
    <b-form>
      <b-form-group id="input-group-1" label="UserName" label-for="input-1">
        <b-form-input id="input-1" placeholder="Enter Username" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="PassWord" label-for="input-2">
        <b-form-input id="input-2" placeholder="Enter Password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  BButton,
  BForm, BFormGroup, BFormInput, BFormText,
} from 'bootstrap-vue';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
Vue.component('BButton', BButton);

@Component
export default class LoginForm extends Vue {}
</script>
