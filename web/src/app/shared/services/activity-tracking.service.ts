import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * Activity Tracking Service
 * Tracks user actions and form events for audit trail
 * Foundation for CRM activity logging
 */

export interface ActivityEvent {
  eventId?: string;
  userId: string;
  userName: string;
  action: ActivityAction;
  entityType: EntityType;
  entityId: string;
  entityName?: string;
  timestamp: Date;
  details?: any;
  ipAddress?: string;
  userAgent?: string;
}

export enum ActivityAction {
  Created = 'created',
  Updated = 'updated',
  Deleted = 'deleted',
  Viewed = 'viewed',
  Exported = 'exported',
  Imported = 'imported',
  Emailed = 'emailed',
  Called = 'called',
  Messaged = 'messaged'
}

export enum EntityType {
  Student = 'student',
  Contact = 'contact',
  Class = 'class',
  Assessment = 'assessment',
  Assignment = 'assignment',
  Report = 'report'
}

@Injectable({
  providedIn: 'root'
})
export class ActivityTrackingService {
  
  private activities: ActivityEvent[] = [];

  constructor() {}

  /**
   * Track a user activity
   */
  trackActivity(event: Omit<ActivityEvent, 'eventId' | 'timestamp'>): void {
    const activity: ActivityEvent = {
      ...event,
      eventId: this.generateEventId(),
      timestamp: new Date()
    };

    // Store in memory (in production, this would go to backend)
    this.activities.push(activity);

    // Log for development
    console.log('Activity Tracked:', activity);

    // CRM FUTURE: Send to backend API for persistence
    // this.sendToBackend(activity).subscribe();
  }

  /**
   * Track student creation
   */
  trackStudentCreated(userId: string, userName: string, studentId: string, studentName: string): void {
    this.trackActivity({
      userId,
      userName,
      action: ActivityAction.Created,
      entityType: EntityType.Student,
      entityId: studentId,
      entityName: studentName,
      details: { message: `Student "${studentName}" was created` }
    });
  }

  /**
   * Track student update
   */
  trackStudentUpdated(userId: string, userName: string, studentId: string, studentName: string, changes?: any): void {
    this.trackActivity({
      userId,
      userName,
      action: ActivityAction.Updated,
      entityType: EntityType.Student,
      entityId: studentId,
      entityName: studentName,
      details: { changes, message: `Student "${studentName}" was updated` }
    });
  }

  /**
   * Track contact creation
   */
  trackContactCreated(userId: string, userName: string, contactId: string, contactName: string): void {
    this.trackActivity({
      userId,
      userName,
      action: ActivityAction.Created,
      entityType: EntityType.Contact,
      entityId: contactId,
      entityName: contactName,
      details: { message: `Contact "${contactName}" was created` }
    });
  }

  /**
   * Track form submission
   */
  trackFormSubmission(userId: string, userName: string, formType: string, entityId: string, data?: any): void {
    this.trackActivity({
      userId,
      userName,
      action: ActivityAction.Created,
      entityType: EntityType.Student, // Can be dynamic based on formType
      entityId,
      details: { 
        formType,
        submittedAt: new Date(),
        message: `Form "${formType}" was submitted`
      }
    });
  }

  /**
   * Track data export
   */
  trackExport(userId: string, userName: string, exportType: string, recordCount: number): void {
    this.trackActivity({
      userId,
      userName,
      action: ActivityAction.Exported,
      entityType: EntityType.Report,
      entityId: this.generateEventId(),
      details: { 
        exportType,
        recordCount,
        message: `Exported ${recordCount} ${exportType} records`
      }
    });
  }

  /**
   * Get activity history for an entity
   */
  getEntityHistory(entityType: EntityType, entityId: string): ActivityEvent[] {
    return this.activities.filter(
      a => a.entityType === entityType && a.entityId === entityId
    );
  }

  /**
   * Get recent activities
   */
  getRecentActivities(limit: number = 10): ActivityEvent[] {
    return this.activities
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, limit);
  }

  /**
   * Get activities by user
   */
  getUserActivities(userId: string, limit?: number): ActivityEvent[] {
    const userActivities = this.activities.filter(a => a.userId === userId);
    return limit ? userActivities.slice(0, limit) : userActivities;
  }

  /**
   * CRM FUTURE: Send activity to backend
   */
  private sendToBackend(activity: ActivityEvent): Observable<any> {
    // TODO: Implement API call when backend is ready
    return of({ success: true });
  }

  /**
   * Generate unique event ID
   */
  private generateEventId(): string {
    return `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * CRM FUTURE: Get activity analytics
   */
  getActivityAnalytics(filters?: any): Observable<any> {
    // TODO: Implement analytics API
    console.log('CRM Feature: Get activity analytics', filters);
    return of({
      totalActivities: this.activities.length,
      activitiesByType: this.groupByEntityType(),
      activitiesByAction: this.groupByAction(),
      topUsers: this.getTopUsers()
    });
  }

  /**
   * Group activities by entity type
   */
  private groupByEntityType(): any {
    return this.activities.reduce((acc, activity) => {
      acc[activity.entityType] = (acc[activity.entityType] || 0) + 1;
      return acc;
    }, {} as any);
  }

  /**
   * Group activities by action
   */
  private groupByAction(): any {
    return this.activities.reduce((acc, activity) => {
      acc[activity.action] = (acc[activity.action] || 0) + 1;
      return acc;
    }, {} as any);
  }

  /**
   * Get top active users
   */
  private getTopUsers(limit: number = 5): any[] {
    const userCounts = this.activities.reduce((acc, activity) => {
      if (!acc[activity.userId]) {
        acc[activity.userId] = {
          userId: activity.userId,
          userName: activity.userName,
          count: 0
        };
      }
      acc[activity.userId].count++;
      return acc;
    }, {} as any);

    return Object.values(userCounts)
      .sort((a: any, b: any) => b.count - a.count)
      .slice(0, limit);
  }

  /**
   * Clear all activities (for testing)
   */
  clearActivities(): void {
    this.activities = [];
  }
}

