<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonBadge,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { useMovies } from '../composables/useMovies'

const { movies } = useMovies()

function getColor(rating) {
  if (rating === 'Livre') return 'success'
  if (rating === '12+') return 'warning'
  if (rating === '16+') return 'danger'
  if (rating === '18+') return 'dark'

  return 'medium'
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button default-href="/welcome"></ion-back-button>
        </ion-buttons>

        <ion-title>Filmes</ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card v-for="movie in movies" :key="movie.id">

        <ion-card-header>
          <ion-card-title>
            {{ movie.title }}
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <p>
            <strong>Ano:</strong>
            {{ movie.year }}
          </p>

          <ion-badge :color="getColor(movie.rating)">
            {{ movie.rating }}
          </ion-badge>

          <br /><br />

          <ion-button :router-link="`/movie/${movie.id}`">
            Ver detalhes
          </ion-button>

        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-page>
</template>