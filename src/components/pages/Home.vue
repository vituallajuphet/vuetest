<template>
    <div>
       home
        
        <ul>
            <li  v-for="(item) in mydata" :key="item.names" @click="click_handle(item.names)">{{item.names}}</li>
        </ul>

        

    </div>
</template>

<script>



export default {
  data(){
      return {
          name: "Home",
          mydata :[
              {names:"asdasd"},
              {names:"as2dasd"},
              {names:"asd3asd"},
              {names:"asd4asd"},
          ]
      }
  },
  mounted(){
     
  },
  methods :{
      click_handle(item){
          alert(item)
      }
  },
  computed:{

  },

  

}
</script>
