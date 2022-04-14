<template>
<div>
  <v-row >
      <v-col cols="12" md="4">
        <v-select
          v-model="AnioActual"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-application-edit"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="12" md="8" class="d-flex justify-center align-center">
          <div >
              <!-- <v-btn color="indigo lighten-3" dark>Agregar nuevo pago</v-btn> -->
          </div>
      </v-col>
  </v-row>
  
      <table>
        <tr>
          <th style="color:rgba(183, 146, 255);" >
            N
          </th>
          <th style="color:rgba(183, 146, 255);" class="text-center">
            Nombre
          </th>
          <th style="color:rgba(183, 146, 255);" class="text-center">
            Pago
          </th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Enr</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Febr</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Marz</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Abrl</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">May</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Jun</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Jul</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Agost</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Sep</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Oct</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Nov</th>
            <th class="text-center" style="color:rgba(183, 146, 255);">Dic</th> 
        </tr>
  
        <tr
          v-for="item in $store.state.listInquilinosAnioActivosAlquiler"
          :key="item.name"
        >
          <td class="text-center">{{ item.diainicio }}</td>
          <td>{{ item.nombre }}</td>
          <td>
              
                <div>
                   <v-row >
                       <v-col cols="12" class="text-center" >Garantia</v-col>
                       <v-col cols="12" class="text-center"  >Alquiler</v-col>
                       <v-col cols="12" class="text-center">Wifi</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>0">{{ item.data.Garantia[0].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>0" >{{ item.data.Alquiler[0].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>0">{{ item.data.Wifi[0].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>1">{{ item.data.Garantia[1].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>1" >{{ item.data.Alquiler[1].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>1">{{ item.data.Wifi[1].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>2">{{ item.data.Garantia[2].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>2" >{{ item.data.Alquiler[2].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>2">{{ item.data.Wifi[2].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>3">{{ item.data.Garantia[3].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>3" >{{ item.data.Alquiler[3].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>3">{{ item.data.Wifi[3].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>4">{{ item.data.Garantia[4].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>4" >{{ item.data.Alquiler[4].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>4">{{ item.data.Wifi[4].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
                </div>
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>5">{{ item.data.Garantia[5].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>5" >{{ item.data.Alquiler[5].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>5">{{ item.data.Wifi[5].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>6">{{ item.data.Garantia[6].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>6" >{{ item.data.Alquiler[6].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>6">{{ item.data.Wifi[6].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>7">{{ item.data.Garantia[7].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>7" >{{ item.data.Alquiler[7].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>7">{{ item.data.Wifi[7].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>8">{{ item.data.Garantia[8].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>8" >{{ item.data.Alquiler[8].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>8">{{ item.data.Wifi[8].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>9">{{ item.data.Garantia[9].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>9" >{{ item.data.Alquiler[9].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>9">{{ item.data.Wifi[9].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>10">{{ item.data.Garantia[10].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>10" >{{ item.data.Alquiler[10].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>10">{{ item.data.Wifi[10].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
          <td>
              <div>
                   <v-row >
                       <v-col cols="12" class="text-center" v-if="item.data.Garantia.length>11">{{ item.data.Garantia[11].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Alquiler.length>11" >{{ item.data.Alquiler[11].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else >-</v-col>
                       <v-col cols="12" class="text-center" v-if="item.data.Wifi.length>11">{{ item.data.Wifi[11].monto }}</v-col>
                       <v-col cols="12" class="text-center" v-else>-</v-col>
                   </v-row>
              </div>              
          </td>
        </tr>

      </table>




</div>
</template>
<script>
  export default {
    data () {
      return {
        AnioActual:String((new Date()).getFullYear()),
        states: ['2021','2022','2023','2023','2024','2025','2026','2027'],
        desserts: [
          {
            name: '0',
            calories: 159,
          },
          {
            name: '1',
            calories: 237,
          },
          {
            name: '2',
            calories: 262,
          },
          {
            name: '3',
            calories: 305,
          },
          {
            name: '4',
            calories: 356,
          },
          {
            name: '5',
            calories: 375,
          },
         
        ],
      }
    },
    mounted(){
      //console.log("ahora si viene lo chido  ")
      //this.$store.commit('getListInquilinos');
      this.$store.commit('getListInquilinosYearActivosAlquiler');
    }
  }
</script>

<style>
table {
  font-family: arial, sans-serif;
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  border-collapse: collapse;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>