import React, { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { mangoFusionPalette } from '@mui/x-charts/colorPalettes';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ data }) => {
  const navigate = useNavigate();
  
  const [totalUsers, setTotalUser] = useState(0);
  const [interviewCounts, setInterviewCounts] = useState({
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0,
    'fifth': 0,
    'sixth': 0,
  }); 
  const [topicCounts, setTopicCounts] = useState({
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0,
    'fifth': 0,
    'sixth': 0,
    'seventh': 0,
  });
  const [contentCounts, setContentCounts] = useState({
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0,
    'fifth': 0,
    'sixth': 0,
    'seventh': 0,
  });
  const [draftCounts, setDraftCounts] = useState({
    'first': 0,
    'second': 0,
    'third': 0,
    'fourth': 0,
    'fifth': 0,
    'sixth': 0,
    'seventh': 0,
  });
  
  useEffect(() => {
    setTotalUser(data.length);
    // Initialize a new object with the same structure as interviewCounts
    let newInterviewCounts = { ...interviewCounts };
    data.forEach(item => {
      let interviewCount = item.interview?.filter((pair) => pair.answer !== undefined).length;
      if (interviewCount === 0) {
        newInterviewCounts.first++;
      } else if (interviewCount > 0 && interviewCount <= 5) {
        newInterviewCounts.second++;
      } else if (interviewCount > 5 && interviewCount <= 10) {
        newInterviewCounts.third++;
      } else if (interviewCount > 10 && interviewCount <= 15) {
        newInterviewCounts.fourth++;
      } else if (interviewCount >= 16 && interviewCount <= 20) {
        newInterviewCounts.fifth++;
      } else if (interviewCount >= 21 && interviewCount <= 25) {
        newInterviewCounts.sixth++;
      } else {
        console.log("🚀 ~ useEffect ~ interview:", item.email + newInterviewCounts);
      }
    });
    setInterviewCounts(newInterviewCounts);
    
    // Initialize a new object with the same structure as topicCounts
    let newTopicCounts = { ...topicCounts };
    data.forEach(item => {
      let topicsCount = item.topics?.length;
      if (topicsCount === 0) {
        newTopicCounts.first++;
      } else if (topicsCount > 0 && topicsCount <= 10) {
        newTopicCounts.second++;
      } else if (topicsCount > 10 && topicsCount <= 20) {
        newTopicCounts.third++;
      } else if (topicsCount > 20 && topicsCount <= 30) {
        newTopicCounts.fourth++;
      } else if (topicsCount > 30 && topicsCount <= 40) {
        newTopicCounts.fifth++;
      } else if (topicsCount > 40 && topicsCount <= 50) {
        newTopicCounts.sixth++;
      }else if (topicsCount > 50) {
        newTopicCounts.seventh++;
      } else {
        console.log("🚀 ~ useEffect ~ topics:", item.email + newTopicCounts);
      }
    });
    setTopicCounts(newTopicCounts);

    //Initialize a new object with the same structure as contentCounts
    let newContentCounts = { ...contentCounts };
    data.forEach(item => {
      let contentCount = Object.values(item.content ?? {}).length;
      if (contentCount === 0) {
        newContentCounts.first++;
      } else if (contentCount > 0 && contentCount <= 10) {
        newContentCounts.second++;
      } else if (contentCount > 10 && contentCount <= 20) {
        newContentCounts.third++;
      } else if (contentCount > 20 && contentCount <= 30) {
        newContentCounts.fourth++;
      } else if (contentCount > 30 && contentCount <= 40) {
        newContentCounts.fifth++;
      } else if (contentCount > 40 && contentCount <= 50) {
        newContentCounts.sixth++;
      }else if (contentCount > 50) {
        newContentCounts.seventh++;
      } else {
        console.log("🚀 ~ useEffect ~ contents:", item.email + newContentCounts);
      }
    });
    setContentCounts(newContentCounts);

    //Initialize a new object with the same structure as draftCounts
    let newDraftCounts = { ...draftCounts };
    data.forEach(item => {
      let draftCount = Object.values(item.drafts ?? {}).length;
      if (draftCount === 0) {
        newDraftCounts.first++;
      } else if (draftCount > 0 && draftCount <= 10) {
        newDraftCounts.second++;
      } else if (draftCount > 10 && draftCount <= 20) {
        newDraftCounts.third++;
      } else if (draftCount > 20 && draftCount <= 30) {
        newDraftCounts.fourth++;
      } else if (draftCount > 30 && draftCount <= 40) {
        newDraftCounts.fifth++;
      } else if (draftCount > 40 && draftCount <= 50) {
        newDraftCounts.sixth++;
      }else if (draftCount > 50) {
        newDraftCounts.seventh++;
      } else {
        console.log("🚀 ~ useEffect ~ drafts:", item.email + draftCount);
      }
    });
    setDraftCounts(newDraftCounts);

  }, [data]);

  const navigateToTopics = (email, topics) => {
    navigate('/topics', { state: { 
      email: email,
      topics: topics
     } });
  };

  const navigateToInterview = (email, interview) => {
    navigate('/interview', { state: { 
      email: email,
      interview: interview
     } });
  } 

  return (
    <div>
      <h3 className="text-2xl font-semibold leading-6 text-gray-900">Total Users: { totalUsers }</h3>
      <br/>
      <br/>
      <div className='flex justify-between'>
        <div>
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">Interview Completion</h3>
          <p className="text-sm leading-5 text-gray-500">Overview of all users</p>
          <PieChart
            colors={ mangoFusionPalette }
            series={[
              {
                data: [
                  { id: 0, value: interviewCounts.first, label: '0 answers', color: 'lightgrey'},
                  { id: 1, value: interviewCounts.second, label: '1 - 5 answers' },
                  { id: 2, value: interviewCounts.third, label: '6 - 10 answers' },
                  { id: 3, value: interviewCounts.fourth, label: '11 - 15 answers' },
                  { id: 4, value: interviewCounts.fifth, label: '16 - 20 answers' },
                  { id: 5, value: interviewCounts.sixth, label: '21 - 25 answers' },
                ],
              },
            ]}
            width={600}
            height={250}
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">Topics Generated</h3>
          <p className="text-sm leading-5 text-gray-500">Topics generated 5 at a time</p>
          <PieChart
            colors={ mangoFusionPalette }
            series={[
              {
                data: [
                  { id: 0, value: topicCounts.first, label: '0 topics', color: 'lightgrey' },
                  { id: 1, value: topicCounts.second, label: '1 - 10 topics' },
                  { id: 2, value: topicCounts.third, label: '11 - 20 topics' },
                  { id: 3, value: topicCounts.fourth, label: '21 - 30 topics' },
                  { id: 4, value: topicCounts.fifth, label: '31 - 40 topics' },
                  { id: 5, value: topicCounts.sixth, label: '41 - 50 topics' },
                  { id: 6, value: topicCounts.seventh, label: '51+ topics' },
                ],
              },
            ]}
            width={600}
            height={250}
          />
        </div>
      </div>
      <br/>
      <br/>
      <div className='flex justify-between'>
        <div>
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">Content Created</h3>
          <p className="text-sm leading-5 text-gray-500">All content types. 3 tweets = 1 content.</p>
          <PieChart
            colors={ mangoFusionPalette }
            series={[
              {
                data: [
                  { id: 0, value: contentCounts.first, label: '0 posts', color: 'lightgrey'},
                  { id: 1, value: contentCounts.second, label: '1 - 10 posts' },
                  { id: 2, value: contentCounts.third, label: '11 - 20 posts' },
                  { id: 3, value: contentCounts.fourth, label: '21 - 30 posts' },
                  { id: 4, value: contentCounts.fifth, label: '31 - 40 posts' },
                  { id: 5, value: contentCounts.sixth, label: '41 - 50 posts' },
                  { id: 6, value: contentCounts.seventh, label: '51+ posts' },
                ],
              },
            ]}
            width={600}
            height={250}
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold leading-6 text-gray-900">Drafts For Content</h3>
          <p className="text-sm leading-5 text-gray-500">Drafts are used to generate Content</p>
          <PieChart
            colors={ mangoFusionPalette }
            series={[
              {
                data: [
                  { id: 0, value: draftCounts.first, label: '0 drafts', color: 'lightgrey'},
                  { id: 1, value: draftCounts.second, label: '1 - 10 drafts' },
                  { id: 2, value: draftCounts.third, label: '11 - 20 drafts' },
                  { id: 3, value: draftCounts.fourth, label: '21 - 30 drafts' },
                  { id: 4, value: draftCounts.fifth, label: '31 - 40 drafts' },
                  { id: 5, value: draftCounts.sixth, label: '41 - 50 drafts' },
                  { id: 6, value: draftCounts.seventh, label: '51+ drafts' },
                ],
              },
            ]}
            width={600}
            height={250}
          />
        </div> 
      </div>
      <br/>
      <br/>
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((item, index) => (
          <li key={item.email} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{item.email}</p>
                <p className="text-sm leading-5 text-gray-500">Interview Answers: {item.interview?.filter((pair) => pair.answer !== undefined).length ?? 0}</p>
                <p className="text-sm leading-5 text-gray-500">Topics: {item.topics?.length ?? 0}</p>
                <p className="text-sm leading-5 text-gray-500">Drafts: {Object.values(item.drafts ?? {}).length ?? 0}</p>
                <p className="text-sm leading-5 text-gray-500">Content: {Object.values(item.content ?? {}).length ?? 0}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:items-end button-container space-x-4">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={ () => navigateToTopics(item.email, item.topics) }
                >Topic Ideas</button>
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={ () => navigateToInterview(item.email, item.interview) }
                >Onboarding Interview</button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">Drafts to Content</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
