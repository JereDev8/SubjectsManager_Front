<script setup>
import { useSubjectStore } from '@/stores/SubjectStore';
import { onMounted, ref } from 'vue';
import { watch } from 'vue';
  
  const courses  = ref([]);
  const subjects = ref([]);
  const selectedYear = ref('');
  const selectedCourse = ref('');
  const deleteSubject = ref(false);
onMounted(async () => {
  const responseC = await fetch('https://subjectsmanager-production.up.railway.app/api/courses');
  courses.value = await responseC.json();
  const responseS = await fetch('https://subjectsmanager-production.up.railway.app/api/subjects');
  subjects.value = await responseS.json();
  console.log(courses)
  console.log(subjects)
});

watch(selectedYear, () => {
  selectedCourse.value = null;
  
});

const handleClick = () => {
  deleteSubject.value = !deleteSubject.value;
}

const handleDelete = async (subjectId) => {
  console.log(subjectId)
  try {
      const query = await fetch(`https://subjectsmanager-production.up.railway.app/api/subjects/${subjectId}`, {
      method: 'DELETE'
      })
      const response = await query.json();
      console.log(response)
      subjects.value = subjects.value.filter(subject => subject.id !== subjectId); 
  } catch (error) {
      console.log(error)
  }

 

}
</script>



<template>
    <div class="border w-5/6 mx-auto pl-6 mt-16 bg-cyan-950 rounded-md p-6">  
      <h1 class="text-white text-2xl">Gestion de materias escolares</h1>
    </div>

    <div class="border w-5/6 mx-auto pl-6 mt-16 bg-gray-100 rounded-md p-6">
      <h3 class="text-cyan-600">Filtros</h3>
      <div class="mb-3 w-full">
          <label class="block" for="">Ciclo lectivo</label>
          <select v-model="selectedYear" class="w-1/2 border" name="" id="selectYear">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
      </div>
      <div class="mb-3 w-full">
        <label class="block" for="">Curso</label>
        <select v-model="selectedCourse" class="min-w-44" name="" id="">
          <optgroup label="Nivel Inicial">
            <option v-for="course in courses.filter(course => course.nivel === 'Nivel Inicial' && course.año == selectedYear)" :key="course.id" :value="course.id">
              {{ course.nombre }}
            </option>
            
          </optgroup>
          <optgroup label="Nivel Primario">
            <option v-for="course in courses.filter(course => course.nivel === 'Nivel Primario' && course.año == selectedYear)" :key="course.id" :value="course.id">
              {{ course.nombre }}
            </option>
          </optgroup>
          <optgroup label="Nivel Secundario">
            <option v-for="course in courses.filter(course => course.nivel === 'Nivel Secundario' && course.año == selectedYear)" :key="course.id" :value="course.id">
              {{ course.nombre }}
            </option>
          </optgroup>
        </select>
      </div>
    </div>

    <div v-if="selectedCourse && selectedYear" class="border w-5/6 mx-auto mt-16 bg-gray-100 rounded-md p-2">
      <div>
        <div>
          <h2 class="text-xl">Consulta de Materias por Curso</h2>
        </div>
        <div>
          <RouterLink :to="`/${selectedCourse}/create-subject`" class="">
            <font-awesome-icon icon="fa-plus" class="text-green-400 text-2xl p-1"/>
          </RouterLink>
          
          <font-awesome-icon v-if="!deleteSubject" style="cursor: pointer;" icon="fa fa-minus" @click="handleClick" class="text-red-500 text-2xl p-1"/>
          <font-awesome-icon v-if="deleteSubject" style="cursor: pointer;" icon="fa fa-times" @click="handleClick" class="text-red-500 text-2xl p-1"/>
          
        
        </div>
        

        <div class="border mt-6 bg-gray-100 rounded-md p-2">
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b text-left"></th>
                  <th class="py-2 px-4 border-b text-left">Orden</th>
                  <th class="py-2 px-4 border-b text-left">Descripcion</th>
                  <th class="py-2 px-4 border-b text-left">Escala</th>
                  <th class="py-2 px-4 border-b text-left">Periodos</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="subject in subjects.filter(subject=> subject.curso_id == selectedCourse && subject.año == selectedYear)" :key="subject.id">
                  <td class="py-2 px-4 border-b text-left">
                    <button v-if="deleteSubject" @click="handleDelete(subject.id)" class="">
                      <font-awesome-icon icon="fa fa-trash" class="text-red-300 text-l p-1 hover:text-red-400"/>
                    </button>
                    
                  </td>
                  <td class="py-2 px-4 border-b text-left">{{ subject.orden }}</td>
                  <td class="py-2 px-4 border-b text-left">{{ subject.nombre }}</td>
                  <td class="py-2 px-4 border-b text-left">{{ subject.escala }}</td>
                  <td class="py-2 px-4 border-b text-left">{{ subject.periodos }}</td>

                </tr>
                
                <!-- Agrega más filas según sea necesario -->
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>