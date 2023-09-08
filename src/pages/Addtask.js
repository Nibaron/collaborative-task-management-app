import { Card, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export const Addtask = ({tasks}) => {
  const [task, setTask] = useState({
    id:"",
    title: "",
    description: "",
    dueDate: "",
    priority: "low", // Default priority
    team: "team1", // Default team
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tasks.push(task);
  };

  return (
    <main className="flex items-center justify-center min-h-screen">
      <section className="max-w-xl w-full px-4">
        <div className="text-center mb-6">
          <Card className="p-6 m-4 bg-violet-200">
            <h2 className="text-2xl font-semibold mb-4">Task Form</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <Label htmlFor="id" className="text-sm font-bold">
                  ID
                </Label>
                <TextInput
                  type="text"
                  id="id"
                  name="id"
                  value={task.id}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="title" className="text-sm font-bold">
                  Title
                </Label>
                <TextInput
                  type="text"
                  id="title"
                  name="title"
                  value={task.title}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="description" className="text-sm font-bold">
                  Description
                </Label>
                <textarea
                  id="description"
                  name="description"
                  value={task.description}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                  rows="3"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="dueDate" className="text-sm font-bold">
                  Due Date
                </Label>
                <TextInput
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={task.dueDate}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                />
              </div>
              <div className="mb-4">
                <Label htmlFor="priority" className="text-sm font-bold">
                  Priority
                </Label>
                <select
                  id="priority"
                  name="priority"
                  value={task.priority}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div className="mb-4">
                <Label htmlFor="team" className="text-sm font-bold">
                  Team Select
                </Label>
                <select
                  id="team"
                  name="team"
                  value={task.team}
                  onChange={handleChange}
                  className="w-full p-2 rounded-md"
                >
                  <option value="team1">Team 1</option>
                  <option value="team2">Team 2</option>
                  <option value="team3">Team 3</option>
                </select>
              </div>
              <div className="flex items-center justify-center">
                <Button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Create Task
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </main>
  );
};
