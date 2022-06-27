import React from 'react'

const PageTitle = ({title, ...props}) => {
  return (
    <div>
        <h2 className="accordion_title_block">{title}</h2>
      </div>
  )
}

export default PageTitle