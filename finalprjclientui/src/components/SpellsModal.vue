<!--/https://vuejs.org/examples/#modal/-->
<!--NEED TO CHANGE THIS, THIS IS JUST AN EXAMPLE TO SEE IF IT WORKS, AND NOT JUST ME-->
<script>

export default {
  props: {
    show: Boolean,
  },
};
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <h1>
            Add A Spell
          </h1>
        </div>

        <div class="modal-body">
          <h4>Name: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="Name" placeholder="" />

          <h4>Level: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="Level" placeholder="" />

          <h4>School: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="School" placeholder="" />

          <h4>CastingTime: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="CastingTime" placeholder="" />

          <h4>Range: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="Range" placeholder="" />
          <h4>Duration: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="Duration" placeholder="" />
          <h4>Damage: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="Damage" placeholder="" />
          <h4>DamageType: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="DamageType" placeholder="" />
          <h4>StatusEffect: {{ message }}</h4>
          <!--  eslint-disable-next-line-->
          <input v-model="StatusEffect" placeholder="" />
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-primary" id="submit" type="submit" @click="$emit('close')">
              Submit</button>
            <button class="btn btn-primary" @click="$emit('close')">Cancel</button>
          </slot>
        </div>
      </div>
    </div>
  </div>

</template>

<style>
#submit {
  margin-right: 0px;
}

.modal-body{
  height: 5px;
}
</style>
