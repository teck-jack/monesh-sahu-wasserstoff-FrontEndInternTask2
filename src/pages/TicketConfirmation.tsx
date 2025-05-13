import React from "react";
import { Card, CardRow } from "../components/ui/Card";

// interface

interface TicketConfirmationProps {
  name: string;
  email: string;
  ticketId: string;
  eventDate: string;
  status: "confirmed" | "pending";
}


// ticket conformation  function
export const TicketConfirmation: React.FC<TicketConfirmationProps> = ({
  name,
  email,
  ticketId,
  eventDate,
  status,
}) => {
  return (
    <Card 
      title={`Your Ticket for Coding Conf 2025`}
      variant={status === "confirmed" ? "success" : "warning"}
    >
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-medium">
            {status === "confirmed" 
              ? " Your ticket is confirmed!" 
              : " Your request is being processed"}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {status === "confirmed" 
              ? "We've emailed your ticket details" 
              : "We'll notify you once confirmed"}
          </p>
        </div>

        <CardRow label="Attendee Name" value={name} />
        <CardRow label="Email" value={email} />
        <CardRow label="Ticket ID" value={ticketId} />
        <CardRow label="Event Date" value={eventDate} />
        <CardRow label="Status" value={
          <span className={`px-2 py-1 rounded text-xs ${
            status === "confirmed" 
              ? "bg-green-100 text-green-800" 
              : "bg-yellow-100 text-yellow-800"
          }`}>
            {status === "confirmed" ? "Confirmed" : "Pending"}
          </span>
        } />

        {status === "confirmed" && (
          <div className="pt-4 border-t border-gray-200">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
              Download Ticket
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};