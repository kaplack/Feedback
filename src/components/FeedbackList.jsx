import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import PropTypes from 'prop-types'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'


function FeedbackList({ handleDelete}) {
    // console.log(feedback)
    // console.log(FeedbackItem)

    const {feedback} =useContext(FeedbackContext)

    if(!feedback || feedback.length === 0 ) {
        return <p>No Feedback yet</p>
    
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((el)=>(
            <motion.div 
                key={el.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <FeedbackItem key={el.id} item={el} handleDelete={handleDelete} />
            </motion.div>
            ))}
           </AnimatePresence>
        </div>
      ) 

//   return (
//     <div className="feedback-list">
        
//         {feedback.map((el)=><FeedbackItem key={el.id} item={el} handleDelete={handleDelete} />)}
       
//     </div>
//   ) 
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         text:PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired,
//     })
//     ),
// }

export default FeedbackList
