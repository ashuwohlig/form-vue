// Tasks module

import axios from 'axios';

const resource_uri = 'http://localhost:8001/userIssue/add';

const state = {
    tasks: [],
};

const getters = {
    allTasks: (state) => state.tasks,
};

const actions = {
    async addTask({ commit }, task) {
        const response = await axios.post(resource_uri, task);
        commit('newTask', response.data);
    },
};
const mutations = {
    newTask: (state, task) => state.tasks.unshift(task),
};
export default {
    state,
    getters,
    actions,
    mutations,
};
