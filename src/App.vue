<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app">
   <input type="file" ref="myfile">
   <button @click="upload">upload</button>
  </div>
   
</template>

<script>
import { storage } from './components/firebase';
import {ref, uploadBytes} from "firebase/storage"

export default{
  name: 'App',
  components: {

  },
  methods:{
    upload: function(){
  const storageRef = ref(storage, 'folder/myfile.gif');
  uploadBytes(storageRef, this.$refs.myfile.files[0]).then(
    (snapshot)=> {
      console.log("uploaded")
    }
  ).catch(error => {
    console.error("Upload error:", error);
  });
}
  }
}
</script>