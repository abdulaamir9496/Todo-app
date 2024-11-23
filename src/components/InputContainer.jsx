import PropTypes from "prop-types"

function InputContainer({inputVal, writeTodo, addTodo}) {
    return (
        <>
            <div className="input-container">
                <input type="text" value={inputVal} onChange={writeTodo}/>
                <button onClick={addTodo}>+</button>
            </div>
        </>
    )
}

InputContainer.propTypes = {
    inputVal: PropTypes.string.isRequired,
    writeTodo: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired
}

export default InputContainer
