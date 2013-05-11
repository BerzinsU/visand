 $(function() {     
		$(".trash").droppable({
			tolerance: "touch", 
			drop: function( event, ui ) {
				alert(1);
				$(ui.draggable).remove();
			},
		});

      var $droppable5 = $( "#droppable5" );


            
      var $sandbox = $( "#sandbox" );
       
          // let the gallery items be draggable
          $( ".drag", $sandbox ).draggable({ cursor: "move", snap: true, containment: "parent", 
        grid: [ 20,20 ] }).resizable({ aspectRatio: true,  grid: 20, resize: function( event, ui ){resizedBlock(event, ui)} });

        $( "#draggable4" ).draggable({cursor: "move"});
        var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
    
     
      $( "#draggable6" ).draggable({ cursor: "move", snap: true, containment: "parent", 
        grid: [ 20,20 ] });
		

    });


    function resizedBlock(s, e)
    {
      var SqSumma = 0.0;
      s.value;
      var sqPixels = e.size.height * e.size.width;
      var master = document.getElementById(e.element[0].id);

         var SqMeter =  master.getElementsByClassName('SqMeter');

        [].slice.call( SqMeter ).forEach(function ( div ) {
            div.innerHTML = (sqPixels * 0.0001).toFixed(2) + " m<sup>2</sup>";
        });

        var SumFields = document.getElementsByClassName('SqMeter');
        [].slice.call( SumFields ).forEach(function ( div ) {
            SqSumma = SqSumma + parseFloat(div.innerHTML);
        });
        document.getElementById('SqSum').innerHTML = "Total m<sup>2</sup>: " + SqSumma.toFixed(2);
        document.getElementById('TotalPrice').innerHTML = "Total price:" + (SqSumma * 1000).toFixed(2) + "Eur";
    }