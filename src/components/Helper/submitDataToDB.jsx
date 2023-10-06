export const submitDataToDB = async (toDoData) => {
    const response = await fetch(
      "https://todo-app-74a97-default-rtdb.asia-southeast1.firebasedatabase.app/todo-app-data.json",
      {
        method: "POST",
        body: JSON.stringify(toDoData),
        "Content-Type": "application/json",
      }
    );
  
    if (!response.ok) {
      console.log("An error occured");
    }
  
    const data = await response.json();
  };
  