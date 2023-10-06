import { useRef } from "react";
import { submitDataToDB } from "./Helper/submitDataToDB";

const TodoForm = ({ formSubmittedStatus }) => {
  const todoDataRef = useRef();

  const formEventHandler = (e) => {
    e.preventDefault();
    const toDoData = todoDataRef.current.value;
    todoDataRef.current.value = "";
    submitDataToDB(toDoData);
    formSubmittedStatus();
  };

  return (
    <form className="" onSubmit={formEventHandler}>
      <div className="flex flex-wrap py-10 md:py-5 md:px-10 lg:px-20 xl:px-32 ">
        <div className="w-full md:w-[70%] xl:w-[80%]  px-1">
          <input
            type="text"
            className="h-12 rounded my-4 text-xl w-full font-medium outline-offset-2outline-[#9b6bd6] px-3 placeholder:text-2xl placeholder:text-center"
            placeholder="Enter Your Task"
            ref={todoDataRef}
            required
          />
        </div>
        <div className="w-full md:w-[30%] xl:w-[20%]  px-1 flex">
          <button className="bg-orange-400 rounded h-12 w-full  text-2xl my-auto text-white">
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default TodoForm;
