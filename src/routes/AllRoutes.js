import { Routes, Route} from "react-router-dom";
import {Home, Login, Signup,Profile,Addtask,Tasklist, PageNotFound} from "../pages";

export const AllRoutes = () => {
  const tasks = [
    { id: 1, team: 1, title:"todo", description: "Add your todo in the list", dueDate:"2022-11-16", priority:"low", completed: false },
    { id: 2, team: 2, title:"tasks", description: "Complete all tasks",dueDate:"2022-11-16", priority:"low", completed: true },
    { id: 3, team: 3, title:"delete",description: "Delete comp tasks", dueDate:"2022-11-16", priority:"medium",completed: true },
    { id: 4, team: 2, title:"delectus", description: "delectus aut autem",dueDate:"2022-11-16", priority:"medium", completed: false },
    { id: 5, team: 1, title:"quis", description: "quis ut nam facilis et officia qui",dueDate:"2017-8-18", priority:"high", completed: false },
    { id: 6, team: 3, title:"fugiat", description: "fugiat veniam minus", dueDate:"2022-11-16", priority:"high",completed: false },
    ];

  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/addtask" element={ <Addtask tasks={tasks}/> } />
              <Route path="/team/:id" element={ <Tasklist tasks={tasks}/> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/signup" element={ <Signup /> } />
              <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </div>
  )
}
