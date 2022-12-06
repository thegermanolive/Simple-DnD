<template>
  <div class="Bookmark">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <b-card
        title="Spell Title"
        tag="div"
        style="max-width: 25em"
        class="lg-1 mb-2">
        <b-card-text>
          <b-card-sub-title class="pl-1 pb-2">Level</b-card-sub-title>
          <b-list-group flush style="font-size: 12px" class="border-top border-bottom">
            <b-list-group-item class="p-1">School</b-list-group-item>
            <b-list-group-item class="p-1">Casting Time</b-list-group-item>
            <b-list-group-item class="p-1">Range</b-list-group-item>
            <b-list-group-item class="p-1">Duration</b-list-group-item>
          </b-list-group>
          <b-card-body class="pt-2 px-1">
            <b-card-text>Description of spell</b-card-text>
          </b-card-body>
        </b-card-text>
      </b-card>
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
    BCard, BCardText, BCardSubTitle, BCardBody, BListGroup, BListGroupItem,
  },
})
export default class BookmarkView extends Mixins(GlobalMixin) {}
</script>

<style scoped>

</style>
