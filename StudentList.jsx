// components/StudentList.jsx
import React from 'react';
import StudentCard from './StudentCard';

const StudentList = ({ students, onStudentClick }) => {
  if (students.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No students found</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">All Students</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map(student => (
          <StudentCard 
            key={student.id} 
            student={student} 
            onStudentClick={onStudentClick}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;