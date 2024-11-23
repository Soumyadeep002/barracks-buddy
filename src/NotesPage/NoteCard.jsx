import React from 'react'

export default function NoteCard(props) {
  return (
    <div>
      <img className='w-[18rem] drop-shadow-md' src={props.img} alt="Note Card" />
    </div>
  )
}
