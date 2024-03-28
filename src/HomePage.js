import React from 'react';

const HomePage = ({ data }) => {
  console.log("🚀 ~ HomePage ~ data:", data)
  

  return (
    <div>
      {/* Render your data here */}
      <table>
        <thead>
          <tr>
            <th>
              <h1 className="text-3xl font-bold underline">
                Email
              </h1>
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
      </table>
    </div>
  );
};

export default HomePage;
