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
    <div>
      <vue-tile-grid id="example-grid">
        <link-tile id="link" text="Example Link" route="/"></link-tile>
        <content-sm id="content-sm">
          <p>Here is some small content.</p>
        </content-sm>
        <content-md id="content-md">
          <p>Here is some medium content.</p>
        </content-md>
        <content-lg id="content-lg">
          <p>Here is large content.</p>
        </content-lg>
      </vue-tile-grid>
    </div>

  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src


export default class HomeView extends Vue {}
</script>
