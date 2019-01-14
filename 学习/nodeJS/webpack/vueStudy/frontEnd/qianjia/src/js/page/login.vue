<template>
    <div id="login">
        this is login

        <button @click="toHome">toHome</button>
    </div>

</template>
<script>
    export default {


        methods: {
            toHome(){
                this.$router.push({
                    name: 'home'
                })
            }
        }

    }
</script>

<!--样式-->
<style lang="stylus" rel="stylesheet/stylus">
    #login
        width 100%
        height 100%
        position relative
        background red
</style>
