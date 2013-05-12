
var sizeCoificient = 0.0004;
var roomPrices = new Array();
roomPrices[0] = 1600;
roomPrices[1] = 1200;
roomPrices[2] = 800;
roomPrices[3] = 700;

var roomPricesCalculated = new Array();
roomPricesCalculated[0] = 0.0  ;
roomPricesCalculated[1] = 0.0 ;
roomPricesCalculated[2] = 0.0 ;
roomPricesCalculated[3] = 0.0 ;
	 $(function() { 

		$("a.share").click(function(){
			$("#send-project").fadeIn("fast");
			// console.log("works");
			return false;
		});

		$("#send-project").find(".close").click(function()
		{
			$("#send-project").fadeOut();
		});

		 var $sandbox = $( "#sandbox" );
		   
		$( ".draggable").each(function() {
			setDrag($(this));
		});
				
		$("#kitchen").click(function(e) {
			alert(1);
			$angle = 0;
			if($(this).getRotateAngle() != 0) {
				$angle = $(this).getRotateAngle()[0];
			}
			$(this).rotate(90 + $angle);
		});
				
		var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";


		$( ".viewPane").draggable({cursor: "move", grid: [ 20,20 ] });
				
		$(".add-kitchen").click(function() {
			addRoom("Kitchen", "kitchen");			
		});
		
		$(".add-livingroom").click(function() {
			addRoom("Living room", "living-room");			
		});

		$(".add-bathroom").click(function() {
			addRoom("Bathroom", "bathroom");			
		});

		$(".add-bedroom").click(function() {
			addRoom("Bedroom", "bedroom");			
		});

		
		$(".trash" ).droppable({
      		hoverClass: "deleting",       
			tolerance: "touch", 
			drop: function( event, ui ) {			
      if(ui.draggable[0].id != "viewPane")			
      {	
				$(ui.draggable).remove();
        CalculateWholeSum();
      }
			}
		});

     $(".drag")
            .hammer({ drag_max_touches:0})
            .on("touch drag", function(ev) {
                var touches = ev.gesture.touches;

                ev.gesture.preventDefault();

                for(var t=0,len=touches.length; t<len; t++) {
                    var target = $(touches[t].target);
                    target.css({
                        zIndex: 1337,
                        left: touches[t].pageX-50,
                        top: touches[t].pageY-50
                    });
                }
            });

	});

	var SqSumma = 0.0;

    function resizedBlock(s, e)
    {
      SqSumma = 0.0;
      s.value;
      var sqPixels = e.size.height * e.size.width;
      var master = document.getElementById(e.element[0].id);

         var SqMeter =  master.getElementsByClassName('SqMeter');

        [].slice.call( SqMeter ).forEach(function ( div ) {
            div.innerHTML = (sqPixels * sizeCoificient).toFixed(2) + " m<sup>2</sup>";
        });

        CalculateSum();
    }



	function CalculateSum(){
    roomPricesCalculated[0] = 0.0 ;
    roomPricesCalculated[1] = 0.0 ;
    roomPricesCalculated[2] = 0.0 ;
    roomPricesCalculated[3] = 0.0 ;
    var SqSumma = 0.0;
      var SumFields = document.getElementsByClassName('SqMeter');
        [].slice.call( SumFields ).forEach(function ( div ) {
            SqSumma = SqSumma + parseFloat(div.innerHTML);
            getpriceForRoom(div);
        });
        document.getElementById('SqSum').innerHTML = "Total m<sup>2</sup>: " + SqSumma.toFixed(2);
        document.getElementById('TotalPrice').innerHTML = "Total price: " + getTotalPrice() + " Eur";
    };

    function getBoxSizes(){
          roomPricesCalculated[0] = 0.0 ;
          roomPricesCalculated[1] = 0.0 ;
          roomPricesCalculated[2] = 0.0 ;
          roomPricesCalculated[3] = 0.0 ;
      var SumFields = document.getElementsByClassName('draggable');
        [].slice.call( SumFields ).forEach(function ( div ) {
            div.children[0].children[0].children[0].children[1].innerHTML = 
            ((div.clientHeight * div.clientWidth)* sizeCoificient).toFixed(2)+ " m<sup>2</sup>";;
            getpriceForRoom(div);
        });
    }
	
    function getTotalPrice(){
      var TotalPrice =  roomPricesCalculated[0] +
                        roomPricesCalculated[1] +
                        roomPricesCalculated[2] +
                        roomPricesCalculated[3] ;

      return TotalPrice.toFixed(2);
    }


  function getpriceForRoom(div){
    if(div.parentElement.parentElement.parentElement.parentElement.id == "bathroom"){
      roomPricesCalculated[0]= roomPricesCalculated[0]+ (roomPrices[0]*parseFloat(div.innerHTML));
    }
    if(div.parentElement.parentElement.parentElement.parentElement.id == "kitchen"){
      roomPricesCalculated[1]= roomPricesCalculated[1]+ (roomPrices[1]*parseFloat(div.innerHTML));
    }
    if(div.parentElement.parentElement.parentElement.parentElement.id == "living-room"){
      roomPricesCalculated[2]= roomPricesCalculated[2]+ (roomPrices[2]*parseFloat(div.innerHTML));
    }
    if(div.parentElement.parentElement.parentElement.parentElement.id == "bedroom"){
      roomPricesCalculated[3]= roomPricesCalculated[3]+ (roomPrices[3]*parseFloat(div.innerHTML));
    }

  }
	
	function setDrag(d) {
		d.draggable({ cursor: "move", snap: true, containment: "#sandbox", 
			grid: [ 20,20 ] }).resizable({  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });
	}
		
	function addRoom(name, id) {
		var room = "<div id='"+ id +"' class='drag ui-widget-content draggable' style='position:relative; left:2510px; top:2510px; float:left;'> \
		<div class='info'> \
			<div class='table'> \
				<div class='table-cell'>\
					<p>"+ name +"</p> \
					<p class='SqMeter'>00</p> \
				</div> \
				</div>\
			</div>\
		</div>";
		
		$("#viewPane").append(room);
		
		$( ".draggable").each(function() {
			setDrag($(this));
			$(this).click(function(e) {
				$angle = 0;
				if($(this).getRotateAngle() != 0) {
					$angle = $(this).getRotateAngle()[0];
				}
				$(this).rotate(90 + $angle);
			});
		});

    CalculateWholeSum();

	}

	function CalculateWholeSum()
    {
      getBoxSizes();
      CalculateSum();
    }

