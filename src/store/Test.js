  
import axios from 'axios'
import { setTimeout } from 'timers';

const burl = "localhost:8080/";

const test = {
    namespaced: true,
    state:{
        my_data:[
            {name:"opet"},
            {name:"shit"},
        ],
    },
    actions:{
        get_all_data({ commit }){
            return new Promise((resolve, reject)=>{
             axios.get(burl+'hosting/getall').then((response) =>{
               if(response.data.code == 200){
                setTimeout(() => {
                  commit('SET_HOSTING', response.data)
                  resolve(response.data)
 
                }, 1000);
        
              }   else{
                reject(response.data)
              }
             })
            })
         }
    },
    getters:{
        getHostings :(state) =>{
            return  state.my_data
        },
    },
    mutations:{
        SET_HOSTING (state, dd) {
            state.my_data = dd
        }
    }
}

export default test