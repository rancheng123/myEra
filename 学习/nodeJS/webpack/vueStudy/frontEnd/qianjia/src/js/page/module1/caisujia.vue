<template>
    <div class="caisujia">
        <slot name="1"></slot>
        <slot>
            <div style="background: gold">
                Submit
            </div>
        </slot>
        <slot name="2"></slot>
    </div>
</template>

<script>

    import {} from './caisujia.scss'

    export default {
        //组件命名
        name: 'caisujia',
        props:['url'],
        //函数返回数据
        data(){
            return {
                name: 'caisujia',
                isLoveRancheng: 'do not know'
            }
        },


        mounted () {
            this.$props
        }

    }
</script>
