<template>
    <div class="container">
        <h1 style="text-align: left">
            {{movie_subject.title}}
            <span>({{movie_subject.year}})</span>
        </h1>
        <div class="article">
            <div class="indent">
                <div class="subjectwrap">
                    <div class="subject">
                        <div id="mainpic">
                            <a class="nbgnbg">
                                <img :src="movie_subject.images.small" />
                            </a>
                        </div>
                        <div class="info">
                            <span class="worker">
                                导演:
                                <a href="#" v-for="(director, index) in movie_subject.directors">
                                    {{director.name}}
                                    <span v-if="index < movie_subject.directors.length - 1">/</span>
                                </a>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                编剧:
                                <a href="#" v-for="(writer, index) in movie_subject.writers">
                                    {{writer.name}}
                                    <span v-if="index < movie_subject.writers.length - 1">/</span>
                                </a>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                主演:
                                <a href="#" v-for="(cast, index) in movie_subject.casts">
                                    {{cast.name}}
                                    <span v-if="index < movie_subject.casts.length">/</span>
                                </a>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                类型:
                                <span v-for="(genre, index) in movie_subject.genres">
                                    {{genre}}
                                    <span v-if="index < movie_subject.genres.length - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                制片国家/地区:
                                <span v-for="(countrie, index) in movie_subject.countries">
                                    {{countrie}}
                                    <span v-if="index < movie_subject.countries.length - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                语言:
                                <span v-for="(language, index) in movie_subject.languages">
                                    {{language}}
                                    <span v-if="index < movie_subject.languages.count - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                上映日期:
                                <span v-for="(pubdate, index) in movie_subject.pubdates">
                                    {{pubdate}}
                                    <span v-if="index < movie_subject.pubdates.length - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                片长:
                                <span v-for="(duration, index) in movie_subject.durations">
                                    {{duration}}
                                    <span v-if="index < movie_subject.durations.length - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                又名:
                                <span v-for="(akaname, index) in movie_subject.aka">
                                    {{akaname}}
                                    <span v-if="index < movie_subject.aka.length - 1">/</span>
                                </span>
                            </span>
                            <!-- <br> -->
                            <span class="worker">
                                IMDb链接:
                                <span>tt10627720</span>
                            </span>
                        </div>
                    </div>
                    <div class="rate-info">
                        <p style="text-align:left">豆瓣评分</p>
                        <div class="rate">
                            <h1>{{movie_subject.rating.average}}</h1>
                            <div class="star">
                                <star class="stars" :rating="movie_subject.rating"></star>
                                <a>
                                    {{movie_subject.ratings_count}}
                                    <span class="ratecount">人评价</span>
                                </a>
                            </div>
                        </div>
                        <div class="rating-wrap">
                            <div class="rate-level">
                                <span class="rate-level-title">5星</span>
                                <div class="rate-level-view" id="fiveStarDiv"></div>
                                <span>{{fiveStarPercent}}%</span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">4星</span>
                                <div class="rate-level-view" v-bind:style="{width:fourStarPercent + 'px'}"></div>
                                <span >{{fourStarPercent}}%</span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">3星</span>
                                <div class="rate-level-view" v-bind:style="{width:threeStarPercent + 'px'}"></div>
                                <span >{{threeStarPercent}}% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">2星</span>
                                <div class="rate-level-view" v-bind:style="{width:twoStarPercent + 'px'}"></div>
                                <span >{{twoStarPercent}}% </span>
                            </div>
                            <div class="rate-level">
                                <span class="rate-level-title">1星</span>
                                <div class="rate-level-view" v-bind:style="{width:oneStarPercent + 'px'}"></div>
                                <span >{{oneStarPercent}}% </span>
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
                    <h2>{{movie_subject.title}}的剧情简介 · · · · · ·</h2>
                    <p>{{movie_subject.summary}}</p>
                </div>
                <div class="celebrities">
                    <h2 style="text-align:left">{{movie_subject.title}}的演职员 · · · · · ·</h2>
                    <ul class="celebrities-list">
                        <li class="celebrity" v-for="n in 5">
                            <celebritieyCell></celebritieyCell>
                        </li>
                    </ul>
                </div>
                <div class="comments-section">
                    <h2 style="text-align:left">{{movie_subject.title}}的短评 · · · · · · </h2>
                    <div class="tab-hd">
                        <a id="hot-comment-tab">热门</a>
                        <a id="new-comment-tab">最新</a>
                        <a id="follow-comment-tab">好友</a>
                    </div>
                    <div class="tab-bd">
                        <shortComment v-for="comment in comments" :comment="comment"></shortComment>
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
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'

export default {
    name: 'movieDetail',
    components: {
        star,
        celebritieyCell,
        shortComment,
    },

    props: {

    },

    data () {
        return {
            oneStarPercent: 0.0,
            twoStarPercent: 0.0,
            threeStarPercent: 0.0,
            fourStarPercent: 0.0,
            fiveStarPercent: 0.0,
        }
    },

    mounted () {
        console.log('mouted---');
        this.movieSubjectById(this.$route.params.movieId);
        this.movieCommentsById(this.$route.params.movieId);
    },

    computed: {
        ...mapState({
            movie_subject: state => state.movieDetail.movie_subject,
            comments: state => state.movieDetail.comments,
        }),

        fourStarPercent: function () {
            return 
        },
        threeStarPercent: function () {
            return (this.movie_subject.rating.details['3']/this.movie_subject.ratings_count).toFiexed(2)
        },
        twoStarPercent: function () {
            return (this.movie_subject.rating.details['2']/this.movie_subject.ratings_count).toFiexed(2)
        },
        oneStarPercent: function () {
            return (this.movie_subject.rating.details['1']/this.movie_subject.ratings_count).toFiexed(2)
        },
    },

    watch: {
        movie_subject: function (newMovie_Subject) {
            console.log('watch;--' + newMovie_Subject.ratings_count);
            var count = newMovie_Subject.rating.details['5'];
            count += newMovie_Subject.rating.details['4']
            count += newMovie_Subject.rating.details['3']
            count += newMovie_Subject.rating.details['2']
            count += newMovie_Subject.rating.details['1']

            this.fiveStarPercent = (100 * newMovie_Subject.rating.details['5']/count).toFixed(2);

            this.fourStarPercent = (100 * newMovie_Subject.rating.details['4']/count).toFixed(2);

            this.threeStarPercent = (100 * newMovie_Subject.rating.details['3']/count).toFixed(2);

            this.twoStarPercent = (100 * newMovie_Subject.rating.details['2']/count).toFixed(2);

            this.oneStarPercent = (100 * newMovie_Subject.rating.details['1']/count).toFixed(2);

            
            console.log('fivestardiv ==' + document.getElementById('fiveStarDiv'));
            document.getElementById('fiveStarDiv').style.width = this.fiveStarPercent + 'px';
        }
    },

    methods: {
        ...mapActions([
            'movieSubjectById',
            'movieCommentsById',
        ])
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.worker {
    font-size: 13px;
    line-height: 150%;
    text-align: left;
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
    text-align: left;
}

#interest_sect_level {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

#interest_sect_level a {
    padding: 7px 7px 0 7px;
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
    text-align: left;
}

.related-info p {
    word-break: break-all;
    font-size: 13px;
    text-align: left;
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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.tab-hd {
    margin-top: 10px;
}

.tab-bd{
    margin-top: 10px;
}

</style>