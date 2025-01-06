<script setup>
    import { useSubjectStore } from '@/stores/SubjectStore';
    import { watch, ref } from 'vue';

    const subjectStore = useSubjectStore();

    const nombre = ref(subjectStore.subject.competencia.nombre);
    const descripcion = ref(subjectStore.subject.competencia.descripcion);
    const escala = ref(subjectStore.subject.competencia.escala);
    const metodoCarga = ref(subjectStore.subject.competencia.metodoCarga);
    const orden = ref(subjectStore.subject.competencia.orden);

    watch(nombre, (newValue) => {
    subjectStore.subject.competencia.nombre = newValue;
    });

    watch(descripcion, (newValue) => {
    subjectStore.subject.competencia.descripcion = newValue;
    });

    watch(escala, (newValue) => {
    subjectStore.subject.competencia.escala = newValue;
    });

    watch(metodoCarga, (newValue) => {
    subjectStore.subject.competencia.metodoCarga = newValue;
    });

    watch(orden, (newValue) => {
    subjectStore.subject.competencia.orden = newValue;
    });

    const handleAddButton = ()=>{
        subjectStore.subject.competencia.competencias.push({
            n: subjectStore.subject.competencia.competencias.length + 1,
            nombre: nombre.value,
            descripcion: descripcion.value,
            escala: escala.value,
            metodoCarga: metodoCarga.value,
            orden: orden.value
        });

        nombre.value = '';
        descripcion.value = '';
        escala.value = '';
        metodoCarga.value = '';
        orden.value = '';
    }

</script>

<template>
    <div class="border w-5/6 mx-auto bg-blue-100 rounded-b-md">
        <div class="border mx-auto pl-6 pt-6 bg-gray-100 rounded-md p-6">
            
            
            <div class="mb-3 w-full">
                <label class="block" for="">Nombre</label>
                <input v-model="nombre" class="px-2 py-1 border" type="text" placeholder="Ingrese Nombre">
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Descripcion</label>
                <input v-model="descripcion" class="px-2 py-1 border" type="text" placeholder="Ingrese Descripcion">
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Escala</label>
                <select v-model="escala" class="w-1/2 border" name="" id="">
                    <option value="Escala 0 a 10">Escala 0 a 10</option>
                    <option value="Escala 0 a 100">Escala 0 a 100</option>
                    <option value="Escala cualitativa">Escala cualitativa</option>
                    
                </select>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Metodo de Carga</label>
                <select v-model="metodoCarga" class="w-1/2 border" name="" id="">
                    <option value="Por Alumno">Por Alumno</option>
                    <option value="Por Curso">Por Curso</option>
                
                    
                </select>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Orden</label>
                <input v-model="orden" class="px-2 py-1 border" type="text" placeholder="Ingrese Orden">
            </div>

            <button @click="handleAddButton" class="px-2 py-1 bg-green-400 rounded-sm mr-4">Agregar</button>
            <button class="px-2 py-1 bg-gray-300 rounded-sm mr-4">Cancelar</button>

            <div class="overflow-x-auto mt-5">
            <table class="min-w-full bg-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b text-left">Orden</th>
                  <th class="py-2 px-4 border-b text-left">Detalle</th>
                  <th class="py-2 px-4 border-b text-left">Escala</th>
                  <th class="py-2 px-4 border-b text-left">Metodo</th>
                  <th class="py-2 px-4 border-b text-left">Descripcion</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr v-for="competencia in subjectStore.subject.competencia.competencias" :key="competencia.n">
                            <td class="py-2 px-4 border-b text-left">{{ competencia.orden }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ competencia.nombre }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ competencia.escala }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ competencia.metodoCarga }}</td>
                            <td class="py-2 px-4 border-b text-left">{{ competencia.descripcion }}</td>
                            
                        </tr>
                
              </tbody>
            </table>
          </div>
        </div>
    </div>
</template>