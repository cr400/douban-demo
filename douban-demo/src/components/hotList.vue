<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item in items">
                <router-link :to="{name:'movieDetail', params:{movieId:item.id}}">
                    <movieCell :item="item"></movieCell>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import movieCell from './movieCell'
export default {
    name: 'hotList',
    components: {
        movieCell
    },
    props: {
        items: {},
    },
    data () {
        return {
            
        }
    },

    methods: {
        toDetail: function () {
            console.log('toDetail' + this.$route.path)
            // this.$router.push({path:'/movieDetail?movieId=123'})
            this.$router.push({name:'movieDetail', params: {movieId: 123}})
            console.log('toDetail' + this.$route.path)
        }
    }
}
</script>

<style scoped>
.list {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

.h-list {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: auto;
}

.item {
    border: 1px solid red;
    margin: 4px;
}
</style>
