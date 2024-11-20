<script setup lang="ts">
import BaseHeader from './components/layouts/base/BaseHeader.vue'
import BaseBody from './components/layouts/base/BaseBody.vue'
import BaseFooter from './components/layouts/base/BaseFooter.vue'
import { AppEnvironmentService } from './services/AppEnvironmentService'

const appEnvironmentService = AppEnvironmentService
appEnvironmentService.retrievingConfigsFromJson()
</script>

<template>
  <BaseHeader></BaseHeader>

  <BaseBody></BaseBody>

  <BaseFooter></BaseFooter>
</template>
