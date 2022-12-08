<template>
  <div id="Parrent">
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
            label="ID"
            label-for="id-input"
            invalid-feedback="ID is required"
            :state="IDState" >
            <b-form-input
              id="id-input"
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
            >
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
            >
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
            >
            </b-form-textarea>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <div id="scrollspy-nested" style="position:relative; height:350px; overflow-y:auto">
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
          <b-button v-b-modal.EDITSPELL> <img src="https://visualpharm.com/assets/144/Edit-595b40b65ba036ed117d10d7.svg" alt="Image" class="card-img-top" height="232px">Edit Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">

        <div class="card-body">
          <b-button @click="bookmarkSpell"><img id="bookmark" src="https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg" alt="Image" class="card-img-top" height="232px">Bookmark Spell</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">

        <div class="card-body">
          <b-button @mouseover="OpenCan" @focus="OpenCan" @mouseleave="CloseCan" @focusout="CloseCan" @click="deleteSpell"><img id="trash" src="https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg" alt="Image" class="card-img-top" height="232px">Delete Spell</b-button></div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="RefreshDB"><img id="refresh" src="https://visualpharm.com/assets/175/Data%20Backup-595b40b75ba036ed117d93c3.svg" alt="Image" class="card-img-top" height="232px">Refresh Spells</b-button>
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
  deleteSpell() {
    if (document.getElementById('bookmark').src === 'https://visualpharm.com/assets/466/Filled%20Bookmark%20Ribbon-595b40b85ba036ed117dc0ee.svg') {
      document.getElementById('bookmark').src = 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg';
    }
    document.getElementById('SelectedSpell').remove();
    console.log('Deleted');
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
    } else if (document.getElementById('SelectedSpell').className === 'SpellBookmarked') {
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
      this.AddSpellToCard();
      this.$bvModal.hide('ADDSPELL');
    });
  }

  handleEditSubmit() {
    // Exit when the form isn't valid
    if (!this.checkEditFormValidity()) {
      return;
    }
    this.Spell.id = this.id;
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
      this.$bvModal.hide('EDITSPELL');
    });
  }

  AddSpellToCard() {
    document.getElementById('SpellID').innerHTML = document.getElementById('SpellID').innerText + this.Spell.id;
    document.getElementById('SpellName').innerHTML = document.getElementById('SpellName').innerText + this.Spell.name;
    document.getElementById('SpellLevel').innerHTML = document.getElementById('SpellLevel').innerText + this.Spell.level;
    document.getElementById('SpellSchool').innerHTML = document.getElementById('SpellSchool').innerText + this.Spell.school;
    document.getElementById('SpellCastingTime').innerHTML = document.getElementById('SpellCastingTime').innerText + this.Spell.castingtime;
    document.getElementById('SpellRange').innerHTML = document.getElementById('SpellRange').innerText + this.Spell.range;
    document.getElementById('SpellDuration').innerHTML = document.getElementById('SpellDuration').innerText + this.Spell.duration;
    document.getElementById('SpellDamage').innerHTML = document.getElementById('SpellDamage').innerText + this.Spell.damage;
    document.getElementById('SpellDamageType').innerHTML = document.getElementById('SpellDamageType').innerText + this.Spell.damagetype;
    document.getElementById('SpellEffect').innerHTML = document.getElementById('SpellEffect').innerText + this.Spell.statuseffect;
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
.overflow-auto{
  color: black;
}

.FunctionCards{
  display: flex;
  justify-content: center;
  background-color: #2c3e50;
}
.card{
  margin: 20px;
  width: 75%;
  background-color: #2c3e50;
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
</style>
