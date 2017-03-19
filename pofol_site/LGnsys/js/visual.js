
$(function(){
    var n=1
    $('.btn li').each(function(index){
		$(this).attr('class','btn'+(index+1))
	})//각각에 클래스 삽입
    setInterval(function(){
        n++
        //이미지 전환
        if(n==4){
            $('.slider_imgWrap').css({left:0})
            $('.txt_wrap').css({left:0})
            n=1
        }
        
        $('.slider_imgWrap').animate({left:-960*n})
        $('.txt_wrap').animate({left:-316*n})
        //이미지 이동
        
        $('.btn li img').attr('src',"img/slid-icon.png")
        $('.btn li:last img').attr('src',"img/slidPlay-icon.png")
        $('.btn .btn'+n+' img').attr('src',"img/slidOn-icon.png")
        
        
    },3000)
 
    
    
})