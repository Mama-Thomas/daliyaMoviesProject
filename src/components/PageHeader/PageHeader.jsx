import React from 'react';
import "./PageHeader.scss";


const PageHeader = props => {
  return (
    <div className='page-header'>
        <h2>{props.children}</h2>
    </div>
  )
}

export default PageHeader