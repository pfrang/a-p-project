import React from 'react';
import Api from '../api/api';
import { useBikeData } from '../context/context';


function List(props) {

  const { bikeData, setBikeData } = useBikeData()



  const handleClick =  async(e) => {
    const res = await Api(e.target.name)
    console.log(res)
    setBikeData(res.data)
  }

  return (
    <tr>
      <td> {props.feat.name}</td>
      <td>
        <a className='underline  hover:text-blue-600' href={props.feat.url}>{props.feat.url}</a>
        {/* <input onClick={handleClick}name={props.feat.url} className='cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="button" value={`Fetch ${props.feat.name} data`} /> */}
        </td>
    </tr>
  );
}

export default List;
