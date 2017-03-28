import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notFoundPage'>
      <div className='notFoundPage-img'/>
      <Link to='/'>
        <Button className='notFoundPage-link'>Вернуться на главную</Button>
      </Link>
    </div>
  );
}

export default NotFound;
