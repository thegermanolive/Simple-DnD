<template>
  <div class="Unauthorized">
    <h1>Unauthorized</h1>
    <p>It appears that you are not logged in, To
      view monsters please Click the button above titled "DM-Login"</p>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BForm, BFormText, BFormInput, BFormGroup,
} from 'bootstrap-vue';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
@Component({
  components: {
  },
})

export default class UnAuthorized extends Vue {
}
</script>
<style scoped>
h1 {
  color: black;
}
.Unauthorized{
  justify-content: center;
}
div {
  background: #4682B4;
}

</style>
