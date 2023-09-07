import { Routes, Route} from "react-router-dom";
import {Home, Login, Signup,Profile, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/profile" element={ <Profile /> } />
              <Route path="/login" element={ <Login /> } />
              <Route path="/signup" element={ <Signup /> } />
              <Route path="*" element={ <PageNotFound /> } />
        </Routes>
    </div>
  )
}
