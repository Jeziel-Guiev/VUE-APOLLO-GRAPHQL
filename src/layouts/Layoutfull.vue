<template>
 <div id="app" style="background:#F6F7F9">
   <!-- <v-card>
      <v-app-bar
      app
      fixed
      dark
      height="50"
      
      color="indigo lighten-2"  
    >
      <div class="d-flex align-center">
        <v-img
          style="border-radius: 50%;font-size:80px"
          alt="Logo"
          class="shrink mr-2"
          contain
          
          src="https://i.pinimg.com/564x/5d/99/cd/5d99cdb9fa7fbb243e857a0172c3c75e--jg-logo-internship.jpg"
          
          width="40"
        />SADOSA
      </div>

      <v-spacer></v-spacer>

     
      <router-link exact class=" mx-3 font-weight-thin  " style="font-size:20px; color:white;text-decoration: none;" to="/about">About</router-link>
       
                   
      <router-link exact class="nav-link text-dark font-weight-thin " style="font-size:20px; color:white;text-decoration: none;" to="/login">Signin</router-link>
      
     
     
    </v-app-bar>
</v-card> -->
        <transition name="transition">
        <router-view/>
      </transition>
  </div>
</template>
<script>

export default{
  
}
</script>
<style scoped>

.transition-enter, .transition-leave{
    opacity: 10;
}
.transition-enter-active, .transition-leave-active{
      transition: opacity cubic-bezier(0.215, 0.610, 0.355, 1);
}
</style>
