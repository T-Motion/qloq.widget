<template>
  <h2>Boek een afspraak</h2>

  <q-form greedy @submit.prevent="onSubmit">
    <div class="row">
      <div class="column">
        <h3>Defect</h3>
        <q-select
          v-model="form.defect"
          label="Defecttype"
          :options="[
            'Kabel gebroken',
            'Motor defect',
            'Afstandsbediening defect',
            'Poort doet niets meer'
          ]"
          :rules="[isRequired]"
        />
        <q-input
          type="textarea"
          v-model="form.extraInfo"
          rows="5"
          label="Bijkomende informatie (optioneel)"
        ></q-input>
      </div>
      <div class="column">
        <h3>Adres afspraak</h3>
        <q-input v-model="form.address" label="Straat + huisnummer" :rules="[isRequired]"></q-input>
        <div class="row">
          <q-input
            class="equalInput"
            v-model="form.place"
            label="Plaats"
            :rules="[isRequired]"
          ></q-input>
          <q-input
            class="equalInput"
            v-model="form.postalcode"
            label="Postcode"
            :rules="[isRequired]"
          ></q-input>
        </div>
        <q-select
          v-model="form.country"
          label="Land"
          :options="['België', 'Nederland']"
          :rules="[isRequired]"
        />
      </div>
    </div>
    <q-btn label="volgende" type="submit" color="primary" />
  </q-form>
</template>

<script>
import { reactive } from 'vue'
import { isRequired } from '../utilities/validators'

export default {
  emits: ['submit'],
  setup(_, context) {
    const form = reactive({
      defect: '',
      extraInfo: '',
      address: '',
      place: '',
      postalcode: '',
      country: 'België'
    })

    function onSubmit() {
      context.emit('submit')
    }

    return {
      form,
      onSubmit,
      isRequired
    }
  }
}
</script>
