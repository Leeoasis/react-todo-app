import TodoItem from "./TodoItem";

const TodosList = ({todosProps, handleChange, delToDo }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
            <TodoItem key={todo.id} itemProp={todo} 
            handleChange={handleChange} delToDo={delToDo} />
           
        ))}
      </ul>
    );
  };
  export default TodosList;
  