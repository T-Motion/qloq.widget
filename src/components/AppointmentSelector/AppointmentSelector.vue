<template>
  <div class="appointmentSelector">
    <label>Selecteer dag</label>
    <div class="monthNavigation">
      <span>September 2023</span>
      <div class="nav"><q-icon name="arrow_back" /><q-icon name="arrow_forward" /></div>
    </div>
    <div class="month">
      <div class="pill day" v-for="day in appointmentDays[0].days" :key="day.slotDay">
        <span class="weekday">{{ days[day.date.getDay()] }}</span
        ><span>{{ day.date.getDate() }}</span>
      </div>
    </div>
    <label>Selecteer tijdslot</label>
    <div class="day">
      <div class="pill appointment" v-for="appointment in appointments" :key="appointment.id">
        <span>{{ appointment.timeOptionHour }}:{{ (0 + appointment.timeOptionMinute).slice(-2) }}u</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const days = ['ZO', 'MA', 'DI', 'WO', 'DO', 'VR', 'ZA']
    const appointmentDays = [
      {
        index: 8,
        days: [
          {
            slotDay: 1,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/1/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/2/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/3/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/4/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/5/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/6/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/7/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/9/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/9/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/10/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/11/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/12/2023')
          },
          {
            slotDay: 2,
            slotMonth: 9,
            slotYear: 2023,
            estimatedTimeCost: 0,
            estimatedKilometerCost: 0,
            date: new Date('9/13/2023')
          }
        ]
      }
    ]
    const appointments = [
      { timeOptionHour: '8', timeOptionMinute: '0' },
      { timeOptionHour: '8', timeOptionMinute: '30' },
      { timeOptionHour: '9', timeOptionMinute: '0' },
      { timeOptionHour: '9', timeOptionMinute: '30' },
      { timeOptionHour: '10', timeOptionMinute: '0' }
    ]
    return {
      days,
      appointmentDays,
      appointments
    }
  }
}
</script>
