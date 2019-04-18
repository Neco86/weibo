import React,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom'
import { HeaderWrapper,Logo,Left,Right,NavList,Login,ListItem } from './style'

function Header (){
    const [inputValue,setInputValue]=useState("");
    const [inputPlaceHolder,setInputPlaceHolder]=useState("");
    useEffect(()=>{
      const search="搜索"
      setInputPlaceHolder("大家正在搜: "+search)
    },[])
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Left>
          <input type="text" 
          className="search" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder={inputPlaceHolder}
          onFocus={handleFocus}
          onBlur={handleBlur}
          />
        </Left>
        <Right>
          <NavList>
            <ListItem>首页</ListItem>
            <ListItem>视频</ListItem>
            <ListItem>发现</ListItem>
            <ListItem>游戏</ListItem>
          </NavList>
          <Login>
            <Link to='/signup'  className='signup'>
              注册
            </Link>
            <span>|</span>
            <div className='login'>
              登录
            </div>
          </Login>
        </Right>
      </HeaderWrapper>
    );
    function handleInputChange(e){
      setInputValue(e.target.value)
    }
    function handleFocus(){
      setInputPlaceHolder(inputPlaceHolder.slice(7))
    }
    function handleBlur(){
      setInputValue("")
      setInputPlaceHolder("大家正在搜: "+inputPlaceHolder)
    }

}

export default Header;
