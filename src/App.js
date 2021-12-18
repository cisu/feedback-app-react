import React, {useState} from 'react';
import { v4 as uuidv4} from 'uuid';
import Headers from './components/Headers';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

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
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
