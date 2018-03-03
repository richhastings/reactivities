import React, { Fragment } from 'react'

const Checklist = ({items, count, revealNextItem}) => {
  return (
    <Fragment>
      <ul>
        {items.slice(0, count).map(item => <li>{item}</li>)}
      </ul>
      <button onClick={revealNextItem} />
    </Fragment>
  )
}

export default Checklist