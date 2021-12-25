import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';
import {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({item}) => {
  const {rating, text} = item;

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
