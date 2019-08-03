<template>
    <div class="container">
        <div class="indent">
            <a href="#" class="name">name</a>
            <span>看过</span>
            <star class="stars"></star>
            <span class="date">2018-07-18</span>
            <div class="like">
                <span>17966<a>有用</a></span>
            </div>
        </div>
        <div class="content">看到海报和预告片，人们第一反应就是：哪吒太丑了。 觉得丑就对了，因为本片讲的就是打破偏见。 正如很多人一看这是国漫，就不看了；或者去看了，看了觉得还不错也要自动先扣20分。 电影之中，骂哪吒是政治正确，只要你说哪吒是妖怪，就会有人跟着说； 电影之外，骂国产片、国漫也成了政治正确，只要你骂它，就会有人给你点赞。 其实哪吒不是妖怪，他也想降妖除魔洗清骂名； 国漫也不都是烂片，也有人想拍一部佳作证明自己... </div>
    </div>

</template>

<script>

import star from './star'

export default {
    name: 'shortComment',
    components: {
        star,
    }
}

</script>

<style scoped>

.container {
    margin: 10px 0;
}

.indent {
    margin: 10px 0;
}

.name {
    margin-right: 4px;
}

.stars{
    display: inline-block;
    margin: 0 4px;
}

.like {
    display: inline-block;
    float: right;
}

.content {
    font-size: 13px;
    line-height: 1.5;
}
</style>