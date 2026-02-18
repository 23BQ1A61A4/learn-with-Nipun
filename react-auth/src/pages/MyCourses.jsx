import React from "react";

function MyCourses({ myCourses }) {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">
        My Courses
      </h2>

      {myCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        myCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white shadow-md rounded-xl p-4 mb-4 border border-blue-200"
          >
            <h3 className="text-xl font-semibold text-blue-600">
              {course.title}
            </h3>

            <div className="w-full bg-gray-200 rounded-full h-4 mt-3">
              <div
                className="bg-blue-500 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            <p className="mt-2 text-sm text-gray-600">
              Progress: {course.progress}%
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyCourses;
