import React from 'react';

const HomePage = ({ data }) => {
  console.log("🚀 ~ HomePage ~ data:", data)
  

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
      {data.map((item, index) => (
        <li key={item.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{item.email}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:items-end button-container space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Interview</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Topics</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Drafts</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">Content</button>
          </div>
        </li>
      ))}
    </ul>
      {/* <table>
        <thead>
          <tr>
            <th>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.email}</td>
              <td className="button-container space-x-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Initial Interview</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Topics</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Drafts</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Content</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default HomePage;
