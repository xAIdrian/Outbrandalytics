import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ContentScrollComponent = ({ listItems }) => {
  const location = useLocation();
  const userContent = location.state;

  const [contents, setContent] = useState([]);
  
  useEffect(() => {
    setContent(Object.values(userContent.content));
  }, []);
  
  return (
    <div>
      <h1 className="text-2xl font-semibold leading-6">Content</h1>
      <ul role="list" className="divide-y divide-gray-100">
        {contents.map((item, index) => (
          <li key={item.date} className="gap-x-6 py-5">
            <div className="backdrop-filter backdrop-blur-lg bg-black bg-opacity-50">
              <h2 className="text-lg font-bold leading-5 text-white">{item.date}</h2>
              <strong className="text-sm leading-5 text-white py-2">{item.topic.topic}</strong>
            </div>
            <div className="min-w-0 gap-x-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                { item.type }
              </span>
              { item.type === 'tweets' ? (
                <ul role="list" className="divide-y divide-gray-100">
                  { item.content.map((block, index) => (
                    <li key={index} className="gap-x-6 py-1">
                      <div>
                        <h3 key={index} className="text-sm font-semibold leading-6 text-gray-900">{block}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : ( <h3 key={index} className="text-sm font-semibold leading-6 text-gray-900">{item.content}</h3> ) }
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContentScrollComponent;
