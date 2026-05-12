<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="dark">

        <ion-buttons slot="start">
          <ion-back-button default-href="/welcome" />
        </ion-buttons>

        <ion-title>
          🎬 Filmes
        </ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :movie="movie"
        @details="openDetails"
      />

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
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { useRouter } from 'vue-router'

import MovieCard from '../../components/MovieCard.vue'
import { useMovies } from '../composables/useMovies'

const router = useRouter()

const { movies } = useMovies()

const openDetails = (id: number) => {
  router.push(`/movie/${id}`)
}
</script>

<style scoped>
ion-content {
  --background: #f4f5f8;
}
</style>