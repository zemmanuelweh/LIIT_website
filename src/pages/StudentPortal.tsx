import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  User, 
  Lock, 
  BookOpen, 
  Calendar, 
  FileText, 
  CreditCard, 
  Bell, 
  Settings,
  LogOut,
  Eye,
  EyeOff
} from 'lucide-react';

const loginSchema = yup.object({
  studentId: yup.string().required('Student ID is required'),
  password: yup.string().required('Password is required')
});

type LoginFormData = yup.InferType<typeof loginSchema>;

const StudentPortal: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema)
  });

  const onLogin = async (data: LoginFormData) => {
    try {
      console.log('Login data:', data);
      // Simulate login
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  // Mock student data
  const studentData = {
    name: 'John Doe',
    studentId: 'LIST2024001',
    program: 'Computer Science Diploma',
    year: '2nd Year',
    gpa: '3.75',
    email: 'john.doe@student.list.edu.lr'
  };

  const courses = [
    { code: 'CS201', name: 'Data Structures', instructor: 'Dr. Smith', grade: 'A-', credits: 3 },
    { code: 'CS202', name: 'Database Systems', instructor: 'Prof. Johnson', grade: 'B+', credits: 3 },
    { code: 'CS203', name: 'Web Development', instructor: 'Dr. Williams', grade: 'A', credits: 4 },
    { code: 'CS204', name: 'Software Engineering', instructor: 'Prof. Brown', grade: 'B', credits: 3 }
  ];

  const assignments = [
    { course: 'CS201', title: 'Binary Tree Implementation', dueDate: '2024-02-15', status: 'Pending' },
    { course: 'CS202', title: 'Database Design Project', dueDate: '2024-02-20', status: 'Submitted' },
    { course: 'CS203', title: 'E-commerce Website', dueDate: '2024-02-25', status: 'In Progress' }
  ];

  const announcements = [
    { title: 'Mid-term Exam Schedule Released', date: '2024-01-20', type: 'Academic' },
    { title: 'Career Fair Registration Open', date: '2024-01-18', type: 'Event' },
    { title: 'Library Hours Extended', date: '2024-01-15', type: 'General' }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4"
        >
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-blue-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Student Portal</h2>
            <p className="text-gray-600">Access your academic information and resources</p>
          </div>

          <form onSubmit={handleSubmit(onLogin)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Student ID
              </label>
              <input
                {...register('studentId')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.studentId ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your student ID"
              />
              {errors.studentId && (
                <p className="text-red-500 text-sm mt-1">{errors.studentId.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10 ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="#" className="text-blue-700 hover:text-blue-800 text-sm">
              Forgot your password?
            </a>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">Demo Credentials:</p>
            <p className="text-xs text-blue-600">Student ID: LIST2024001</p>
            <p className="text-xs text-blue-600">Password: demo123</p>
          </div>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'dashboard', name: 'Dashboard', icon: BookOpen },
    { id: 'courses', name: 'My Courses', icon: BookOpen },
    { id: 'assignments', name: 'Assignments', icon: FileText },
    { id: 'schedule', name: 'Schedule', icon: Calendar },
    { id: 'payments', name: 'Payments', icon: CreditCard },
    { id: 'profile', name: 'Profile', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Student Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-700" />
                </div>
                <span className="text-sm font-medium text-gray-700">{studentData.name}</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-gray-500 hover:text-gray-700 flex items-center space-x-1"
              >
                <LogOut className="h-5 w-5" />
                <span className="text-sm">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <tab.icon className="h-5 w-5" />
                      <span>{tab.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Welcome Card */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Welcome back, {studentData.name}!</h2>
                  <p className="text-blue-100">
                    {studentData.program} • {studentData.year} • GPA: {studentData.gpa}
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <BookOpen className="h-8 w-8 text-blue-700 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                        <p className="text-gray-600">Active Courses</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <FileText className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{assignments.length}</p>
                        <p className="text-gray-600">Assignments</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-center">
                      <Bell className="h-8 w-8 text-yellow-600 mr-3" />
                      <div>
                        <p className="text-2xl font-bold text-gray-900">{announcements.length}</p>
                        <p className="text-gray-600">Announcements</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Announcements */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Announcements</h3>
                  <div className="space-y-3">
                    {announcements.map((announcement, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                        <Bell className="h-5 w-5 text-blue-700 mt-0.5" />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{announcement.title}</h4>
                          <p className="text-sm text-gray-600">{announcement.date}</p>
                        </div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                          {announcement.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'courses' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">My Courses</h3>
                <div className="space-y-4">
                  {courses.map((course, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.code} - {course.name}</h4>
                          <p className="text-sm text-gray-600">Instructor: {course.instructor}</p>
                          <p className="text-sm text-gray-600">Credits: {course.credits}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {course.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'assignments' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Assignments</h3>
                <div className="space-y-4">
                  {assignments.map((assignment, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-600">Course: {assignment.course}</p>
                          <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          assignment.status === 'Submitted' ? 'bg-green-100 text-green-800' :
                          assignment.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {assignment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Profile Information</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <p className="text-gray-900">{studentData.name}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                      <p className="text-gray-900">{studentData.studentId}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                      <p className="text-gray-900">{studentData.program}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                      <p className="text-gray-900">{studentData.year}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-gray-900">{studentData.email}</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">GPA</label>
                      <p className="text-gray-900">{studentData.gpa}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;