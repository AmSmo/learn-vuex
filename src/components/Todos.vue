<template>
    <div>
        <h3>
            Todos
        </h3>
        <div class="legend">
            <span>
                <span class="incomplete-box"> </span> = Incomplete
            </span>
            <span>
                <span class="complete-box"> </span> = Complete
            </span>
        </div>
        <div class="todos">
            <div @dblclick="updateTodo(todo) " v-for="todo in allTodos" :key="todo.id" v-bind:class="{'is-complete': todo.completed}" class="todo">
                {{ todo.title }}
                <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt trash" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: "Todos",
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),

    }, created(){
        this.fetchTodos()
    },
    computed: mapGetters(['allTodos'])
}
</script>

<style scoped>
.todos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

.todo {
    border: 1px solid #ccc;
    background: #41b883;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    position: relative;
    cursor: pointer;
}
.trash{
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: lightgrey;
    cursor: pointer;
}
.legend{
    display:flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}
.incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
}
.is-complete{
    background: #35495e;
    color:white;
}
@media (max-width: 500px){
    .todos {
        grid-template: 1fr;
    }
}
</style>