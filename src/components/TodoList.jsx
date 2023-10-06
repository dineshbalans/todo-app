import TodoItems from "./TodoItems";

const TodoList = ({ toDoList, removeTodoItem }) => {
  let todo_view =
    toDoList.length !== 0 ? (
      toDoList.map((toDoItem) => (
        <TodoItems
          key={toDoItem.id}
          todoData={toDoItem}
          removeTodoItem={removeTodoItem}
        />
      ))
    ) : (
      <h2 className="text-center text-2xl font-semibold text-gray-500">
        No TODO's Found
      </h2>
    );

  return (
    <div className="bg-white rounded lg:p-3 xl:p-5 lg:mx-7 xl:mx-10">
      <div className="md:w-[90%] mx-auto p-5 cursor-pointer">
        <ul className="space-y-4">{todo_view}</ul>
      </div>
    </div>
  );
};

export default TodoList;
