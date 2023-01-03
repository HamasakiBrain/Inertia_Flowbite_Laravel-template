<script setup>
import { Link, usePage } from '@inertiajs/inertia-vue3';
import { useI18n } from "vue-i18n";
import PrimaryButton from '@/Components/PrimaryButton.vue';
const { locale } = useI18n({ useScope: "global" });
const language = usePage().props.value.locale
locale.value = language
</script>

<template>
    <h1>Current locale: {{  language }}</h1>
    <Link href="/ru" class="btn button"><PrimaryButton>RU</PrimaryButton></Link>
    <Link href="/en" class="btn button"><PrimaryButton>EN</PrimaryButton></Link>
     <slot />
</template>
