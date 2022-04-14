<template>
    <v-card elevation="3">
            <v-card-title>
            ACCESO
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-btn :disabled="membresia" @click="$router.push({name:'config-acceso-nuevo'})" color="indigo lighten-3" dark class="mx-4">NUEVO</v-btn>
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
              v-if="membresia==0"
            >
              <v-icon>mdi-alert-circle</v-icon> Agrega un nuevo personaje
            </v-alert>
            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-else
            >
              <v-icon>mdi-alert-circle</v-icon> Si desea agregar mas accesos <strong>adquiera</strong> el plan gold
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
            text: 'Nombre',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'correo', value: 'email',align: 'center', },
          { text: 'contrasenia', value: 'passwordcopy',align: 'center', },
          { text: 'Fecha creacion', value: 'datecreate',align: 'center' },
          { text: 'Role', value: 'role',align: 'center' },
          { text: 'Acciones', value: 'edit',align: 'center'},
        ],
        desserts: [
        ],
        }
    },
    methods:{
      editCasa(item){
        //console.log(item);
      }
    },
    async mounted(){
      await axios.get('/getinvitados',getJWTaccess()).then(({data})=>{
          data.forEach(element => {
              element.datecreate=(element.datecreate).substr(0,10);
          });
          this.desserts=data;
          if(JSON.parse(isUserLoggedIn()).membresia=="free" && data.length>=1 ){
            this.membresia=true;
          }
        }).catch(err=>alert('error al buscar viviendas'));
    }
}

</script>
