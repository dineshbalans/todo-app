import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [toDoList, setToDoList] = useState([]);
  const [formSubmittedStatus, setFormSubmittedStatus] = useState(0);

  useEffect(() => {
    const getToDoDataFromDB = async () => {
      const response = await fetch(
        "https://todo-app-74a97-default-rtdb.asia-southeast1.firebasedatabase.app/todo-app-data.json"
      );

      if (!response.ok) {
        console.log("An error occured");
      }

      const data = await response.json();

      // if (JSON.stringify(toDoList) === JSON.stringify(data)) {
      //   console.log("equal")
      //   return null;
      // }
      const todoDATA = [];
      for (let keys in data) {
        todoDATA.push({
          id: keys,
          data: data[keys],
        });
      }

      setToDoList(todoDATA);
    };

    getToDoDataFromDB();
  }, [formSubmittedStatus]);

  const formSubmittedStateHandler = () => {
    setFormSubmittedStatus((prevState) => prevState + 1);
  };

  const removeTodoItemHandler = (id) => {
    setToDoList(toDoList.filter((todoItem) => todoItem.id !== id));
    const deleteDataFromDB = async (id) => {
      const response = await fetch(
        "https://todo-app-74a97-default-rtdb.asia-southeast1.firebasedatabase.app/todo-app-data/" +
          id +
          ".json",
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        console.log("An error occured");
      }

      const data = await response.json();
    };
    deleteDataFromDB(id);
  };

  return (
    <section className="p-5 md:m-10">
      <div className="container mx-auto">
        <div className="border lg:w-[90%] xl:w-[75%] mx-auto bg-[#522886] rounded-lg p-7 xl:p-10 ">
          <h1 className=" text-4xl font-bold text-center text-white">
            TODO APP
          </h1>
          <TodoForm formSubmittedStatus={formSubmittedStateHandler} />
          <TodoList
            toDoList={toDoList}
            removeTodoItem={removeTodoItemHandler}
          />
        </div>
      </div>
    </section>
  );
}
