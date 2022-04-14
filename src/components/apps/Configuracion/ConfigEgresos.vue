<template>
    <v-card elevation="3">
     
            <v-card-title>
            <div class="mx-2">Pasivos </div>
           <v-select
                v-model="pasivos[0]"
                :items="pasivos"
            ></v-select>
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
               <div class="mx-2">
              <v-dialog
                v-model="dialog"
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    color="indigo lighten-3"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    Nuevo
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="text-h5 indigo lighten-3" style="color:white">
                    Nuevo pasivo
                  </v-card-title>

                  <v-card-text>
                            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                v-model="pasivo.codificacion"
                :rules="[v => !!v || 'Codificacion es requerido']"
                label="Codificacion"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                v-model="pasivo.nombre"
                :rules="[v => !!v || 'Nombre es requerido']"
                label="Nombre"
                required
                ></v-text-field>
              </v-col>  
             </v-row>
        </v-form>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                                   <v-btn
                color="blue-grey darken-3"
                dark
                @click="resetValidation"
                >
                reset validacion
                </v-btn>
                     <v-btn
                color="teal darken-3"
                dark
                class="mr-4"
                @click="atras()"
                >
                Cerrar
                </v-btn>
                    <v-btn
                      color="primary"
                      text
                      
                      @click="validate"
                      :disabled="!valid"
                    >
                      Guardar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
        </div>
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
            @click="editpasivo(item)"
            >
            mdi-pencil
            </v-icon>
            
            <v-icon
            size="20"
            color="orange"
            class="mr-2"
           
            >
            mdi-delete
            </v-icon>
            </template>
            </v-data-table>
            <v-alert
              dense
              dark
              color="#385F73"
             
            >
              <v-icon>mdi-alert-circle</v-icon> Ten cuidado al ingresar la codificacion, <strong>maximo 100</strong>
            </v-alert>
    
    </v-card>
</template>
<script>
import axios from 'axios';
import {getJWTaccess,getJWToken} from '@/auth/jwtService.js';
export default{ //membresia
    data(){
        return{
          pasivo:{
            codificacion:'2.1.1.',
            nombre:'',
            datecreated:new Date(),
            estado:1,
            placeData:'',
            codigo:2
          },
      valid: true,
            dialog: false,
        notificacion:1,
        search: '',
        headers: [
          {
            text: 'Codificacion',
            align: 'center',
            sortable: false,
            value: 'codificacion'
          },
          { text: 'pasivos', value: 'nombre',align: 'center', },
          { text: 'Fecha creacion', value: 'datecreate',align: 'center' },
          { text: 'Acciones', value: 'edit',align: 'center'},
        ],
        pasivos:['2.1.1 CUENTAS POR PAGAR'],
        desserts: [
       
        ],
        }
    },
    methods:{
      editpasivo(item){
        console.log(item);
      },
      async validate () {
       // const ref=this.$refs.form.validate();
        //console.log(this.pasivo);
        
       
       if(this.$refs.form.validate()==true){
         this.dialog = false;
         //console.log(this.pasivo);
         //this.pasivo.nombre.toUpperCase()
         
         axios.post('/insert-pasivo',this.pasivo,getJWTaccess()).then(({data})=>{
           //data.datecreated=data.datecreated.substr(0,10);
            this.desserts.push(data);
         }).catch(err=> console.log('err'))
       }
       
      },
      reset () {
        this.$refs.form.reset();
      },
      resetValidation () {
        this.$refs.form.resetValidation();
      },
      atras(){
          this.dialog = false;
      }
    },
    mounted(){
      // console.log(this.desserts )
      this.pasivo.placeData=this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8);
      axios.post('/get-pasivos',{'placeData':this.pasivo.placeData},getJWTaccess()).then(({data})=>{
        data.forEach(element => {
              element.datecreate=element.datecreate.substr(0,10);
          });  
        this.desserts=data;
      }).catch(err=>console.log('err'))
    }
}
</script>
