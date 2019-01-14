
//回滚

    git log

    git reset --hard 92904e3d54d3ef42cf4a222259a7effe0db6deae

    git status

    git push --force



//注意点
  如果报 You have insufficient permissions to update 'refs/heads/master'， 说明 主干不让直接修改，需要建分支




//恢复未commit  丢失的commit
    1.git log -g
    2.git reset --hard <commitId>





//git 初始化 (进入某个目录,git init ,此目录被git控制)
    git init

    //             主机名       网址
    git remote add rancheng   https://github.com/rancheng123/rancheng.git


//git 添加

    //添加文件
    git add   abc.js
    //添加目录
    git add    aaa/

//git commit
    git commit -m 'message'

//git 提交远程master
    git push -u origin master












// git 网址

    //                  用户名       主机名
    https://github.com/rancheng123/rancheng.git




//分支

    //查看本地分支
    git branch

    //查看远程分支
    git branch -r

    //切换分支
    git checkout 分支名

    //获取新分支
    git fetch




//git  远程操作

    //查看

        //查看所有   主机
        git remote
        //查看所有   主机的网址
        git remote -v

    //添加

        //             主机名       网址
        git remote add rancheng   https://github.com/rancheng123/rancheng.git


    //删除
        git remote rm <主机名>


//文件操作

    //添加
        git add <文件名或目录名>

    //删除
        git rm <文件名或目录名>

        //强制删除
        git rm -f <文件名或目录名>


    //撤销commit
        //撤销commit (不保留修改)
        git reset --hard 695e7adfe1c5ebf11ecaf48ecedb4a779ee3d246

        //撤销commit (保留修改)
        git reset --soft 695e7adfe1c5ebf11ecaf48ecedb4a779ee3d246




//git clone

    git clone https://github.com/rancheng123/myNodeJS.git


//tag(创建标记)

        代码改变之前做一次标记
    //作用
        做标记，预备好 代码出问题 ，回滚

    //例子

            //  老系统        奖励众筹 第一版
        release_old_20161124_reward_v1




