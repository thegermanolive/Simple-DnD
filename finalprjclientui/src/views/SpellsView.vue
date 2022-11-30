<template>
  <div class="Spells">
    <div Class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div>
      <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue } from 'vue-property-decorator';
import { BButton, BModal } from 'bootstrap-vue';

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
export default class SpellsView extends Vue {}
</script>
