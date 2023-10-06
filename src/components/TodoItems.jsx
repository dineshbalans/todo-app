const TodoItems = ({ todoData,removeTodoItem }) => {
  const removeToDoHandler = (id) => {
    removeTodoItem(id);
  };

  return (
    <li
      className="bg-orange-300 px-4 py-3  text-gray-600 break-words rounded text-xl font-medium"
      onClick={removeToDoHandler.bind(null,todoData.id)}
    >
      {todoData.data}
    </li>
  );
};

export default TodoItems;
