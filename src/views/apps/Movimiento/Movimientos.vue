<template>
    <div>
            <v-card-title>
            Transacciones
                <v-select class="mx-2"
                v-model="AnioActual"
                :items="states"
                menu-props="auto"
                label="Select"
                hide-details
                prepend-icon="mdi-application-edit"
                single-line
                ></v-select>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
             </v-card-title>
            <v-data-table
            :headers="headers"
            :items="desserts"
            :search="search"
            >
            <template v-slot:[`item.edit`]="{ item }">
              <v-icon
            size="20"
            color="blue"
            class="mr-2"
            @click="$router.push({name:'editar-inquilino',query:{'inquilino':item}})"
            >
            mdi-pencil
            </v-icon>
            
            <v-icon
            size="20"
            color="orange"
            class="mr-2"
            @click="$router.push({name:'deshabilitar-inquilino',query:{'inquilino':item}})"
            >
            mdi-archive-lock
            </v-icon>
            </template>
            </v-data-table>

            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-if="notificacion==0"
            >
              <v-icon>mdi-alert-circle</v-icon> Agrega un nuevo inquilino
            </v-alert>
            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-else
            >
              <v-icon>mdi-alert-circle</v-icon> Puedes agregar tantos como quieras como maximo <strong>700</strong>
            </v-alert>

    </div>
</template>
<script>
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
import axios from 'axios'
export default{ //membresia
    data(){
        return{
        AnioActual:String((new Date()).getFullYear()),
        states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
        notificacion:1,
        search: '',
        headers: [
          {
            text: 'Fecha',
            align: 'center',
            value: 'datecreate'
          },
          { text: 'Tipo', value: 'tipo',align: 'center', },
          { text: 'Codificacion', value: 'codificacion',align: 'center', },
          { text: 'Detalles', value: 'detalles',align: 'center' },
          { text: 'Monto', value: 'monto',align: 'center' },
          { text: 'Debe', value: 'debe',align: 'center' },
          { text: 'Haber', value: 'haber',align: 'center' },
          { text: 'Firma', value: 'firma',align: 'center'},
        ],

        desserts: [
        //   {
        //     name: 'Frozen Yogurt',
        //     numberooms: 159,
        //     datecreate: 6.0,
        //     correo: 24,
          
        //   },
          // {
          //   name: 'Ice cream sandwich',
          //   numberooms: 237,
          //   datecreate: 9.0,
          //   correo: 37,
      
          // }
        ],
        }
    },
    methods:{
      editCasa(item){
        console.log(item);
      }
    },
    async mounted(){
      // console.log(this.desserts )// this.pago_activo.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
     const config={
         placeData:this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8),
         gestion:String((new Date()).getFullYear()),
     }
     await axios.post('/get-transaccions',config,getJWTaccess()).then(({data})=>{
         data.forEach(element => {
             element.datecreate=element.datecreate.substr(0,10)
             if(element.tipo=='activo') element.debe=element.monto
             if(element.tipo=='pasivo') element.haber=element.monto
         });
         //console.log(data)
         this.desserts=data;
     }).catch(err=>console.log('er'))
    }
}
</script>
