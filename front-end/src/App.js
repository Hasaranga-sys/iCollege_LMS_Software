import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./Components/Admin/AdminHome";
import LibararyItemForm from "./Components/Admin/LibararyItemForm";
import NoticeForm from "./Components/Admin/NoticeForm";
import NoticeTable from "./Components/Admin/NoticeTable";
import ViewLibraryItems from "./Components/Admin/ViewLibraryItems";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import StudentHome from "./Components/Student/StudentHome";
import ViewNotice from "./Components/Student/ViewNotice";

import AddLecture from "./Components/Lecture/AddLecture";
import LectureHome from "./Components/Lecture/LectureHome";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />

            {/* admin */}
            <Route path="/AdminHome" element={<AdminHome />} exact />
            <Route
              path="/AdminHome/NoticeTable"
              element={<NoticeTable />}
              exact
            />
            <Route
              path="/AdminHome/NoticeTable/NoticeForm"
              element={<NoticeForm />}
              exact
            />

            <Route
              path="/AdminHome/LibararyItemform"
              element={<LibararyItemForm />}
              exact
            />
            <Route
              path="/AdminHome/ViewLibararyItems"
              element={<ViewLibraryItems />}
              exact
            />

            <Route path="/StudentHome" element={<StudentHome />} exact />
            <Route
              path="/StudenHome/noticeView"
              element={<ViewNotice />}
              exact
            />

            {/* lecture */}
            <Route path="/LectureHome" element={<LectureHome />} exact />
            <Route
              path="/LectureHome/AddLecture"
              element={<AddLecture />}
              exact
            />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}
export default App;
