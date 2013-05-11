

	 $(function() {     

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


		$( ".infiniteSandbox").draggable({cursor: "move"});
				
		$(".add-kitchen").click(function() {
			addRoom("Kitchen", "kitchen");			
		});
		
		$(".add-livingroom").click(function() {
			addRoom("Living room", "living-room");			
		});
		
		
		$( ".trash" ).droppable({
			tolerance: "touch", 
			drop: function( event, ui ) {							
				$(ui.draggable).remove();
			},
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
            div.innerHTML = (sqPixels * 0.0004).toFixed(2) + " m<sup>2</sup>";
        });

        CalculateSum();
    }



	function CalculateSum(){
    var SqSumma = 0.0;
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
            div.children[0].children[0].children[0].children[1].innerHTML = 
            ((div.clientHeight * div.clientWidth)* 0.0004).toFixed(2)+ " m<sup>2</sup>";;
        });
    }
	
	
	function setDrag(d) {
		d.draggable({ cursor: "move", snap: true, containment: "parent", 
			grid: [ 20,20 ] }).resizable({ aspectRatio: true,  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });
	}
		
	function addRoom(name, id) {
		var room = "<div id='"+ id +"' class='drag ui-widget-content draggable'> \
		<div class='info'> \
			<div class='table'> \
				<div class='table-cell'>\
					<p>"+ name +"</p> \
					<p class='SqMeter'>00</p> \
				</div> \
				</div>\
			</div>\
		</div>";
		
		$("#sandbox").append(room);
		
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
	
