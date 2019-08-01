<template>
    <div class="container">
        <h1>
            title
            <span>(2019)</span>
        </h1>
        <div class="article">
            <img class="poster" />
            <div class="info">
                <span class="worker">
                    导演:
                    <a href="#">饺子</a>
                </span>
                <span class="worker">
                    编剧:
                    <a href="#">饺子</a>
                </span>
                <span class="worker">
                    主演:
                    <a href="#">饺子</a>
                </span>
            </div>
            <div class="rate-info">
                <p>豆瓣评分</p>
                <div class="rate">
                    <h1>8.6</h1>
                    <div class="star">
                        <div>
                            <span class="staricon" v-for="n in 5"></span>
                        </div>
                        <span>417320人评价</span>
                    </div>
                </div>
                <div class="rate-level">
                    <span>5星</span>
                    <div class="rate-level-view"></div>
                    <span >48.3% </span>
                </div>
                <div class="rate-level">
                    <span>4星</span>
                    <div class="rate-level-view"></div>
                    <span >48.3% </span>
                </div>
                <div class="rate-level">
                    <span>3星</span>
                    <div class="rate-level-view"></div>
                    <span >48.3% </span>
                </div>
                <div class="rate-level">
                    <span>2星</span>
                    <div class="rate-level-view"></div>
                    <span >48.3% </span>
                </div>
                <div class="rate-level">
                    <span>1星</span>
                    <div class="rate-level-view"></div>
                    <span >48.3% </span>
                </div>
                <div class="rate-betterthan">
                    <p>好于 89% 动画片</p>
                    <p>好于 97% 喜剧片</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'rate-star',
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

.poster{
    width: 115px;
    height: 160px;
}

.worker {
    display: block;
}

.rate-info {
    border-left: 1px solid #cccccc;
}

.rate {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.star {
    
}

.staricon {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAyhJREFUSA29l89rE0EUx99siqZgm0YFC00KVXuwUSMUpGitBaFgi0VEhIqHWkHw4B+gCIognrz1ZrwKVVSqtYIn9SDVHkQFQSOEmkYqaNOkQjRt8vxuyK6TzUx+LLQDm3nzfsxn982b2Q2Ry8bP/JOJROLT3Nyc380UhpsgnvLvJhLDzLzDMIwzbuZwBSZDnLNgQvyXLV0tfd1gvkcbiNh+SoDDSHd3LTDZp24wbfINkxBb5Uk8Ho+dAVlfSa4fLAwV5HQ8Hm+sBHLa6gLzdGOAmAackyDdPlwnnfpK47rAxBtHkWZdjCoTWrZukrIAxv4B9GyZoajAE/ch3Tt1dqe+ZjBNtfQDvN05gTQGW4xJ44qi4Kf+ETxLEF4+9D7KF3trzNRSsBE1O9Oc2PMhCxi2l91WIf3EwZKGPo0+VeytsalLw+d7Aw6Du3aYKThzIEqs1QYNcGgFrNV0RF/wl3tLBoZfF6zr+7Ng0ELyCDFPrBcXqX4P1n4DdfqHBpMjgN9YazigT1KpVG9bW1u8sKJYCRaDyStE+VHcQHYtbgDQW5FI5HgoFPptzl9WOjzdchjqR6iMqu9ZRVWX3TOAK7guBIPBO7LRWcMkBpdeEq/2IAlfZUc3MoCLuAacUHOuMrCpFEPLXygDONOMOXbZvgHaA+gLVbwSbDqKE8u/8NTvVEG16ABNAxrV+WrBhQBBfbrAanocFKH5+fktOj8tmB82mUFdusAa9CKfzx/S+WnB5PUgqHjm6aKr6PEhqM2YHsz6oCo824x0Y2uqmx5sVFlfJrNwnquntbXhaDTabI8kQQnmSWrCCbZP8pNEXkG136Qfi3sDgcAxVO8pGBckB1n0eL3eXllhyUowNWw+iOX1WE52z/QG7+tucTR5uXDGwwD4/Ww2uwvibVz4UCltunVWgw0uLQqmZWTgIr1dPCCGkh9Lpybq6OhYwsF/PpfL9SMDn2U7xsp1VoOZpG3Aj4kyXXiJjItreN4Krb29/VUmkwljG10H0HrZdMdiMa8zzPxiULUZJG0bce6SGEo9UDnodJ2dnX9hu4p/FxP40B+HzLOzs6iL0vYPbfQF9yQ167cAAAAASUVORK5CYII=);
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    background-repeat: no-repeat;
    display: inline-block;
}

.rate-level {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.rate-level-view {
    background: #ffd596;
    width: 64px;
    height: 10px;
    margin: 1px 4px;
}

.rate-betterthan {
    border-top: 1px solid #cccccc;
}
</style>