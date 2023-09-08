import React from 'react';
import { useParams } from 'react-router-dom';

export const Tasklist = ({ tasks }) => {
  const { id } = useParams(); // Get the team number from the route params

  // Filter tasks based on the team number
  const filteredTasks = tasks.filter((task) => task.team === parseInt(id));

  return (
    <div>
      <h2>Task List for Team {id}</h2>
      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">Due Date</th>
            <th className="border border-gray-300 px-4 py-2">Priority</th>
            <th className="border border-gray-300 px-4 py-2">Completed</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task) => (
            <tr key={task.id}>
              <td className="border border-gray-300 px-4 py-2">{task.id}</td>
              <td className="border border-gray-300 px-4 py-2">{task.title}</td>
              <td className="border border-gray-300 px-4 py-2">{task.description}</td>
              <td className="border border-gray-300 px-4 py-2">{task.dueDate}</td>
              <td className="border border-gray-300 px-4 py-2">{task.priority}</td>
              <td className="border border-gray-300 px-4 py-2">
                {task.completed ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasklist;
