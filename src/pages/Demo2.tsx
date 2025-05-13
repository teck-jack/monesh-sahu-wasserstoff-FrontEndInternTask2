import React from "react";
import { TicketConfirmation } from "../pages/TicketConfirmation";

// send a props value to  TicketConfirmation component 

export const Demo2: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <TicketConfirmation
          name="Jane Smith"
          email="jane@example.com"
          ticketId="TCK-2025-0429"
          eventDate="January 11, 2025"
          status="pending"
        />
      </div>
    </div>
  );
};