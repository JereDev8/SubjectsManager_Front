<script setup>
    import { useSubjectStore } from '@/stores/SubjectStore';
    import { onMounted, ref } from 'vue';
    import { useRoute, useRouter } from 'vue-router';

    const route = useRoute();
    const router = useRouter();

    const subjectStore = useSubjectStore();
    const error = ref({
        err: false,
        message: ''
    });
    const handleCreateSubject = async ()=>{
        const subjectReadyToCreate = subjectStore.validateSubject();
        console.log({...subjectStore.subject, curso_id: route.params.idCourse})

        if(subjectReadyToCreate){
            const response = fetch(`https://subjectsmanager-production.up.railway.app/api/courses/${route.params.idCourse}/subjects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: subjectStore.subject.datosGenerales.nombre,
                    curso_id: route.params.idCourse,
                    año: subjectStore.subject.datosGenerales.año,
                    sigla: subjectStore.subject.datosGenerales.sigla,
                    gestores: subjectStore.subject.gestores.personas,
                    periodos: subjectStore.subject.datosMateria.periodos,
                    metodoPromedio: subjectStore.subject.datosMateria.metodoPromedio,
                    tipoRedondeo: subjectStore.subject.datosMateria.tipoRedondeo,
                    escala: subjectStore.subject.datosMateria.escala,
                    orden: subjectStore.subject.datosMateria.orden,
                    esConcepto: subjectStore.subject.datosMateria.esConcepto,
                    poseeMotivosPersonalizados: subjectStore.subject.datosMateria.poseeMotivosPersonalizados,
                    requiereInscripcion: subjectStore.subject.datosMateria.requiereInscripcion,
                    requiereAsistencia: subjectStore.subject.datosMateria.requiereAsistencia,
                    extraCurricular: subjectStore.subject.datosMateria.extraCurricular,
                    permiteAgrupacion: subjectStore.subject.datosMateria.permiteAgrupacion,
                    competencias: subjectStore.subject.competencia.competencias
                })
            })
            .then(response => {
                if(response.ok) router.push('/');
                
            })
            .catch(error => console.log(error));

            
        }
        else{
            error.value.err = true;
            error.value.message = 'Faltan campos por llenar';
        }
    }

    console.log(route.params)
</script>

<template>
    <div class="border w-5/6 mx-auto pl-6 mt-16 bg-cyan-950 rounded-md p-6">  
      <h1 class="text-white text-2xl">Crear materia</h1>
    </div>

    <div class="border w-5/6 mx-auto mt-16 bg-blue-400 rounded-t-md">
        <nav class="border flex flex-wrap w-full">
            <div class="w-1/2 flex justify-center"><RouterLink :to="`/${route.params.idCourse}/create-subject/datos-generales`" class="px-3 py-2 text-white font-semibold hover:bg-blue-600">Datos Generales</RouterLink></div>
            <div class="w-1/2 flex justify-center"><RouterLink :to="`/${route.params.idCourse}/create-subject/gestores`" class="px-3 py-2 text-white font-semibold hover:bg-blue-600">Gestores</RouterLink></div>
            <div class="w-1/2 flex justify-center"><RouterLink :to="`/${route.params.idCourse}/create-subject/datos-materia`" class="px-3 py-2 text-white font-semibold hover:bg-blue-600">Datos Materia</RouterLink></div>
            <div class="w-1/2 flex justify-center"><RouterLink :to="`/${route.params.idCourse}/create-subject/competencias`" class="px-3 py-2 text-white font-semibold hover:bg-blue-600">Competencias</RouterLink></div>
        </nav>
    </div>
    <RouterView></RouterView>
    <div class="flex justify-evenly w-5/6 mx-auto  rounded-md">
        <button @click="handleCreateSubject" class="mt-6 px-3 py-1 bg-green-400 mr-5 rounded-sm">Crear Materia</button>
        <RouterLink class="mt-6 px-3 py-1 bg-gray-300 mr-5 rounded-sm" to="/">Cancelar</RouterLink>
    
        
    </div>
    <p v-if="error.err" class="text-red-500 text-center">{{ error.message }}</p>
</template>