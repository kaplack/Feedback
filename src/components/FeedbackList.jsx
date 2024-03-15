import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner'


function FeedbackList() {

    const {feedback, isLoading} =useContext(FeedbackContext)

    if(!isLoading && !feedback || feedback.length === 0 ) {
        return <p>No Feedback yet</p>
    }

    return isLoading ? (
        <Spinner />
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((el)=>(
            <motion.div 
                key={el.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
            >
                <FeedbackItem key={el.id} item={el}  />
            </motion.div>
            ))}
           </AnimatePresence>
        </div>
      ) 
}



export default FeedbackList
