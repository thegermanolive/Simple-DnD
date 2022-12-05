<template>
  <div class="Flex">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <b-form>
      <b-form-group id="UserName" label="UserName" label-for="Username-input">
        <b-form-input id="Username-input" placeholder="Enter Username" required></b-form-input>
      </b-form-group>
      <b-form-group id="PassWord" label="PassWord" label-for="Password-input">
        <b-form-input id="Password-input" placeholder="Enter Password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BButton,
  BForm, BFormGroup, BFormInput, BFormText,
} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
Vue.component('BButton', BButton);

@Component
export default class LoginForm extends Mixins(GlobalMixin) {
}
</script>
<style>
.Flex{
  display: flex;
  justify-content: center;
}
</style>
