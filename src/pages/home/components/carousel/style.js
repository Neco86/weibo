import styled from 'styled-components'
export const CarouselWrapper = styled.div`
    overflow:hidden;
    width:660px;
    height:300px;
    background:#aaa;
    margin:0 auto;
    position:relative;
    .ant-carousel .slick-dots{
        position:absolute;
        text-align:right;
        margin-bottom:8px;
        right:8px
        button{
            width:8px;
            height:8px;
            border-radius:50%;
        }
        .slick-active button{
            width:8px;
            height:8px;
            border-radius:50%;
            background:#fa7d3c;
        }
    }
`
export const CarouselList = styled.div`
    width:660px;
    height:300px;
    img{
        width:100%;
        height:100%;
    }
    position:relative;
`
export const Desc = styled.div`
    position:absolute;
    left:0;
    bottom:0;
    margin:8px;
    font-size:20px;
    color:#fff;
`