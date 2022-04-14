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
                v-model="usuario.name"
                :rules="[v => !!v || 'nombre es requerido']"
                label="nombre usuario"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                 <v-text-field
                v-model="usuario.email"
                :rules="[v => !!v || 'Email es requerido']"
                label="Email"
                required
                ></v-text-field>
              </v-col>  
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="usuario.password"
                type="password"
                :rules="[v => !!v || 'Password es requerido']"
                label="Contrasenia"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-select
                v-model="usuario.role"
                :items="items"
                :rules="[v => !!v || 'Role es requerido']"
                label="Role"
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
       usuario:{
            name:'',
            email:'',
            password:'',
            role:'',    
            datecreated:new Date(),
            //ability:[{'resource':'cajera','subject':'all'}]
          },
      valid: true,
      items: ["cajera"
      ],
      checkbox: false,
    }),

    methods: {
      async validate () {
       // const ref=this.$refs.form.validate();
        //console.log(this.usuario);
       if(this.$refs.form.validate()==true){
         this.usuario.ability=[{'resource':this.usuario.role,'subject':'all'}];
         await axios.post('/insertnewinvitado',this.usuario,getJWTaccess()).then(({data})=>{
                      this.$router.go(-1)
         }).catch(err=>alert('error al agregar administrador'));

      //  console.log(this.usuario);
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
        //this.items.push(JSON.parse(isUserLoggedIn()).cuenta)
        //console.log(isUserLoggedIn());
    }
  }
</script>
