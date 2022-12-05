// mixins.js

import { Component, Prop, Vue } from 'vue-property-decorator';
import { validate, ValidationError } from 'class-validator';

// declare global constants using the UPPERCASE_SNAKE notation
const BASE_URL = 'http://localhost:5050';
const BOOKMARK_API = `${BASE_URL}/bookmarks`;
const MONSTER_API = `${BASE_URL}/monsters`;
const SPELLS_API = `${BASE_URL}/spells`;
const USER_API = `${BASE_URL}/users`;

@Component
export default class GlobalMixin extends Vue {
  // re-add all the globals again in the vue object
  // these var are now GLOBAL immutable variables
  BASE_URL = BASE_URL

  BOOKMARK_API = BOOKMARK_API

  MONSTER_API = MONSTER_API

  SPELLS_API = SPELLS_API

  USER_API = USER_API

  isBusy = false;

  setBusy(state:boolean) {
    this.isBusy = state;
    this.$emit('busy', state);
  }

  // // only done up to this point, rest is from class and will not work for what we want
}
