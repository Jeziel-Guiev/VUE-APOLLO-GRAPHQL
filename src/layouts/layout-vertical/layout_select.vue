<template>
    <div style="background:#020562  "> 
   
           <v-list-item style="color:white" @click="showInfo" active-class="deep-purple--text text--accent-4" v-if="(index.resource).includes(role)" link>
            <v-list-item-icon>
              <v-icon color="white">mdi-{{index.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title style="font-weight: 400!important;" >{{index.title}}</v-list-item-title>
          </v-list-item>
    </div>
</template>
<script>

export default{
    props:{
        index:Object,
        role:String
    },
    data(){
        return{
            //  index:''
            color:''
        }
    },
    methods:{
        showInfo(){
           // console.log(this.index.route);
            this.$router.push({name:this.index.route});
            //this.color='green'
        }
    }
}

</script>
