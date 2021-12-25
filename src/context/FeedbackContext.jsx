import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

// create the context
const FeedbackContext = createContext();

// create a provider for the context to wrap the context

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This item is from context item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This item is from context item 3',
      rating: 7,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // add a new feedback
  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // delete a feedback
  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      // filter is going to return an array minus the one we're deleting
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  // set Item to be updated
  const editFeedback = item => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
