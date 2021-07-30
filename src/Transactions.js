// import React from 'react';
import { useSelector } from 'react-redux';

// exclude column list from filter
const excludeColumns = ["Ranking", "Rating", "Number of Reviews"];

export const TableRecordsComponent = (props) => {
  /* Get the props values */
  let searchValue = props.searchValue; 
  let ratingValue = props.ratingValue;
  /* Get the values from the state */
  const dataList = useSelector((state) => state.dataEntries);
  /* Filter the data based on the props values */
  const filteredData = dataList.filter(item => {
    return Object.keys(item).some( (key) =>{
      if( ratingValue === 0 ){
        return excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchValue.toLowerCase());
      } else return excludeColumns.includes(key) ? false : ( item[key].toString().toLowerCase().includes(searchValue.toLowerCase()) && ( ratingValue !== 0 && Number(item.Rating) === Number(ratingValue)) );      
    });
  });
  /* Return the response */
  let recordsList = (
    filteredData.map((record, index) => {
        return (
          <tr key={index}>
            <td>{record.Name}</td>
            <td>{record.City}</td>
            <td>{[...record["Cuisine Style"]].join(",")}</td>
            <td>{record.Ranking}</td>
            <td>{record.Rating}</td>
            <td>{record["Number of Reviews"]}</td>
          </tr>
        );
    })
  );

  return recordsList;
}

