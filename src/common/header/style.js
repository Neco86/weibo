import styled from 'styled-components'
import logoPic from '../../statics/WB_logo.png'

export const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    box-sizing:border-box;
    width: 100%;
    height: 48px;
    border-top: 2px solid #fa7d3c;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.15);
    display:flex;
`
export const Logo = styled.div`
    float:left;
    margin-left: 50px;
    width: 140px;
    height: 48px;
    cursor: pointer;
    background: url(${logoPic}) no-repeat 0 40%;
`
export const Left = styled.div`
    float:left;
    width:80%;
    height:46px;
    .search{
        margin-top:8px;
        height:28px;
        padding:0 6px;
        width:90%;
        max-width:470px;
        outline:none;
        border-radius:1px;
        background:#f2f2f5;
        border:1px solid #ccc;
        color:#ccc;
        font-size:12px;
        &:focus{
            border:1px solid #fa7d3c;
            background:#fff;
            color:#000;
        }
    }
    .iconfont{
        color:#696e78;
        font-size:20px;
        position:absolute;
        top:14px;
        right:10%;
        cursor:pointer;
        &:hover{
            color:#fa7d3c;
        }
    }

`
export const Right = styled.div`
    float:right;
    width:780px;
    height:100%;
    margin-right:50px;
    line-height:46px;
    font-size:14px;
`
export const NavList = styled.div`
    width:70%;
    height:46px;
    float:left;
    position:relative;
    top:-3px;
`
export const Login = styled.div`
    width:30%;
    height:46px;
    float:left;
    .signup{
        float:left;
        width:48%;
        text-align:center;
        color:#000;
        text-decoration:none;
        &:hover{
            color:#fa7d3c;
        }
    }
    .login{
        float:left;
        width:48%;
        text-align:center;
        cursor:pointer;
        &:hover{
            color:#fa7d3c;
        }
    }
    span{
        float:left;
        color:#f2f2f5;
    }
`
export const ListItem = styled.div`
    float:left;
    width:25%;
    height:46px;
    text-align:center;
    cursor:pointer;
    &:hover{
        color:#fa7d3c;
    }
    .iconfont{
        color:#696e78;
        font-size:22px;
        position:relative;
        top:3px;
    }
`
export const SearchListWrapper = styled.div`
    height:374px;
    padding:2px 6px;
    width:90%;
    max-width:470px;
    border-radius:1px;
    border:1px solid #ccc;
    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.2);
    background:#fff;
    ul>li{
        height:32px;
        border:1px solid #fff;
        margin:0 -4px;
        line-height:34px;
        cursor:pointer;
        padding:0 10px;
        font-size:12px;
        &:hover{
            background:#f2f2f5;
            color:#fa7d3c;
        }
        &:nth-child(1){
            color:#fa7d3c;
        }
        &:nth-child(2)>span{
            background:#df3e3e;
        }
        &:nth-child(3)>span{
            background:#fa7d3c;
        }
        span{  
            background:#696e78;
            color:#fff;
            padding:0 5px;
            width:12px;
            border-radius:50px;
            margin-right:5px;
        }
    }
    display:none;
    &.show{
        display:block;
    }
`
export const SearchWrapper = styled.div`
    width:80%;
    position:relative;
`