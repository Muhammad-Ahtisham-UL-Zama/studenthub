// components/StudentCard.jsx
import React from 'react';
import { User, BookOpen, GraduationCap } from 'lucide-react';

const StudentCard = ({ student, onStudentClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer"
      onClick={() => onStudentClick(student)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{student.name}</h3>
            <p className="text-sm text-gray-600">{student.rollno}</p>
          </div>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
          {student.shift}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <GraduationCap className="w-4 h-4 mr-2" />
          {student.program}
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <BookOpen className="w-4 h-4 mr-2" />
          {student.courses.length} Courses Enrolled
        </div>
      </div>
    </div>
  );
};

export default StudentCard;