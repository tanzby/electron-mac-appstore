<template>
  <div id="app" style="-webkit-app-region: drag"  
       class="font-sans flex min-h-screen">
    <siderbar></siderbar>
    <router-view/>   
  </div>
</template>

<script>
import Siderbar from './components/Siderbar'
import 'animate.css/animate.css'


export default {
  components:{
    Siderbar
  }
}
</script>

<style src="./assets/main.css">
