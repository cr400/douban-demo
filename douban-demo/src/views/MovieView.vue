<template>
    <div class="container">
        <hotList v-bind:items="hotMovies"></hotList>
    </div>
</template>

<script>
import hotList from '../components/hotList'
import {mapGetters, mapMutations, mapState, mapActions} from 'vuex'

export default {
    name: 'MovieView',
    components: {
        hotList,
    },
    data () {
        let subjectItem = {
            rating: {
                "max": 10,
                "average": 8.7,
                "details": {
                    "1": 187.0,
                    "3": 5364.0,
                    "2": 663.0,
                    "5": 22290.0,
                    "4": 17376.0
                },
                "stars": "45",
                "min": 0
            },
            genres: ["剧情", "喜剧", "动画"],
            title: "哪吒之魔童降世",
            casts: [{

                    "avatars": {

                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1564150860.79.webp",

                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1564150860.79.webp",

                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1564150860.79.webp"

                    },

                    "name_en": "Yanting Lü",

                    "name": "吕艳婷",

                    "alt": "https:\/\/movie.douban.com\/celebrity\/1419996\/",

                    "id": "1419996"

                }, {

                    "avatars": {

                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563583632.39.webp",

                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563583632.39.webp",

                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563583632.39.webp"

                    },

                    "name_en": "Joseph",

                    "name": "囧森瑟夫",

                    "alt": "https:\/\/movie.douban.com\/celebrity\/1400125\/",

                    "id": "1400125"

                }, {

                    "avatars": {

                        "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563156886.49.webp",

                        "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563156886.49.webp",

                        "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1563156886.49.webp"

                    },

                    "name_en": "Mo Han",

                    "name": "瀚墨",

                    "alt": "https:\/\/movie.douban.com\/celebrity\/1400124\/",

                    "id": "1400124"

                }],

            durations: ["110分钟"],

            collect_count: 414101,

            mainland_pubdate: "2019-07-26",

            has_video: false,

            original_title: "哪吒之魔童降世",

            subtype: "movie",

            directors: [{

                "avatars": {

                    "small": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1547719747.9.webp",

                    "large": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1547719747.9.webp",

                    "medium": "https://img1.doubanio.com\/view\/celebrity\/s_ratio_celebrity\/public\/p1547719747.9.webp"

                },

                "name_en": "Yu Yang",

                "name": "饺子",

                "alt": "https:\/\/movie.douban.com\/celebrity\/1328441\/",

                "id": "1328441"

            }],

            pubdates: ["2019-07-13(大规模点映)", "2019-07-26(中国大陆)"],

            year: "2019",

            images: {

                "small": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563780504.webp",

                "large": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563780504.webp",

                "medium": "https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563780504.webp"

            },

            alt: "https:\/\/movie.douban.com\/subject\/26794435\/",

            id: "26794435"

        };

        let subjectItems = [subjectItem, subjectItem, subjectItem, subjectItem, subjectItem, subjectItem];
        return {
            item: subjectItems,
        };
    },

    created() {
        this.in_theaters()
    },

    computed: {
        ...mapState({
            hotMovies: state => state.movie.hotMovies,
        })
    },

    methods: {
        ...mapActions([
            'in_theaters',
        ]),
    },

}

</script>

<style scoped>
.container {

}

</style>