import styled from 'styled-components'
export const ListWrapper = styled.div`
    width:660px;
    margin:10px auto;
    overflow:hidden;
`
export const ListItem = styled.div`
    width:660px;
    //height:200px;
    border-bottom:1px solid #e5e5e5;
    margin-bottom:5px;
    padding:10px 0;
    background:pink;
    overflow:hidden;
    img{
        width:160px;
        height:100px;
        margin-right:5px;   
        display:block; 
        float:left;
    }
    h3{
        font-size:14px;
        color:#333;
    }
    .head{
        width:20px;
        height:20px;
        border-radius:50%;
        margin:5px 0;
    }
    span{
        margin-right:10px;
        margin-left:2px;
        color:#808080;
        font-size:12px;
        position:relative;
        top:5px;
    }
    .right{
        float:right;
    }
    .video{
        width:325px;
        height:185px;
        float:left;
        margin-right:20px;
        position:relative;
        img{
            width:100%;
            height:100%;
        }
        .play{
            position:absolute;
            height:0;
            width:0;
            border-width:25px 0 25px 40px;
            border-style:solid;
            border-color:transparent transparent transparent #fff;
            box-shadow: 0 0 1px 0px rgba(0,0,0,0.15);
            border-radius:4px;
            top:50%;
            left:50%;
            margin-left:-25px;
            margin-top:-25px;
            cursor:pointer;
            &:hover{
                border-color:transparent transparent transparent #fa7d3c;
            }
        }
        video{
            width:100%;
            height:100%;
            position:absolute;
            left:0;
            top:0;
            display:none;
        }
    }
    p{
        position:relative;
        line-height:1rem;
        height:4rem;
        overflow:hidden;
    }
    p::after {
      content:"...";
     font-weight:bold;
     position:absolute;
     bottom:0;
     right:0;
     padding-right:.6rem;
     background:#fff;
    }
    .bottom{
        text-align:right;
        margin-top:50px;
    }
`
export const Right = styled.div`
    width:495px
    float:left;
    padding:8px;
    padding-top:18px
    p{
        position:relative;
        line-height:1rem;
        height:2rem;
        overflow:hidden;
    }
    p::after {
      content:"...";
     font-weight:bold;
     position:absolute;
     bottom:0;
     right:0;
     padding-right:.6rem;
     background:#fff;
    }
`