import PropTypes from "prop-types"
import {useState} from 'react'

function FeedbackItem({ item }) {
    const [rating, setRating] = useState(7)
    const [text, setText] = useState('this is an example of a feedback item')

    const handleClick = () => { 
        setRating((prev) => {
            return prev +1
        })
     }
    return (
      <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display"> {text} </div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    );
  }


export default FeedbackItem
