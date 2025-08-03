// pages/Home.jsx
import React from 'react';
import { User, BookOpen, GraduationCap } from 'lucide-react';

const Home = ({ students }) => {
  const totalStudents = students.length;
  const totalCourses = students.reduce((acc, student) => acc + student.courses.length, 0);
  const avgCoursesPerStudent = totalStudents > 0 ? (totalCourses / totalStudents).toFixed(1) : 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Total Students</p>
              <p className="text-2xl font-bold text-blue-900">{totalStudents}</p>
            </div>
            <User className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Total Courses</p>
              <p className="text-2xl font-bold text-green-900">{totalCourses}</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Avg Courses/Student</p>
              <p className="text-2xl font-bold text-purple-900">{avgCoursesPerStudent}</p>
            </div>
            <GraduationCap className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Quick Overview */}
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {students.slice(0, 3).map(student => (
            <div key={student.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
              <div className="bg-blue-100 p-2 rounded-full">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">{student.name}</p>
                <p className="text-sm text-gray-600">{student.courses.length} courses enrolled</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;