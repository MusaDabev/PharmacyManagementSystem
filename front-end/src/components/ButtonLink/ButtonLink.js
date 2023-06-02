import React from 'react';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
  return (
    <Link to={props.to}>
      <button className={props.btnClassName}>{props.children}</button>
    </Link>
  );
}

export default ButtonLink;