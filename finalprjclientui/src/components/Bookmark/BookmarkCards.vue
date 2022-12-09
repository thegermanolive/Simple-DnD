<template>
  <div id="Bookmarks">
    <div id="scrollspy-nested" style="position:relative; background-color: #cccccc;
   height:700px; width:2000px; overflow-y:auto">
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterCR">Challenge Rating:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">Spells:</li>
            <li id="MonsterAttacks">Attacks:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
        </div>
      </article>
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterCR">Challenge Rating:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">Spells:</li>
            <li id="MonsterAttacks">Attacks:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
        </div>
      </article>
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterCR">Challenge Rating:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">Spells:</li>
            <li id="MonsterAttacks">Attacks:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
        </div>
      </article>
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterCR">Challenge Rating:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">Spells:</li>
            <li id="MonsterAttacks">Attacks:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
        </div>
      </article>
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="MonsterName">Name:</h1>
          <ul id="MonsterDataList">
            <li id="MonsterID">ID:</li>
            <li id="MonsterCR">Challenge Rating:</li>
            <li id="MonsterAc">AC:</li>
            <li id="MonsterSpeed">Speed:</li>
            <li id="MonsterHP">HP:</li>
            <li id="MonsterSpells">Spells:</li>
            <li id="MonsterAttacks">Attacks:</li>
          </ul>
          <b-form-checkbox id="checkbox" class="MonsterCheck" @change="selectMonster"/>
        </div>
      </article>
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="ObjectName">Spell</h1>
          <ul id="SpellDataList">
            <li id="SpellID">ID:</li>
            <li id="SpellName">Name:</li>
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
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="ObjectName">Spell</h1>
          <ul id="SpellDataList">
            <li id="SpellID">ID:</li>
            <li id="SpellName">Name:</li>
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
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="ObjectName">Spell</h1>
          <ul id="SpellDataList">
            <li id="SpellID">ID:</li>
            <li id="SpellName">Name:</li>
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
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="ObjectName">Spell</h1>
          <ul id="SpellDataList">
            <li id="SpellID">ID:</li>
            <li id="SpellName">Name:</li>
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
      <article id="BookMarkCard" class="Bookmark" style="max-width: 20rem;">
        <div id="test" class="card-body">
          <h1 id="ObjectName">Spell</h1>
          <ul id="SpellDataList">
            <li id="SpellID">ID:</li>
            <li id="SpellName">Name:</li>
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
  CardPlugin, BCard, BCardText, BCardSubTitle, BCardBody, BListGroup, BListGroupItem,
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
export default class BookmarkCards extends Mixins(GlobalMixin) {
  // eslint-disable-next-line class-methods-use-this
  RefreshDB() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }
}
</script>

<style scoped>
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
#BookMarkCard{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: white;
}
#scrollspy-nested{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: #7a7a7a;
}
</style>
