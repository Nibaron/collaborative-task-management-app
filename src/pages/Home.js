import { Button } from "flowbite-react";
import { useState } from "react";

export const Home = () => {
    const tasks = [
        { id: 1, text: "Add your todo", completed: false },
        { id: 2, text: "Complete all tasks", completed: true },
        { id: 3, text: "Delete comp tasks", completed: true },
        { id: 4, text: "delectus aut autem", completed: false },
        { id: 5, text: "quis ut nam facilis et officia qui", completed: false },
        { id: 6, text: "fugiat veniam minus", completed: false },
    ];

    // State for filtering completed tasks
    const [showCompleted, setShowCompleted] = useState(false);

    // Filter tasks based on completion status
    const filteredTasks = showCompleted
        ? tasks.filter((task) => task.completed)
        : tasks;

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">Welcome To Task Management App</p>
                </div>
            </section>
            
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    <p className="text-5xl font-bold dark:text-white">
                        Task List
                    </p>
                </div>
            </section>
        </main>
    );
};