// services/api.js
const apiService = {
  // Replace this URL with your actual API endpoint
  baseURL: 'https://bgnuerp.online/api',
  
  async fetchStudentData() {
    try {
      // Replace with your actual API call
      const response = await fetch(`${this.baseURL}/get_my_courses`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return this.transformApiData(data);
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Transform your API response into structured student data
  transformApiData(apiData) {
    if (!apiData || apiData.length === 0) return [];

    // Group data by student (rollno)
    const studentMap = new Map();
    
    apiData.forEach(record => {
      const rollno = record.rollno;
      
      if (!studentMap.has(rollno)) {
        // Create new student entry
        studentMap.set(rollno, {
          id: rollno,
          name: record.student_name,
          rollno: record.rollno,
          fatherName: record.father_name,
          program: record.program_name,
          shift: record.shift_name,
          courses: []
        });
      }
      
      // Add course to student
      studentMap.get(rollno).courses.push({
        id: record.offer_course_id,
        name: record.course_name,
        code: record.course_code,
        faculty: record.faculty_name,
        facultyId: record.faculty_id,
        feedbackStatus: record.feedback_status,
        feedbackSubmit: record.feedback_submit
      });
    });
    
    return Array.from(studentMap.values());
  }
};

export default apiService;