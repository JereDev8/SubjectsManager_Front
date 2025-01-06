<script setup>
    import { useSubjectStore } from '@/stores/SubjectStore';
    import { watch, ref } from 'vue';

    const subjectStore = useSubjectStore();

    const periodos = ref(subjectStore.subject.datosMateria.periodos);
    const metodoPromedio = ref(subjectStore.subject.datosMateria.metodoPromedio);
    const tipoRedondeo = ref(subjectStore.subject.datosMateria.tipoRedondeo);
    const escala = ref(subjectStore.subject.datosMateria.escala);
    const orden = ref(subjectStore.subject.datosMateria.orden);
    const esConcepto = ref(subjectStore.subject.datosMateria.esConcepto);
    const poseeMotivosPersonalizados = ref(subjectStore.subject.datosMateria.poseeMotivosPersonalizados);
    const requiereInscripcion = ref(subjectStore.subject.datosMateria.requiereInscripcion);
    const requiereAsistencia = ref(subjectStore.subject.datosMateria.requiereAsistencia);
    const extraCurricular = ref(subjectStore.subject.datosMateria.extraCurricular);
    const permiteAgrupacion = ref(subjectStore.subject.datosMateria.permiteAgrupacion);

    watch(periodos, (newValue) => {
    subjectStore.subject.datosMateria.periodos = newValue;
    });

    watch(metodoPromedio, (newValue) => {
    subjectStore.subject.datosMateria.metodoPromedio = newValue;
    });

    watch(tipoRedondeo, (newValue) => {
    subjectStore.subject.datosMateria.tipoRedondeo = newValue;
    });

    watch(escala, (newValue) => {
    subjectStore.subject.datosMateria.escala = newValue;
    });

    watch(orden, (newValue) => {
    subjectStore.subject.datosMateria.orden = newValue;
    });

    watch(esConcepto, (newValue) => {
    subjectStore.subject.datosMateria.esConcepto = newValue;
    });

    watch(poseeMotivosPersonalizados, (newValue) => {
    subjectStore.subject.datosMateria.poseeMotivosPersonalizados = newValue;
    });

    watch(requiereInscripcion, (newValue) => {
    subjectStore.subject.datosMateria.requiereInscripcion = newValue;
    });

    watch(requiereAsistencia, (newValue) => {
    subjectStore.subject.datosMateria.requiereAsistencia = newValue;
    });

    watch(extraCurricular, (newValue) => {
    subjectStore.subject.datosMateria.extraCurricular = newValue;
    });

    watch(permiteAgrupacion, (newValue) => {
    subjectStore.subject.datosMateria.permiteAgrupacion = newValue;
    });
</script>

<template>
    <div class="border w-5/6 mx-auto bg-blue-100 rounded-b-md">
        <div class="border mx-auto pl-6 pt-6 bg-gray-100 rounded-md p-6">
            
            <div class="mb-3 w-full">
                <label class="block" for="">Periodos</label>
                <select v-model="periodos" class="w-1/2 border" name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <p class="inline text-red-500 ml-1">*</p>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Metodo Promedio</label>
                <select v-model="metodoPromedio" class="w-1/2 border" name="" id="">
                    <option value="Ultima nota registrada">Ultima nota registrada</option>
                    <option value="Promedio Simple">Promedio Simple</option>
                    <option value="Promedio Ponderado">Promedio Ponderado</option>
                    <option value="Calificacion mas baja">Calificacion mas baja</option>
                    <option value="Calificacion mas alta">Calificacion mas alta</option>
                    <option value="Moda">Moda</option>
                    <option value="Suma">Suma</option>
                    <option value="Promedio Simple Avanzado">Promedio Simple Avanzado</option>
                    <option value="Complementario Promediado">Complementario Promediado</option>
                </select>
                <p class="inline text-red-500 ml-1">*</p>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Tipo Redondeo</label>
                <select v-model="tipoRedondeo" class="w-1/2 border" name="" id="">
                    <option value="Sin Redondeo">Sin Redondeo</option>
                    <option value="Superior">Superior</option>
                    <option value="Inferior">Inferior</option>
                    <option value="Mayor o Igual">Mayor o Igual</option>
                    <option value="Menor o Igual">Menor o Igual</option>
                    <option value="Mantiene">Mantiene</option>
                    <option value="Medio">Medio</option>
                    <option value="Periodico">Periodico</option>
                    
                </select>
                <p class="inline text-red-500 ml-1">*</p>
            </div>

            <div class="mb-3 w-full">
                <label class="block" for="">Escala</label>
                <select v-model="escala" class="w-1/2 border" name="" id="">
                    <option value="Escala 0 a 10">Escala 0 a 10</option>
                    <option value="Escala 0 a 100">Escala 0 a 100</option>
                    <option value="Escala cualitativa">Escala cualitativa</option>
                    
                </select>
                <p class="inline text-red-500 ml-1">*</p>
            </div>
            <div class="mb-3 w-full">
                <label class="block" for="">Orden</label>
                <input v-model="orden" class="px-2 py-1 border" type="text" placeholder="Ingrese Orden">
                <p class="inline text-red-500 ml-1">*</p>
            </div>

            <div>
                <div>
                    <label class="mr-2" for="">Es concepto</label>
                    <input v-model="esConcepto" type="checkbox" name="" id="">
                </div>
                <div>
                    <label class="mr-2" for="">Posee motivos personalizados</label>
                    <input v-model="poseeMotivosPersonalizados" type="checkbox" name="" id="">
                </div>
                <div>
                    <label class="mr-2" for="">Requiere Inscripcion</label>
                    <input v-model="requiereInscripcion" type="checkbox" name="" id="">
                </div>
                <div>
                    <label class="mr-2" for="">Requiere Asistencia</label>
                    <input v-model="requiereAsistencia" type="checkbox" name="" id="">
                </div>
                <div>
                    <label class="mr-2" for="">Extra-curricular</label>
                    <input v-model="extraCurricular" type="checkbox" name="" id="">
                </div>
                <div>
                    <label class="mr-2" for="">Permite agrupacion</label>
                    <input v-model="permiteAgrupacion" type="checkbox" name="" id="">
                </div>
            </div>

        </div>
    </div>
</template>