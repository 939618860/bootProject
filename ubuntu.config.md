>- sudo apt-get update  (更新ubuntu apt-get 源)
>- sudo apt-get install openssh-client  (安装客户端的ssh)
>- sudo apt-get install openssh-server  (安装服务器的ssh)
>- ps -e | grep ssh  (查看ssh是否启动)
>- sudo /etc/init.d/ssh start  (启动ssh)
>- sudo /etc/init.d/ssh stop  (停止ssh)
>- cd /etc/ssh/sshd_config  (设置ssh端口)
>- sudo apt-get install nodejs-legcacy  (安装nodejs)
>- sudo apt-get install npm  (安装npm)
>- sudo npm install -g n (全局安装n)
>- n ls (查看node版本)
>- sudo n stable (安装稳定版本的node)
>- sudo n latest (安装最新版本的node)
>- sudo n 7.10.0 (安装指定版本的node)
>- sudo npm install npm -g (更新npm)
>- sudo npm cache clean -f (清除npm的缓存)
>- sudo apt-get install git (安装git)
>- git --version (查看git版本)
>- git config --global user.name "keewer"  (配置git用户名)
>- git config --global user.email "kangliuyong@126.com"  (配置git用户邮箱)
>- ssh-keygen -t rsa -C "kangliuyong@126.com" (配置ssh key)
>- sudo apt-get install mysql-server (安装服务器mysql)
>- sudo apt-get install mysql-client (安装客户端mysql)
>- sudo apt-get install libmysqlclient-dev ( 安装mysql的C语言开发接口)
>- sudo netstat -tap | grep mysql (查看mysql是否安装成功)
>- sudo service mysql stop (停止mysql)
>- sudo service mysql start (启动mysql)
>- sudo service mysql restart (重启mysql)
>- sudo /etc/init.d/mysql stop (停止mysql)
>- sudo /etc/init.d/mysql start (启动mysql)
>- sudo /etc/init.d/mysql restart (重启mysql)
>- sudo apt-get install vim (安装vim编辑器)
>- ps -e (查看进程)
>- ps -aux (查看进程)
>- kill pid (杀死指定进程号的进程)
>- killall -9 pname (强制杀死指定名称的进程)
>- netstat -ntlp | grep 6379 (查看6379端口是否被占用)
>- redis-server /etc/redis/redis.conf (启动redis)
>- 进入redis-server的src, redis-server (启动redis)
>- redis-server & (以后台方式启动redis)
>- kill -9 9015 (通过9015进程号杀死9015进程, -9: 强制)
>- ps -ef | grep redis (查看redis服务是否启动)
>- sudo npm install -g pm2 (全局安装pm2)
>- sudo npm config set strict-ssl false (关闭npm严格认证)
>- sudo npm install -g cnpm --regsitry=https://registry.npm.taobao.org
>- cnmp install -g node-inspector
>- sudo dpkg-reconfigure tzdata (修改ubuntu系统时间)
>- git clone https://github.com/creationix/nvm.git ~/.nvm (下载nvm)
>- source ~/.nvm/nvm.sh (激活nvm)
>- nvm install node (安装最新版本node)
>- nvm install 0.12.1 (安装指定版本node)
>- nvm use node (使用最新版本node)
>- nvm use 0.12.1 (使用指定版本node)
>- nvm ls (查看本地安装所有版本node)
>- nvm ls-remote (查看服务器上所供安装版本node)
>- nvm deactivate (退出已经激活的nvm, 使用deactivate命令)
>- sudo apt-get install redis-server (安装redis-server)
>- redis-server (启动redis服务端)
>- redis-server & (以后台方式启动redis服务端)
>- redis-cli (启动redis客户端)


```txt
有时候安装过程中突然断网会造成以下报错
E: Could not get lock /var/lib/dpkg/lock - open (11: Resource temporarily unavailable)
E: Unable to lock the administration directory (/var/lib/dpkg/), is another process using it
解决方法如下
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock
```

```txt
使用n命令更新node报错
cp: cannot stat `/usr/local/n/versions/node/5.4.0/lib': No such file or directory
cp: cannot stat `/usr/local/n/versions/node/5.4.0/include': No such file or directory
cp: cannot stat `/usr/local/n/versions/node/5.4.0/share': No such file or directory
不仅如此使用node和npm服务时还会出现 Segmentation Fault
解决方法如下
sudo n - 5.4.0  (删除5.4.0版本的node)
sudo n rm 5.4.0 (删除5.4.0版本的node)
```

```txt
修改git的https为ssh
进入项目目录
cd ./.git
sudo vim config
git@github.com:[your_id]/[repo_name].git
```

```txt
开放mysql远程端口
mysql -u root -p
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'love you' WITH GRANT OPTION;
FLUSH PRIVILEGES;
vim /etc/mysql/mysql.conf.d/mysqld.cnf
注释 #bind-address            = 127.0.0.1
```

```txt
安装node调试
cnpm install -g node-inspector
启动node-inspector之前要执行以下命令
systemctl stop firewalld (关闭系统防火墙)
nodemon --debug app.js (添加--debug参数)
node-inspector (执行node-inspector)
在浏览器地址栏输入
geek:8080/debug?ws=geek:8080&port=5858
```

```txt
文件的第一行，如果加入了解释器的位置，就可以将其作为命令行工具直接调用
#!/usr/bin/env node
调用前，需更改文件的执行权限
chmod u+x foo.js
```