<template>
    <v-card elevation="3">
        <v-container>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                v-model="casa.nombre"
                :rules="[v => !!v || 'nombre es requerido']"
                label="nombre Casa"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                 <v-text-field
                v-model="casa.cuartos"
                type="number"
                :rules="[v => !!v || 'Numero de cuartos es requerido']"
                label="Num. cuartos"
                required
                ></v-text-field>
              </v-col>  
              <v-col cols="12" md="4">   
                <v-select
                v-model="casa.correo"
                :items="items"
                :rules="[v => !!v || 'Administrador es requerido']"
                label="Administrador"
                required
                ></v-select>
              </v-col>
              <!-- <v-col md="4">
                  
                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>
              </v-col> -->

               <v-col cols="12">
                    <v-btn
                :disabled="!valid"
                color="indigo lighten-3"
                dark
                class="mr-4"
                @click="validate"
                >
                Guardar
                </v-btn>
                 <v-btn
                color="teal darken-3"
                dark
                class="mr-4"
                @click="atras()"
                >
                Atras
                </v-btn>

                <!-- <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn> -->

                <v-btn
                color="blue-grey darken-3"
                dark
                @click="resetValidation"
                >
                reset validacion
                </v-btn>
               </v-col>
             </v-row>
        </v-form>
        </v-container>
    </v-card>
</template>
<script>
import axios from 'axios';
import {isUserLoggedIn} from '@/auth/utils.js';
import {getJWTaccess} from '@/auth/jwtService.js';
  export default {
    data: () => ({
       casa:{
            nombre:'',
            cuartos:'',
            datecreated:new Date(),
            correo:null
          },
      valid: true,
      items: [
      ],
      checkbox: false,
    }),

    methods: {
      async validate () {
       // const ref=this.$refs.form.validate();
        //console.log(this.casa);
       if(this.$refs.form.validate()==true){
        await axios.post('/insert-new-vivienda',this.casa,getJWTaccess()).then(({data})=>{
          this.$router.go(-1)
        }).catch(err=>alert('no send info server'))
       }
      },
      reset () {
        this.$refs.form.reset();
      },
      resetValidation () {
        this.$refs.form.resetValidation();
      },
      atras(){
          this.$router.go(-1)
      }
    },
    mounted(){
        this.items.push(JSON.parse(isUserLoggedIn()).cuenta)
        //console.log(isUserLoggedIn());
    }
  }
</script>
