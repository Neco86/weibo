import React,{ useState } from 'react';
import { Link } from 'react-router-dom'
import { HeaderWrapper,Logo,Left,Right,NavList,Login,ListItem,SearchWrapper } from './style'
import SearchList from './components/search.js'

function Header (){
    const [inputValue,setInputValue]=useState("");
    const [inputPlaceHolder,setInputPlaceHolder]=useState("");
    const [show,setShow]=useState(false);
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>
        <Left>
          <SearchWrapper>
            <input type="text" 
            className="search" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder={inputPlaceHolder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
            <i className="iconfont">&#xe8ef;</i>
          </SearchWrapper>
          <SearchList show={show} topSearch={topSearch}/>
        </Left>
        <Right>
          <NavList>
            <ListItem><i className="iconfont">&#xe7c6;</i> 首页</ListItem>
            <ListItem><i className="iconfont">&#xe696;</i> 视频</ListItem>
            <ListItem><i className="iconfont">&#xe77d;</i> 发现</ListItem>
            <ListItem><i className="iconfont">&#xe630;</i> 游戏</ListItem>
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
      setInputPlaceHolder(inputPlaceHolder.slice(7));
      setShow(true)
    }
    function handleBlur(){
      setInputValue("")
      setInputPlaceHolder("大家正在搜: "+inputPlaceHolder)
      setShow(false)
    }
    function topSearch(data){
      setInputPlaceHolder("大家正在搜: "+data)
    }
}

export default Header;
