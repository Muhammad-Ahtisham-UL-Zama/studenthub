// components/StudentDetail.jsx
import React from 'react';
import { User, BookOpen, ArrowLeft } from 'lucide-react';
import CourseCard from './CourseCard';

const StudentDetail = ({ student, onBack }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <button 
          onClick={onBack}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Students</span>
        </button>
      </div>

      {/* Student Info */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex items-center space-x-4 mb-4">
          <div className="bg-blue-100 p-3 rounded-full">
            <User className="w-8 h-8 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{student.name}</h1>
            <p className="text-gray-600">{student.rollno}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <span className="text-sm font-medium text-gray-500">Father Name:</span>
            <p className="text-gray-800">{student.fatherName}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Program:</span>
            <p className="text-gray-800">{student.program}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Shift:</span>
            <p className="text-gray-800">{student.shift}</p>
          </div>
          <div>
            <span className="text-sm font-medium text-gray-500">Total Courses:</span>
            <p className="text-gray-800">{student.courses.length}</p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          Enrolled Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {student.courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;