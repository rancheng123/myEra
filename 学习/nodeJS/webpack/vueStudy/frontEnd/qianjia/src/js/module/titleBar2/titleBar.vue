<template>
    <div class="TitleBar">
        <div class="flex-father titleWrap">
            this is TitleBar
        </div>
    </div>
</template>

<script>
    import './titleBar.scss'
    export default {
        //组件命名
        name: 'titleBar',
        data: {
          a:1
        },
        props: {
            children: '<div>this is children</div>'
        },
        methods: {

        },
        mounted () {

        }
    };
</script>
