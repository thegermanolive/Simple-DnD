<template>
  <div class="Flex">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <b-form>
      <b-form-group id="input-group-1" label="Name" label-for="input-1">
        <b-form-input id="input-1" placeholder="Name" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="ArmorClass" label-for="input-2">
        <b-form-input id="input-2" placeholder="Armor Class" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="HitPoints" label-for="input-2">
        <b-form-input id="input-2" placeholder="Hit Points" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Speed" label-for="input-2">
        <b-form-input id="input-2" placeholder="Speed" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Spells" label-for="input-2">
        <b-form-textarea id="input-2" placeholder="Spells" required></b-form-textarea>
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
  BForm, BFormGroup, BFormInput, BFormText, BFormTextarea,
} from 'bootstrap-vue';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
Vue.component('BButton', BButton);
Vue.component('BFormTextarea', BFormTextarea);

@Component
export default class MonsterForm extends Vue {}
</script>
<style>
.Flex{
  display: flex;
  justify-content: center;
}
</style>
