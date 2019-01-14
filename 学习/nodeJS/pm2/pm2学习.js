PM2
  node进程管理工具

  作用
    性能监控、自动重启、负载均衡等



常用命令



  重启
      pm2 start ./index.js
      pm2 restart app.js

  停止（但不杀死）
      pm2 stop app_name|app_id
      pm2 stop all

  杀死进程
      pm2 kill

  查看进程状态
      pm2 list

      查看某个进程状态
          pm2 show 0
          pm2 describe 0


  日志查看 （排查线上问题）
      pm2 logs


  监控
      pm2 monit


  设置
      pm2 set pm2-logrotate:max_size 1K



参数
  --watch

  --instances   启用多少个实例，可用于负载均衡



//  https://blog.csdn.net/maquealone/article/details/79550120
