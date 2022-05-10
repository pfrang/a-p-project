import React from 'react';
import List from './list';

function Table(props) {
  console.log(props)
  return (
    <table>
      <tbody>
        {props.data.map((item, idx) => {
          return (
            <List key={idx} feat={item} />
          )
        })}
      </tbody>
    </table>
  );
}

export default Table;
