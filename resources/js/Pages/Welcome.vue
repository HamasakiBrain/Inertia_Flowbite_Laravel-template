<script setup>
import { Head, Link } from "@inertiajs/inertia-vue3";
import AppLayout from '@/Layouts/AppLayout.vue';
defineProps({
  canLogin: Boolean,
  canRegister: Boolean,
  laravelVersion: String,
  phpVersion: String,
});
</script>

<template>
    <AppLayout>
        {{  $t('Dashboard') }}
    </AppLayout>
</template>
