<template>
    <div class="container">
        <img class="image" :src="item.images['small']" />
        <span class="title">{{item.title}}</span>
        <RatingVue class="rate" v-bind:rating="item.rating"></RatingVue>
    </div>
</template>

<script>
import RatingVue from './Rating.vue';

export default {
    name: 'movieCell',
    components: {RatingVue},
    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    data () {
        return {

        }

    },

}
</script>

<style scoped>
.container {
    border: 1px solid red;
    width: 11.5rem;
    height: 21rem;
    display: flex;
    flex-direction: column;
}

.image {
    width: 100%;
    height: 200px;
}

.title {
    margin-top: 0.24rem;
    font-size: 1.5rem;
    text-align: center;
}

.rate {
    margin-top: 0.24rem;
    margin: auto;
}

</style>