<template>
    <div>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          md="4"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    @click="nextroute(item.route)"
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    Configurar
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>
<script >

export default{
    data(){
        return{
             items: [
                {
                color: '#1F7087',
                src: 'https://cdn.pixabay.com/photo/2015/12/22/04/00/edit-1103599_960_720.png',
                title: 'CASA',
                subtitle: 'Configura tu vivienda y mas detalles',
                route:'config-casa'
                },
                {
                color: '#952175',
                src: 'https://sisegseguridad.net/wp-content/uploads/2018/07/credencializacion_Mesa-de-trabajo-1.png',
                title: 'ACCESO',
                subtitle: 'Designa roles y acceso a otras personas',
                route:'config-acceso'
                },//#385F73
                {
                color: '#385F73',
                src: 'https://cdn-icons-png.flaticon.com/512/1301/1301416.png',
                title: 'NOTIFICACION',
                subtitle: 'Cambia las notificaciones que veras',
                route:'config-notificacion'
                },//#385F73
                {
                color: '#952175',
                src: 'https://play-lh.googleusercontent.com/FYfP76sPPQdm2gu8IETAd6_e4gQEuJzXGjrCHPJsnRqmK0tIDclJ134ruAdoU4WgvQQ',
                title: 'PAGOS',
                subtitle: 'Configura tus ingresos, egresos.',
                route:'config-pagos'
                },//#385F73
            ],
        }
    },
    methods:{
        nextroute(route){
            //console.log(route);
            this.$router.push({name:route});
        }
    }
}

</script>
