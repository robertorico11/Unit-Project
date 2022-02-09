let gallery = [];

$(".gallery").click(function() {
for (let picture = 0; picture < 5; picture  ++) {
    console.log(gallery);
}
    
});

let userInput;

$(".addButton").click(function() {
    userInput = $(".picture-url").val();
	gallery.push(userInput);
	$(".pictureList").append("<li>"+userInput+"</li>");
    $(".numberOfPictures").text(gallery.length);

});
 