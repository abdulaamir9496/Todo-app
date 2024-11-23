import PropTypes from "prop-types"

function Todo({todo, index, delTodo}) {
    return (
        <>
            <div className="todo">
                <p>{todo}</p>
                <div className="actions">
                    <input type="checkbox" />
                    <button onClick={() => delTodo(index)}>Delete</button>
                </div>
            </div>
        </>
    )
}

Todo.propTypes = {
        todo: PropTypes.array.isRequired,
        index: PropTypes.number.isRequired,
        delTodo: PropTypes.func.isRequired
}

export default Todo
