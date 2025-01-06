<script setup>
import { useSubjectStore } from '@/stores/SubjectStore';
import { watch, ref } from 'vue';

const subjectStore = useSubjectStore();

const rol = ref(subjectStore.subject.gestores.rol);
const nombre = ref(subjectStore.subject.gestores.persona);

watch(rol, (newValue) => {
  subjectStore.subject.gestores.rol = newValue;
});

watch(nombre, (newValue) => {
  subjectStore.subject.gestores.nombre = newValue;
});

const handleAddButton = () => {

    subjectStore.subject.gestores.personas.push({
        n: subjectStore.subject.gestores.personas.length + 1,
        rol: rol.value,
        nombre: nombre.value
    });

    rol.value = '';
    nombre.value = '';
};
</script>

<template>
    <div class="border w-5/6 mx-auto bg-blue-100 rounded-b-md">
        <div class="border mx-auto pl-6 pt-6 bg-gray-100 rounded-md p-6">
            
            <div class="mb-3 w-full">
                <p class="inline text-red-400 text-sm">Deben existir al menos 2 gestores por Materia</p>
                <label class="block" for="">Rol</label>
                <select v-model="rol" class="w-1/2 border" name="" id="">
                    <option value="Maestro Especial">Maestro Especial</option>
                    <option value="Maestro Titular">Maestro Titular</option>
                    <option value="Pedagogo">Pedagogo</option>
                </select>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Persona</label>
                <input v-model="nombre" class="px-2 py-1 border" type="text" placeholder="Ingrese Nombre y Apellido">
                <div class="ml-1 inline-flex items-center">
                    <button @click="handleAddButton" class="">
                        <font-awesome-icon icon="fa-plus" class="text-gray-700 text-xl "/>
                    </button>

                </div>

            </div>
            <div class="border mt-6 bg-gray-100 rounded-md p-2">
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b text-left">N°</th>
                  <th class="py-2 px-4 border-b text-left">Rol</th>
                  <th class="py-2 px-4 border-b text-left">Gestor</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="persona in subjectStore.subject.gestores.personas" :key="persona.n">
                        <td class="py-2 px-4 border-b text-left">{{ persona.n }}</td>
                        <td class="py-2 px-4 border-b text-left">{{ persona.rol }}</td>
                        <td class="py-2 px-4 border-b text-left">{{ persona.nombre }}</td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        </div>
    </div>
</template>