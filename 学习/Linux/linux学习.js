
//Linux
    系统区分
        CentOS

        Ubuntu

        //查看Linux系统版本
        cat /etc/redhat-release


//路径
    //  ~/ 当前目录


//工具
    curl (http命令行工具)

        curl -L -o- http://build.sankuai.com/nvm/install


//判断
    if [  true ]; then
        echo "yes"
    else
        echo "no";
    fi


//变量
        //定义变量
            a='123'
        //访问变量
            echo $a



    //输出
        echo  111





    //1. 清屏
        Ctrl + l

        clear


    //创建


        //目录
            mkdir test

        //创建文件
            1.
                touch a.js
            2.
                vi a.js

                    //按 i   进入编辑模式
                    //按 Esc 进入一般模式(命令行模式)

        //软链接
            ln -s file1 lnk1i

            //建立npm 全局安装
            ln -s /app/software/nodejs/bin/npm /usr/bin/
            //建立node 全局安装
            ln -s /app/software/nodejs/bin/node /usr/bin/


    //删除
        //目录
            rm -rf test（目录名）

            //删除所有文件(当前目录下的)
            rm -rf *


    //重命名
        //文件
            //移动   原名      新名
            mv       a.js     b.js

        目录
            mv A B


    //查看

        //查看当前路径
            pwd

        //查看全局命令 路径
            which ruby

        //查看所有安装包 路径
            whereis ruby




        //查看目录列表

            ll

        //查看文件详情

            //1.命令行模式
                cat a.js

            //2.编辑模式
                1.  vi a.js
                2.  按i键进入编辑模式
                3.  esc键 退出编辑模式
                4.  退出
                    1.保存退出
                        输入:wq
                    2.不保存退出
                        输入:q!

        //查找文件
                    路径    文件名
            find     ./     a.js

			find  /（查找范围） -name 查找关键字 -print

        //查找目录
            find ./ -type d -name a


        //查找内容
            grep 'somewords' a.js


        //复制文件
        cp file1 file2





    //权限
        //给某个目录开通写入权限
                          /*目录名*/
        sudo chmod -R 777 webroot

        sudo chmod  777 /etc/squid


    //切换用户
        su

            sudo -iu sankuai

        切换root用户（紧急时可用，平时用一般用户）
        su root

        推出root用户
        exit



    //nginx

        //重启nginx
            sudo nginx -s reload


    安装nodeJS
        （一个环境）
        yum install -y nodejs

        yum install -y npm


        sudo  yum install -y subversion


    查看Linux系统位数
    uname -a




    压缩
            //（错误的）打包，不压缩
            tar czvf   a.tar   /*生成的压缩文件名字*/    a/ /*被压缩目录*/

            //（正确的）打包 ，压缩
            tar czvf   a.tar.gz/*生成的压缩文件名字*/    a/ /*被压缩目录*/

    解压
        1.
            xz -d **.tar.xz
            tar -xv -f **.tar

        2.
            tar -Jxv -f **.tar.xz(大写的J）


        3.//姚键的
            tar -zxf 201706211448.tar.gz -C test/

        4. 解压zip
                    /*被解压文件*/              /*解压至哪个目录*/
            unzip /home/rancheng/dist.zip -d /home/rancheng/dist222





//Linux 安装nodeJS
    1. 查看Linux系统位数, 从官网下载对应的linux版本(最新版本)
        uname -a
    2. 放入某个目录解压
        tar -Jxv -f **.tar.xz(大写的J）
    3. 重命名
        mv A B
    4. 建立软连接

        ln -s /home/qianduan/app/nodeJS/node/bin/node /usr/bin/node
        ln -s /home/qianduan/app/nodeJS/node/bin/npm /usr/bin/npm
    5. 验证安装结果
        node -v
        npm -v









    环境变量
        1.
        定义临时环境变量
            export APP_ENV=qianjia
        2.
        //:此文件为系统的每个用户设置环境信息,当用户第一次登录时,该文件被执行.
                /etc/profile

                具体内容 见同级目录etc/profile






    显示 8080 的进程
    lsof -i:8080

    杀掉进程
    kill -9 785 786


