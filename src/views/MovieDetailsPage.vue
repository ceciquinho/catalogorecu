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

    <ion-content class="details-content" v-if="movie">

      <div class="container">

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

            <div class="info">

              <p class="description">
                {{ movie.description }}
              </p>

              <ion-badge :color="getBadgeColor(movie.rating)">
                {{ movie.rating }}
              </ion-badge>

            </div>

          </ion-card-content>

        </ion-card>

      </div>

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
  return movies.find(
    (movie: any) => movie.id == Number(route.params.id)
  )
})

const getBadgeColor = (rating: string) => {

  switch (rating) {

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
}
</script>

<style scoped>
.details-content {
  --background: #f4f5f8;
}

.container {
  padding: 20px;
}

ion-card {
  border-radius: 20px;
  padding: 10px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.description {
  line-height: 1.6;
  font-size: 16px;
}
</style>