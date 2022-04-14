<template>
    <v-card elevation="3">
            <v-card-title>
            Inquilinos
            <v-spacer></v-spacer>
            <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
            <v-btn @click="$router.push({name:`nuevo-inquilino-${$store.state.role}`})" color="indigo lighten-3" dark class="mx-4">NUEVO</v-btn>
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
            @click="$router.push({name:`editar-inquilino-${$store.state.role}`,query:{'inquilino':item}})"
            >
            mdi-pencil
            </v-icon>
            
            <v-icon
            size="20"
            color="orange"
            class="mr-2"
            @click="$router.push({name:`deshabilitar-inquilino-${$store.state.role}`,query:{'inquilino':item}})"
            >
            mdi-archive-lock
            </v-icon>
            </template>
            </v-data-table>

            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-if="notificacion==0"
            >
              <v-icon>mdi-alert-circle</v-icon> Agrega un nuevo inquilino
            </v-alert>
            <v-alert
              dense
              dark
              color="indigo lighten-2"
              v-else
            >
              <v-icon>mdi-alert-circle</v-icon> Puedes agregar tantos como quieras como maximo <strong>700</strong>
            </v-alert>
             <v-alert
              dense
              dark
              color="blue-grey darken-3"
              style="font-family:Arial"
            >
              <v-icon>mdi-alert-circle</v-icon> Dia de inicio corresponde al dia en que el iquilino entra a vivir a la vivienda 
              para tener un mejor filtro se pide agregar un dia del mes que este en todos los meses del 
              calendario como ejemplo de 0-29 este dato debe ser un numero, Pago corresponde al monto que debe
              cancelar cada mes el nuevo inquilino este valor es un numero y puede ser editado posteriormente      
            </v-alert>
    </v-card>
</template>
<script>

export default{ //membresia
    props:{
      desserts:{type:Array,default:[
        //  {
        //     name: 'Frozen Yogurt',
        //     cuartos: 159,
        //     datecreate: 6.0,
        //     carnet: 24,
          
        //   },
      ]}
    },
    data(){
        return{
        notificacion:1,
        search: '',
        headers: [
          {
            text: 'Nombre',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          { text: 'Num cuarto', value: 'cuarto',align: 'center', },
          { text: 'Fecha creacion', value: 'datecreate',align: 'center' },
          { text: 'Contrato', value: 'contrato',align: 'center' },
          { text: 'Carnet', value: 'carnet',align: 'center'},
          { text: 'Celular', value: 'celular',align: 'center'},
          { text: 'Dia de incio', value: 'diainicio',align: 'center'},
          { text: 'Garantia', value: 'garantia',align: 'center'},
          { text: 'Pago', value: 'pago',align: 'center'},
          { text: 'Acciones', value: 'edit',align: 'center'},
        ],

        // desserts: [
          // {
          //   name: 'Frozen Yogurt',
          //   numberooms: 159,
          //   datecreate: 6.0,
          //   correo: 24,
          
          // },
        //   // {
        //   //   name: 'Ice cream sandwich',
        //   //   numberooms: 237,
        //   //   datecreate: 9.0,
        //   //   correo: 37,
      
        //   // }
        // ],
        }
    },
    methods:{
      editCasa(item){
        console.log(item);
      }
    },
    mounted(){
      // console.log(this.desserts )
    }
}
</script>
