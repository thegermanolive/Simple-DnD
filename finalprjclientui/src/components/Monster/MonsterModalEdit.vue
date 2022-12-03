<!--/https://vuejs.org/examples/#modal/-->
<!--NEED TO CHANGE THIS, THIS IS JUST AN EXAMPLE TO SEE IF IT WORKS, AND NOT JUST ME-->
<template>
  <div v-if="show" class="MonsterModal-mask">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">

    <div class="MonsterMonsterModal-wrapper">
      <div class="MonsterModal-container">
        <div class="MonsterModal-header">
          <h1>
            Edit A Monster
          </h1>
        </div>
        <MonsterForm/>
        <div class="MonsterModal-footer">
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
import MonsterForm from '@/components/Monster/MonsterFormEdit.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MonsterForm,
  },
  props: {
    show: Boolean,
  },

})
export default class MonsterModalEdit extends Vue {}
</script>

<style>
#submit {
  margin-right: 5px;
}

.MonsterModal-mask {
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

.MonsterModal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.MonsterModal-container {
  width: 800px;
  margin: 0px auto;
  padding: 20px 20px;
  background-color: #9e7442;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.MonsterModal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.MonsterModal-default-button {
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

.MonsterModal-enter-from {
  opacity: 0;
}

.MonsterModal-leave-to {
  opacity: 0;
}

.MonsterModal-enter-from .MonsterModal-container,
.MonsterModal-leave-to .MonsterModal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
