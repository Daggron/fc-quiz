<template>
    <div>
        <b-jumbotron>
            <template slot="lead">
                <p v-html="currentQuestion.question"></p>
            </template>
            <hr/>
            <b-list-group>
                <b-list-group-item v-for="(answer , index) in answersor" :key="index" @click.prevent="answerGet(answer)"
                    :class="[selectedAnswer === answer ? 'selected' : '' ]"
                >
                    <i v-html="answer"></i>
                </b-list-group-item>
            </b-list-group>
            <b-button variant="primary" @click="submitAnswer" :disabled="selectedAnswer===null">
                Submit
            </b-button>
            <b-button @click="next" variant="success" href="#" :disabled="index<10">
              Next Question
            </b-button>
        </b-jumbotron>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    props:{
        currentQuestion : Object,
        next: Function,
        increment : Function
    },
    data(){
        return{
            selectedAnswer: null,
            answersor : [],
            answered : false
        }
    },
    computed: {
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            return answers
        }
    },
    watch:{
        currentQuestion:{
            immediate : true,
            handler(){
                this.selectedAnswer = null;
                this.shuffleAnswer();
            }
        }
        
    },
    methods:{
        answerGet(answer){
            //eslint-disable-next-line
            console.log(answer)
           this.selectedAnswer = answer;
        },
        submitAnswer(){
            let isCorrect = false;

            if(this.selectedAnswer === this.currentQuestion.correct_answer){
                isCorrect =true;

            }

            this.increment(isCorrect);

        },
        shuffleAnswer(){
            //eslint-disable-next-line
            let answe = [...this.currentQuestion.incorrect_answers , this.currentQuestion.correct_answer ];
            let shuffledAnswer = _.shuffle(answe);
            this.answersor = shuffledAnswer;
        }
    }
}
</script>

<style scoped>
    .list-group{
        margin-bottom: 15px;
    }

    .list-group-item:hover{
        background: #eee;
        cursor: pointer;
    }

    .btn{
        margin: 15px;
    }

    .selected{
        background: #e6891d;
    }

    .correct{
        background: green;
    }

    .incorrect{
        background: rebeccapurple;
    }


</style>