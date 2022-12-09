<template>
  <div class="Bookmark">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <div>
      <h1 id="fr">
        Bookmarks
      </h1>
    </div>
    <div>
      <BookmarkCards/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Mixins, Vue } from 'vue-property-decorator';
import {
  CardPlugin, BCard, BCardText, BCardSubTitle, BCardBody, BListGroup, BListGroupItem,
} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import BookmarkCards from '@/components/Bookmark/BookmarkCards.vue';

Vue.component('BCard', BCard);
Vue.component('BCardText', BCardText);
Vue.component('BCardSubTitle', BCardSubTitle);
Vue.component('BCardBody', BCardBody);
Vue.component('BListGroup', BListGroup);
Vue.component('BListGroupItem', BListGroupItem);

Vue.use(CardPlugin);
@Component({
  components: {
    BookmarkCards,
    BCard,
    BCardText,
    BCardSubTitle,
    BCardBody,
    BListGroup,
    BListGroupItem,
  },
})
export default class BookmarkView extends Mixins(GlobalMixin) {}
</script>
<style scoped>
.Bookmark{
  background: #4682B4;
  color: black;
  zoom: 75%
}
</style>
