import React from "react";
import { Route, Routes } from "react-router-dom";
import AddLibararyItem from "./Components/Admin/AddLibararyItem";
import AdminHome from "./Components/Admin/AdminHome";

import NoticeForm from "./Components/Admin/NoticeForm";
import NoticeTable from "./Components/Admin/NoticeTable";
import ViewLibraryItems from "./Components/Admin/ViewLibraryItems";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import StudentHome from "./Components/Student/StudentHome";
import ViewNotice from "./Components/Student/ViewNotice";
import UserForm from "./Components/UserManagement/UserForm";
import LoginForm from "./Components/UserManagement/UserLogin";
import UserList from "./Components/UserManagement/UserList";
import LibararyItemForm from "./Components/Admin/LibararyItemForm";

function App() {
  return(
    <div className="App">
      <React.Fragment>
        <header>
          <NavBar/>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>

          {/* admin */}
          <Route path="/AdminHome" element={<AdminHome/>} exact/>
          <Route path="/AdminHome/NoticeTable" element={<NoticeTable/>} exact/>
          <Route path="/AdminHome/NoticeTable/NoticeForm" element={<NoticeForm/>} exact/>
          <Route path="/AdminHome/NoticeTable/NoticeForm/:_id" element={<NoticeForm/>} exact/>

          <Route path="/AdminHome/addLibararyItemForm" element={<LibararyItemForm/>} exact/>
          <Route path="/AdminHome/ViewLibararyItems" element={<ViewLibraryItems/>} exact/>
          
          <Route path="/StudentHome" element={<StudentHome/>} exact/>
          <Route path="/StudenHome/noticeView" element={<ViewNotice/>} exact/>
          {/* user management */}
          <Route path="/user/:id" element={<UserForm/>} exact/>
          <Route path="/login" element={<LoginForm/>} exact/>
          <Route path="/users" element={<UserList/>} exact/>
        </Routes>
        </main>
        

      </React.Fragment>
    </div>
  )
}
export default App;