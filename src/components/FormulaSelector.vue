<template>
  <h2>Kies een formule</h2>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Spoedherstelling</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 270€ </q-card-section>
    </q-card>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Binnen 2 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 145€ </q-card-section>
    </q-card>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Binnen 7 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 165€ </q-card-section>
    </q-card>
    <q-card flat bordered class="my-card">
      <q-card-section>
        <div class="text-h6">Binnen 10 werkdagen</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> Vanaf 95€ </q-card-section>
    </q-card>
  </div>
  <q-btn label="vorige" color="secondary" @click="onPrevious" />
  <q-btn label="volgende" color="primary" @click="onSubmit" />
</template>

<script>
export default {
  emits: ['submit', 'previous'],
  setup(_, context) {
    function onSubmit() {
      context.emit('submit')
    }

    function onPrevious() {
      context.emit('previous')
    }

    return {
      onSubmit,
      onPrevious
    }
  }
}
</script>
