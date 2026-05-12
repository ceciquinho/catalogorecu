<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="dark">

        <ion-buttons slot="start">
          <ion-back-button default-href="/movies" />
        </ion-buttons>

        <ion-title>
          Detalhes
        </ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding" v-if="movie">

      <ion-card>

        <ion-card-header>

          <ion-card-title>
            {{ movie.title }}
          </ion-card-title>

          <ion-card-subtitle>
            {{ movie.year }}
          </ion-card-subtitle>

        </ion-card-header>

        <ion-card-content>

          <p>
            {{ movie.description }}
          </p>

          <br />

          <ion-badge :color="badgeColor">
            {{ movie.rating }}
          </ion-badge>

        </ion-card-content>

      </ion-card>

    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useMovies } from '../composables/useMovies'

const route = useRoute()

const { movies } = useMovies()

const movie = computed(() => {
  return movies.value.find(
    movie => movie.id == Number(route.params.id)
  )
})

const badgeColor = computed(() => {

  switch (movie.value?.rating) {

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
})
</script>

<style scoped>
ion-content {
  --background: #f4f5f8;
}

ion-card {
  border-radius: 18px;
}
</style>