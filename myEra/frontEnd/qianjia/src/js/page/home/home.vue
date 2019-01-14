<template>




    <div>




        <el-container>
            <el-header>
                <i class="el-icon-menu"></i>
                供应链前端系统集成平台
            </el-header>
        </el-container>


        <div style="margin: 20px">
            <el-tag size="medium">12345678</el-tag>
        </div>



        <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>





    </div>


</template>

<script>
  import './home.scss'

  export default {
    data() {
      var that = this;
      return {
        name: '主页12345',
        imageUrl: ''
      }
    },
    components: {},
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },

    mounted() {

      Utils.requestData({
        url: "h5/api/manage/merchant/buffet/statusQuery",
        method: 'post',
        data: {
          'applyType': 1,
          'deviceSn': 1,
          'deviceType': 1,
          'source': 1,
        },
        callback: function(data){
          debugger
          if(data.resultCode == 0){


            that.costProductList = data.data.costProductList
          }
        }
      });

      Utils.requestData({
        url: "h5/api/manage/merchant/buffet/reasonList",
        method: 'post',
        data: {
          'applyType': 1,
          'deviceSn': 1,
          'deviceType': 1,
          'source': 1,
        },
        callback: function(data){
          debugger
          if(data.resultCode == 0){


            that.costProductList = data.data.costProductList
          }
        }
      });

      Utils.requestData({
        url: "h5/api/manage/merchant/buffet/mixed",
        method: 'post',
        data: {
          'applyType': 1,
          'deviceSn': 1,
          'deviceType': 1,
          'source': 1,
        },
        callback: function(data){
          debugger
          if(data.resultCode == 0){


            that.costProductList = data.data.costProductList
          }
        }
      });




    }

  }
</script>
