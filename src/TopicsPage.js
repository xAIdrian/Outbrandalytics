import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const TopicsPage = ({ userDataTopics }) => {
  const location = useLocation();
  const userData = location.state;

  return (
    <div>
      <strong>Topics for {userData?.email}</strong>
      <p>Welcome to the home page!</p>

      <ul role="list" className="divide-y divide-gray-100">
        {userData.topics?.map((item, index) => (
          <li key={item.date} className="gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div>
                <p className="text-sm leading-5 text-gray-500">{item.date}</p>
                {item.objective === undefined || item.objective === '' ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Made by User
                  </span>
                ) : null}
              </div>
              <div className="min-w-0 gap-x-6">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.topic}</p>
                <p className="text-sm leading-5 text-gray-500">{item.objective}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicsPage;
