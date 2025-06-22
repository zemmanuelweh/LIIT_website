const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337/api';

interface ApiResponse<T> {
  data: T;
  meta?: any;
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const config: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  // Programs API
  async getPrograms() {
    return this.request<ApiResponse<any[]>>('/programs?populate=*');
  }

  async getProgram(id: string) {
    return this.request<ApiResponse<any>>(`/programs/${id}?populate=*`);
  }

  // News API
  async getNews() {
    return this.request<ApiResponse<any[]>>('/news?populate=*&sort=publishedAt:desc');
  }

  async getFeaturedNews() {
    return this.request<ApiResponse<any[]>>('/news?populate=*&filters[featured][$eq]=true&sort=publishedAt:desc');
  }

  // FAQs API
  async getFaqs() {
    return this.request<ApiResponse<any[]>>('/faqs?sort=order:asc');
  }

  // Testimonials API
  async getTestimonials() {
    return this.request<ApiResponse<any[]>>('/testimonials?populate=*&sort=createdAt:desc');
  }

  // Contact Form
  async submitContact(data: any) {
    return this.request<ApiResponse<any>>('/contacts', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }

  // Enrollment Form
  async submitEnrollment(data: any) {
    return this.request<ApiResponse<any>>('/enrollments', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }

  // Consultation Form
  async submitConsultation(data: any) {
    return this.request<ApiResponse<any>>('/consultations', {
      method: 'POST',
      body: JSON.stringify({ data }),
    });
  }

  // Student Portal
  async studentLogin(credentials: { studentId: string; password: string }) {
    return this.request<any>('/students/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  async getStudentProfile(token: string) {
    return this.request<ApiResponse<any>>('/students/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getStudentCourses(studentId: string, token: string) {
    return this.request<ApiResponse<any[]>>(`/courses?filters[students][id][$eq]=${studentId}&populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async getStudentAssignments(studentId: string, token: string) {
    return this.request<ApiResponse<any[]>>(`/assignments?filters[student][id][$eq]=${studentId}&populate=*`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const apiService = new ApiService();
export default apiService;