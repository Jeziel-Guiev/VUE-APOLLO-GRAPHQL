<template>
    <v-card elevation="3">
            <v-card-title>
            CASA
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-btn :disabled="membresia" @click="$router.push({name:'config-casa-nueva'})" color="indigo lighten-3" dark class="mx-4">NUEVO</v-btn>
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
            @click="editCasa(item)"
            >
            mdi-pencil
            </v-icon>
            </template>
            </v-data-table>

            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-if="notificacion==0"
            >
              <v-icon>mdi-alert-circle</v-icon> Agrega una nueva vivienda 
            </v-alert>
            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-else
            >
              <v-icon>mdi-alert-circle</v-icon> Si desea agregar mas casas <strong>adquiera</strong> el plan gold
            </v-alert>
    </v-card>
    
</template>
<script>
import axios from 'axios';
import {getJWTaccess} from '@/auth/jwtService.js';
import {isUserLoggedIn} from '@/auth/utils.js';
export default {
    data(){
        return{
        membresia:false,
        notificacion:0,
        search: '',
        headers: [
          {
            text: 'Nombre de casa',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Num. cuartos', value: 'numberooms',align: 'center', },
          { text: 'Fecha creacion', value: 'datecreate',align: 'center' },
          { text: 'administrador', value: 'correo',align: 'center' },
          { text: 'Acciones', value: 'edit',align: 'center'},
        ],
        desserts: [
          // {
          //   name: 'Frozen Yogurt',
          //   numberooms: 159,
          //   datecreate: 6.0,
          //   correo: 24,
          
          // },
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
      
      await axios.get('/findviviendas',getJWTaccess()).then(({data})=>{
          //console.log(data);
          data.forEach(element => {
              //element.datecreate=String(datecreate).substr(0,10);
              element.datecreate=element.datecreate.substr(0,10)
              //console.log(element.datecreate.substr(0,10))
          });
          this.notificacion=data.length;
          if(JSON.parse(isUserLoggedIn()).membresia=="free" && this.notificacion==1 ){
            this.membresia=true;
          }
          this.desserts=data;
        }).catch(err=>alert('error al buscar viviendas'));
    }
}

</script>
