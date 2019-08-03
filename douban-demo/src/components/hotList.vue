<template>
    <div>
        <ul class="list">
            <li class="item" v-for="item in items" @click="toDetail()">
                <movieCell :item="item"></movieCell>
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
        items: [],
    },
    data () {
        return {
            
        }
    },

    mounted () {
        console.log('mouted---');
        console.log(this.$router)  
    },

    created () {
        console.log('created---');
        console.log(this.$router)
    },

    methods: {
        toDetail: function () {
            this.$router.push({path:'/movieDetail'})
            console.log('toDetail')
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
