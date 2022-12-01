<template>
  <div class="Monsters">
    <div Class="header">
      <h1>Slay some Monsters</h1>
    </div>
    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    </div>
    <div>
      <modal :show="showModal" @close="showModal = false">
        <template #header>
          <h3>custom header</h3>
        </template>
      </modal>
    </div>

  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';

import { BButton, BModal } from 'bootstrap-vue';

import Modal from '@/components/ModalPopup.vue';

// eslint-disable-next-line import/extensions

Vue.component('BButton', BButton);
Vue.component('BModal', BModal);

@Component({
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    };
  },
})
export default class MonsterView extends Vue {}
</script>
<style>
h1{
  color: black;
}
</style>
