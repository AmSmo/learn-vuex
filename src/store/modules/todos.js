import axios from 'axios'

const actions = {
    async fetchTodos({ commit }) {
        const resp = await axios.get('http://jsonplaceholder.typicode.com/todos')
        commit('setTodos', resp.data)
    },
    async addTodo({ commit }, title) {
        const resp = await axios.post('http://jsonplaceholder.typicode.com/todos', { title, completed: false })
        commit('newTodo', resp.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
        commit('todoGone', id)
    },
    async filterTodos({ commit }, event) {
        let limit = event.target.value
        const resp = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        console.log(limit)
        commit('setTodos', resp.data)
    },
    async updateTodo({ commit }, todo) {
        todo.completed = !todo.completed
        const resp = await axios.patch(`http://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
        commit('upDo', resp.data)

    }

}
const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => state.todos = [todo, ...state.todos],
    todoGone: (state, todo) => state.todos = state.todos.filter(current => current.id !== todo),
    upDo: (state, todo) => {

        let idx = state.todos.findIndex(oldTodo => oldTodo.id === todo.id)
        if (idx !== -1) { state.todos.splice(idx, 1, todo) }
    }
}

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