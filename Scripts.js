

 $(function() {     

      var $droppable5 = $( "#droppable5" );


            
      var $sandbox = $( "#sandbox" );
       
          // let the gallery items be draggable
          $( ".draggable").draggable({ cursor: "move", snap: true, containment: "parent", 
        grid: [ 20,20 ] }).resizable({ aspectRatio: true,  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });
			
			$("#kitchen").click(function(e) {
				alert(1);
				$angle = 0;
				if($(this).getRotateAngle() != 0) {
					$angle = $(this).getRotateAngle()[0];
				}
				$(this).rotate(90 + $angle);
			});

        $( "#draggable4" ).draggable({cursor: "move"});
        var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    
     
      $( "#draggable6" ).draggable({ cursor: "move", snap: true, containment: "parent", 
        grid: [ 20,20 ] });

		 $( ".infiniteSandbox").draggable({cursor: "move"});
				
		$(".add-kitchen").click(function() {
			addRoom("draggable", "Kitchen", "kitchen");			
		});
		
		$(".add-livingroom").click(function() {
			addRoom("draggable2", "Living room", "living-room");			
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
            div.innerHTML = (sqPixels * 0.0001).toFixed(2) + " m<sup>2</sup>";
        });

        CalculateSum();
    }



  function CalculateSum(){
      var SumFields = document.getElementsByClassName('SqMeter');
        [].slice.call( SumFields ).forEach(function ( div ) {
            SqSumma = SqSumma + parseFloat(div.innerHTML);
        });
        document.getElementById('SqSum').innerHTML = "Total m<sup>2</sup>: " + SqSumma.toFixed(2);
        document.getElementById('TotalPrice').innerHTML = "Total price:" + (SqSumma * 1000).toFixed(2) + "Eur";
    };

    function getBoxSizes(){
      var SumFields = document.getElementsByClassName('draggable');
        [].slice.call( SumFields ).forEach(function ( div ) {
            div.children[0].children[1].innerHTML = 
            ((div.clientHeight * div.clientWidth)* 0.0001).toFixed(2)+ " m<sup>2</sup>";;
        });
    }
	
	
	function setDrag(d) {
			d.draggable({ 
				cursor: "move", snap: true, containment: "parent", 
				grid: [ 20,20 ] }).resizable({ aspectRatio: true,  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });
		}
		
	function addRoom(dragable, name, id) {
		var room = "<div id='"+ dragable +"' class='drag ui-widget-content'> <div class='info'> <p>"+ name +"</p> <p class='SqMeter' id='"+ id +"'>00</p> <div></div> </div> </div>";
				
		$("#sandbox").append(room);				
		$( ".drag", $( "#sandbox" ) ).draggable({ cursor: "move", snap: true, containment: "parent", 
        grid: [ 20,20 ] }).resizable({ aspectRatio: true,  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });		
		
	}

	function CalculateWholeSum()
    {
      getBoxSizes();
      CalculateSum();
    }
