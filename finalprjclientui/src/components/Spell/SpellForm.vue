<template>
  <div>
    <div>
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
            <b-form-textarea
              id="StatusEffect-input"
              v-model="statuseffect"
              :state="StatusEffectState"
              placeholder="StatusEffect">
            </b-form-textarea>
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
            <b-form-textarea
              id="StatusEffect-input"
              v-model="statuseffect"
              :state="StatusEffectState"
              placeholder="StatusEffect"
              required>
            </b-form-textarea>
          </b-form-group>

        </b-form>
      </b-modal>
    </div>
    <div class="cards">
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/366/Add%20Property-595b40b75ba036ed117d532d.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <b-button v-b-modal.ADDSPELL>Add Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/144/Edit-595b40b65ba036ed117d10d7.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <b-button v-b-modal.EDITSPELL>Edit Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img id="bookmark" src="https://visualpharm.com/assets/96/Bookmark%20Ribbon-595b40b65ba036ed117d187c.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <b-button @click="bookmarkSpell">Bookmark Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <img src="https://visualpharm.com/assets/522/Trash-595b40b65ba036ed117d4ccc.svg" alt="Image" class="card-img-top" height="232px">
        <div class="card-body">
          <b-button @click="deleteSpell">Delete Spell</b-button>
        </div>
      </article>
    </div>
  </div>
</template>

<script>

import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, CardPlugin, BFormTextarea,
  BCardHeader, BCardFooter, BCardBody, BCardTitle,
  BCardSubTitle, BCardImg, BCardImgLazy, BCardGroup,
} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BLink', BLink);
Vue.component('BButton', BButton);
Vue.component('BModal', BModal);
Vue.directive('BModal', VBModal);
Vue.component('BFormTextarea', BFormTextarea);
Vue.use(ModalPlugin);
@Component
export default class SpellForm extends Mixins(GlobalMixin) {
  id = '';

  IDState = null;

  name = '';

  nameState = null;

  level = '';

  LevelState = null;

  school = '';

  SchoolState = null;

  castingtime = '';

  CastingTimeState = null;

  range = '';

  RangeState = null;

  duration = '';

  DurationState = null;

  damage = '';

  DamageState = null;

  damagetype = '';

  DamageTypeState = null;

  statuseffect = '';

  StatusEffectState = null;

  Spell = {
    id: '',
    name: '',
    level: '',
    school: '',
    castingtime: '',
    range: '',
    duration: '',
    damage: '',
    damagetype: '',
    statuseffect: '',
  }

  tempSpell = this.Spell;

  // do the delete
  // eslint-disable-next-line class-methods-use-this
  deleteSpell() {
    console.log('Deleted');
  }

  // eslint-disable-next-line class-methods-use-this
  bookmarkSpell() {
    console.log('bookmarked');
  }

  checkAddFormValidity() {
    const valid = this.$refs.form.checkValidity();
    this.nameState = valid;
    this.LevelState = valid;
    this.SchoolState = valid;
    this.CastingTimeState = valid;
    this.RangeState = valid;
    this.DurationState = valid;
    return valid;
  }

  checkEditFormValidity() {
    const valid = this.$refs.form.checkValidity();
    this.IDState = valid;
    this.nameState = valid;
    this.LevelState = valid;
    this.SchoolState = valid;
    this.CastingTimeState = valid;
    this.RangeState = valid;
    this.DurationState = valid;
    return valid;
  }

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
  }

  handleAddOk(bvModalEvent) {
    // Prevent modal from closing
    bvModalEvent.preventDefault();
    // Trigger submit handler
    this.handleAddSubmit();
  }

  handleEditOk(bvModalEvent) {
    // Prevent modal from closing
    bvModalEvent.preventDefault();
    // Trigger submit handler
    this.handleEditSubmit();
  }

  handleAddSubmit() {
    // Exit when the form isn't valid
    if (!this.checkAddFormValidity()) {
      return;
    }
    console.log(this.Spell.name);
    this.Spell.id = '';
    this.Spell.name = this.name;
    this.Spell.level = this.level;
    this.Spell.school = this.school;
    this.Spell.castingtime = this.castingtime;
    this.Spell.range = this.range;
    this.Spell.duration = this.duration;
    this.Spell.damage = this.damage;
    this.Spell.damagetype = this.damagetype;
    this.Spell.statuseffect = this.statuseffect;
    console.log(this.Spell.name);
    // Push the name to submitted names
    // Hide the modal manually
    this.$nextTick(() => {
      // this.displaySpell();
      this.$bvModal.hide('ADDSPELL');
    });
  }

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
  }

  // This was just a test function to see if form submit worked
  // displaySpell() {
  //   // console.log(this.Monster.valueOf());
  //   let txt = '';
  //   // eslint-disable-next-line guard-for-in,no-restricted-syntax
  //   for (const x in this.Spell) {
  //     txt += `${this.Spell[x]} `;
  //   }
  //   document.getElementById('test').innerHTML = txt;
  // }

  // async saveSpell() {
  //   this.violation = await this.getErrorMessages(this.tempSpell);
  //   if (Object.keys(this.violation).length === 0) {
  //     this.setBusy(true);
  //     const url = this.SPELLS_API + (this.isNew ? '' : `/${this.tempSpell.id}`);
  //     const method = this.isNew ? 'post' : 'put';
  //     //
  //     try {
  //       const data = await this.callAPI(
  //         url,
  //         method,
  //         this.tempSpell,
  //       ); // returns a promise object
  //       //       // emit the action that occurred along
  //       with the data received from the api server
  //       //       // to be used by the parent to update the b-table of students
  //       this.$emit(
  //         this.tempSpell.id === data.id ? 'updated' : 'added',
  //         Object.assign(this.Spell, data),
  //       );
  //     } catch (err) {
  //       //  catch (err:any) {
  //       //       // get the violation messages from the api - if the web server responded
  //       this.violation = this.mapValidationErrorArray(err.data);
  //     } finally {
  //       this.setBusy(false);// tell parent that this component is no longer waiting for the api
  //     }
  //   }
  // }
  //
  // async deleteSpell() {
  //   this.setBusy(true);
  //   try {
  //     await this.callAPI(`${this.SPELLS_API}/${this.Spell.id}`, 'delete');
  //     this.tempSpell = new Spell(); // reset the text boxes since student is deleted
  //     this.$emit('deleted', this.Spell);
  //   } catch (err: any) {
  //     this.$emit('reset', this.Spell);
  //   } finally {
  //     this.setBusy(false);
  //   }
  // }
  //
  // deleteConfirm() {
  //   this.cancel(); // reset any changes user may have done
  //   this.showConfirmDelete = true;
  // }
  //
  // cancel() {
  //   this.violation = {}; // hide error messages if any
  //   this.tempStudent = Object.assign(new Spell(), this.Spell);
  //   this.$emit('cancelled', this.Spell);
  // }
}
</script>

<style scoped>

</style>
