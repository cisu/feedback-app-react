import React, {useState} from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = ({handleAdd}) => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisplay, setBtnDisplay] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisplay(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisplay(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisplay(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      handleAdd(newFeedback)

      setText('')
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rating your service with us?</h2>
        <RatingSelect select={rating => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' isDisabled={btnDisplay}>
            Send
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
