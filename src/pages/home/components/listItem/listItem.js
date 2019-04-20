import React from 'react';
import { ListWrapper,ListItem as List,Right } from './style.js'

function ListItem (){
    return (
      <ListWrapper>
        <List>
            <img src="https://wx1.sinaimg.cn/thumb180/006hrwhRgy1g27p3m2o4ag309i0gje8a.gif" alt=""/>
            <Right>
                <p>
                   【燃气闪爆，青岛送奶工逆行上楼，救了全楼180户！】60岁的徐屹是青岛一位送奶工，他在嘉定路某小区送奶时，1号楼突然发生燃气闪爆，10多层楼玻璃被炸飞。徐屹用肩膀撞开变形的单元门，穿过一片狼藉，先跑到受损最严重的4楼，救出一对受伤的老夫妻。又连爬23层楼，挨家挨户敲门疏散居民，整栋楼空了他 ​​​​ 
                </p>
                <img src="https://tvax3.sinaimg.cn/crop.0.0.1125.1125.50/48e837eely8fukyqrf4ijj20v90v9mzy.jpg" alt="" className="head"/>
                <span>胡歌</span><span>4月19日 20:18</span>
                <div className="right">
                    <span>×1000</span>
                    <span>|</span>
                    <span>×2000</span>
                    <span>|</span>
                    <span>×3000</span>
                </div>
            </Right>
        </List>
        <List>
            <h3>我们生活在同一片蓝天下 同一个地球上 </h3>    
            <img src="https://wx1.sinaimg.cn/thumb180/006hrwhRgy1g27p3m2o4ag309i0gje8a.gif" alt=""/>
            <img src="https://wx1.sinaimg.cn/thumb180/006hrwhRgy1g27p3m2o4ag309i0gje8a.gif" alt=""/>
            <img src="https://wx1.sinaimg.cn/thumb180/006hrwhRgy1g27p3m2o4ag309i0gje8a.gif" alt=""/>
            <img src="https://wx1.sinaimg.cn/thumb180/006hrwhRgy1g27p3m2o4ag309i0gje8a.gif" alt=""/>
            <img src="https://tvax3.sinaimg.cn/crop.0.0.1125.1125.50/48e837eely8fukyqrf4ijj20v90v9mzy.jpg" alt="" className="head"/>
            <span>胡歌</span><span>4月19日 20:18</span>
            <div className="right">
                <span>×1000</span>
                <span>|</span>
                <span>×2000</span>
                <span>|</span>
                <span>×3000</span>
            </div>
        </List>
        <List>
            <div className="video">
                <img src="https://img5.miaopai.com/images/Dn09L6okvnqo1crnnUxiDdWAnSxHDCtel2qnFw___6U0U_4.jpg" alt=""/>
                <div className="play"/>
                <video controls="controls" src="https://gslb.miaopai.com/stream/Dn09L6okvnqo1crnnUxiDdWAnSxHDCtel2qnFw__.mp4"/>
            </div>
            <p>
                【90后妈妈#产后抑郁给整条街栏杆织毛衣#】毛晚是上海一名90后母亲，2015年生下第一个孩子后，剖宫产伤口疼、喂奶被咬破、缺觉…她患上产后抑郁，无意中把之前的手工钩织的爱好拾起来。她慢慢走出了抑郁。最近她还花半年时间，为整条街的栏杆织上了毛衣。
            </p>
            <img src="https://tvax3.sinaimg.cn/crop.0.0.1125.1125.50/48e837eely8fukyqrf4ijj20v90v9mzy.jpg" alt="" className="head"/>
            <span>胡歌</span><span>4月19日 20:18</span>
            <div className="bottom">
                <span>×1000</span>
                <span>|</span>
                <span>×2000</span>
                <span>|</span>
                <span>×3000</span>
            </div>
        </List>
      </ListWrapper>
    );
}

export default ListItem;
