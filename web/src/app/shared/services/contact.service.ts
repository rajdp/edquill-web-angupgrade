import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact, ContactAdapter, LegacyContactData } from '../models/contact.model';

/**
 * Contact Service
 * Manages contact person operations (formerly "parent" management)
 * Provides CRM foundation for contact lifecycle management
 */
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor() {}

  /**
   * Convert legacy parent data to modern Contact model
   * Used when loading existing student data
   */
  convertLegacyToContact(legacyData: LegacyContactData): Contact[] {
    return ContactAdapter.fromLegacyFormat(legacyData);
  }

  /**
   * Convert Contact model to legacy format for API calls
   * Maintains backward compatibility with existing backend
   */
  convertContactToLegacy(contacts: Contact[]): LegacyContactData {
    return ContactAdapter.toLegacyFormat(contacts);
  }

  /**
   * Validate contact information
   */
  validateContact(contact: Contact): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!contact.firstName || contact.firstName.trim() === '') {
      errors.push('First name is required');
    }

    if (!contact.lastName || contact.lastName.trim() === '') {
      errors.push('Last name is required');
    }

    // Validate at least one email
    if (!contact.emails || contact.emails.length === 0) {
      errors.push('At least one email is required');
    } else {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      contact.emails.forEach((emailObj, index) => {
        if (!emailRegex.test(emailObj.email)) {
          errors.push(`Invalid email format at position ${index + 1}`);
        }
      });
    }

    // Validate address if provided
    if (contact.address) {
      if (contact.address.postalCode && contact.address.postalCode.length < 3) {
        errors.push('Postal code must be at least 3 characters');
      }
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }

  /**
   * Check if contact has complete information
   */
  isContactComplete(contact: Contact): boolean {
    return !!(
      contact.firstName &&
      contact.lastName &&
      contact.emails.length > 0 &&
      contact.address &&
      contact.address.city &&
      contact.address.country
    );
  }

  /**
   * Get primary email for a contact
   */
  getPrimaryEmail(contact: Contact): string {
    const primaryEmail = contact.emails.find(e => e.isPrimary);
    return primaryEmail ? primaryEmail.email : (contact.emails[0]?.email || '');
  }

  /**
   * Get primary phone for a contact
   */
  getPrimaryPhone(contact: Contact): string {
    const primaryPhone = contact.phones.find(p => p.isPrimary);
    return primaryPhone ? primaryPhone.number : (contact.phones[0]?.number || '');
  }

  /**
   * Format contact name
   */
  getFullName(contact: Contact): string {
    return `${contact.firstName} ${contact.lastName}`.trim();
  }

  /**
   * Get contact display summary
   */
  getContactSummary(contact: Contact): string {
    const name = this.getFullName(contact);
    const email = this.getPrimaryEmail(contact);
    const phone = this.getPrimaryPhone(contact);
    
    let summary = name;
    if (email) summary += ` • ${email}`;
    if (phone) summary += ` • ${phone}`;
    
    return summary;
  }

  /**
   * CRM FUTURE: Create new contact
   * Placeholder for future CRM feature
   */
  createContact(contact: Contact): Observable<any> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Create contact', contact);
    return of({ success: true, message: 'Contact created successfully' });
  }

  /**
   * CRM FUTURE: Update contact
   * Placeholder for future CRM feature
   */
  updateContact(contactId: string, contact: Contact): Observable<any> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Update contact', contactId, contact);
    return of({ success: true, message: 'Contact updated successfully' });
  }

  /**
   * CRM FUTURE: Delete contact
   * Placeholder for future CRM feature
   */
  deleteContact(contactId: string): Observable<any> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Delete contact', contactId);
    return of({ success: true, message: 'Contact deleted successfully' });
  }

  /**
   * CRM FUTURE: Get all contacts for a student
   * Placeholder for future CRM feature
   */
  getStudentContacts(studentId: string): Observable<Contact[]> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Get student contacts', studentId);
    return of([]);
  }

  /**
   * CRM FUTURE: Search contacts
   * Placeholder for future CRM feature
   */
  searchContacts(query: string): Observable<Contact[]> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Search contacts', query);
    return of([]);
  }

  /**
   * CRM FUTURE: Link contact to student
   * Placeholder for future CRM feature
   */
  linkContactToStudent(contactId: string, studentId: string, relationship: string): Observable<any> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Link contact to student', { contactId, studentId, relationship });
    return of({ success: true, message: 'Contact linked to student' });
  }

  /**
   * CRM FUTURE: Send notification to contact
   * Placeholder for future CRM communication feature
   */
  sendNotification(contactId: string, message: string, channel: 'email' | 'sms'): Observable<any> {
    // TODO: Implement notification API when CRM backend is ready
    console.log('CRM Feature: Send notification', { contactId, message, channel });
    return of({ success: true, message: 'Notification sent' });
  }

  /**
   * CRM FUTURE: Get contact communication history
   * Placeholder for future CRM feature
   */
  getCommunicationHistory(contactId: string): Observable<any[]> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Get communication history', contactId);
    return of([]);
  }

  /**
   * CRM FUTURE: Add note to contact
   * Placeholder for future CRM feature
   */
  addNote(contactId: string, note: string): Observable<any> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Add note to contact', { contactId, note });
    return of({ success: true, message: 'Note added' });
  }

  /**
   * CRM FUTURE: Get contact notes
   * Placeholder for future CRM feature
   */
  getContactNotes(contactId: string): Observable<any[]> {
    // TODO: Implement API call when CRM backend is ready
    console.log('CRM Feature: Get contact notes', contactId);
    return of([]);
  }

  /**
   * CRM FUTURE: Export contacts to CSV
   * Placeholder for future reporting feature
   */
  exportToCSV(contacts: Contact[]): string {
    // TODO: Implement CSV export
    console.log('CRM Feature: Export contacts to CSV', contacts.length);
    return 'Contact export will be available in future CRM features';
  }

  /**
   * CRM FUTURE: Import contacts from CSV
   * Placeholder for future bulk import feature
   */
  importFromCSV(csvData: string): Observable<{ success: number; failed: number; errors: string[] }> {
    // TODO: Implement CSV import
    console.log('CRM Feature: Import contacts from CSV');
    return of({ success: 0, failed: 0, errors: [] });
  }

  /**
   * CRM FUTURE: Get contact analytics
   * Placeholder for future analytics feature
   */
  getContactAnalytics(filters?: any): Observable<any> {
    // TODO: Implement analytics API
    console.log('CRM Feature: Get contact analytics', filters);
    return of({
      totalContacts: 0,
      primaryContacts: 0,
      secondaryContacts: 0,
      contactsByRelationship: {},
      communicationStats: {}
    });
  }
}

