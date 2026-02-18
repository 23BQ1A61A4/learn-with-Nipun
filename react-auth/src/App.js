import React, { useState } from "react";
import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";

function App() {
  const [myCourses, setMyCourses] = useState([]);
  const [page, setPage] = useState("courses");

  const enrollCourse = (course) => {
    if (!myCourses.find((c) => c.id === course.id)) {
      setMyCourses([...myCourses, { ...course, progress: 10 }]);
      alert("Course Enrolled Successfully!");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">

      {/* Navbar */}
      <div className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Learn With Nipun</h1>
        <div>
          <button
            onClick={() => setPage("courses")}
            className="mr-4 hover:underline"
          >
            Courses
          </button>
          <button
            onClick={() => setPage("mycourses")}
            className="hover:underline"
          >
            My Courses
          </button>
        </div>
      </div>

      {/* Pages */}
      {page === "courses" && (
        <Courses enrollCourse={enrollCourse} />
      )}

      {page === "mycourses" && (
        <MyCourses myCourses={myCourses} />
      )}
    </div>
  );
}

export default App;
