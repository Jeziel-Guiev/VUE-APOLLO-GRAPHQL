

<template>
  <v-app class="signin">
    <section style="height:50px"></section>
    <div style="margin-bottom:100px">

<v-sheet
  
  class="signin rounded-xl mx-auto mt-5 "
  elevation="11"
  height="100%"
  width="300"
  
>
<v-main>
   <div>
     
   </div>
  <h3 class="text-center p-0" style="">Regístrate</h3>
  <div class="mx-auto" style="width:270px">
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="text-center"
  >
   
 <v-text-field
      v-model="user"
      
      label="User"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      
    ></v-text-field>
    <v-text-field
        type="password"
          v-model="password"
          :counter="10"
          :rules="passwordRules"
          label="Password"
          
        ></v-text-field>
        <v-text-field
        type="password"
          v-model="secretvalue"
          
  
          label="Clave secreto"
          
        ></v-text-field>
    <div class="mx-auto mb-1">
      <v-btn @click="signup" >Regístrate</v-btn>
    </div>
    <a class="text-center mt-3" @click="login">Iniciar sesión</a>

 

  


  
  </v-form>
  </div>
</v-main>
</v-sheet>


    </div>

              <!-- <section class="footer mt-5 pa-0">
            <v-card height="100px">
         <v-footer
         absolute
         padless
      
            >
              <v-card
                flat
        tile
        width="100%"
        class=" lighten-1 text-center"
              >
                <v-card-text>
                  <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    icon
                  >
                    <v-icon size="24px">
                      {{ icon }}
                    </v-icon>
                  </v-btn>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text class="white--dark">
                  {{ new Date().getFullYear() }} — <strong>JG</strong>
                </v-card-text>
              </v-card>
            </v-footer>
            </v-card>

          </section> -->
  </v-app>
</template>

<script>


  export default {
    data: () => ({
         icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
      user:'',
      valid: true,
      password: '',
      secretvalue:'',
      passwordRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      
      checkbox: false,
    }),

    methods: {
      async signup(){
        //role
        const data={
          name:this.user,
          email:this.email,
          password:this.password,
          secretvalue:this.secretvalue,
          membresia:"free",
          ability:[
            {resource:'admin',subject:'all'}
          ]
        }
        let config={
          headers:{"Content-Type":"application/json"}
        }
   
      },
      login(){
        this.$router.push('/login')
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>
<style scoped>
.signin{
  background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 27%, rgba(183, 216, 247, 0.228) 78%);
}
</style>