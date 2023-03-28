import styles from '../styles/TodoItem.module.css'
import { useState } from 'react';

const TodoItem = ({ itemProp, handleChange, delToDo }) => {
    const [editing, setEditing] = useState(false);

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };

      const handleEditing = () => {
        setEditing(true);
      };

      let viewMode = {};
      let editMode = {};
      if (editing) {
        viewMode.display = 'none';
      } else {
        editMode.display = 'none';
      }

    return (<li className={styles.item}>
    <div className='styles.content' style={viewMode }>
    <input 
    type="checkbox"
    checked={itemProp.completed}
    onChange={() => handleChange(itemProp.id)}
     />
      <button onClick={handleEditing}>Edit</button>
     <button onClick={() => delToDo(itemProp.id)} >Delete</button>
     <span style={itemProp.completed ? completedStyle : null}>
    {itemProp.title}
    </span>
    </div>
    <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => console.log(e.target.value, itemProp.id)}
    />
  </li>
    )
  };
  export default TodoItem;
  