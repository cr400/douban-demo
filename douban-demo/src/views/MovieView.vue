<template>
    <div class="container">
        <movieDetail></movieDetail>
    </div>
</template>

<script>
import movieDetail from '../views/movieDetail'

export default {
    name: 'movieView',
    components: {
        movieDetail
    }
}
</script>

<style scoped>
.container {
    
}
</style>
