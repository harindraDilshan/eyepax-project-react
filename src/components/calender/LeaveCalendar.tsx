import React, { useState, useEffect, useCallback } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useMsal } from '@azure/msal-react';
import { AlertCircle, Calendar as CalendarIcon, Check, X, Clock } from 'lucide-react';
import { MainLayout } from '../layout/MainLayout';

const localizer = momentLocalizer(moment);

interface LeaveRequest {
  request_id: number;
  employee_id: number;
  reason: string;
  approved_date: string;
  status: 'approved' | 'not-approved' | 'pending';
  start_date: string;
  end_date: string;
  email: string;
}

interface CalendarEvent extends Event {
  requestId: number;
  status: 'approved' | 'not-approved' | 'pending';
  reason: string;
  email: string;
  isOverlapping?: boolean;
}

const LeaveCalendar: React.FC = () => {
  const { instance, accounts } = useMsal();
  const [leaveRequests, setLeaveRequests] = useState<LeaveRequest[]>([]);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [syncStatus, setSyncStatus] = useState<string>('');

  // Fetch leave requests from your API
  const fetchLeaveRequests = async () => {
    setLoading(true);
    setError(null);
    
    try {
        const token = localStorage.getItem('accessToken');
      const response = await fetch(
        'https://8iv05x1jp7.execute-api.us-east-1.amazonaws.com/prod/leave/request',
        {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
      );
      const data = await response.json();
      
      if (data.leaveRequests) {
        setLeaveRequests(data.leaveRequests);
        convertToCalendarEvents(data.leaveRequests);
      }
    } catch (err) {
      setError('Failed to fetch leave requests');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Detect overlapping leave requests
  const detectOverlaps = (requests: LeaveRequest[]): Set<number> => {
    const overlapping = new Set<number>();
    
    for (let i = 0; i < requests.length; i++) {
      for (let j = i + 1; j < requests.length; j++) {
        const start1 = new Date(requests[i].start_date);
        const end1 = new Date(requests[i].end_date);
        const start2 = new Date(requests[j].start_date);
        const end2 = new Date(requests[j].end_date);
        
        // Check if dates overlap
        if (start1 <= end2 && start2 <= end1) {
          overlapping.add(requests[i].request_id);
          overlapping.add(requests[j].request_id);
        }
      }
    }
    
    return overlapping;
  };

  // Convert leave requests to calendar events
  const convertToCalendarEvents = (requests: LeaveRequest[]) => {
    const overlappingIds = detectOverlaps(requests);
    
    const calendarEvents: CalendarEvent[] = requests.map((request) => ({
      requestId: request.request_id,
      title: `${request.email.split('@')[0]} - ${request.reason}`,
      start: new Date(request.start_date),
      end: new Date(request.end_date),
      status: request.status,
      reason: request.reason,
      email: request.email,
      isOverlapping: overlappingIds.has(request.request_id),
    }));
    
    setEvents(calendarEvents);
  };

  // Sync to Microsoft Graph Calendar
  const syncToMicrosoftCalendar = async () => {
    if (!accounts[0]) {
      setError('Please sign in to Microsoft account first');
      return;
    }

    setSyncStatus('Syncing to Microsoft Calendar...');
    
    try {
      // Get access token
      const response = await instance.acquireTokenSilent({
        scopes: ['Calendars.ReadWrite'],
        account: accounts[0],
      });

      // Sync approved leaves to calendar
      const approvedLeaves = leaveRequests.filter(req => req.status === 'approved');
      
      for (const leave of approvedLeaves) {
        const event = {
          subject: `Leave: ${leave.reason}`,
          body: {
            contentType: 'HTML',
            content: `Leave request approved for ${leave.email}`,
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
          categories: ['Leave - Approved'],
        };

        await fetch('https://graph.microsoft.com/v1.0/me/calendar/events', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${response.accessToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });
      }

      setSyncStatus('Successfully synced to Microsoft Calendar!');
      setTimeout(() => setSyncStatus(''), 3000);
    } catch (err) {
      console.error('Sync error:', err);
      setError('Failed to sync with Microsoft Calendar');
    }
  };

  useEffect(() => {
    fetchLeaveRequests();
  }, []);

  // Custom event styling based on status and overlap
  const eventStyleGetter = (event: CalendarEvent) => {
    let backgroundColor = '#6B7280'; // Default gray
    let border = '2px solid transparent';
    
    if (event.status === 'approved') {
      backgroundColor = '#10B981'; // Green
    } else if (event.status === 'not-approved') {
      backgroundColor = '#EF4444'; // Red
    } else if (event.status === 'pending') {
      backgroundColor = '#F59E0B'; // Orange
    }
    
    // Add pattern for overlapping events
    if (event.isOverlapping) {
      border = '3px solid #FFD700';
      backgroundColor = `${backgroundColor}CC`; // Add transparency
    }
    
    return {
      style: {
        backgroundColor,
        border,
        borderRadius: '6px',
        opacity: 0.9,
        color: 'white',
        fontWeight: event.isOverlapping ? 'bold' : 'normal',
        boxShadow: event.isOverlapping ? '0 0 10px rgba(255, 215, 0, 0.5)' : 'none',
      },
    };
  };

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
  };

  return (
    <MainLayout>
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white flex items-center gap-3">
              <CalendarIcon className="w-8 h-8" />
              Leave Request Calendar
            </h1>
            <p className="text-gray-400 mt-2">
              View and manage leave requests across your organization
            </p>
          </div>
          
          <button
            onClick={syncToMicrosoftCalendar}
            disabled={loading || !accounts[0]}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            Sync to Microsoft Calendar
          </button>
        </div>

        {/* Status Messages */}
        {syncStatus && (
          <div className="mb-4 p-4 bg-green-900/40 border border-green-700 rounded-lg">
            <p className="text-green-300">{syncStatus}</p>
          </div>
        )}

        {error && (
          <div className="mb-4 p-4 bg-red-900/40 border border-red-700 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-300">{error}</p>
          </div>
        )}

        {/* Legend */}
        <div className="mb-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 className="text-white font-semibold mb-3">Legend</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded border-2 border-transparent"></div>
              <span className="text-gray-300 text-sm">Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-red-500 rounded border-2 border-transparent"></div>
              <span className="text-gray-300 text-sm">Not Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-orange-500 rounded border-2 border-transparent"></div>
              <span className="text-gray-300 text-sm">Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded border-4 border-yellow-400"></div>
              <span className="text-gray-300 text-sm">Overlapping Requests</span>
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-gray-700">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <div className="text-gray-400">Loading calendar...</div>
            </div>
          ) : (
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 700 }}
              eventPropGetter={eventStyleGetter}
              onSelectEvent={handleSelectEvent}
              views={['month', 'week', 'day']}
              popup
              className="custom-calendar"
            />
          )}
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Leave Details</h3>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Employee</p>
                  <p className="text-white font-medium">{selectedEvent.email}</p>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Reason</p>
                  <p className="text-white">{selectedEvent.reason}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400 text-sm">Start Date</p>
                    <p className="text-white">{moment(selectedEvent.start).format('MMM DD, YYYY')}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">End Date</p>
                    <p className="text-white">{moment(selectedEvent.end).format('MMM DD, YYYY')}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-400 text-sm">Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    {selectedEvent.status === 'approved' && (
                      <span className="flex items-center gap-1 text-green-400">
                        <Check className="w-4 h-4" /> Approved
                      </span>
                    )}
                    {selectedEvent.status === 'not-approved' && (
                      <span className="flex items-center gap-1 text-red-400">
                        <X className="w-4 h-4" /> Not Approved
                      </span>
                    )}
                    {selectedEvent.status === 'pending' && (
                      <span className="flex items-center gap-1 text-orange-400">
                        <Clock className="w-4 h-4" /> Pending
                      </span>
                    )}
                  </div>
                </div>
                
                {selectedEvent.isOverlapping && (
                  <div className="p-3 bg-yellow-900/20 border border-yellow-700 rounded-lg">
                    <p className="text-yellow-400 text-sm font-medium">
                      ⚠️ This leave overlaps with other requests
                    </p>
                  </div>
                )}
              </div>
              
              <button
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-calendar {
          background: #1F2937;
          border-radius: 8px;
          padding: 16px;
        }
        
        .rbc-header {
          background: #374151;
          color: #F9FAFB;
          padding: 12px;
          font-weight: 600;
          border-bottom: 2px solid #4B5563;
        }
        
        .rbc-today {
          background-color: #1E3A5F !important;
        }
        
        .rbc-off-range-bg {
          background: #111827;
        }
        
        .rbc-date-cell {
          color: #D1D5DB;
          padding: 8px;
        }
        
        .rbc-month-view, .rbc-time-view {
          border: 1px solid #4B5563;
          border-radius: 8px;
          background: #1F2937;
        }
        
        .rbc-day-bg, .rbc-time-slot {
          border-color: #374151;
        }
        
        .rbc-event {
          padding: 4px 8px;
          font-size: 13px;
        }
        
        .rbc-toolbar {
          margin-bottom: 20px;
          color: #F9FAFB;
        }
        
        .rbc-toolbar button {
          color: #F9FAFB;
          background: #374151;
          border: 1px solid #4B5563;
          padding: 8px 16px;
          border-radius: 6px;
          margin: 0 4px;
        }
        
        .rbc-toolbar button:hover {
          background: #4B5563;
        }
        
        .rbc-toolbar button.rbc-active {
          background: #4F46E5;
          border-color: #4F46E5;
        }
      `}</style>
    </div>
    </MainLayout>
  );
};

export default LeaveCalendar;