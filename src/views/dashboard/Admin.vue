<template>
<div>
 <div> <strong>{{(user.role).toUpperCase()}}</strong></div>
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
                v-model="user.name"
                :rules="[v => !!v || 'nombre es requerido']"
                label="nombre user"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                 <v-text-field
                v-model="user.apellido"
                :rules="[v => !!v || 'Apellido es requerido']"
                label="Apellido"
                required
                ></v-text-field>
              </v-col>  
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="user.nivel"
                
                :rules="[v => !!v || 'Nivel es requerido']"
                label="Nivel"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="user.direccion"
                :rules="[v => !!v || 'Direccion es requerido']"
                label="Direccion"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="user.telefono"
                :rules="[v => !!v || 'Telefono es requerido']"
                label="Telefono"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-text-field
                v-model="user.paralelo"
                :rules="[v => !!v || 'Paralelo es requerido']"
                label="Paralelo"
                required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">   
                <v-select
                v-model="user.turno"
                :items="items"
                :rules="[v => !!v || 'Turno es requerido']"
                label="Turno"
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
</div>
</template>


<script>
import {getJWToken} from '@/auth/jwtService'; // obtenemos el token o clave sercreto
import { mapGetters } from 'vuex'
  export default {
    name: 'admin',
    data(){
      return{
        contrato_estado:true,
       contrato:'',
        role:this.$store.state.role,
        valid: true,
        items: ["tarde","manana"],
        checkbox: false,
      }
    },
    mounted(){ //validate
     // this.$store.dispatch('setUser'); 
      //  console.log(this._vm);
      //console.log(this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8));
      //console.log(this.role);
    },
    methods:{
      showtoken(){
        //console.log(this.$store.state.token);
      }
    },
    methods:{
  async validate () {
       if(this.$refs.form.validate()==true){

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
    created(){
      //console.log(getAuth());
       //console.log(this.role); //user
      // console.log(this.$store.state.resource)
    },
    computed: {
    ...mapGetters(['authStatus', 'user'])
    }
    
  }
</script>