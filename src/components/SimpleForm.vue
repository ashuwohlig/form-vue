<template>
    <form @submit="handleSubmit" >
        <label>type :</label>
        <input type="text" name="type"  v-model="formData.type" />

        <label>amounts</label>
        <input type="number" name="amounts"  v-model="formData.amounts" />

        <div class="submit">
            <button>create an account</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import uuid from 'uuid';
import axios from 'axios';

export default {
    data() {
        name: 'AddTask';
        return {
            formData:{
             amounts: '',
             type: '',
            }
          
        };
    },

    methods: {
           handleSubmit(){
               console.log('hello')
              axios.post('https://localhost:8001/userIssue/add', this.formData)
                 .then((res) => {
                     console.warn(res)
                 })
                 .catch((error) => {
                      console.warn(res)("failure")
                 })
        }
      
    },
};
</script>
