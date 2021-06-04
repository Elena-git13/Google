chrome.browserAction.onClicked.addListener(function (){
	
		chrome.notifications.create("deMsg", {


	type : 'basic',
	iconUrl : "icons/128x80.png",
	title : "Do Exercises",
	message : "Срочно отдохни и сделай зарядку!"

}, function () {

	setTimeout (function () {
		chrome.notifications.clear ("deMsg");
	}, 20000);
});

});


