import { defineStore } from "pinia";

export const useSubjectStore = defineStore('subjectStore',{
    state: ()=>({
        subject:{
            datosGenerales:{
                año:undefined,
                sigla:undefined,
                nombre:undefined, 
            },
            gestores:{
                rol:'',
                nombre:'',
                personas:[]
            },
            datosMateria:{
                periodos:1,
                metodoPromedio:'',
                tipoRedondeo:'',
                escala:'',
                orden:'',
                esConcepto:false,
                poseeMotivosPersonalizados:false,
                requiereInscripcion:false,
                requiereAsistencia:false,
                extraCurricular:false,
                permiteAgrupacion:false,
            },
            competencia:{
                nombre:'',
                descripcion:'',
                escala:'',
                metodoCarga:'',
                orden:'',
                competencias:[],
            },
        }
    }),
    actions: {
        validateSubject() {
            const { datosGenerales, gestores, datosMateria } = this.subject;

            // Validar datosGenerales
            for (const key in datosGenerales) {
                if (!datosGenerales[key]) {
                    return false;
                }
            }

            // Validar datosMateria
            for (const key in datosMateria) {
                if (datosMateria[key] === '' || datosMateria[key] === null || datosMateria[key] === undefined) {
                    return false;
                }
            }

            // Validar gestores.personas
            if (gestores.personas.length < 2) {
                return false;
            }

            return true;
        }
    }
})

