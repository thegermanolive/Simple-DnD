<template>
  <div>
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
    <div>
      <p id="test">

      </p>
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
Vue.component('BFormTextarea', BFormTextarea);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component
export default class MonsterForm extends Mixins(GlobalMixin) {
  id = '';

  IDState = null;

  name = '';

  nameState = null;

  armorclass = ''

  ArmorClassState =null

  hitpoints = ''

  HitPointsState= null

  speed =''

  SpeedState =null

  spell =''

  SpellState =null

  Monster = {}

  tempMonster = this.Monster; // sets Monster Object as the data to be sent

  // get isNew(): boolean {
  //   // if studentID is null, 0 , '' then it's a new student not an existing student
  //   return !this.Monster || !this.Monster.id;
  // }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async saveMosnter() {
  //
  // }
  //
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async editMosnter() {
  //
  // }
  //
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async bookMarkMosnter() {
  //
  // }
  //
  // // eslint-disable-next-line @typescript-eslint/no-empty-function
  // async deleteMosnter() {
  //
  // }

  checkAddFormValidity() {
    const valid = this.$refs.form.checkValidity();
    this.nameState = valid;
    this.ArmorClassState = valid;
    this.HitPointsState = valid;
    this.SpeedState = valid;
    return valid;
  }

  checkEditFormValidity() {
    const valid = this.$refs.form.checkValidity();
    this.IDState = valid;
    this.nameState = valid;
    this.ArmorClassState = valid;
    this.HitPointsState = valid;
    this.SpeedState = valid;
    return valid;
  }

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
    this.Monster.id = '';
    this.Monster.name = this.name;
    this.Monster.armorclass = this.armorclass;
    this.Monster.hitpoints = this.hitpoints;
    this.Monster.speed = this.speed;
    this.Monster.spell = this.spell;
    // function to push data to api DB
    // Hide the modal manually
    this.$nextTick(() => {
      this.$bvModal.hide('ADDMONSTER');
    });
  }

  handleEditSubmit() {
    // Exit when the form isn't valid
    if (!this.checkEditFormValidity()) {
      return;
    }
    this.Monster.id = this.id;
    this.Monster.name = this.name;
    this.Monster.armorclass = this.armorclass;
    this.Monster.hitpoints = this.hitpoints;
    this.Monster.speed = this.speed;
    this.Monster.spell = this.spell;
    // Push the name to submitted names
    // Hide the modal manually
    this.$nextTick(() => {
      this.$bvModal.hide('EDITMONSTER');
    });
  }
  // This was just a test function to see if form submit worked
  // displayMonster() {
  //   // console.log(this.Monster.valueOf());
  //   let txt = '';
  //   // eslint-disable-next-line guard-for-in,no-restricted-syntax
  //   for (const x in this.Monster) {
  //     txt += `${this.Monster[x]} `;
  //   }
  //   document.getElementById('test').innerHTML = txt +;
  // }

  async saveMonster() {
    this.violation = await this.getErrorMessages(this.tempMonster);
    if (Object.keys(this.violation).length === 0) {
      this.setBusy(true);
      const url = this.MONSTER_API + (this.isNew ? '' : `/${this.tempMonster.id}`);
      const method = this.isNew ? 'post' : 'put';
      //
      try {
        const data = await this.callAPI(
          url,
          method,
          this.tempMonster,
        ); // returns a promise object
        //       // emit the action that occurred along with the data received from the api server
        //       // to be used by the parent to update the b-table of students
        this.$emit(
          this.tempMonster.id === data.id ? 'updated' : 'added',
          Object.assign(this.Monster, data),
        );
      } catch (err) {
        //  catch (err:any) {
        //       // get the violation messages from the api - if the web server responded
        this.violation = this.mapValidationErrorArray(err.data);
      } finally {
        this.setBusy(false);// tell parent that this component is no longer waiting for the api
      }
    }
  }

  async deleteMonster() {
    const icon = this.$refs.iconDelete;
    this.setBusy(true);
    this.animate(icon, true);

    try {
      await this.callAPI(`${this.MONSTER_API}/${this.Monster.id}`, 'delete');
      this.tempStudent = new Monster(); // reset the text boxes since student is deleted
      this.$emit('deleted', this.Monster);
    } catch (err: any) {
      this.$emit('reset', this.Monster);
    } finally {
      this.setBusy(false);
      this.animate(icon, false);
    }
  }

  deleteConfirm() {
    this.cancel(); // reset any changes user may have done
    this.showConfirmDelete = true;
  }

  cancel() {
    this.violation = {}; // hide error messages if any
    this.tempStudent = Object.assign(new Monster(), this.Monster);
    this.$emit('cancelled', this.Monster);
  }
}
</script>

<style scoped>
p{
  color: black;
}
</style>
