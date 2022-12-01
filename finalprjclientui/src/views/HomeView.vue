<template>
  <div class="home">
    <h1>Welcome to the Davsch Dungeons and Dragons Repository</h1>
    <p>
      We Provide a Way for you to Store and Edit, your Monsters, Weapons,
      and Spells for your campaign or one-shots for easy access for
      you and your players To get  started Select one of the tabs above
    </p>
    <p>
      Or one Of the tiles below
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class HomeView extends Vue {}
</script>
<style>
  .home{
    color: black;
  }
</style>
