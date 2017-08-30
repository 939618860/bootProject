<?php
			$id = $_POST['id'];

			//生成一个数据库连接
			$connect = new mysqli('127.0.0.1', 'root', '', 'boot');

			if(!$connect){
				echo '数据库连接失败';
			}

			//设置编码格式
			$connect->query('set names utf8');

			$sql = "select * from `yangmei` where `yid` = $id";

			//获取查询结果
			$result = $connect->query($sql);

			$datas = array();
			$i = 0;

			//循环获取记录
			while ($row = $result->fetch_assoc()) {
				$datas[$i] = $row;
				$i++;
			};

			echo json_encode($datas);

			//释放资源
			$result->close();

			//关闭连接
			$connect->close();

?>