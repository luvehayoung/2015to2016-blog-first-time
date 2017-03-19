<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>메일테스트</title>
<style type="text/css">
body {margin:0;padding:0;text-align:center;color:#333;font-size:12px;line-height:40px; background:url("img/bgaram02.png");}
</style>
</head>
<body>
<h2>성공적으로 메일이 전달 되었습니다.</h2>
<h4>메일을 보내 주셔서 감사합니다.</h4>
<?php
   $name=$_POST['name'];
   $email=$_POST['email'];
   $title=$_POST['title'];
   $message=$_POST['message']; 

   $to='luvehayoung@naver.com';
   $subject='포트폴리오 관련 메일이 왔습니다.';
   $msg="제목:$title\n".
        "보낸사람메일주소:$email\n".
        "이름:$name\n".        
        "내용:$message\n";
   
   mail($to,$subject,$msg,'보낸사람메일주소:'.$email);  
 
   echo '제목:'.$title.'<br />';
   echo '메일:'.$email.'<br />';
   echo '이름:'.$name.'<br />';   
   echo '내용:'.$message.'<br />';
   echo '메일이 성공적으로 전송되었습니다<br />';
   
?>
<h2><a href="#" onclick="javascript:history.back(-1);">back</a></h2>
</body>
</html>