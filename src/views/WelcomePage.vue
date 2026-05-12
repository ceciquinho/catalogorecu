<template>
  <ion-page>
    <ion-content fullscreen>

      <div class="welcome-container">

        <div class="card">

          <h1>🎬 Catálogo de Filmes</h1>

          <p class="subtitle">
            Entre com seu email para acessar o catálogo
          </p>

          <ion-item class="input-item">
            <ion-input
              v-model="email"
              type="email"
              placeholder="Digite seu email"
            />
          </ion-item>

          <p v-if="error" class="error">
            Digite um email válido.
          </p>

          <ion-button
            expand="block"
            size="large"
            @click="enterApp"
          >
            Entrar no App
          </ion-button>

        </div>

      </div>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import {
  IonPage,
  IonContent,
  IonButton,
  IonInput,
  IonItem
} from '@ionic/vue'

const router = useRouter()

const email = ref('')
const error = ref(false)

const enterApp = () => {

  const validEmail =
    email.value.includes('@') &&
    email.value.includes('.')

  if (!validEmail) {
    error.value = true
    return
  }

  error.value = false

  router.push('/movies')
}
</script>

<style scoped>
.welcome-container {
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    135deg,
    #141e30,
    #243b55
  );

  padding: 20px;
}

.card {
  width: 100%;
  max-width: 400px;

  background: white;

  border-radius: 20px;

  padding: 30px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.3);

  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  color: #111;
}

.subtitle {
  text-align: center;
  color: #666;
}

.input-item {
  --border-radius: 12px;
}

.error {
  color: red;
  text-align: center;
  margin: 0;
}
</style>