/*
注意点：
  1. nginx  是  多个机器           的负载均衡

  2. pm2    是  单个机器的多个进程  的负载均衡

*/


const process = require('process');

module.exports = {
    apps: [
      {
        //应用的名称
        name: "test",
        //启动的脚本
        script: "./index.js",
        // 当前工作路径
        cwd: process.cwd(),

        //启动几个进程（负载均衡）
        instances: 4,
        exec_mode: "cluster",

        //内存使用超过上限自动重启
        max_memory_restart: "1024M",
        env: {
          "NODE_ENV": "prod"
        },
        // 错误日志路径
        error_file: "/Users/rancheng/work/code/学习/nodeJS/pm2/logs/pm2-log/err.log",
        // 普通日志路径
        out_file: "/Users/rancheng/work/code/学习/nodeJS/pm2/logs/pm2-log/out.log",
        merge_logs: true,
        log_date_format: "YYYY-MM-DD HH:mm Z",

        // 监控变化的目录，一旦变化，自动重启
        watch: [
          "bin",
          "routers"
        ],
        // 从监控目录中排除
        ignore_watch : [
          "node_modules",
          "logs",
          "public"
        ],
        watch_options: {
          "followSymlinks": false
        },

      }
    ]
  }
