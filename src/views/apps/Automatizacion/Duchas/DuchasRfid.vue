<template>
    <div>
       <div>
        <v-card elevation="3" class="mb-3">
                    <v-container>
                            ThingSees.com Automatiza lo que quieras!! XD
                    </v-container>
        </v-card>
       </div>
          <div>
              <TablaInquilinos :desserts="inquilinos"/>
          </div>
    </div>
</template>
<script>
import axios from 'axios';
import {getJWTaccess,getJWToken} from '@/auth/jwtService';
import TablaInquilinos from '@/components/apps/Automatizacion/Duchas/TablaDuchasInquilinos.vue'
export default {
    name:'inquilinos',
    components:{
        TablaInquilinos
    },
    data(){
        return{
            inquilinos:[]
        }
    },
    async mounted(){
        //console.log(getJWTaccess())
        // await axios.post('/find-inquilinos',{'placeData':this.$CryptoJS.AES.decrypt(localStorage.getItem('placeData'), getJWToken()).toString(this.CryptoJS.enc.Utf8)},getJWTaccess()).then(({data})=>{   
        //     data.forEach(element => {
        //       element.datecreate=element.datecreate.substr(0,10);
        //       if(element.estado==1) this.inquilinos.push(element);
        //   });  
              
        // }).catch(err=>alert('err'));
    }
}
</script>
