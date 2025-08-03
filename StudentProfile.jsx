// pages/StudentProfile.jsx
import React from 'react';
import StudentDetail from '../components/StudentDetail';

const StudentProfile = ({ student, onBack }) => {
  if (!student) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Student not found</p>
      </div>
    );
  }

  return (
    <div>
      <StudentDetail student={student} onBack={onBack} />
    </div>
  );
};

export default StudentProfile;