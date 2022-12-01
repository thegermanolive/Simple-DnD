<template>
  <div class="Spells">
    <div Class="header">
      <h1>Cast Some Spells</h1>
    </div>
    <div></div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import { BButton, BModal } from 'bootstrap-vue';
// eslint-disable-next-line import/extensions

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);

@Component({
  components: {
  },
})
export default class SpellsView extends Vue {}
</script>
<style>
h1{
  color: black;
}
</style>
