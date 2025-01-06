<script setup>
import { useSubjectStore } from '@/stores/SubjectStore';
import { watch, ref } from 'vue';

const subjectStore = useSubjectStore();

const año = ref(subjectStore.subject.datosGenerales.año);
const sigla = ref(subjectStore.subject.datosGenerales.sigla);
const nombre = ref(subjectStore.subject.datosGenerales.nombre);

watch(año, (newValue) => {
  subjectStore.subject.datosGenerales.año = newValue;
});

watch(sigla, (newValue) => {
  subjectStore.subject.datosGenerales.sigla = newValue;
});

watch(nombre, (newValue) => {
  subjectStore.subject.datosGenerales.nombre = newValue;
});

</script>

<template>
    <div class="border w-5/6 mx-auto bg-blue-100 rounded-b-md">
        <div class="border mx-auto pl-6 pt-6 bg-gray-100 rounded-md p-6">
            
            <div class="mb-3 w-full">
                <label class="block" for="">Año</label>
                <select v-model="año" class="w-1/2 border" name="" id="">
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                </select>
                <p class="inline text-red-500 ml-1">*</p>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Sigla</label>
                <input v-model="sigla" class="px-2 py-1 border" type="text" placeholder="Ingrese Sigla">
                <p class="inline text-red-500 ml-1">*</p>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Nombre</label>
                <input v-model="nombre" class="px-2 py-1 border" type="text" placeholder="Ingrese Nombre">
                <p class="inline text-red-500 ml-1">*</p>
            </div>
        </div>
    </div>
</template>