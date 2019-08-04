<template>
    <div class="container">
        <div class="indent">
            <a href="#" class="name">{{comment.author.name}}</a>
            <span>看过</span>
            <star class="stars" :rating="comment.rating"></star>
            <span class="date">{{comment.created_at}}</span>
            <div class="like">
                <span>{{comment.useful_count}}<a>有用</a></span>
            </div>
        </div>
        <div class="content">{{comment.content}}</div>
    </div>

</template>

<script>

import star from './star'

export default {
    name: 'shortComment',
    components: {
        star,
    },
    props: {
        comment: {},
    },
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