<template>
  <ion-card button @click="openDetails">

    <ion-card-header>
      <ion-card-title>
        {{ movie.title }}
      </ion-card-title>

      <ion-card-subtitle>
        {{ movie.year }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>

      <ion-badge :color="badgeColor">
        {{ movie.rating }}
      </ion-badge>

    </ion-card-content>

  </ion-card>
</template>

<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge
} from '@ionic/vue'

const emit = defineEmits(['details'])

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})

const openDetails = () => {
  emit('details', props.movie.id)
}

const badgeColor = (() => {
  switch (props.movie.rating) {

    case 'Livre':
      return 'success'

    case '12+':
      return 'warning'

    case '16+':
      return 'danger'

    case '18+':
      return 'dark'

    default:
      return 'medium'
  }
})()
</script>