import React from "react";
import courses from "../data/courses";

function Courses({ enrollCourse }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        Available Courses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-xl p-4 border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {course.title}
            </h3>
            <p className="text-gray-600">{course.description}</p>

            <button
              onClick={() => enrollCourse(course)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Enroll
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
