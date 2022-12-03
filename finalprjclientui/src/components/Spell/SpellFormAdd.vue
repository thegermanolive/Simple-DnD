<!--<template>-->
<!--  <div class="Bookmark">-->
<!--    <meta charset="utf-8">-->
<!--    <meta name="viewport" content="width=device-width, initial-scale=1">-->
<!--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import { Component, Vue } from 'vue-property-decorator';-->

<!--@Component({-->
<!--})-->
<!--export default class BookmarkView extends Vue {}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div class="Monsters">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>
        Spells
      </h1>
    </div>
    <div>
      <b-button v-b-modal.ADDSPELL>Add Spell</b-button>
      <b-button v-b-modal.EDITSPELL>Edit Spell</b-button>
    </div>
    <b-modal
      id="ADDSPELL"
      ref="modal"
      title="Add a Spell"
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
          label="Level"
          label-for="Level-input"
          invalid-feedback="Level is required"
          :state="LevelState" >
          <b-form-input
            id="Level-input"
            v-model="level"
            :state="LevelState"
            placeholder="Level"
            required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="School"
          label-for="School-input"
          invalid-feedback="School is required"
          :state="SchoolState" >
          <b-form-input
            id="School-input"
            v-model="school"
            :state="SchoolState"
            placeholder="School"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="CastingTime"
          label-for="CastingTime-input"
          invalid-feedback="CastingTime is required"
          :state="CastingTimeState" >
          <b-form-input
            id="CastingTime-input"
            v-model="castingtime"
            :state="CastingTimeState"
            placeholder="CastingTime"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Range"
          label-for="Range-input"
          :state="RangeState" >
          <b-form-input
            id="Range-input"
            v-model="range"
            :state="RangeState"
            placeholder="Range"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Duration"
          label-for="Duration-input"
          :state="DurationState" >
          <b-form-input
            id="Duration-input"
            v-model="duration"
            :state="DurationState"
            placeholder="Duration"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Damage"
          label-for="Damage-input"
          :state="DamageState" >
          <b-form-input
            id="Damage-input"
            v-model="damage"
            :state="DamageState"
            placeholder="Damage"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="DamageType"
          label-for="DamageType-input"
          :state="DamageTypeState" >
          <b-form-input
            id="DamageType-input"
            v-model="damagetype"
            :state="DamageTypeState"
            placeholder="DamageType"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="StatusEffect"
          label-for="StatusEffect-input"
          :state="StatusEffectState" >
          <b-form-input
            id="StatusEffect-input"
            v-model="statuseffect"
            :state="StatusEffectState"
            placeholder="StatusEffect"
            required>
          </b-form-input>
        </b-form-group>

      </b-form>
    </b-modal>
    <b-modal
      id="EDITSPELL"
      ref="modal"
      title="Edit a Spell"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleEditOk"
    >
      <!--        Originaly we had the form in a seperate vue componant but
        ran into trouble when trying to get the modal subbmit working-->
      <b-form ref="form" @submit.stop.prevent="handleEditSubmit">
        <b-form-group
          label="ID"
          label-for="ID-input"
          invalid-feedback="ID is required"
          :state="IDState" >
          <b-form-input
            id="ID-input"
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
          label="Level"
          label-for="Level-input"
          invalid-feedback="Level is required"
          :state="LevelState" >
          <b-form-input
            id="Level-input"
            v-model="level"
            :state="LevelState"
            placeholder="Level"
            required>
          </b-form-input>
        </b-form-group>
        <b-form-group
          label="School"
          label-for="School-input"
          invalid-feedback="School is required"
          :state="SchoolState" >
          <b-form-input
            id="School-input"
            v-model="school"
            :state="SchoolState"
            placeholder="School"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="CastingTime"
          label-for="CastingTime-input"
          invalid-feedback="CastingTime is required"
          :state="CastingTimeState" >
          <b-form-input
            id="CastingTime-input"
            v-model="castingtime"
            :state="CastingTimeState"
            placeholder="CastingTime"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Range"
          label-for="Range-input"
          :state="RangeState" >
          <b-form-input
            id="Range-input"
            v-model="range"
            :state="RangeState"
            placeholder="Range"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Duration"
          label-for="Duration-input"
          :state="DurationState" >
          <b-form-input
            id="Duration-input"
            v-model="duration"
            :state="DurationState"
            placeholder="Duration"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="Damage"
          label-for="Damage-input"
          :state="DamageState" >
          <b-form-input
            id="Damage-input"
            v-model="damage"
            :state="DamageState"
            placeholder="Damage"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="DamageType"
          label-for="DamageType-input"
          :state="DamageTypeState" >
          <b-form-input
            id="DamageType-input"
            v-model="damagetype"
            :state="DamageTypeState"
            placeholder="DamageType"
            required>
          </b-form-input>
        </b-form-group>

        <b-form-group
          label="StatusEffect"
          label-for="StatusEffect-input"
          :state="StatusEffectState" >
          <b-form-input
            id="StatusEffect-input"
            v-model="statuseffect"
            :state="StatusEffectState"
            placeholder="StatusEffect"
            required>
          </b-form-input>
        </b-form-group>

      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BCard, BCardText, BLink, BButton, CardPlugin,
  BCardHeader, BCardFooter, BCardBody, BCardTitle,
  BCardSubTitle, BCardImg, BCardImgLazy, BCardGroup,
} from 'bootstrap-vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.use(CardPlugin);
@Component({
  data() {
    return {
      id: '',
      IDState: null,
      name: '',
      nameState: null,
      level: '',
      LevelState: null,
      school: '',
      SchoolState: null,
      castingtime: '',
      CastingTimeState: null,
      range: '',
      RangeState: null,
      duration: '',
      DurationState: null,
      damage: '',
      DamageState: null,
      damagetype: '',
      DamageTypeState: null,
      statuseffect: '',
      StatusEffectState: null,
    };
  },
  methods: {
    checkAddFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      this.LevelState = valid;
      this.SchoolState = valid;
      this.CastingTimeState = valid;
      this.RangeState = valid;
      this.DurationState = valid;
      this.DamageState = valid;
      this.DamageTypeState = valid;
      this.StatusEffectState = valid;
      return valid;
    },
    checkEditFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.IDState = valid;
      this.nameState = valid;
      this.LevelState = valid;
      this.SchoolState = valid;
      this.CastingTimeState = valid;
      this.RangeState = valid;
      this.DurationState = valid;
      this.DamageState = valid;
      this.DamageTypeState = valid;
      this.StatusEffectState = valid;
      return valid;
    },
    resetModal() {
      this.id = '';
      this.IDState = null;
      this.name = '';
      this.nameState = null;
      this.level = '';
      this.LevelState = null;
      this.school = '';
      this.SchoolState = null;
      this.castingtime = '';
      this.CastingTimeState = null;
      this.range = '';
      this.RangeState = null;
      this.duration = '';
      this.DurationState = null;
      this.damage = '';
      this.DamageState = null;
      this.damagetype = '';
      this.DamageTypeState = null;
      this.statuseffect = '';
      this.StatusEffectState = null;
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
        this.$bvModal.hide('ADDSPELL');
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
        this.$bvModal.hide('EDITSPELL');
      });
    },
  },
})
export default class BookmarkView extends Vue {}
</script>

<style scoped>
.Monsters{
  background: #2c3e50;
}
</style>
