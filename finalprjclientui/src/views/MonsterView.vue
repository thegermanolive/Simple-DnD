<template>
  <div class="Monsters">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>
        Monsters
      </h1>
    </div>
    <div>
      <b-button v-b-modal.ADDMONSTER>Add Monster</b-button>
      <b-button v-b-modal.EDITMONSTER>Edit Monster</b-button>
    </div>
    <b-modal
      id="ADDMONSTER"
      ref="modal"
      title="Add a Monster"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleAddOk"
    >
      <!--        Originaly we had the form in a seperate vue componant but
        ran into trouble when trying to get the modal subbmit working-->
      <b-form ref="form" @submit.stop.prevent="handleAddSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState" >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            placeholder="Name"
            required/>
        </b-form-group>
        <b-form-group
          label="Armor Class"
          label-for="ArmorClass-input"
          invalid-feedback="Armor Class is required"
          :state="ArmorClassState" >
          <b-form-input
            id="ArmorClass-input"
            v-model="armorclass"
            :state="ArmorClassState"
            placeholder="Armor Class" >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Hit Points"
          label-for="HitPoints-input"
          invalid-feedback="Hit Points are required"
          :state="HitPointsState" >
          <b-form-input
            id="HitPoints-input"
            v-model="hitpoints"
            :state="HitPointsState"
            placeholder="Hit Points" >
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Speed"
          label-for="Speed-input"
          invalid-feedback="Speed is required"
          :state="SpeedState" >
          <b-form-input
            id="Speed-input"
            v-model="speed"
            :state="SpeedState"
            placeholder="Speed" >
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Spells"
          label-for="Spells-input"
          :state="SpellState" >
          <b-form-textarea
            id="Spells-input"
            v-model="spell"
            :state="SpellState"
            placeholder="Spells" ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-modal>
    <b-modal
      id="EDITMONSTER"
      ref="modal"
      title="Add a Monster"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleEditOk"
    >
      <b-form ref="form" @submit.stop.prevent="handleEditSubmit">
        <b-form-group
          label="ID"
          label-for="ID-input"
          invalid-feedback="ID is required"
          :state="IDState" >
          <b-form-input
            id="name-input"
            v-model="id"
            :state="IDState"
            placeholder="ID"
            required/>
        </b-form-group>
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState" >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            placeholder="Name"
            required/>
        </b-form-group>
        <b-form-group
          label="Armor Class"
          label-for="ArmorClass-input"
          invalid-feedback="Armor Class is required"
          :state="ArmorClassState" >
          <b-form-input
            id="ArmorClass-input"
            v-model="armorclass"
            :state="ArmorClassState"
            placeholder="Armor Class" >
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="Hit Points"
          label-for="HitPoints-input"
          invalid-feedback="Hit Points are required"
          :state="HitPointsState" >
          <b-form-input
            id="HitPoints-input"
            v-model="hitpoints"
            :state="HitPointsState"
            placeholder="Hit Points" >
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Speed"
          label-for="Speed-input"
          invalid-feedback="Speed is required"
          :state="SpeedState" >
          <b-form-input
            id="Speed-input"
            v-model="speed"
            :state="SpeedState"
            placeholder="Speed" >
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Spells"
          label-for="Spells-input"
          :state="SpellState" >
          <b-form-textarea
            id="Spells-input"
            v-model="spell"
            :state="SpellState"
            placeholder="Spells" ></b-form-textarea>
        </b-form-group>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, CardPlugin,
  BCardHeader, BCardFooter, BCardBody, BCardTitle,
  BCardSubTitle, BCardImg, BCardImgLazy, BCardGroup,
} from 'bootstrap-vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component({
  data() {
    return {
      id: '',
      IDState: null,
      name: '',
      nameState: null,
      armorclass: '',
      ArmorClassState: null,
      hitpoints: '',
      HitPointsState: null,
      speed: '',
      SpeedState: null,
      spell: '',
      SpellState: null,
    };
  },
  methods: {
    checkAddFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.ArmorClassState = valid;
      this.HitPointsState = valid;
      this.SpeedState = valid;
      return valid;
    },
    checkEditFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.IDState = valid;
      this.nameState = valid;
      this.ArmorClassState = valid;
      this.HitPointsState = valid;
      this.SpeedState = valid;
      return valid;
    },
    resetModal() {
      this.id = '';
      this.IDState = null;
      this.name = '';
      this.nameState = null;
      this.armorclass = '';
      this.ArmorClassState = null;
      this.hitpoints = '';
      this.HitPointsState = null;
      this.speed = '';
      this.SpeedState = null;
      this.spell = '';
      this.SpellState = null;
    },
    handleAddOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleAddSubmit();
    },
    handleEditOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleEditSubmit();
    },
    handleAddSubmit() {
      // Exit when the form isn't valid
      if (!this.checkAddFormValidity()) {
        return;
      }
      // Push the name to submitted names
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('ADDMONSTER');
      });
    },
    handleEditSubmit() {
      // Exit when the form isn't valid
      if (!this.checkEditFormValidity()) {
        return;
      }
      // Push the name to submitted names
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('EDITMONSTER');
      });
    },
  },
})
export default class MonsterView extends Vue {}
</script>

<style scoped>
.Monsters{
  background: #2c3e50;
}
</style>
