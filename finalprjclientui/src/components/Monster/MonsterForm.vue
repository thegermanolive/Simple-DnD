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
    <div class="FunctionCards">
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button v-b-modal.ADDMONSTER> <img src="https://visualpharm.com/assets/366/Add%20Property-595b40b75ba036ed117d532d.svg" alt="Image" class="card-img-top" height="232px">Add Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button v-b-modal.EDITMONSTER><img src="https://visualpharm.com/assets/144/Edit-595b40b65ba036ed117d10d7.svg" alt="Image" class="card-img-top" height="232px"> Edit Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @click="bookmarkMonster"><img id="bookmark" src="https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg" alt="Image" class="card-img-top" height="232px">Bookmark Monster</b-button>
        </div>
      </article>
      <article class="card" style="max-width: 20rem;">
        <div class="card-body">
          <b-button @mouseover="OpenCan" @focus="OpenCan" @mouseleave="CloseCan" @focusout="CloseCan" @click="DeleteMonster"><img id="trash" src="https://visualpharm.com/assets/441/Empty%20Trash-595b40b75ba036ed117d5dc0.svg" alt="Image" class="card-img-top" height="232px">Delete Monster</b-button>
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
Vue.component('BFormTextarea', BFormTextarea);
Vue.directive('BModal', VBModal);
Vue.use(ModalPlugin);
@Component
export default class MonsterForm extends Mixins(GlobalMixin) {
  id = '';

  IDState = null;

  name = '';

  nameState = null;

  armorclass = '';

  ArmorClassState =null;

  hitpoints = '';

  HitPointsState= null;

  speed ='';

  SpeedState =null;

  spell ='';

  SpellState =null;

  Monster = {
    id: '',
    name: '',
    armorclass: '',
    hitpoints: '',
    speed: '',
    spell: '',
  };

  tempMonster = this.Monster; // sets Monster Object as the data to be sent

  // bookmarkedMonster = this.Monster;
  //  do the book mark
  // bookmarkMonster() {
  //
  // }

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
  DeleteMonster() {
    if (document.getElementById('bookmark').src === 'https://visualpharm.com/assets/466/Filled%20Bookmark%20Ribbon-595b40b85ba036ed117dc0ee.svg') {
      document.getElementById('bookmark').src = 'https://visualpharm.com/assets/468/Bookmark-595b40b85ba036ed117dbf35.svg';
    }
    document.getElementById('SelectedMonster').remove();
    console.log('Deleted');
  //  run APIdeletehere
  }

  // eslint-disable-next-line class-methods-use-this
  bookmarkMonster() {
    if (document.getElementById('SelectedMonster').className === 'MonsterUnBookmarked') {
      document.getElementById('SelectedMonster').className = 'MonsterBookmarked';
      this.bookmarkedMonster = this.Monster;
      const Savedname = document.getElementById('SelectedMonster').childNodes[0].childNodes[0].innerHTML;
      const SavedID = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[0].innerHTML;
      const savedAC = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[1].innerHTML;
      const savedSpeed = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[1].innerHTML;
      const savedHP = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[1].innerHTML;
      const savedSpells = document.getElementById('SelectedMonster').childNodes[0].childNodes[1].childNodes[1].innerHTML;

      this.bookmarkedMonster.name = Savedname.substring(Savedname.indexOf(':') + 1, Savedname.length);
      this.bookmarkedMonster.id = SavedID.substring(SavedID.indexOf(':') + 1, SavedID.length);// id
      this.bookmarkedMonster.armorclass = savedAC.substring(savedAC.indexOf(':') + 1, savedAC.length);// armorClass
      this.bookmarkedMonster.speed = savedSpeed.substring(savedSpeed.indexOf(':') + 1, savedSpeed.length);// speed
      this.bookmarkedMonster.hitpoints = savedHP.substring(savedHP.indexOf(':') + 1, savedHP.length);// hp
      this.bookmarkedMonster.spell = savedSpells.substring(savedSpells.indexOf(':') + 1, savedSpells.length);// spells
      this.changeBookMarkImage();
      // send to bookmarked
      console.log('bookmarked');
      // eslint-disable-next-line no-empty
    } else if (document.getElementById('SelectedMonster').className === 'MonsterBookmarked') {
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
    console.log(this.Monster.name);
    this.Monster.id = '';
    this.Monster.name = this.name;
    this.Monster.armorclass = this.armorclass;
    this.Monster.hitpoints = this.hitpoints;
    this.Monster.speed = this.speed;
    this.Monster.spell = this.spell;
    console.log(this.Monster.name);
    // function to push data to api DB
    // Hide the modal manually
    this.$nextTick(() => {
      this.AddMonsterToCard();
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

  AddMonsterToCard() {
    document.getElementById('MonsterID').innerHTML = document.getElementById('MonsterID').innerText + this.Monster.id;
    document.getElementById('MonsterName').innerHTML = document.getElementById('MonsterName').innerText + this.Monster.name;
    document.getElementById('MonsterAc').innerHTML = document.getElementById('MonsterAc').innerText + this.Monster.armorclass;
    document.getElementById('MonsterSpeed').innerHTML = document.getElementById('MonsterSpeed').innerText + this.Monster.speed;
    document.getElementById('MonsterHP').innerHTML = document.getElementById('MonsterHP').innerText + this.Monster.hitpoints;
    document.getElementById('MonsterSpells').innerHTML = document.getElementById('MonsterSpells').innerText + (this.Monster.spell).split(' ');
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

  // async saveMonster() {
  //   this.violation = await this.getErrorMessages(this.tempMonster);
  //   if (Object.keys(this.violation).length === 0) {
  //     this.setBusy(true);
  //     const url = this.MONSTER_API + (this.isNew ? '' : `/${this.tempMonster.id}`);
  //     const method = this.isNew ? 'post' : 'put';
  //     //
  //     try {
  //       const data = await this.callAPI(
  //         url,
  //         method,
  //         this.tempMonster,
  //       ); // returns a promise object
  //       //       // emit the action that occurred along
  //       with the data received from the api server
  //       //       // to be used by the parent to update the b-table of students
  //       this.$emit(
  //         this.tempMonster.id === data.id ? 'updated' : 'added',
  //         Object.assign(this.Monster, data),
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
  // async deleteMonster() {
  //   const icon = this.$refs.iconDelete;
  //   this.setBusy(true);
  //   this.animate(icon, true);
  //
  //   try {
  //     await this.callAPI(`${this.MONSTER_API}/${this.Monster.id}`, 'delete');
  //     this.tempStudent = new Monster(); // reset the text boxes since student is deleted
  //     this.$emit('deleted', this.Monster);
  //   } catch (err: any) {
  //     this.$emit('reset', this.Monster);
  //   } finally {
  //     this.setBusy(false);
  //     this.animate(icon, false);
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
  //   this.tempStudent = Object.assign(new Monster(), this.Monster);
  //   this.$emit('cancelled', this.Monster);
  // }
}
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
  background-color: white;
}

#SelectedMonster{
  background-color: #7a7a7a;
}

</style>
