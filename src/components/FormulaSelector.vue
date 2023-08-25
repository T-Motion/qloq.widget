<template>
  <h2>Kies een formule</h2>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      flat
      bordered
      class="my-card"
      :class="{ selected: 'spoed' === formula }"
      @click="() => onCardSelect('spoed')"
    >
      <q-card-section>
        <q-icon name="rocket_launch" />
        <div class="text-h6">Spoedherstelling</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 270€ </q-card-section>
    </q-card>
    <q-card
      flat
      bordered
      class="my-card"
      :class="{ selected: '2wd' === formula }"
      @click="() => onCardSelect('2wd')"
    >
      <q-card-section>
        <q-icon name="directions_car_filled" />
        <div class="text-h6">Binnen 2 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 165€ </q-card-section>
    </q-card>
    <q-card
      flat
      bordered
      class="my-card"
      :class="{ selected: '7wd' === formula }"
      @click="() => onCardSelect('7wd')"
    >
      <q-card-section>
        <q-icon name="local_shipping" />
        <div class="text-h6">Binnen 7 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 145€ </q-card-section>
    </q-card>
    <q-card
      flat
      bordered
      class="my-card"
      :class="{ selected: '10wd' === formula }"
      @click="() => onCardSelect('10wd')"
    >
      <q-card-section>
        <q-icon name="pedal_bike" />
        <div class="text-h6">Binnen 10 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 95€ </q-card-section>
    </q-card>
  </div>
  <div class="q-gutter-md" v-if="showValidationError">
    <p class="validationError">Selecteer een formule</p>
  </div>
  <div class="q-gutter-md">
    <q-btn label="vorige" color="secondary" @click="onPrevious" />
    <q-btn label="volgende" color="primary" @click="onSubmit" />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  emits: ['submit', 'previous'],
  setup(_, context) {
    const formula = ref('')
    const showValidationError = ref(false)

    function onCardSelect(val) {
      formula.value = val
      showValidationError.value = false
    }

    function onSubmit() {
      if (formula.value) {
        context.emit('next')
      } else {
        showValidationError.value = true
      }
    }

    function onPrevious() {
      context.emit('previous')
    }

    return {
      formula,
      showValidationError,
      onCardSelect,
      onSubmit,
      onPrevious
    }
  }
}
</script>
