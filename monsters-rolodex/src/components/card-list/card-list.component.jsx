import React from 'react';

// import { Card } from '../Card/card.component';

import './card-list.styles.css';

export const CardList = props => {
   console.log(props);
   return <div className='card-list'>{props.children}</div>
}; 