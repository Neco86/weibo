import React,{ useState,useEffect } from 'react';
import { SearchListWrapper } from '../style.js'
import axios from 'axios'
function SearchList (props){
  const [hotList,setHotList]=useState([])
  useEffect(()=>{
      async function fetchData(){
          return await axios.get('/api/hotSearch.json');
        }
      fetchData()
      .then(v=>{setHotList(v.data.data);props.topSearch(v.data.data[Math.floor(Math.random()*10)])})
      .catch(e=>console.log("error"))
    },[])
    return (
      <SearchListWrapper className={props.show?"show":""}>
        <ul>
          <li>查看完整热搜榜>></li>
          {hotList.map((item,index)=>{return(
              <li key={index}><span>{index+1}</span>{item}</li>
            )})}
        </ul> 
      </SearchListWrapper>
    );
}

export default SearchList;
