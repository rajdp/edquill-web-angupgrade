import { Contact } from './contact.model';

/**
 * Student Model
 * Represents a student/learner in the system
 * Supports all age groups and education levels
 */

export interface Student {
  // Identifiers
  studentId?: string;
  schoolId?: string;
  schoolIdNo?: string; // Internal school ID number
  userId?: string;
  
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  gender?: 'male' | 'female' | 'n/a' | 'other';
  dateOfBirth?: Date | string;
  
  // Academic Information
  gradeId: string;
  gradeName?: string;
  batchId?: string;
  batchName?: string;
  
  // Contact Information
  phones: StudentPhone[];
  contacts?: Contact[]; // Replaces parent1/parent2
  
  // Status
  status: StudentStatus;
  registrationDate?: Date | string;
  droppedDate?: Date | string;
  
  // Profile
  profileUrl?: string;
  profileThumbUrl?: string;
  
  // Metadata
  createdAt?: Date;
  updatedAt?: Date;
  createdBy?: string;
  updatedBy?: string;
}

export interface StudentPhone {
  number: string;
  type: 'primary' | 'secondary' | 'additional';
  isPrimary: boolean;
}

export enum StudentStatus {
  Active = '1',
  Suspended = '2',
  Inactive = '3',
  Deleted = '4'
}

export interface StudentFormData {
  // Personal Info
  first_name: string;
  last_name: string;
  email_id: string;
  gender?: string;
  dob?: string;
  
  // Academic
  grade: string;
  schoolId?: string;
  studentId?: string;
  batchname?: string;
  
  // Contact Numbers
  mobile?: string;
  mobile1?: string;
  mobile2?: string;
  
  // Status & Dates
  status: string;
  registration_date?: string;
  dropped_date?: string;
  
  // Contact 1 (Primary)
  parent1FirstName?: string;
  parent1LastName?: string;
  email_id1_p1?: string;
  email_id2_p1?: string;
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  
  // Contact 2 (Secondary)
  parent2FirstName?: string;
  parent2LastName?: string;
  email_id1_p2?: string;
  email_id2_p2?: string;
  addressp21?: string;
  addressp22?: string;
  city1?: string;
  state1?: string;
  country1?: string;
  postalCode1?: string;
}

/**
 * Student API Request/Response format
 */
export interface StudentApiData {
  platform: string;
  role_id: string;
  user_id: string;
  
  first_name: string;
  last_name: string;
  email_id: string;
  gender?: string;
  birthday?: string;
  
  school_id: string;
  school_idno?: string;
  grade_id: string;
  batch_id?: string;
  
  mobile: string[];
  
  registration_date?: string;
  dropped_date?: string;
  
  address: AddressApiData[];
  
  parent1_firstname?: string;
  parent1_lastname?: string;
  parent2_firstname?: string;
  parent2_lastname?: string;
  
  parent1_email_ids: string[];
  parent2_email_ids: string[];
  
  profile_url?: string;
  profile_thumb_url?: string;
  
  status: string;
}

export interface AddressApiData {
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  address_type: string; // '2' for contact1, '3' for contact2
}

/**
 * Utility class to convert between Student model and API format
 */
export class StudentAdapter {
  
  /**
   * Convert form data to API format
   */
  static formToApi(formData: StudentFormData, platformData: {
    platform: string;
    roleId: string;
    userId: string;
    schoolId: string;
  }): StudentApiData {
    
    // Collect mobile numbers
    const mobiles: string[] = [];
    if (formData.mobile) mobiles.push(formData.mobile);
    if (formData.mobile1) mobiles.push(formData.mobile1);
    if (formData.mobile2) mobiles.push(formData.mobile2);
    
    // Collect parent email IDs
    const parent1Emails: string[] = [];
    if (formData.email_id1_p1) parent1Emails.push(formData.email_id1_p1);
    if (formData.email_id2_p1) parent1Emails.push(formData.email_id2_p1);
    
    const parent2Emails: string[] = [];
    if (formData.email_id1_p2) parent2Emails.push(formData.email_id1_p2);
    if (formData.email_id2_p2) parent2Emails.push(formData.email_id2_p2);
    
    // Build address array
    const addresses: AddressApiData[] = [
      {
        address1: formData.address1 || '',
        address2: formData.address2 || '',
        city: formData.city || '',
        state: formData.state || '',
        country: formData.country || '',
        postal_code: formData.postalCode || '',
        address_type: '2'
      },
      {
        address1: formData.addressp21 || '',
        address2: formData.addressp22 || '',
        city: formData.city1 || '',
        state: formData.state1 || '',
        country: formData.country1 || '',
        postal_code: formData.postalCode1 || '',
        address_type: '3'
      }
    ];
    
    return {
      platform: platformData.platform,
      role_id: platformData.roleId,
      user_id: platformData.userId,
      
      first_name: formData.first_name,
      last_name: formData.last_name,
      email_id: formData.email_id,
      gender: formData.gender || '',
      birthday: formData.dob || '',
      
      school_id: platformData.schoolId,
      school_idno: formData.studentId || '',
      grade_id: formData.grade,
      batch_id: formData.batchname || '',
      
      mobile: mobiles,
      
      registration_date: formData.registration_date || '',
      dropped_date: formData.dropped_date || '',
      
      address: addresses,
      
      parent1_firstname: formData.parent1FirstName || '',
      parent1_lastname: formData.parent1LastName || '',
      parent2_firstname: formData.parent2FirstName || '',
      parent2_lastname: formData.parent2LastName || '',
      
      parent1_email_ids: parent1Emails,
      parent2_email_ids: parent2Emails,
      
      profile_url: '',
      profile_thumb_url: '',
      
      status: formData.status
    };
  }
  
  /**
   * Convert API response to Student model
   */
  static apiToModel(apiData: any): Student {
    return {
      studentId: apiData.student_id,
      schoolId: apiData.school_id,
      schoolIdNo: apiData.school_idno,
      userId: apiData.user_id,
      
      firstName: apiData.first_name,
      lastName: apiData.last_name,
      email: apiData.email_id,
      gender: apiData.gender,
      dateOfBirth: apiData.birthday,
      
      gradeId: apiData.grade_id,
      gradeName: apiData.grade_name,
      batchId: apiData.batch_id,
      batchName: apiData.batch_name,
      
      phones: [],
      
      status: apiData.status,
      registrationDate: apiData.registration_date,
      droppedDate: apiData.dropped_date,
      
      profileUrl: apiData.profile_url,
      profileThumbUrl: apiData.profile_thumb_url,
      
      createdAt: apiData.created_at ? new Date(apiData.created_at) : undefined,
      updatedAt: apiData.updated_at ? new Date(apiData.updated_at) : undefined
    };
  }
}

