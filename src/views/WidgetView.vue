<template>
  <q-stepper v-model="step" :vertical="isMobile" animated>
    <q-step :name="0" title="Afspraak maken" :done="step > 0">
      <appointment-info @submit="goNextStep" />
    </q-step>
    <q-step :name="1" title="Kies formule" :done="step > 1">
      <formula-selector @submit="goNextStep" @previous="goPreviousStep" />
    </q-step>
    <q-step
      :name="2"
      title="Contact info"
      :done="step > 2"
      @submit="goNextStep"
      @previous="goPreviousStep"
    >
      <contact-info />
    </q-step>
  </q-stepper>
</template>

<script>
import { ref } from 'vue'
import AppointmentInfo from '../components/AppointmentInfo.vue'
import FormulaSelector from '../components/FormulaSelector.vue'
import ContactInfo from '../components/ContactInfo.vue'

export default {
  components: {
    AppointmentInfo,
    FormulaSelector,
    ContactInfo
  },
  setup() {
    const step = ref(0);
    const isMobile = ref(false);

    function goNextStep() {
      step.value += 1
    }

    function goPreviousStep() {
      step.value -= 1
    }

    function onResize() {
      this.isMobile = window.innerWidth < 600;
    }

    return {
      step,
      onResize,
      isMobile,
      goNextStep,
      goPreviousStep
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true});
  },
  unmounted() {
    if(typeof window !== 'undefined') {
      window.removeEventListener("resize", this.onResize, { passive: true});
    }
  }
}
</script>
