import style from './FeedbackOptions.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback,}) => {
  return (
    <div className={style.list}>{
        options.map(option=>{
            return (
                <button
                type="button"
                className={style.button}
                key={option}
                onClick={()=> onLeaveFeedback(option)}
                > {option}
                </button>
            )
        })    
    }</div>
  )
}
