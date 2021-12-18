import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rating your service with us?</h2>
        {/*TODO - rating select component  */}
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            value={text}
            onChange={handleTextChange}
          />
          <Button type='submit' >Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
