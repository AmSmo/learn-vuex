import axios from 'axios'

const actions = {
    async fetchTodos({ commit }) {
        const resp = await axios.get('http://jsonplaceholder.typicode.com/todos')
        commit('setTodos', resp.data)
    },
    async addTodo({ commit }, title) {
        const resp = await axios.post('http://jsonplaceholder.typicode.com/todos', { title, completed: false })
        commit('newTodo', resp.data)
    }
}
const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos = [todo, ...state.todos]

};

const state = {
    todos: [
    ]
};

const getters = {
    allTodos: (state) => state.todos
};


export default {
    state,
    actions,
    mutations,
    getters,
}