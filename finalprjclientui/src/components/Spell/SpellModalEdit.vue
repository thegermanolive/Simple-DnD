<!--/https://vuejs.org/examples/#modal/-->
<!--NEED TO CHANGE THIS, THIS IS JUST AN EXAMPLE TO SEE IF IT WORKS, AND NOT JUST ME-->
<template>
  <div v-if="show" class="SpellModalmask">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div class="MonsterSpellModalwrapper">
      <div class="SpellModalcontainer">
        <div class="SpellModalheader">
          <h1>
            Edit A Spell
          </h1>
        </div>
        <SpellFormEdit/>
        <div class="SpellModalfooter">
          <slot name="footer">
            <button class="btn btn-primary" id="submit" type="submit" @click="$emit('close')">
              Submit</button>
            <button class="btn btn-primary" @click="$emit('close')">Cancel</button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SpellFormEdit from '@/components/Spell/SpellFormEdit.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    SpellFormEdit,
  },
  props: {
    show: Boolean,
  },

})
export default class SpellsModalEdit extends Vue {}
</script>

<style>
#submit {
  margin-right: 5px;
}

.SpellModalmask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.SpellModalwrapper {
  display: table-cell;
  vertical-align: middle;
}

.SpellModalcontainer {
  width: 800px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #9e7442;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.SpellModalheader h3 {
  margin-top: 0;
  color: #42b983;
}

.SpellModalbody {
  margin: 500px 0;
}

.SpellModaldefault-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.SpellModalenter-from {
  opacity: 0;
}

.SpellModalleave-to {
  opacity: 0;
}

.SpellModalenter-from .SpellModalcontainer,
.SpellModalleave-to .SpellModalcontainer {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
