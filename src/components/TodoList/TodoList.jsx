const TodoList = ({ todos, onDeleteTodo }) => (
  <ul>
    Todo list
    {todos.map(({ id, text }) => (
      <li key={id}>
        <p>{text}</p>
        <button onClick={() => onDeleteTodo(id)}>delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
