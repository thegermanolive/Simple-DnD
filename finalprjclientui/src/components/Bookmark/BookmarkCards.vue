<template>
  <div id="Parrent">
    <div>
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
    <div id="scrollspy-nested" style="position:relative; height:350px; overflow-y:auto">
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">SPELLS:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
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
    </div>
    <div class="FunctionCards">
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="RefreshDB"><img id="refresh" src="https://visualpharm.com/assets/175/Data%20Backup-595b40b75ba036ed117d93c3.svg" alt="Image" class="card-img-top" height="232px">Refresh Bookmarks</b-button>
        </div>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  CardPlugin, LayoutPlugin, BCard, BCardText, BCardSubTitle, BCardBody, BListGroup, BListGroupItem,
} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BCardSubTitle', BCardSubTitle);
Vue.component('BCardBody', BCardBody);
Vue.component('BListGroup', BListGroup);
Vue.component('BListGroupItem', BListGroupItem);

Vue.use(CardPlugin);
@Component({
  components: {
    BCard,
    BCardText,
    BCardSubTitle,
    BCardBody,
    BListGroup,
    BListGroupItem,
  },
})
export default class BookmarkCards extends Mixins(GlobalMixin) {}
</script>

<style scoped>
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
#MonsterCard{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: white;
}
#SpellCard{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: white;
}
</style>
