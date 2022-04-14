<template>
    <v-container>
      <div>
           <v-simple-table>
                <template v-slot:default>
                <thead>
                    <tr>
                    <th class="text-left">
                        Contenido
                    </th>
                    <th class="text-left">
                        userID 
                    </th>
                     <th class="text-left">
                        hecho
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                    <th class="text-left">
                        Delete
                    </th>
                    
                    </tr>
                </thead>
                <tbody>
                    <tr
                    v-for="item in tareas"
                    :key="item.contenido"
                    >
                    <td>{{ item.contenido }}</td>
                    <td>{{ item.userID }}</td>
                    <td>{{ item.completado }}</td>
                    <td><v-btn icon @click="edit(item)"><v-icon color="blue">mdi-pencil</v-icon></v-btn></td>
                    <td><v-btn icon @click="deleteTarea(item)"><v-icon color="red">mdi-delete</v-icon></v-btn></td>
                    </tr>
                </tbody>
                </template>
            </v-simple-table>
            <div v-if="stateEdit">
                <br>
               <div>
                    <v-text-field v-model="contenido" placeholder="contenido"> </v-text-field>
                     <v-text-field v-model="id" disabled placeholder="id"> </v-text-field>
                     <v-btn color="green" small @click="saveEdit">guardar</v-btn>
                     <v-btn color="red" class="mx-4" small @click="cancelar">Cancelar</v-btn>
               </div>
            </div>
      </div>
    </v-container>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
export default ({
    data(){
        return{
            stateEdit:false,
            contenido:'',
            id:'',
            db:firebase.firestore(),
        }
    },
    computed:{
        ...mapState([
            'tareas'
            ])
    },
    methods:{
        async deleteTarea(data){
           // console.log(data.id);
            this.db.collection('tareas').doc(data.id).delete();
        },
        async edit(data){
            this.stateEdit=true;
            this.contenido=data.contenido;
             this.id=data.id;
          //  console.log(data);
        },
        async saveEdit(){
            this.db.collection('tareas').doc(this.id).update({
                contenido:this.contenido
            })
            this.stateEdit=false;
        },
        async cancelar(){
            this.stateEdit=false;
        }
    },
    
})
</script>
