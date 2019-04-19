import React from 'react';
import Header from '../../common/header'
import { Content,ContentLeft,ContentM,ContentRight } from './style.js'

function Home (){
    return (
      <div>
        <Header/>
        <Content>
            <ContentLeft>
                <ul>
                    <li className="actived">热门</li>
                    <li>头条</li>
                    <li>视频</li>
                    <li>新鲜事</li>
                    <li>榜单</li>
                    <li>搞笑</li>
                    <li>社会</li>
                    <li>时尚</li>
                    <li>电影</li>
                    <li>美女</li>
                    <li>体育</li>
                    <li>动漫</li>
                </ul>
            </ContentLeft>
            <ContentM>
                
            </ContentM>
            <ContentRight>
                
            </ContentRight>
        </Content>
      </div>
    );
}

export default Home;
