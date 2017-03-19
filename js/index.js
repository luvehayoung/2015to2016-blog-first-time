$(function(){


		//Keep track of last scroll
  		/*스크롤 해서 열리는거*/
   //    	var lastScroll = 0;
   //    	$(window).scroll(function(event){
			// //Sets the current scroll position
			// var st = $(this).scrollTop();
			// //Determines up-or-down scrolling
			// if (st > lastScroll){
				//Replace this with your function call for downward-scrolling
				//alert("DOWN");
				$("#main").on("mousewheel",function(e){

					if(e.originalEvent.wheelDelta < 0) {
						$( "#contents_wrap" ).css('display','none');
						$("#leftdoor").animate({left:'-50%'},'300');
			            $("#rightdoor").animate({right:'-50%'},'300').queue(function(){
			            		$('html,body').animate({scrollTop:'0'}, 300);
			            		$("#main").attr('style','display:none');
			            		$("body").css({overflow:"scroll"})
			            		clearInterval(handle);
			            })
		        	}
	            })
                $("#scroll").on("click",function(){
                    $( "#contents_wrap" ).css('display','none');
					$("#leftdoor").animate({left:'-50%'},'200');
			        $("#rightdoor").animate({right:'-50%'},'200').queue(function(){
			           		$('html,body').animate({scrollTop:'0'}, 300);
			           		$("#main").attr('style','display:none');
			           		$("body").css({overflow:"scroll"})
			           		clearInterval(handle);
			        })
		        	
                })
	 //        }
  //    		//Updates scroll position
  //    		//window.scrollTo(0,0);
  //     		lastScroll = st;
		// })
		/*스크롤 해서 열리는것 구현끝 */

		/*
		.intro_m {background:url("img/IMHAYOUNG.gif"); background-position:-60px 0px;}
		.intro_m:hover {background-position:-60px -60px;}
		*/
		var handle=setInterval(function(){
			text_animation();
			
		},1000)


		function randomInt(xmin,xmax) { return Math.floor( Math.random() * (xmax + 1 - xmin) + xmin ); }

		
		
		
		function text_animation() {
			var i = randomInt(0,9);
			var j = randomInt(0,9);
			if (i==j){
				j=i*2%10;
			}
			$(".intro_wrap ul li:nth-child("+i+")").animate({'background-position-y': '-60px'},'500');
			$(".intro_wrap ul li:nth-child("+j+")").animate({'background-position-y': '0px'},'500');
		}
		

		/*슬라이더*/
/*
		$('.slide').each(function(){
			var $this =$(this);
			var $group = $this.find('.slide_group');
			var $slides = $this.find('.slide');
			var buttonArray = [];
			var currentIndex = 0;
			var timeout;
		
		
		function move(newIndex){
			var animateLeft, slideLeft;
			advance();

			if($group.is(':animated')||currentIndex===newIndex){
				return;
			}

			buttonArray[currentIndex].removeClass('active');
			buttonArray[newIndex].addClass('active');

			if(newIndex>currentIndex){
				slideLeft='100%';
				animatLeft='-100%';
			}else{
				slideLeft='-100%';
				animateLeft='100%';
			}

			$slides.eq(newIndex).css({left:slideLeft,display:'block'});

			$group.animate({left:animateLeft},function(){
				$slides.eq(currentIndex).css({display:'none'});
				$slides.eq(newIndex).css({left:0});
				$group.css({left:0});
				currentIndex=newIndex;
			});
		}



		function advance(){
			clearTimeout(timeout);
			timeout=setTimeout(function(){
				if(currentIndex<($slides.length-1)){
					move(currentIndex+1);
				}else{
					move(0);
				}
			},4000);
		}

		$.each(function(index){
			var $button = $('<button type="button" class="slide_btn"></button>');
			if(index===currentIndex){
				$button.addClass('active');
			}
			$button.on('click',function(){
				move(index);
			}).appendTo('.slide_buttons');
			buttonArray.push($button);
		});

		advance();

		});


*/		



});