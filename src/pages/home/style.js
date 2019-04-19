import styled from 'styled-components'
export const Content = styled.div`
    margin:65px 5%;
    height:5000px;
    background:green;
    display:flex
`
export const ContentLeft = styled.div`
    width:150px;
    float:left;
    position:fixed;
    ul>li{
        font-size:18px;
        padding:0 8px;
        width:110px;
        height:40px;
        line-height:40px; 
        text-align:center;  
        margin-left:10px;
        margin-top:3px;
        border-radius:3px;
        cursor:pointer;
        &:hover{
            background:linear-gradient(128deg, #fa2f2f 0%, #ff5b36 90%);
            color:#fff;
        }
        &.actived{
            background:linear-gradient(128deg, #fa2f2f 0%, #ff5b36 90%);
            color:#fff;
        }
    }
`
export const ContentM = styled.div`
    margin-left:150px;
    width:100%;
    float:left;
    background:yellow;
`
export const ContentRight = styled.div`
    width:370px
    float:right;
    background:red;
`