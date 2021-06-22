<?php
	require_once('common.php');
	checkUser();
$name = @$_SESSION['userName'] ? $_SESSION['userName'] : null;
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "DTD/xhtml1-transitional.dtd">
<html>
<head>


<meta name='viewport' content='width=950, user-scalable=no, maximum-scale=1.0' />
   <title>главная</title>
   <link href="style/style.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="main">
<img src="/img/logo.png" style="width:900px; height:400px">
      <center><div class="nik"><?php echo $_SESSION['userName']; ?><br/></div></center>
      <div id="result">
		<center><div style="font-size:50px">:НАШИ САЙТЫ:</div></center>
<ul>
<li><a href="https://foxgitfox.github.io">FOXgit.github.io</a></li><br>
<li><a href="http://www.foxgit.byethost15.com">FOXgit.byehost</a></li><br>
<li><a href="http://foxgit.qlihost.ru">FOXgit.qlihost</a></li>
		</ul> 






	  </div>
      <div class="caption">       <div class="caption"><?php include 'files/bar.php'; ?>
</div>
    </div>
<script type="text/javascript">    
  if (window.parent.frames.length > 0) {
    window.stop();
  }
</script>
</body>   
