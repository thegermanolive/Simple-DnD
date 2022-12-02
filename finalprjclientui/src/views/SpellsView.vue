<template>
  <div class="Spells">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div>
      <button type="button" id="show-modal" @click="showModal = true"
              class="btn btn-primary btn-lg">Show Modal</button>
    </div>
    <div>
      <modal :show="showModal" @close="showModal = false"/>
    </div>
    <div>
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import { BButton, BModal } from 'bootstrap-vue';

import Modal from '@/components/SpellsModal.vue';
import LoginForm from '@/components/LoginForm.vue';
import SpellsForm from '@/components/SpellForm.vue';
// eslint-disable-next-line import/extensions

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);

@Component({
  components: {
    Modal, SpellsForm,
  },
  data() {
    return {
      showModal: false,
    };
  },
})
export default class SpellsView extends Vue {}
</script>
<style>
h1{
  color: black;
}
.Spells{
  background: #2c3e50;
}
</style>
