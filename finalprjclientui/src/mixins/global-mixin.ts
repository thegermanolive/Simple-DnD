// mixins.js

import { Component, Prop, Vue } from 'vue-property-decorator';
import { validate, ValidationError } from 'class-validator';

// declare global constants using the UPPERCASE_SNAKE notation
const BASE_URL = 'http://localhost:3010';
const BOOKMARK_API = `${BASE_URL}/bookmarks`;
const MONSTER_API = `${BASE_URL}/monsters`;
const SPELLS_API = `${BASE_URL}/spells`;
const USER_API = `${BASE_URL}/users`;

@Component
export default class GlobalMixin extends Vue {
  BASE_URL = BASE_URL

  BOOKMARK_API = BOOKMARK_API

  MONSTER_API = MONSTER_API

  SPELLS_API = SPELLS_API

  USER_API = USER_API

  isBusy = false;

  // eslint-disable-next-line class-methods-use-this
  callAPI(url:string, method = 'GET', dataToSend = {}) {
    const fetchOptions:any = {
      method: 'GET',
      credentials: 'include',
      referrerPolicy: 'strict-origin-when-cross-origin',
      headers: {
        'X-Requested-With': 'XmlHttpRequest',
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    // eslint-disable-next-line no-param-reassign
    method = method.toUpperCase();
    if (['POST', 'PUT', 'DELETE'].includes(method)) fetchOptions.method = method;

    if (fetchOptions.method !== 'GET') fetchOptions.body = JSON.stringify(dataToSend);

    return fetch(url, fetchOptions)
      .then(async (res) => {
        const resInfo:any = { url: res.url, status: res.status, statusText: res.statusText };

        if (res.status === 204) return Promise.resolve(resInfo);
        if (res.ok) return res.json();
        const error = new Error(`${res.status}: ${res.statusText}`);
        resInfo.data = await res.json();
        throw Object.assign(error, resInfo);
      });
  }
}
