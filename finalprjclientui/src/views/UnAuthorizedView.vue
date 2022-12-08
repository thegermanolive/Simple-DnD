<template>
  <div className="DM-Login">
    <meta charSet="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous">
    <div>
      <h1>UnAuthorized</h1>
    </div>
    <p>It appears that you are not logged in, To
      view monsters please Click either the button bellow, or the button above titled "DM-Login"</p>
    <div>
    </div>
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

div {
  background: #2c3e50;
}

</style>
