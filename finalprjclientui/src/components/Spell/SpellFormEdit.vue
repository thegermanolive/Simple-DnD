<template>
  <div class="Flex">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <b-form>
      <b-form-group id="ID" label="ID" label-for="ID">
        <b-form-input id="ID" placeholder="ID" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-1" label="Name" label-for="input-1">
        <b-form-input id="input-1" placeholder="Name" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Level" label-for="input-2">
        <b-form-input id="input-2" placeholder="Level" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="School" label-for="input-2">
        <b-form-input id="input-2" placeholder="School" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="CastingTime" label-for="input-2">
        <b-form-input id="input-2" placeholder="CastingTime" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Range" label-for="input-2">
        <b-form-input id="input-2" placeholder="Range" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Duration" label-for="input-2">
        <b-form-input id="input-2" placeholder="Duration" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Damage" label-for="input-2">
        <b-form-input id="input-2" placeholder="Damage" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="DamageType" label-for="input-2">
        <b-form-input id="input-2" placeholder="DamageType" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="StatusEffect" label-for="input-2">
        <b-form-input id="input-2" placeholder="StatusEffect" required></b-form-input>
      </b-form-group>
      <!--      <b-button type="submit" variant="primary">Submit</b-button>-->
      <!--      <b-button type="reset" variant="danger">Reset</b-button>-->
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
export default class SpellsFormEdit extends Vue {}
</script>
<style>
.Flex{
  display: flex;
  justify-content: center;
}
</style>
