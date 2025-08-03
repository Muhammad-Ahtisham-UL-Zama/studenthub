// components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-800">{course.name}</h4>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {course.code}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-1">Faculty: {course.faculty}</p>
      <div className="flex space-x-2">
        <span className={`text-xs px-2 py-1 rounded ${
          course.feedbackStatus === '1' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {course.feedbackStatus === '1' ? 'Feedback Open' : 'Feedback Closed'}
        </span>
      </div>
    </div>
  );
};

export default CourseCard;