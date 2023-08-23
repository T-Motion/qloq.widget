<template>
  <h2>Contact info</h2>
  <q-form class="q-gutter-md" @submit.prevent="onSubmit" greedy>
    <div class="row">
      <q-input
        class="equalInput"
        v-model="form.lastname"
        label="Familienaam"
        :rules="[isRequired]"
      ></q-input>
      <q-input
        class="equalInput"
        v-model="form.firstname"
        label="Voornaam"
        :rules="[isRequired]"
      ></q-input>
    </div>
    <q-input
      v-model="form.email"
      type="email"
      label="Email"
      :rules="[isRequired, isValidEmail]"
    ></q-input>
    <q-input
      v-model="form.cellphone"
      type="tel"
      label="Telefoonnummer"
      :rules="[isRequired]"
    ></q-input>
    <q-btn label="vorige" color="secondary" @click="onPrevious" />
    <q-btn label="volgende" type="submit" color="primary" />
  </q-form>
</template>

<script>
import { reactive } from 'vue'
import { isRequired, isValidEmail } from '../utilities/validators'

export default {
  emits: ['submit', 'previous'],
  setup(_, context) {
    const form = reactive({
      firstname: '',
      lastname: '',
      email: '',
      cellphone: ''
    })

    function onSubmit() {
      context.emit('submit')
    }

    function onPrevious() {
      context.emit('previous')
    }

    return {
      form,
      onPrevious,
      onSubmit,
      isRequired,
      isValidEmail
    }
  }
}
</script>
