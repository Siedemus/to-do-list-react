export const getExampleTasks = async () => {
  const response = await fetch("/to-do-list-react/exampleTasks.json");

  if (!response.ok) {
    new Error();
  }

  return await response.json();
};
