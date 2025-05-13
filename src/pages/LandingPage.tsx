import React, { useState } from "react";
import { TextInput } from "../components/ui/TextInput";
import { InputFile } from "../components/ui/InputFile";
import { TextArea } from "../components/ui/TextArea";
import { Button } from "../components/ui/Button";

export const LandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    file: null as File | null,
    comments: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can write a logic to send the data to your backend
    console.log("Form submitted:", formData);
    alert("Ticket request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Your Journey to Coding Conf 2025 Starts Here!
            </h1>
            <p className="text-gray-600">
              Secure your spot at next year's biggest coding conference.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <TextInput
              label="Full Name"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              required
              placeholder="John Doe"
            />

            <TextInput
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(value) => setFormData({ ...formData, email: value })}
              required
              placeholder="john@example.com"
            />

            <InputFile
              label="Upload Supporting Document"
              onChange={(file) => setFormData({ ...formData, file })}
            />

            <TextArea
              label="Additional Comments"
              value={formData.comments}
              onChange={(value) => setFormData({ ...formData, comments: value })}
              placeholder="Any special requirements or questions..."
            />

            <div className="flex items-center justify-between mt-6">
              <button
                type="button"
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>

              <Button type="submit" primary>
                Submit Ticket Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};