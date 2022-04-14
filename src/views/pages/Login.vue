<template >
  <div id="iniciologin" >
    <v-row>
      <v-col md="8" class="d-flex justify-center align-center">
            <div >
             
                <v-img
              width="1000"
              src="@/assets/Logo/banner.png" 
           
              ></v-img>
              
            </div>
      </v-col>
      <v-col md="4" class="d-flex justify-center align-center">
       <div>
           <div>
        <v-img width="400" src="@/assets/Logo/logo_superior.png"></v-img>
      </div>
    <div  class="d-flex justify-center">
     
      <div>
        <v-sheet

        >

          <h3 class="text-center p-0" style="color:white">Iniciar sesión</h3>
          <div class="mx-auto" style="width:270px">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="text-center"
          >
          

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              type="email"
              
            ></v-text-field>
            <v-text-field
                type="password"
                  v-model="password"
                  :counter="20"
                  :rules="passwordRules"
                  label="Password"
                  
                ></v-text-field>
            <div class="mx-auto  mb-1">
                  <v-btn @click=" signin" color="orange">INICIAR SESION</v-btn>
            </div>
         
            </v-form>
            </div>

        </v-sheet>
    </div>
    </div>
       </div>
      </v-col>
    </v-row>


   


  </div>
</template>

<script>
import gql from 'graphql-tag';
import { mapActions } from 'vuex'
import {getHomeRouteForLoggedInUser} from '@/auth/utils.js'
import axios from 'axios'
  export default {
    data: () => ({
      icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
      valid: true,
      password: 'A12@fe443',
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Password must be less than 20 characters',
      ],
      email: 'josseu@gmail.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
    }),

    methods: { //al pedir mensajes
      ...mapActions(['login']),
      async signin(){
        const authDetails={};
        authDetails.email=this.email;
        authDetails.password=this.password;
        this.login(authDetails)
        .then((data) => {
          if (data==true) this.$router.replace(getHomeRouteForLoggedInUser('admin'));
        })
      },
      async register(){
    // Call to the graphql mutation
        const result = await this.$apollo.mutate({
          // Query
          mutation: gql`mutation{
          registerUser(email:"admin56@gmail.com",password: "A12s@fe47"){
          token
          }
        }`
            })
            console.log(result)
      },
      validate () {
        this.$refs.form.validate()
      },
     
    
    },
  }
</script>
<style scoped>

#iniciologin{
  height:100%;
  margin:0;
  display: flex;
  flex-direction: column;
}
.signin{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgb(212, 212, 212) 7%, rgba(183, 216, 247, 0.228) 38%);
}
</style>
