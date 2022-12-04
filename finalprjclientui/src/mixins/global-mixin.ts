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

  // only done up to this point, rest is from class and will not work for what we want

  // prop so the parent can disable this child component
  @Prop(Boolean) readonly disabled!:boolean

  // busy data property to flag the state a busy waiting for the api
  isBusy = false;

  // method to set the busy state and emit the state to the parent
  // will emit when busy and when no longer busy
  setBusy(state:boolean) {
    this.isBusy = state;
    this.$emit('busy', state);
  }

  // computed property if component is busy , disable, both or neither
  // the better name would isUnavailable
  get isDisabled() { return this.isBusy || this.disabled; }

  /**
   * Our wrapper for the fetch function with proper headers and options
   * @param url url address to api server path
   * @param method GET,PUT,POST,DELETE
   * @param dataToSend object to send as body raw json in the request
   */
  callAPI(url:string, method = 'GET', dataToSend = {}) {
    // when calling fetch we need to set default options - especially when dealing with CORS
    const fetchOptions:any = {
      method: 'GET',
      credentials: 'include', // allows api to set cookies in the browser
      referrerPolicy: 'strict-origin-when-cross-origin',
      headers: { // fetch usually sends these headers, but just to be sure
        'X-Requested-With': 'XmlHttpRequest',
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    // sanity checking for developers
    // ensure that only upper case GET, POST, PUT, DELETE methods are allowed
    // eslint-disable-next-line no-param-reassign
    method = method.toUpperCase();
    if (['POST', 'PUT', 'DELETE'].includes(method)) fetchOptions.method = method;

    if (Object.keys(dataToSend).length) {
      // convert the dataToSend JS object into JSON and GET cannot send a BODY
      if (fetchOptions.method !== 'GET') fetchOptions.body = JSON.stringify(dataToSend);
      // eslint-disable-next-line no-param-reassign
      else url = `${url}/?${new URLSearchParams(dataToSend).toString()}`;
    }
    // finally call fetch , but make so that it throws and error when the response status
    // is not in the 200s (status ok) example (404 throws error, 500 throws error, 204 no error)
    // mimics  Axios package
    return fetch(url, fetchOptions)
      .then(async (res) => {
        const resInfo:any = { url: res.url, status: res.status, statusText: res.statusText };
        // handle 204 No Content differently
        if (res.status === 204) return Promise.resolve(resInfo);
        if (res.ok) return res.json();
        const error = new Error(`${res.status}: ${res.statusText}`);
        resInfo.data = await res.json();
        throw Object.assign(error, resInfo); // copy all data from resInfo into error
      });
  }

  // convert ValidationError array from class-validator https://github.com/typestack/class-validator#validation-errors
  // into an object with field names as the properties and the error messages are the values
  mapValidationErrorArray(errors:ValidationError[]):any {
    return Object.fromEntries(errors.map((err) => {
      const msg = err.constraints ? Object.values(err.constraints)[0] : 'Invalid Value';
      return [err.property, msg];
    }));
  }

  // validate the passed in model and return an object with field names as the properties and the error messages are the values
  async getErrorMessages(model:any):Promise<any> {
    const errors:ValidationError[] = await validate(model);
    return errors.length ? this.mapValidationErrorArray(errors) : {};
  }
}
