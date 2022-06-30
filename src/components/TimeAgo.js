import React from 'react'
import { parseISO,formatDistanceToNow } from 'date-fns'
const TimeAgo = ({timestamp}) => {
  let timeAgo=''
  if(timestamp){
    const date=parseISO(timestamp)
    const timpePeriod=formatDistanceToNow(date)
    timeAgo=`${timpePeriod} ago`	
  }
    return (
    <span title={timestamp}>
        &nbsp;<i>{timeAgo}</i>
    </span>
  )
}

export default TimeAgo