import React from "react";
import { Demo1 } from "./pages/Demo1";
import { Demo2 } from "./pages/Demo2";
import { LandingPage } from "./pages/LandingPage";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8 text-center">  </h1>
        <LandingPage/>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Confirmed Ticket</h2>
            <Demo1 />
          </div>
          <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4 text-center">Pending Ticket</h2>
            <Demo2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;