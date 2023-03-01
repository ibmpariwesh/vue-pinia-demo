<script setup>
import { storeToRefs } from "pinia";
import { useProductsStore } from "@/stores";
import * as Yup from 'yup';

const schema = Yup.object().shape({
    name: Yup.string().required('Username is required'),
    // password: Yup.string().required('Password is required')
});

const store = useProductsStore();
const { products } = storeToRefs(store); //receive data from pinia store

store.getAll();
 async function save(){
  console.log('clicked');
  store.save({name:name});
 }
</script>
<template>
Product List
<input v-model="name">
<button @click="save" >save1</button>
  {{ products }}
</template>
