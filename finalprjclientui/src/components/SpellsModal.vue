<!--/https://vuejs.org/examples/#modal/-->
<!--NEED TO CHANGE THIS, THIS IS JUST AN EXAMPLE TO SEE IF IT WORKS, AND NOT JUST ME-->
<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1>
            Add A Spell
          </h1>
        </div>
        <div class="modal-body">
          <LoginForm/>
        </div>
        <div class="modal-footer">
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
import { Component, Prop, Vue } from 'vue-property-decorator';
import LoginForm from '@/components/LoginForm.vue';

@Component({
  components: {
    LoginForm,
  },
  props: {
    show: Boolean,
  },

})
// export default {
//   props: {
//     show: Boolean,
//   },
// };

export default class SpellsModal extends Vue {}
</script>

<style>
#submit {
  margin-right: 0px;
}
</style>
