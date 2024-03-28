import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const InterviewPage = ({ userDataTopics }) => {
  const location = useLocation();
  const userData = location.state;

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-6 text-orange-900">Onboarding Interview for {userData?.email}</h1>

      <ul role="list" className="divide-y divide-gray-100">
        {userData.interview?.map((item, index) => (
          <li key={item.date} className="gap-x-6 py-5">
            <div className="min-w-0 gap-x-4">
              <p className="text-sm leading-5 text-gray-500">{item.question}</p>
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.answer}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewPage;
