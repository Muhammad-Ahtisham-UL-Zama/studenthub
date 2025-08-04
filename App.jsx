// App.jsx
import React, { useState, useEffect } from 'react';
import { Loader } from 'lucide-react';

// Import services
import apiService from './services/api';

// Import components
import StudentList from './components/StudentList';

// Import pages
import Home from './pages/Home';
import StudentProfile from './pages/StudentProfile';

// Loading Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-12">
    <Loader className="w-8 h-8 animate-spin text-blue-600" />
    <span className="ml-2 text-gray-600">Loading students...</span>
  </div>
);

// Error Component
const ErrorMessage = ({ message, onRetry }) => (
  <div className="text-center py-12">
    <div className="text-red-600 mb-4">
      <p className="text-lg font-medium">Error loading data</p>
      <p className="text-sm">{message}</p>
    </div>
    <button 
      onClick={onRetry}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Try Again
    </button>
  </div>
);

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [currentView, setCurrentView] = useState('dashboard');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const studentsData = await apiService.fetchStudentData();
      setStudents(studentsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Navigation handlers
  const handleStudentClick = (student) => {
    setSelectedStudent(student);
    setCurrentView('studentProfile');
  };

  const handleBackToStudents = () => {
    setSelectedStudent(null);
    setCurrentView('students');
  };

  const handleNavigation = (view) => {
    setCurrentView(view);
    setSelectedStudent(null);
  };

  // Render loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <ErrorMessage message={error} onRetry={fetchData} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex space-x-6">
            <button 
              onClick={() => handleNavigation('dashboard')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'dashboard' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavigation('students')}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                currentView === 'students' || currentView === 'studentProfile'
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Students
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {currentView === 'dashboard' && (
          <Home students={students} />
        )}
        
        {currentView === 'students' && (
          <StudentList students={students} onStudentClick={handleStudentClick} />
        )}
        
        {currentView === 'studentProfile' && (
          <StudentProfile student={selectedStudent} onBack={handleBackToStudents} />
        )}
      </main>
    </div>
  );
};

export default App;