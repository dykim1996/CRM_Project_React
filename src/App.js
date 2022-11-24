import {  BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/member/Login";
import Layout from "./layouts/Layout.js";
import OpenClassesLayout from "./layouts/OpenClassesLayout";
import OpenClasses from "./pages/classes/OpenClasses";
import SubjectManagement from "./pages/classes/SubjectManagement";
import SubjectUpdate from "./pages/classes/SubjectUpdate"
import ClassHistory from "./pages/classes/ClassHistory";
import SubjectRegistration from "./pages/classes/SubjectRegistration";
import TeacherManagement from "./pages/teacher/TeacherManagement";
import NoticeList from "./pages/notice/NoticeList";
import NoticeDetail from "./pages/notice/NoticeDetail";

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Login/>}/>
      <Route path="/ono" element={ <Layout/>} >
        <Route path="notice" index element= { <NoticeList/> }/>
        <Route path="notice/:noticeCode" element= { <NoticeDetail/> }/>

        <Route path="OpenClasses" element={ <OpenClassesLayout/> }>
              <Route index element={ <Navigate to="subjects" replace /> } />
              <Route path="subjects" element={ <SubjectManagement/> }/>
              <Route path="subject-registration" element={ <SubjectRegistration/> }/>
              <Route path="subject-update/:subjectCode" element={ <SubjectUpdate/> }/>
              <Route path="classes" element={ <OpenClasses/> }/>
              <Route path="classHistory" element={ <ClassHistory/> }/>
        </Route>
        <Route path="teacher" element={  <TeacherManagement/> }/>
    </Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
