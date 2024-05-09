const TodoItem = ({ id, title, checked, toggleTodo, removeTodo }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => removeTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
