import React,{ useState,useEffect } from 'react';
import { Carousel as AntdCarousel } from 'antd';
import { CarouselList,CarouselWrapper,Desc } from './style.js'
import axios from 'axios'

function Carousel (){
    const [list,setList]=useState([]);
    useEffect(()=>{
        async function fetchData(){
          return await axios.get('/api/carouselList.json');
        }
      fetchData()
      .then(v=>{setList(v.data.data)})
      .catch(e=>console.log("error"))
    },[]);
    return (
        <CarouselWrapper>
          <AntdCarousel autoplay>
            {list.map((item,index)=>{return(
                <CarouselList key={index}>
                    <img src={item.pic} alt=""/>
                    <Desc>{item.desc}</Desc>
                </CarouselList>
            )})}
          </AntdCarousel>
        </CarouselWrapper>
        );
}

export default Carousel;
