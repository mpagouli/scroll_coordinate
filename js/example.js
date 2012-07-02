$(document).ready(function(){
	

$(".green_container").position({
    my: "left bottom",
    at: "left top",
    of: $(".yellow_container")
});
$(".red_container").position({
    my: "right top",
    at: "left top",
    of: $(".yellow_container")
});


$(".yellow_container").scroll_coordinate("lead", [{
    element: $(".red_container"),
    axis: "y"
}, {
    element: $(".green_container"),
    axis: "x"
}]);

/*$(".yellow_container").scroll_coordinate( "lead", [{
    element: $(".red_container"), 
    axis: "y" 
    }
]);*/

/*$(".green_container").scroll_coordinate( "lead", [{
    element: $(".yellow_container"), 
    axis: "x" 
    }
]); */

//$(".yellow_container").scroll_coordinate( ); 
/*
var followers = $(".yellow_container").scroll_coordinate( "followersInfo" ); 
for(var i=0; i<followers.length; i++)
    alert(followers[i].element.attr('class')+" to axis: "+followers[i].axis);
*/

/*
var followers2 = $(".yellow_container").scroll_coordinate( "followers" ); 
for(var i=0; i<followers2.length; i++)
    alert(followers2[i].attr('class'));
*/

//var isLead = $(".green_container").scroll_coordinate( "isLeader" ); alert(isLead);
//var isFol = $(".yellow_container").scroll_coordinate( "isFollower" ); alert(isFol);
/*
var leaders = $(".green_container").scroll_coordinate( "leadersInfo" ); 
for(var i=0; i<leaders.length; i++)
    alert(leaders[i].element.attr('class')+" to axis: "+leaders[i].axis);
*/

/*
var leaders2 = $(".green_container").scroll_coordinate( "leaders"); 
for(var i=0; i<leaders2.length; i++)
   alert(leaders2[i].attr('class'));
*/
});