<template>
    <div class="container">
        <h1>
            title
            <span>(2019)</span>
        </h1>
        <div class="article">
            <div class="indent">
                <div class="subjectwrap">
                    <div class="subject">
                        <div id="mainpic">
                            <a class="nbgnbg">
                                <img src="https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563780504.webp" />
                            </a>
                        </div>
                        <div class="info">
                            <span class="worker">
                                导演:
                                <a href="#">饺子</a>
                            </span>
                            <br>
                            <span class="worker">
                                编剧:
                                <a href="#">饺子</a>
                            </span>
                            <br>
                            <span class="worker">
                                主演:
                                <a href="#">饺子</a>
                            </span>
                            <br>
                            <span class="worker">
                                类型:
                                <span>剧情 / 喜剧 / 动画 / 奇幻</span>
                            </span>
                            <br>
                            <span class="worker">
                                制片国家/地区:
                                <span>中国大陆</span>
                            </span>
                            <br>
                            <span class="worker">
                                语言:
                                <span>汉语普通话</span>
                            </span>
                            <br>
                            <span class="worker">
                                上映日期:
                                <span>2019-07-26(中国大陆) / 2019-07-13(大规模点映)</span>
                            </span>
                            <br>
                            <span class="worker">
                                片长:
                                <span>110分钟</span>
                            </span>
                            <br>
                            <span class="worker">
                                又名:
                                <span>哪吒降世 / Ne Zha</span>
                            </span>
                            <br>
                            <span class="worker">
                                IMDb链接:
                                <span>tt10627720</span>
                            </span>
                        </div>
                    </div>
                    <div class="rate-info">
                        <p>豆瓣评分</p>
                        <div class="rate">
                            <h1>8.6</h1>
                            <div class="star">
                                <star class="stars"></star>
                                <a>
                                    417320
                                    <span class="ratecount">人评价</span>
                                </a>
                            </div>
                        </div>
                        <div class="rating-wrap">
                            <div class="rate-level">
                                <span class="rate-level-title">5星</span>
                                <div class="rate-level-view"></div>
                                <span >48.3% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">4星</span>
                                <div class="rate-level-view"></div>
                                <span >48.3% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">3星</span>
                                <div class="rate-level-view"></div>
                                <span >48.3% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">2星</span>
                                <div class="rate-level-view"></div>
                                <span >48.3% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">1星</span>
                                <div class="rate-level-view"></div>
                                <span >48.3% </span>
                            </div>
                        </div>
                        <div class="rate-betterthan">
                            好于
                            <a href="#"> 89% 动画片</a>
                            <br>
                            好于
                            <a href="#"> 97% 喜剧片</a>
                        </div>
                    </div>
                </div>
                <div id="interest_sect_level">
                    <a><span>想看</span></a>
                    <a><span>看过</span></a>
                    <div class="a_stars">
                        评价
                        <star class="sect_stars"></star>
                    </div>
                </div>
                <br>
                <div class="related-info">
                    <h2>哪吒之魔童降世的剧情简介 · · · · · ·</h2>
                    <span>　　天地灵气孕育出一颗能量巨大的混元珠，元始天尊将混元珠提炼成灵珠和魔丸，灵珠投胎为人，助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。然而阴差阳错，灵珠和魔丸竟然被掉包。本应是灵珠英雄的哪吒却成了混世大魔王。调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。然而面对众人对魔丸的误解和即将来临的天雷的降临，哪吒是否命中注定会立地成魔？他将何去何从？</span>
                </div>
                <div class="celebrities">
                    <h2>哪吒之魔童降世的剧情简介 · · · · · ·</h2>
                    <ul class="celebrities-list">
                        <li class="celebrity" v-for="n in 5">
                            <celebritieyCell></celebritieyCell>
                        </li>
                    </ul>
                </div>
                <div class="comments-section">
                    <h2>哪吒之魔童降世的短评 · · · · · · </h2>
                    <div class="tab-hd">
                        <a id="hot-comment-tab">热门</a>
                        <a id="new-comment-tab">最新</a>
                        <a id="follow-comment-tab">好友</a>
                    </div>
                    <div class="tab-bd">
                        <shortComment v-for="n in 10"></shortComment>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import star from '../components/star'
import celebritieyCell from '../components/celebritieyCell'
import shortComment from '../components/shortComment'

export default {
    name: 'movieDetail',
    components: {
        star,
        celebritieyCell,
        shortComment,
    },

    props: {
        rate: {}
    },

    data () {
        return {


        }
    },

}
</script>

<style scoped>
.container {

}

.article {
    display: flex;
    flex-direction: row;
}

.indent {
    margin-bottom: 30px;
}

.subjectwrap{
    display: flex;
    flex-direction: row;
}

.subject {
    width: 500px;
    display: flex;
    flex-direction: row;
}

#mainpic {
    margin: 3px 12px 0 0;
    max-width: 155px;
    overflow: hidden;
}

#mainpic img {
    margin-bottom: 10px;
    max-width: 135px;
}

.info {
    max-width: 333px;
    /* display: block; */
}

.worker {
    font-size: 13px;
    line-height: 150%;
}

.rate-info {
    border-left: 1px solid #cccccc;
    padding-left: 15px;
}

.rate {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.star {
    margin-left: 0.8rem;
}

.stars {
    margin: auto;
}

.ratecount {
    margin:  auto;
}

.rate-level {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.rate-level-title {
    width: 24px;
}

.rate-level-view {
    background: #ffd596;
    width: 64px;
    height: 10px;
    margin: 1px 4px;
}

.rating-wrap {
    padding-bottom: 15px;
}

.rate-betterthan {
    border-top: 1px solid #eaeaea;
    color: #9b9b9b;
    padding: 15px 0px;
}

#interest_sect_level {

}

#interest_sect_level a {
    padding: 0 7px;
    height: 24px;
    letter-spacing: 3px;
    margin: 0 10px 0 0;
    border: 1px solid lightgray;
}

.a_stars {
    display: inline-block;
}

.sect_stars{
    display: inline-block;
}

a:visited{
    color: #666699;
    text-decoration: none;
}

.related-info h2 {
    margin-bottom: 12px;
}

.related-info span {
    word-break: break-all;
    font-size: 13px;
}

.celebrities {
    margin-top: 10px;
}

.celebrities-list{
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}

.celebrity {
    margin-right: 20px;
}

.comments-section {
    margin-top: 20px;
}

.tab-hd {

    margin-top: 10px;

}

.tab-bd{
    margin-top: 10px;
}

</style>