<template>
    <div class="TitleBar" @click="clickFn">
        <div class="flex-father titleWrap">
            <slot name='titleBarSlot'></slot>
        </div>
    </div>
</template>

<script>
    import './titleBar.scss'
    export default {
        //组件命名
        name: 'titleBar',

        //组件的 data 必须是一个函数
        data: function () {
            return {}
        },

        //启用哪个属性
        props: ['title'],
        methods: {
            clickFn(){
                console.log(111)
            }
        },
        mounted () {

           /* //属性
            this.$props.title

            //??????????????????????
            this.$attrs.a*/
        }
    };
</script>
