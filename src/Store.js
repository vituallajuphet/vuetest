import Vue from 'vue'
import Vuex from 'vuex'

import test from '@/store/Test.js';

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    test,
  }
 
})