<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores";

const store = useProductsStore();
const { products } = storeToRefs(store); //receive data from pinia store

store.getAll();

</script>
<template>
Product List
  {{ products }}
</template>
