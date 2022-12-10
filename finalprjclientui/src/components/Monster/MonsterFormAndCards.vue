<template>
  <div id="MonsterPage">
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
            label="Challenge Rating"
            label-for="Challenge-input"
            invalid-feedback="Challenge Rating is required"
            :state="ChallengeState" >
            <b-form-input
              id="Challenge-input"
              type="number"
              v-model="challenge"
              :state="ChallengeState"
              placeholder="Challenge Rating" >
            </b-form-input>
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
          <b-form-group
            label="Attacks"
            label-for="Attacks-input"
            :state="AttackState" >
            <b-form-textarea
              id="Attacks-input"
              v-model="attack"
              :state="Attacks-input"
              placeholder="Attacks" ></b-form-textarea>
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
            label="Challenge Rating"
            label-for="Challenge-input"
            invalid-feedback="Challenge Rating is required"
            :state="ChallengeState" >
            <b-form-input
              id="Challenge-input"
              type="number"
              v-model="challenge"
              :state="ChallengeState"
              placeholder="Challenge Rating" >
            </b-form-input>
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
          <b-form-group
            label="Attacks"
            label-for="Attacks-input"
            :state="AttackState" >
            <b-form-textarea
              id="Attacks-input"
              v-model="attack"
              :state="Attacks-input"
              placeholder="Attacks" ></b-form-textarea>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
    <div
      id="scrollspy-nested"
      style="position:relative;
      background-color: #cccccc;
      height:700px;
      width:2000px;
      overflow-y:auto">
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
      <article id="MonsterCard" class="MonsterUnBookmarked" style="max-width: 20rem;">
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
    </div>
    <div class="FunctionCards">
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button v-b-modal.ADDMONSTER> <img src="https://visualpharm.com/assets/366/Add%20Property-595b40b75ba036ed117d532d.svg" alt="Image" class="card-img-top" height="232px">Add Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="EditMonster"><img src="https://visualpharm.com/assets/144/Edit-595b40b65ba036ed117d10d7.svg" alt="Image" class="card-img-top" height="232px"> Edit Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="bookmarkMonster"><img id="bookmark" src="https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg" alt="Image" class="card-img-top" height="232px">Bookmark Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @mouseover="OpenCan" @focus="OpenCan" @mouseleave="CloseCan" @focusout="CloseCan" @click="DeleteMonsterUI"><img id="trash" src="https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg" alt="Image" class="card-img-top" height="232px">Delete Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="RefreshDB"><img id="refresh" src="https://visualpharm.com/assets/175/Data%20Backup-595b40b75ba036ed117d93c3.svg" alt="Image" class="card-img-top" height="232px">Refresh Monster</b-button>
        </div>
      </article>
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
Vue.component('BFormTextarea', BFormTextarea);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component
export default class MonsterForm extends Mixins(GlobalMixin) {
  id = '';

  IDState = null;

  name = '';

  nameState = null;

  challenge = '';

  ChallengeState = null;

  armorclass = '';

  ArmorClassState =null;

  hitpoints = '';

  HitPointsState= null;

  speed ='';

  SpeedState =null;

  spell ='';

  SpellState =null;

  attack= '';

  AttackState=null;

  Monster = {
    id: '',
    monstername: '',
    cr: '',
    armorclass: '',
    hitpoints: '',
    speed: '',
    spelldesc: '',
    spells: '',
    attack: '',
  };

  CardToBeAddedID = 0;

  tempMonster = this.Monster; // sets Monster Object as the data to be sent

  /**
   // eslint-disable-next-line max-len
   * This Method runs whenever a checkbox is
   * changed to check what Monster the user wants to work with
   */
  // eslint-disable-next-line class-methods-use-this
  selectMonster() {
    const cards = document.getElementsByClassName('MonsterCheck');
    let i;
    let MonsterCardToSelect;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < cards.length; i++) {
      if (cards[i].childNodes[0].checked === true) {
        if (cards[i].parentNode.parentNode.className === 'MonsterBookmarked') {
          this.changeBookMarkImage();
        }
        MonsterCardToSelect = i;
      } else {
        if (cards[i].parentNode.parentNode.className === 'MonsterBookmarked') {
          this.changeBookMarkImage();
        }
        cards[i].parentNode.parentNode.id = 'MonsterCard';
      }
    }
    if (cards[MonsterCardToSelect].parentNode.parentNode.id !== 'SelectedMonster') {
      cards[MonsterCardToSelect].parentNode.parentNode.id = 'SelectedMonster';
    }
    // eslint-disable-next-line no-empty
  }

  // do the delete
  // eslint-disable-next-line class-methods-use-this
  DeleteMonsterUI() {
    if (document.getElementById('bookmark').src === 'https://visualpharm.com/assets/466/Filled%20Bookmark%20Ribbon-595b40b85ba036ed117dc0ee.svg') {
      document.getElementById('bookmark').src = 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg';
    }
    // IDfordelete = document .getElementById('SelectedMonster')
    // this.deleteMonsterAPI
    // eslint-disable-next-line no-unused-expressions

    let IDTag = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[0].innerText;
    IDTag = IDTag.substring(IDTag.indexOf(':') + 2, IDTag.length);
    this.DeleteMonsterAPI(IDTag);
    document.getElementById('SelectedMonster').remove();
    console.log('Deleted');
  }

  async DeleteMonsterAPI(IDTag) {
    await this.callAPI(`${this.MONSTER_API}/${IDTag}`, 'delete');
  }

  EditMonster() {
    const cards = document.getElementsByClassName('MonsterCheck');
    let CardID;
    let i;
    let SpellCardToSelect;
    // eslint-disable-next-line no-plusplus
    for (i = 0; i < cards.length; i++) {
      if (cards[i].childNodes[0].checked === true) {
        CardID = i + 1;
      }
    }
    this.$bvModal.show('EDITMONSTER');
    this.Monster.id = CardID;
  }

  // eslint-disable-next-line class-methods-use-this
  bookmarkMonster() {
    if (document.getElementById('SelectedMonster').className === 'MonsterUnBookmarked') {
      document.getElementById('SelectedMonster').className = 'MonsterBookmarked';
      this.bookmarkedMonster = this.Monster;
      const Savedname = document.getElementById('SelectedMonster').childNodes[0].childNodes[0].innerHTML;
      const SavedID = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[0].innerHTML;
      const SavedCR = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[1].innerHTML;
      const savedAC = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[2].innerHTML;
      const savedSpeed = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[3].innerHTML;
      const savedHP = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[4].innerHTML;
      const savedSpells = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[5].innerHTML;
      const savedAttacks = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[6].innerHTML;

      this.bookmarkedMonster.name = Savedname.substring(Savedname.indexOf(':') + 1, Savedname.length);
      this.bookmarkedMonster.id = SavedID.substring(SavedID.indexOf(':') + 1, SavedID.length);// id
      this.bookmarkedMonster.challenge = SavedCR.substring(SavedID.indexOf(':') + 1, SavedID.length);
      this.bookmarkedMonster.armorclass = savedAC.substring(savedAC.indexOf(':') + 1, savedAC.length);// armorClass
      this.bookmarkedMonster.speed = savedSpeed.substring(savedSpeed.indexOf(':') + 1, savedSpeed.length);// speed
      this.bookmarkedMonster.hitpoints = savedHP.substring(savedHP.indexOf(':') + 1, savedHP.length);// hp
      this.bookmarkedMonster.spell = savedSpells.substring(savedSpells.indexOf(':') + 1, savedSpells.length);// spells
      this.bookmarkedMonster.attack = savedAttacks.substring(savedSpells.indexOf(':') + 1, savedSpells.length);
      console.log(this.bookmarkedMonster.name);
      this.changeBookMarkImage();
      // send to bookmarked
      console.log('bookmarked');
      this.BookMarkMonsterAPI(this.bookmarkedMonster);
      // eslint-disable-next-line no-empty
    } else if (document.getElementById('SelectedMonster').className === 'MonsterBookmarked') {
      this.UnBookMarkMonsterAPI(this.bookmarkedMonster);
      document.getElementById('SelectedMonster').className = 'MonsterUnBookmarked';
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
    this.ArmorClassState = valid;
    this.ChallengeState = valid;
    this.HitPointsState = valid;
    this.SpeedState = valid;
    this.AttackState = valid;
    return valid;
  }

  checkEditFormValidity() {
    const valid = this.$refs.form.checkValidity();
    this.IDState = valid;
    this.nameState = valid;
    this.ArmorClassState = valid;
    this.ChallengeState = valid;
    this.HitPointsState = valid;
    this.SpeedState = valid;
    this.AttackState = valid;
    return valid;
  }

  resetModal() {
    this.id = '';
    this.IDState = null;
    this.name = '';
    this.nameState = null;
    this.armorclass = '';
    this.challenge = '';
    this.ChallengeState = null;
    this.ArmorClassState = null;
    this.hitpoints = '';
    this.HitPointsState = null;
    this.speed = '';
    this.SpeedState = null;
    this.spell = '';
    this.SpellState = null;
    this.attack = '';
    this.AttackState = null;
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
    this.Monster.id = this.CardToBeAddedID;
    this.Monster.monstername = this.name;
    this.Monster.cr = this.challenge;
    this.Monster.armorclass = this.armorclass;
    this.Monster.hitpoints = this.hitpoints;
    this.Monster.speed = this.speed;
    this.Monster.spelldesc = this.spell;
    this.Monster.spells = this.spell;
    this.Monster.attacks = this.attack;
    console.log(this.Monster.name);
    // function to push data to api DB
    // Hide the modal manually
    this.$nextTick(() => {
      this.AddMonsterToCard(this.CardToBeAddedID);
      this.$bvModal.hide('ADDMONSTER');
    });
  }

  handleEditSubmit() {
    // Exit when the form isn't valid
    if (!this.checkEditFormValidity()) {
      return;
    }
    // this.Monster.id = this.id;
    // this.Monster.name = this.name;
    // this.Monster.armorclass = this.armorclass;
    // this.Monster.hitpoints = this.hitpoints;
    // this.Monster.speed = this.speed;
    // this.Monster.spell = this.spell;
    // Push the name to submitted names
    // Hide the modal manually
    this.EditMonsterOnCard(this.Monster.id);
    this.$nextTick(() => {
      this.$bvModal.hide('EDITMONSTER');
    });
  }

  // eslint-disable-next-line class-methods-use-this
  EditMonsterOnCard(ID) {
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[0].innerText = this.name;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[0].innerText = `ID: ${ID}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[1].innerText = `Challenge Rating: ${this.challenge}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[2].innerText = `AC: ${this.armorclass}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[3].innerText = `Speed: ${this.speed}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[4].innerText = `HP: ${this.hitpoints}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[5].innerText = `Spells: ${(this.spell).split(' ')}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[6].innerText = `Attacks: ${(this.attack).split(' ')}`;
  }

  AddMonsterToCard(ID) {
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[0].innerText = this.name;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[0].innerText = `ID: ${ID}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[1].innerText = `Challenge Rating: ${this.challenge}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[2].innerText = `AC: ${this.armorclass}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[3].innerText = `Speed: ${this.speed}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[4].innerText = `HP: ${this.hitpoints}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[5].innerText = `Spells: ${(this.spell).split(' ')}`;
    document.getElementsByClassName('MonsterCheck')[ID - 1].parentNode.childNodes[1].childNodes[6].innerText = `Attacks: ${(this.attack).split(' ')}`;
    this.saveMonster(this.Monster);
  }

  // eslint-disable-next-line class-methods-use-this
  RefreshDB() {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }

  async saveMonster(Monster) {
    const url = this.SPELLS_API + (this.isNew ? '' : `/${Monster.id}`);
    const method = this.isNew ? 'post' : 'put';
    //
    try {
      const data = await this.callAPI(
        url,
        method,
        Monster,
      );
      this.$emit(
        Monster.id === data.id ? 'updated' : 'added',
        Object.assign(Monster, data),
      );
    } finally {
      console.log('Spell Saved');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function,class-methods-use-this
  async BookMarkMonsterAPI(MONSTER) {
    const url = `${this.BOOKMARK_API}/${MONSTER.name}`;
    const method = 'post';
    //
    await this.callAPI(
      url,
      method,
      MONSTER,
    );
  }

  async UnBookMarkMonsterAPI(MONSTER) {
    const url = `${this.BOOKMARK_API}/${MONSTER.name}`;
    const method = 'delete';
    //
    await this.callAPI(
      url,
      method,
      MONSTER,
    );
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
#MonsterCard{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: white;
}

#SelectedMonster{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: #7a7a7a;
}
#scrollspy-nested{
  margin: 20px;
  width: 75%;
  display: inline-block;
  background-color: #7a7a7a;
}
</style>
