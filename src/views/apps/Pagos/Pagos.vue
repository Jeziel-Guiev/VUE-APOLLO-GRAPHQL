<template>
 <div>
        <v-card>
        <v-container>
            <v-row>
                <v-col cols="12" md="8" class="d-flex align-center">
                    <div style="font-size:20px;color:rgb(134, 85, 212)">Elige una opcion</div   >
                </v-col>
                <v-col cols="12" md="4" class="d-flex align-center">
                    <div>
                        <v-select
                        v-model="seleccionado"
                        :items="items"
                        label="Pasivos-activos"
                        outlined
                        ></v-select>
                    </div>
                </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card class="mt-3">
            <v-container>
                <component :is="layout"></component>
            </v-container>
        </v-card>
 </div>
</template>
<script>
//import TablaSimple from '@/components/apps/Pagos/TablaPagos.vue'
import PercibirIngreso from '@/components/apps/Pagos/PercibirIngreso.vue'; //PagarEgreso
import PagarEgreso from '@/components/apps/Pagos/PagarEgreso.vue';
import SelectElement from '@/components/apps/Pagos/Index.vue';
export default{
    components:{
        PercibirIngreso,
        PagarEgreso,
        SelectElement
    },
    name:'pagos',
    data(){
        return{
            //select:'SelectComponent',
            
            seleccionado:'',
            items: ['INICIO','EGRESO','INGRESO'],
        }
    },
    computed:{
        layout(){
           // console.log(this.seleccionado);
            if(this.seleccionado=='EGRESO') return 'PagarEgreso';
            if(this.seleccionado=='INGRESO') return 'PercibirIngreso';
            if(this.seleccionado=='TRANSACCIONES') return 'SelectElement';
            return 'SelectElement';
        },
      
    }

}
</script>
<style>
.sd{
    color: rgb(134, 85, 212);
}
</style>
