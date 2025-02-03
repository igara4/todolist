import TodoList from "./components/TodoList";

export default async function Home() {
  const response= await fetch("http://localhost:3000/api/todo",{
    cache:"no-store",
  });

  const todoAllData = await response.json();
  console.log(todoAllData);

  return (
    <main>
      <TodoList/>
    </main>
  );
}
