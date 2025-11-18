interface LeaveRequest {
  request_id: number;
  email: string;
  reason: string;
  start_date: string;
  end_date: string;
  status: string;
}

export class MicrosoftCalendarService {
  constructor(private getAccessToken: () => Promise<string>) {}

  async syncLeaveToCalendar(leave: LeaveRequest) {
    const accessToken = await this.getAccessToken();
    
    const event = {
      subject: `Leave: ${leave.reason}`,
      body: {
        contentType: 'HTML',
        content: `
          <p><strong>Employee:</strong> ${leave.email}</p>
          <p><strong>Reason:</strong> ${leave.reason}</p>
          <p><strong>Status:</strong> ${leave.status}</p>
          <p><strong>Request ID:</strong> ${leave.request_id}</p>
        `,
      },
      start: {
        dateTime: new Date(leave.start_date).toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: new Date(leave.end_date).toISOString(),
        timeZone: 'UTC',
      },
      isAllDay: true,
      categories: [
        leave.status === 'approved' ? 'Leave - Approved' : 
        leave.status === 'pending' ? 'Leave - Pending' : 
        'Leave - Not Approved'
      ],
      // Store request_id in extensions for future reference
      extensions: [
        {
          '@odata.type': 'microsoft.graph.openTypeExtension',
          extensionName: 'com.yourcompany.leaverequest',
          leaveRequestId: leave.request_id.toString(),
        }
      ],
    };

    const response = await fetch('https://graph.microsoft.com/v1.0/me/calendar/events', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    if (!response.ok) {
      throw new Error(`Failed to create calendar event: ${response.statusText}`);
    }

    return await response.json();
  }

  async syncAllApprovedLeaves(leaves: LeaveRequest[]) {
    const approvedLeaves = leaves.filter(leave => leave.status === 'approved');
    const results = [];

    for (const leave of approvedLeaves) {
      try {
        const result = await this.syncLeaveToCalendar(leave);
        results.push({ success: true, leave, result });
      } catch (error) {
        results.push({ success: false, leave, error });
      }
    }

    return results;
  }

  async getCalendarEvents(startDate: string, endDate: string) {
    const accessToken = await this.getAccessToken();
    
    const url = new URL('https://graph.microsoft.com/v1.0/me/calendar/calendarView');
    url.searchParams.append('startDateTime', startDate);
    url.searchParams.append('endDateTime', endDate);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch calendar events');
    }

    return await response.json();
  }
}