<template>
  <div id="Spells">
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
              type="text"
              v-model="name"
              :state="nameState"
              placeholder="Name"
              required/>
          </b-form-group>
          <b-form-group
            label="Level"
            label-for="Level-input"
            invalid-feedback="Level is required, and must be a number"
            :state="LevelState" >
            <b-form-input
              id="Level-input"
              type="number"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              v-model="name"
              :state="nameState"
              placeholder="Name"
              required/>
          </b-form-group>
          <b-form-group
            label="Level"
            label-for="Level-input"
            invalid-feedback="Level is required, and must be a number"
            :state="LevelState" >
            <b-form-input
              id="Level-input"
              type="number"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
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
              type="text"
              v-model="statuseffect"
              :state="StatusEffectState"
              placeholder="StatusEffect">
            </b-form-textarea>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <div id="scrollspy-nested" style="position:relative; background-color: #cccccc;
   height:700px; width:2000px; overflow-y:auto">
      <div>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul id="SpellDataList">
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
        <article id="SpellCard" class="SpellUnBookmarked" style="max-width: 20rem;">
          <div id="test" class="card-body">
            <h1 id="SpellName">Name:</h1>
            <ul>
              <li id="SpellID">ID:</li>
              <li id="SpellLevel">Level:</li>
              <li id="SpellSchool">School:</li>
              <li id="SpellCastingTime">Casting Time:</li>
              <li id="SpellRange">Range:</li>
              <li id="SpellDuration">Duration:</li>
              <li id="SpellDamage">Damage:</li>
              <li id="SpellDamageType">Damage Type:</li>
              <li id="SpellEffect">Status Effect:</li>
            </ul>
            <b-form-checkbox id="checkbox" class="SpellCheck" @change="selectSpell"/>
          </div>
        </article>
      </div>
    </div>
    <div class="FunctionCards">
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button v-b-modal.ADDSPELL> <img src="https://visualpharm.com/assets/366/Add%20Property-595b40b75ba036ed117d532d.svg" alt="Image" class="card-img-top" height="232px">Add Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="EditSpell"> <img src="https://visualpharm.com/assets/144/Edit-595b40b65ba036ed117d10d7.svg" alt="Image" class="card-img-top" height="232px">Edit Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">

        <div class="card-body">
          <b-button @click="bookmarkSpell"><img id="bookmark" src="https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg" alt="Image" class="card-img-top" height="232px">Bookmark Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">

        <div class="card-body">
          <b-button @mouseover="OpenCan" @focus="OpenCan" @mouseleave="CloseCan" @focusout="CloseCan" @click="DeleteSpellUI"><img id="trash" src="https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg" alt="Image" class="card-img-top" height="232px">Delete Spell</b-button></div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="RefreshDB"><img id="refresh" src="https://visualpharm.com/assets/175/Data%20Backup-595b40b75ba036ed117d93c3.svg" alt="Image" class="card-img-top" height="232px">Refresh Spells</b-button>
        </div>
      </article>
    </div>
    <div class="DmPassword">
      <div>
        <b-form-input
          id="passwordInput"
          type="password"
          v-model="passwordInput"
          placeholder="Enter your Password">
        </b-form-input>
        <h6>( For Testing purposes the password is "Qwerty1234" )</h6>
      </div>
    </div>
  </div>
</template>
<script>

import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  BCard, BModal, VBModal, ModalPlugin, BCardText, BLink, BButton, BFormTextarea,
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

  desc = '';

  StatusEffectState = null;

  Spell = {
    id: '',
    spellname: '',
    level: '',
    school: '',
    casting_time: '',
    range: '',
    duration: '',
    desc: '',
  }

  CardToBeAddedID = 0;

  password='';

  tempSpell = this.Spell;

  // eslint-disable-next-line class-methods-use-this
  selectSpell() {
    const cards = document.getElementsByClassName('SpellCheck');
    let i;
    let SpellCardToSelect;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < cards.length; i++) {
      if (cards[i].childNodes[0].checked === true) {
        if (cards[i].parentNode.parentNode.className === 'SpellBookmarked') {
          this.changeBookMarkImage();
        }
        SpellCardToSelect = i;
      } else {
        if (cards[i].parentNode.parentNode.className === 'SpellBookmarked') {
          this.changeBookMarkImage();
        }
        cards[i].parentNode.parentNode.id = 'SpellCard';
      }
    }
    if (cards[SpellCardToSelect].parentNode.parentNode.id !== 'SelectedSpell') {
      cards[SpellCardToSelect].parentNode.parentNode.id = 'SelectedSpell';
    }
    // eslint-disable-next-line no-empty
  }

  // do the delete
  // eslint-disable-next-line class-methods-use-this
  DeleteSpellUI() {
    if (document.getElementById('passwordInput').value === 'Qwerty1234') {
      if (document.getElementById('bookmark').src === 'https://visualpharm.com/assets/466/Filled%20Bookmark%20Ribbon-595b40b85ba036ed117dc0ee.svg') {
        document.getElementById('bookmark').src = 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg';
      }

      let IDTag = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[0].innerText;
      IDTag = IDTag.substring(IDTag.indexOf(':') + 2, IDTag.length);
      this.DeleteSpellAPI(IDTag);
      document.getElementById('SelectedSpell').remove();
      console.log('Deleted');
    }
    // run delete
  }

  async DeleteSpellAPI(IDTag) {
    await this.callAPI(`${this.SPELLS_API}/${IDTag}`, 'delete');
  }

  // eslint-disable-next-line class-methods-use-this,consistent-return
  EditSpell() {
    if (document.getElementById('passwordInput').value === 'Qwerty1234') {
      const cards = document.getElementsByClassName('SpellCheck');
      let CardID;
      let i;
      let SpellCardToSelect;
      // eslint-disable-next-line no-plusplus
      for (i = 0; i < cards.length; i++) {
        if (cards[i].childNodes[0].checked === true) {
          CardID = i + 1;
        }
      }
      this.$bvModal.show('EDITSPELL');
      this.Spell.id = CardID;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  bookmarkSpell() {
    if (document.getElementById('SelectedSpell').className === 'SpellUnBookmarked') {
      document.getElementById('SelectedSpell').className = 'SpellBookmarked';
      this.bookmarkedSpell = this.Spell;
      const Savedname = document.getElementById('SelectedSpell').childNodes[0].childNodes[0].innerHTML;
      const SavedID = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[0].innerHTML;
      const savedLevel = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[1].innerHTML;
      const savedSchool = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[2].innerHTML;
      const savedCastingTime = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[3].innerHTML;
      const savedRange = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[4].innerHTML;
      const savedDuration = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[5].innerHTML;
      const savedDamage = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[6].innerHTML;
      const savedDamageType = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[7].innerHTML;
      const savedSpellEffect = document.getElementById('SelectedSpell').childNodes[0].childNodes[1].childNodes[8].innerHTML;

      this.bookmarkedSpell.name = Savedname.substring(Savedname.indexOf(':') + 1, Savedname.length);
      this.bookmarkedSpell.id = SavedID.substring(SavedID.indexOf(':') + 1, SavedID.length);// id
      this.bookmarkedSpell.level = savedLevel.substring(savedLevel.indexOf(':') + 1, savedLevel.length);// armorClass
      this.bookmarkedSpell.school = savedSchool.substring(savedSchool.indexOf(':') + 1, savedSchool.length);// speed
      this.bookmarkedSpell.castingtime = savedCastingTime.substring(savedCastingTime.indexOf(':') + 1, savedCastingTime.length);// hp
      this.bookmarkedSpell.range = savedRange.substring(savedRange.indexOf(':') + 1, savedRange.length);// spells
      this.bookmarkedSpell.duration = savedDuration.substring(savedDuration.indexOf(':') + 1, savedDuration.length);// armorClass
      this.bookmarkedSpell.damage = savedDamage.substring(savedDamage.indexOf(':') + 1, savedDamage.length);// speed
      this.bookmarkedSpell.damagetype = savedDamageType.substring(savedDamageType.indexOf(':') + 1, savedDamageType.length);// hp
      this.bookmarkedSpell.statuseffect = savedSpellEffect.substring(savedSpellEffect.indexOf(':') + 1, savedSpellEffect.length);// spells
      this.changeBookMarkImage();
      // send to bookmarked
      console.log('bookmarked');
      this.BookMarkSpellAPI(this.bookmarkedSpell);
    } else if (document.getElementById('SelectedSpell').className === 'SpellBookmarked') {
      this.UnBookMarkSpellAPI(this.bookmarkedSpell);
      document.getElementById('SelectedSpell').className = 'SpellUnBookmarked';
      this.changeBookMarkImage();
    }
  }

  // eslint-disable-next-line class-methods-use-this
  changeBookMarkImage() {
    if (document.getElementById('bookmark').src === 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg') {
      document.getElementById('bookmark').src = 'https://visualpharm.com/assets/466/Filled%20Bookmark%20Ribbon-595b40b85ba036ed117dc0ee.svg';
    } else {
      document.getElementById('bookmark').src = 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  OpenCan() {
    if (document.getElementById('trash').src === 'https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg') {
      document.getElementById('trash').src = 'https://visualpharm.com/assets/307/Full%20Trash-595b40b75ba036ed117d6007.svg';
    }
  }

  // eslint-disable-next-line class-methods-use-this
  CloseCan() {
    document.getElementById('trash').src = 'https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg';
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
    // eslint-disable-next-line no-plusplus
    this.CardToBeAddedID++;
    this.Spell.spellname = this.name;
    this.Spell.level = this.level;
    this.Spell.school = this.school;
    this.Spell.casting_time = this.castingtime;
    this.Spell.range = this.range;
    this.Spell.duration = this.duration;
    this.Spell.desc = `Damage: ${this.damage} Damage Type: ${this.damagetype} Status Effect: ${this.statuseffect}`;
    console.log(this.Spell.spellname);
    // Push the name to submitted names
    // Hide the modal manually
    this.$nextTick(() => {
      // this.displaySpell();
      this.AddSpellToCard(this.CardToBeAddedID);
      this.$bvModal.hide('ADDSPELL');
    });
  }

  handleEditSubmit() {
    // Exit when the form isn't valid
    if (!this.checkEditFormValidity()) {
      return;
    }
    this.EditSpellOnCard(this.Spell.id);
    // Hide the modal
    this.$nextTick(() => {
      this.$bvModal.hide('EDITSPELL');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  EditSpellOnCard(ID) {
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[0].innerText = this.name;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[0].innerText = `ID: ${ID}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[1].innerText = `Level:${this.level}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[2].innerText = `School:${this.school}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[3].innerText = `Casting Time:${this.castingtime}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[4].innerText = `Ragne:${this.range}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[5].innerText = `Duration:${this.duration}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[6].innerText = `Damage:${this.damage}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[7].innerText = `Damage Type:${this.damagetype}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[8].innerText = `Status Effect:${this.statuseffect}`;
  }

  AddSpellToCard(ID) {
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[0].innerText = this.name;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[0].innerText = `ID: ${ID}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[1].innerText = `Level:${this.level}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[2].innerText = `School:${this.school}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[3].innerText = `Casting Time:${this.castingtime}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[4].innerText = `Ragne:${this.range}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[5].innerText = `Duration:${this.duration}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[6].innerText = `Damage:${this.damage}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[7].innerText = `Damage Type:${this.damagetype}`;
    document.getElementsByClassName('SpellCheck')[ID - 1].parentNode.childNodes[1].childNodes[8].innerText = `Status Effect:${this.statuseffect}`;
    this.saveSpell(this.Spell);
  }

  // eslint-disable-next-line class-methods-use-this
  RefreshDB() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  async saveSpell(Spell) {
    const url = this.SPELLS_API + (this.isNew ? '' : `/${Spell.id}`);
    const method = this.isNew ? 'post' : 'put';
    //
    try {
      const data = await this.callAPI(
        url,
        method,
        Spell,
      );
      this.$emit(
        Spell.id === data.id ? 'updated' : 'added',
        Object.assign(Spell, data),
      );
    } finally {
      console.log('Spell Saved');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,class-methods-use-this
  async BookMarkSpellAPI(SPELL) {
    const url = `${this.SPELLS_API}/${SPELL.name}`;
    const method = 'post';
    //
    await this.callAPI(
      url,
      method,
      SPELL,
    );
  }

  async UnBookMarkSpellAPI(SPELL) {
    const url = `${this.SPELLS_API}/${SPELL.name}`;
    const method = 'delete';
    //
    await this.callAPI(
      url,
      method,
      SPELL,
    );
  }
}
</script>
<style scoped>
.overflow-auto{
  color: black;
}
.FunctionCards{
  display: flex;
  justify-content: center;
  background-color: #4682B4;
}
.card{
  margin: 20px;
  width: 75%;
  background-color: #4682B4;
}
#SpellCard{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: white;
}

#SelectedSpell{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: #7a7a7a;
}
.DmPassword
{
  display: flex;
  justify-content: center;
}
#scrollspy-nested{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: #7a7a7a;
}

</style>
