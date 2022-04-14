<template>
        <v-container>
            <Tabla-Ingresos/>
            <Tabla-Egresos/>
        </v-container>
</template>
<script>
import TablaIngresos from '@/components/apps/Configuracion/ConfigIngresos.vue';
import TablaEgresos from '@/components/apps/Configuracion/ConfigEgresos.vue';
export default{
    name:'config-pagos',
    components:{
        TablaIngresos,
        TablaEgresos
    },
    data(){
        return{

        }
    }

}
</script>
