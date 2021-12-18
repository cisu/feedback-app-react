import React, {useState} from 'react';
import Headers from './components/Headers';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      // filter is going to return an array minus the one we're deleting 
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <>
      <Headers />
      <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
