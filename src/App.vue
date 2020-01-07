<template>
  <div id="app">
    <Header
      :numCorrect="numCorrect"
      :numTotal="numTotal"
     />
    <b-container>
      <b-row>
        <b-col sm="6" offset="3">
          <QuestionBox 
            v-if="questions.length"
            :currentQuestion="questions[index]"
            :next="next"
            :increment="increment"
          />
        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>

import QuestionBox from './components/Question-Box.vue'
import Header from './components/Header'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    QuestionBox,
    Header
  },
  data(){
    return{
      questions : [],
      index : 0,
      numCorrect : 0,
      numTotal : 0
    }
  },
  methods:{
    next(){
      this.index++;
    },
    increment(isCorrect){
      if(isCorrect){
        this.numCorrect++
      }
      this.numTotal++;
    }

  },
  mounted: function () {
    axios.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
    .then(res=>{
      this.questions = res.data.results
      this.answers = []
    })
    .catch(err=>{
      //eslint-disable-next-line
      console.log(err);
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
