<template>
    <form @submit="handleSubmit">
        <label>type :</label>
        <input type="text" required v-model="type" />

        <label>amounts</label>
        <input type="number" required v-model="amounts" />

        <div class="submit">
            <button>create an account</button>
        </div>
    </form>
</template>

<script>
import { mapActions } from 'vuex';
import uuid from 'uuid';

export default {
    data() {
        name: 'AddTask';
        return {
            amounts: '',
            type: '',
        };
    },

    methods: {
        ...mapActions(['addTask']),

        handleSubmit(e) {
            e.preventDefault();
            const task = {
                amounts: this.amounts,
                type: this.type,
            };
            this.addTask(task);
        },
    },
};
</script>
