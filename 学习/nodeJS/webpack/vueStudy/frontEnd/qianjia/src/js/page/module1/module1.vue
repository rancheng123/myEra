<template>

    <div
        v-bind:title="name"
        v-on:click="fn($event)"
        v-bind:isLove="isLove"
        v-bind:class="{active:isActive}"
        aaa="name"
    >

        <Caisujia

        >
            <template slot="1">
                <h1 style="background: greenyellow">greenyellow</h1>
            </template>

            <div slot-scope="isLoveRancheng">
                {{isLoveRancheng}}11111111111111

            </div>


            <template slot="2">
                <h1 style="background: blue">blue</h1>
            </template>

        </Caisujia>





    </div>


    <!---->


</template>

<script>

    import Caisujia from './caisujia.vue';
    import Baiweiwei from './baiweiwei.vue';


    import Vue from 'vue';
    Vue.component('async-example', function (resolve, reject) {
        setTimeout(function () {
            debugger
            // 向 `resolve` 回调传递组件定义
            resolve({
                template: '<div>I am async!</div>'
            })
        }, 1000)
    })





    export default {
        //组件命名
        name: 'module1',
        //函数返回数据
        data(){
            return {
                lovingVue: false,
                current:Caisujia,
                postFontSize: 1,
                name: 'Hello',
                msg: 'caisujia',
                checkedNames: [],
                html: '<div style="color:red">this is div</div>',
                list: ['rancheng','caisujia'],
                obj: {
                    a: 'rancheng111',
                    b: 'caisujia111'
                },
                isLove: null,
                isActive:false
            }
        },
        computed: {
          computedData1: function () {
              return this.name.split('').reverse().join('')

          }
        },
        components: {
            Caisujia,
            Baiweiwei
        },
        methods:{
            checkboxClickFn(){

                debugger
            },
          fn(event){

              console.log(111)
          },
          reversedMessage: function () {
              return this.name.split('').reverse().join('')
          }
        },
        created(){
            console.log('created')
        },
        mounted(){

            // 存储 start
            componentStore.set(this);
            // 存储 end

            //this.name = 'caisujia'
        }

    }
</script>
