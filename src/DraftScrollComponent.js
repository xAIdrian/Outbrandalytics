import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DraftScrollComponent = ({ listItems }) => {
  const location = useLocation();
  const userDrafts = location.state;

  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    setDrafts(Object.values(userDrafts.drafts));
    console.log("🚀 ~ useEffect ~ userDrafts.drafts:", Object.values(userDrafts.drafts))
  }, [userDrafts]);
  
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-6">Drafts</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {drafts?.map((item, index) => (
          <li key={item.date} className="gap-x-6 py-5">
            <div className="backdrop-filter backdrop-blur-lg bg-black bg-opacity-50">
              <h2 className="text-lg font-bold leading-5 text-white">{item.date}</h2>
              <strong className="text-sm leading-5 text-white py-2">{item.topic.topic}</strong>
            </div>
            <div className="min-w-0 gap-x-4">
              <ul role="list" className="divide-y divide-gray-100">
                { item.blocks.map((block, index) => (
                  <li key={index} className="gap-x-6 py-1">
                    <div>
                      <h3 key={index} className="text-sm font-semibold leading-6 text-gray-900">{block.question}</h3>
                      <p key={index} className="text-sm leading-5 text-gray-500">{block.answer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DraftScrollComponent;
