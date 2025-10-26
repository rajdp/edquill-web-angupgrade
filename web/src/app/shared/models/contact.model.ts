/**
 * Contact Model
 * Represents a contact person (formerly "parent") for a student
 * Supports all age groups and relationship types
 */

export interface Contact {
  contactId?: string;
  firstName: string;
  lastName: string;
  relationship?: ContactRelationship;
  isPrimary: boolean;
  
  // Contact Information
  emails: ContactEmail[];
  phones: ContactPhone[];
  
  // Address
  address?: Address;
  
  // Preferences
  preferredContactMethod?: 'email' | 'phone' | 'sms';
  receiveNotifications: boolean;
  emergencyContact: boolean;
  
  // Metadata
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ContactEmail {
  email: string;
  isPrimary: boolean;
  verified?: boolean;
}

export interface ContactPhone {
  number: string;
  type: 'mobile' | 'home' | 'work' | 'other';
  isPrimary: boolean;
  countryCode?: string;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  stateId?: string;
  country: string;
  countryId?: string;
  postalCode: string;
  type?: 'home' | 'work' | 'other';
}

export enum ContactRelationship {
  Parent = 'parent',
  Guardian = 'guardian',
  Spouse = 'spouse',
  Sibling = 'sibling',
  GrandParent = 'grandparent',
  Employer = 'employer',
  Friend = 'friend',
  Self = 'self',
  Other = 'other'
}

/**
 * Legacy Contact Model (for backward compatibility with API)
 * Maps old "parent" terminology to new Contact model
 */
export interface LegacyContactData {
  // Contact 1
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
  
  // Contact 2
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
 * Utility class to convert between Contact and Legacy formats
 */
export class ContactAdapter {
  
  /**
   * Convert modern Contact model to legacy API format
   */
  static toLegacyFormat(contacts: Contact[]): LegacyContactData {
    const legacy: LegacyContactData = {};
    
    if (contacts.length > 0) {
      const contact1 = contacts[0];
      legacy.parent1FirstName = contact1.firstName;
      legacy.parent1LastName = contact1.lastName;
      legacy.email_id1_p1 = contact1.emails[0]?.email || '';
      legacy.email_id2_p1 = contact1.emails[1]?.email || '';
      
      if (contact1.address) {
        legacy.address1 = contact1.address.line1;
        legacy.address2 = contact1.address.line2 || '';
        legacy.city = contact1.address.city;
        legacy.state = contact1.address.stateId || contact1.address.state;
        legacy.country = contact1.address.countryId || contact1.address.country;
        legacy.postalCode = contact1.address.postalCode;
      }
    }
    
    if (contacts.length > 1) {
      const contact2 = contacts[1];
      legacy.parent2FirstName = contact2.firstName;
      legacy.parent2LastName = contact2.lastName;
      legacy.email_id1_p2 = contact2.emails[0]?.email || '';
      legacy.email_id2_p2 = contact2.emails[1]?.email || '';
      
      if (contact2.address) {
        legacy.addressp21 = contact2.address.line1;
        legacy.addressp22 = contact2.address.line2 || '';
        legacy.city1 = contact2.address.city;
        legacy.state1 = contact2.address.stateId || contact2.address.state;
        legacy.country1 = contact2.address.countryId || contact2.address.country;
        legacy.postalCode1 = contact2.address.postalCode;
      }
    }
    
    return legacy;
  }
  
  /**
   * Convert legacy API format to modern Contact model
   */
  static fromLegacyFormat(legacy: LegacyContactData): Contact[] {
    const contacts: Contact[] = [];
    
    // Contact 1
    if (legacy.parent1FirstName || legacy.parent1LastName) {
      const contact1: Contact = {
        firstName: legacy.parent1FirstName || '',
        lastName: legacy.parent1LastName || '',
        isPrimary: true,
        emails: [],
        phones: [],
        receiveNotifications: true,
        emergencyContact: true
      };
      
      if (legacy.email_id1_p1) {
        contact1.emails.push({ email: legacy.email_id1_p1, isPrimary: true });
      }
      if (legacy.email_id2_p1) {
        contact1.emails.push({ email: legacy.email_id2_p1, isPrimary: false });
      }
      
      if (legacy.address1 || legacy.city || legacy.postalCode) {
        contact1.address = {
          line1: legacy.address1 || '',
          line2: legacy.address2,
          city: legacy.city || '',
          state: legacy.state || '',
          country: legacy.country || '',
          postalCode: legacy.postalCode || ''
        };
      }
      
      contacts.push(contact1);
    }
    
    // Contact 2
    if (legacy.parent2FirstName || legacy.parent2LastName) {
      const contact2: Contact = {
        firstName: legacy.parent2FirstName || '',
        lastName: legacy.parent2LastName || '',
        isPrimary: false,
        emails: [],
        phones: [],
        receiveNotifications: true,
        emergencyContact: true
      };
      
      if (legacy.email_id1_p2) {
        contact2.emails.push({ email: legacy.email_id1_p2, isPrimary: true });
      }
      if (legacy.email_id2_p2) {
        contact2.emails.push({ email: legacy.email_id2_p2, isPrimary: false });
      }
      
      if (legacy.addressp21 || legacy.city1 || legacy.postalCode1) {
        contact2.address = {
          line1: legacy.addressp21 || '',
          line2: legacy.addressp22,
          city: legacy.city1 || '',
          state: legacy.state1 || '',
          country: legacy.country1 || '',
          postalCode: legacy.postalCode1 || ''
        };
      }
      
      contacts.push(contact2);
    }
    
    return contacts;
  }
}

