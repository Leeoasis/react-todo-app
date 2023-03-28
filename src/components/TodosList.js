import TodoItem from "./TodoItem";

const TodosList = ({todosProps, handleChange, delToDo, setUpdate }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
            <TodoItem key={todo.id} itemProp={todo} 
            handleChange={handleChange} delToDo={delToDo}
            setUpdate={setUpdate} />
           
        ))}
      </ul>
    );
  };
  export default TodosList;
  