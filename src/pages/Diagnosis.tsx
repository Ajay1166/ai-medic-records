
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import AIDiagnosis from '../components/AIDiagnosis';

const Diagnosis = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2 gradient-text-primary">
              AI Diagnosis
            </h1>
            <p className="text-gray-600">Get automated diagnosis and prescription based on symptoms</p>
          </div>
          
          <div className="mt-8">
            <AIDiagnosis />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Diagnosis;
