# 创建项目的步骤

1. 运行 `mkdir ghost` 命令,创建项目目录
1. 运行 `cd ghost` 命令，进入项目根目录
1. 运行 `git init` 命令,初始化本地git仓库
1. 运行 `npm init` 命令,初始化npm环境
1. 运行 `mkdir css`等命令,创建css、fonts、js、tasks等文件夹
1. 运行 `touch index.html`等命令 创建gulp脚本主文件和index.html文件
1. 运行 `npm install gulp -g` 添加gulp全局命令
1. 运行 `npm install gulp --save-dev` 命令,将gulp添加到项目中
1. 运行 `npm install load-gulp-tasks --save-dev` 命令,将拆分gulp任务的插件添加到项目中
1. 运行 `npm install bootstrap --save` 命令,加载Bootstrap
1. 将 `node_modules/bootstrap/dist` 文件夹下的fonts、js拷贝到相应的文件夹下
1. 运行 `npm install gulp-less --save-dev` 命令,添加gulp环境下的less编译器,将less文件合并为css文件