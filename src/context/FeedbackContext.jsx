import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

// create the context
const FeedbackContext = createContext();

// create a provider for the context to wrap the context

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ]);

  // delete an item
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      // filter is going to return an array minus the one we're deleting
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // add a new feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
