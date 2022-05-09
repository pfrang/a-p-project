import React from 'react';

function List(props) {

  return (
    <tr>
      <td> {props.feat.name}</td>
      <td><a className='underline hover:text-blue-600' href={props.feat.url}>{props.feat.url}</a> </td>
    </tr>
  );
}

export default List;
