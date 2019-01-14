# linux 执行shell
#    sh a.sh     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



#!/bin/bash
echo '执行nodejs脚本编译静态资源';
BUILD_DIR=/apps/branch_test/rancheng/src_zhongchouwang/front-end/build;
cd $BUILD_DIR;
node build.js dev all;
cd $BUILD_DIR;
echo 'nodejs scripts finished';