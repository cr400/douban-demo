<template>
    <div class="container">
        <a>
            <img class="avatar" src="https://img3.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2563780504.webp"></img>
        </a>
        <div class="info">
            <span class="name">name</span>
            <span class="role">职位</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'celebritieyCell',
    props: {
        
    },
}

</script>

<style scoped>
.container {
    display: inline-block;
    vertical-align: top;
    width: 95px;
    font-size: 13px;
    border: 1px solid red;
}

.avatar {
    margin: 0 auto;
    height: 133px;
    width: 95px;
}

.info {
    margin: 0 auto;
    text-align: center;
}

.name {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #9b9b9b;
}

.role {
    display: block;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #9b9b9b;
}

</style>