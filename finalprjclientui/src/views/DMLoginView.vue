<template>
  <div class="DM-Login">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1>Login</h1>
    </div>
    <div>
      <LoginForm/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator';
import {
  BForm, BFormText, BFormInput, BFormGroup,
} from 'bootstrap-vue';
import LoginForm from '@/components/LoginForm.vue';

Vue.component('BForm', BForm);
Vue.component('BFormText', BFormText);
Vue.component('BFormInput', BFormInput);
Vue.component('BFormGroup', BFormGroup);
@Component({
  components: {
    LoginForm,
  },
})

export default class DMLoginView extends Vue {}
</script>

<style scoped>
h1{
  color: black;
}
div{
  background: #2c3e50;
}

</style>
