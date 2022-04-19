<template>
    <div>
      <v-dialog
      v-model="dialog"
      max-width="450"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
          @click="messages=0"
        >
            <v-badge
            :content="messages"
            :value="messages"
            color="red" 
            overlap
          >
            <v-icon color="indigo lighten-3" >
              mdi-message-text
            </v-icon>
            
          </v-badge>
        </v-btn>
      </template>
  <v-card
    max-width="450"
    class="mx-auto"
  >


    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle ><span class="text--primary">{{item.user}}- </span>{{item.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
    </v-dialog>
     <!-- <v-tooltip bottom color="indigo lighten-2">
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
          <v-badge
            :content="messages"
            :value="messages"
            color="red" 
            overlap
          >
            <v-icon >
              mdi-message-text
            </v-icon>
            
          </v-badge>
          </v-btn>
          
        </template>
        <span>Mensajes</span>
      </v-tooltip> -->
    </div>
</template>
<script>
import {getJWTaccess} from '@/auth/jwtService.js'
export default{
    data(){
        return{
            messages:0,
            dialog: false,
            items: [
        { header: 'Today' },
        {
          avatar: 'https://i.pinimg.com/564x/5d/99/cd/5d99cdb9fa7fbb243e857a0172c3c75e--jg-logo-internship.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
        }
    },
    async mounted(){
        //   await axios.get('/get-mensajes',getJWTaccess()).then(({data})=>{
        //       //console.log(data);
        //       this.messages=data.length
        //       this.items=data;
        //       this.items.unshift({ header: 'Notificaciones'})
        // }).catch(err=>alert('erro al pedir mensajes'));
    }
}
</script>
