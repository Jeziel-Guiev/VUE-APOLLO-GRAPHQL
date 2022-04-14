<template>
 <v-app class="about">
   <section style="height:50px"></section>
   
   <section class="container">
    <v-banner
    elevation="9"
    icon="mdi-information"
    
    >
    <p class="">Cuida y cuidate del <strong>Covid-19 manten la distancia adecuada y sigue los protocolos de bioseguridad, para
      mayor información presiona
    </strong> <a href="https://www.google.com/">Aquí</a></p>
    </v-banner>
   </section>

    <section class="container" style="margin-bottom:250px">
      <v-main>
        <div class="titulo text-center">
          <h2 class="mb-4" style="color:black">miBalance</h2>
          <p>Plataforma para administrar cuentas de ingreso y egreso de una vivienda o para un uso comun dependiedo a tu trabajo.
             plataforma beta de prueba no usar para p producción a gran escala y porque nos importa tu seguridad 
             implementamos sesión por token y sistemas HTTPS por lo tanto tu información esta segura y cifrada.
          </p>
          <p>
           Somos una Startup en el desarrollo de plataformas IoT, pero tambien nos enfocamos en otros desarrollos
            si necesitas mayor i información de nosotros puedes visitar nuestra pagina web www.thingsess.com o enviarnos un mensaje al siguiente link
          <a>Aqui</a>

          </p>
          <p>
            Las herramientas que utilizamos para miBalance son <strong>NodeJs,</strong> <strong>MongoDB</strong> y <strong>VueJs</strong>, 
          </p>
          <p>
            
          </p>
        </div>

        <section class="mt-3 ">
        <v-row class="" style="height:180px">
          <v-col style="" sm="12" md="4" class=" d-flex justify-center">
            <div >
              <v-img class=""
            lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="130"
                    max-width="100"
                    src="@/assets/Views/nodejs.png"
              
            ></v-img>
            </div>
          </v-col>
          <v-col cols="12"  md="4" class="d-flex justify-center align-end">
            <div>
              <v-img class=""
            lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="100"
                    max-width="100"
                    src="@/assets/Views/vue.png"
              
            ></v-img>
            </div>
          </v-col>
          <v-col sm="12" md="4" class="d-flex justify-center">
            <div>
              <v-img class=""
            lazy-src="https://picsum.photos/id/11/10/6"
                    max-height="130"
                    max-width="100"
                    src="@/assets/Views/mongodb.png"
              
            ></v-img>
            </div>
          </v-col>
        </v-row>
      </section>
      </v-main>
    </section>
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
  name:'about',
  data(){
    return{
        icons: [
        
        'mdi-github',
        'mdi-instagram',
        'mdi-youtube',
      ],
    }
  }
}
</script>

<style scoped>
.about{
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 27%, rgba(183, 216, 247, 0.228) 78%);
}
.hello {
  width: 200%;
  height: 300px;
  
}
.helloq {
  width: 200%;
  height: 300px;
  display: flex;
}
.footer{
  margin-top: 200px;
}
</style>