import Todo from "./Todo"
import PropTypes from "prop-types"

function TodoContainer({todos, delTodo}) {
    return (
        <>
            <div className="container">
                {todos.map((todo, index) => {
                    return(
                        <Todo key={todo.id} todo={todo} index={index} delTodo={delTodo}/>
                    )
                })}
            </div>
        </>
    )
}

TodoContainer.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    todo: PropTypes.arrayOf(PropTypes.object).isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoContainer
