<template>
  <div>
    <b-form-group :invalid-feedback="violation.familyName" :state="hasErr.fN" class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.fN">
          <b-icon-people-fill :title="dt.fN" />
        </b-input-group-prepend>
        <b-form-input :placeholder="dt.fN" :state="hasErr.fN" :disabled="isDisabled"
                      v-model="tempStudent.familyName" trim @keydown="violation.familyName=null" />
      </b-input-group>
    </b-form-group>

    <b-form-group :invalid-feedback="violation.givenName" :state="hasErr.gN" class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.gN">
          <b-icon-person-fill :title="dt.gN" />
        </b-input-group-prepend>
        <b-form-input :placeholder="dt.gN" :state="hasErr.gN" :disabled="isDisabled"
                      v-model="tempStudent.givenName" trim @keydown="violation.givenName=null" />
      </b-input-group>
    </b-form-group>

    <b-form-group :invalid-feedback="violation.email" :state="hasErr.em" class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.em">
          <b-icon-envelope-fill :title="dt.em" />
        </b-input-group-prepend>
        <b-form-input :placeholder="dt.em" :state="hasErr.em" :disabled="isDisabled"
                      v-model="tempStudent.email" trim @keydown="violation.email=null" />
      </b-input-group>
    </b-form-group>

    <b-form-group :invalid-feedback="violation.address" :state="hasErr.sA" class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.sA">
          <b-icon-house-fill :title="dt.sA" />
        </b-input-group-prepend>
        <b-form-input :placeholder="dt.sA" :state="hasErr.sA" :disabled="isDisabled"
                      v-model="tempStudent.address" trim @keydown="violation.address=null" />
      </b-input-group>
    </b-form-group>

    <b-form-group :invalid-feedback="violation.phone" :state="hasErr.pn" class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.pn">
          <b-icon-telephone-fill :title="dt.pn" />
        </b-input-group-prepend>
        <b-form-input :placeholder="dt.pn" :state="hasErr.pn" :disabled="isDisabled"
                      v-model="tempStudent.phone" trim @keydown="violation.phone=null" />
      </b-input-group>
    </b-form-group>

    <b-button-group class="w-100 mb-3">
      <b-button variant="primary" :disabled="isDisabled" @click="saveStudent">
        <b-icon-cloud-arrow-up-fill ref="iconSave" /> Save
      </b-button>

      <b-button variant="danger" :disabled="isDisabled || isNew" @click="deleteConfirm">
        <b-icon-trash-fill ref="iconDelete" /> Delete
      </b-button>

      <b-button variant="primary" :disabled="isDisabled" @click="cancel">
        <b-icon-x-square-fill /> Cancel
      </b-button>
    </b-button-group>

    <b-modal title="Delete Student" ok-variant="danger" cancel-variant="primary"
             v-model="showConfirmDelete" @ok="deleteStudent">
      <template #modal-cancel>
        <b-icon-x-square-fill /> Cancel
      </template>

      <template #modal-ok>
        <b-icon-trash-fill /> Delete
      </template>
      Are you sure you want to delete {{tempStudent.familyName}}, {{tempStudent.givenName}}?
    </b-modal>

    <b-alert variant="danger" :show="violation.violationMessage">
      {{violation.violationMessage}}
    </b-alert>
  </div>
</template>
<script lang="ts">
import {
  Component, Mixins, Prop, Watch, Vue,
} from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import Monsters from '@/models/Monsters';

@Component
export default class StudentForm extends Vue {
  @Prop({ type: Object, validator: (s) => s instanceof Object }) readonly student: any

  $refs!: {
    iconDelete: BIcon
    iconSave : BIcon
  }

  dt = {
    fN: 'Family Name',
    gN: 'Given Name',
    em: 'Email Address',
    sA: 'Street Address',
    pn: 'Phone Number',
  }
}
</script>
