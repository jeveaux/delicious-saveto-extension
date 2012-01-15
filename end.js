
function showSaveToOptions(jsonBasicData) {
	var currentTabUrl = jsonBasicData["currentTabUrl"];
	var currentTabTitle = jsonBasicData["currentTabTitle"];
	var theBody = document.body;
	var previousDiv = document.getElementById("saveToDiv");
	
	var jsonButtonsMetaData = {
		"saveToButtons": [
			{"name": "delicious", "id": "saveToDeliciousButton", "title": "Save to Delicious", "onclickBehaviour": "true",
				"onclickUrl": "http://delicious.com/save?v=5&noui&jump=close&url="+currentTabUrl+"&title="+currentTabTitle},
			{"name": "twitter", "id": "saveToTwitterButton", "title": "Save to Twitter", "onclickBehaviour": "true",
				"onclickUrl": "http://twitter.com/home?status=" + currentTabTitle + " - " + currentTabUrl},
			{"name": "google", "id": "saveToGoogleButton", "title": "Save to Google Bookmarks", "onclickBehaviour": "true",
				"onclickUrl": "http://www.google.com/bookmarks/mark?op=add&bkmk=" + currentTabUrl + "&title=" + currentTabTitle},
			{"name": "technorati", "id": "saveToTechnoratiButton", "title": "Save to Technorati", "onclickBehaviour": "true",
				"onclickUrl": "http://technorati.com/faves?add=" + currentTabUrl},
			{"name": "digg", "id": "saveToDiggButton", "title": "Save to Digg", "onclickBehaviour": "true",
				"onclickUrl": "http://digg.com/submit?phase=2&url=" + currentTabUrl + "&title=" + currentTabTitle},
			{"name": "reddit", "id": "saveToRedditButton", "title": "Save to Reddit", "onclickBehaviour": "true",
				"onclickUrl": "http://reddit.com/submit?url=" + currentTabUrl + "&title=" + currentTabTitle},
			{"name": "facebook", "id": "saveToFacebookButton", "title": "Save to Facebook", "onclickBehaviour": "true",
				"onclickUrl": "http://www.facebook.com/share.php?u=" + currentTabUrl + "&t=" + currentTabTitle},
			{"name": "vkontakte", "id": "saveToVkontakteButton", "title": "Save to Vkontakte", "onclickBehaviour": "true",
				"onclickUrl": "http://vkontakte.ru/share.php?url=" + currentTabUrl},

			{"name": "friendfeed", "id": "saveToFriendFeedButton", "title": "Save to FriendFeed", "onclickBehaviour": "true",
				"onclickUrl": "http://friendfeed.com/?url=" + currentTabUrl + "&title=" + currentTabTitle},
			{"name": "googlereader", "id": "saveToGoogleReaderButton", "title": "Save to Google Reader", "onclickBehaviour": "true",
				"onclickUrl": "http://www.google.com/reader/link?url=" + currentTabUrl + "&title=" + currentTabTitle}
	    ]
	};

	if(previousDiv != null) {
		removeSaveToDiv();
	} else {
		var saveToDiv = document.createElement("div");
		saveToDiv.setAttribute("id", "saveToDiv");

		for(var currentButton in jsonButtonsMetaData["saveToButtons"]) {
			var saveToButtonDiv = document.createElement("div");
			saveToButtonDiv = setBasicButtonAttributes(saveToButtonDiv, 
				jsonButtonsMetaData["saveToButtons"][currentButton]["name"],
				jsonButtonsMetaData["saveToButtons"][currentButton]["id"],
				jsonButtonsMetaData["saveToButtons"][currentButton]["title"],
				jsonButtonsMetaData["saveToButtons"][currentButton]["onclickUrl"],
				jsonButtonsMetaData["saveToButtons"][currentButton]["onclickBehaviour"]);
			saveToDiv.appendChild(saveToButtonDiv);
		}
	
		theBody.appendChild(saveToDiv);
	}
}

function setBasicButtonAttributes(div, divName, divId, divTitle, divOnClickUrl, onclickPopup) {
	div.setAttribute("name", divName);
	div.setAttribute("id", divId);
	div.setAttribute("title", divTitle);
	
	var onclickBehaviour = "";
	if(onclickPopup)
		onclickBehaviour += "javascript:window.open('" + divOnClickUrl + "', '" + divName + "','location=yes,links=no,scrollbars=no,toolbar=no,width=750,height=550');";
	else
		onclickBehaviour += "javascript:window.open('" + divOnClickUrl + "');";
	
	onclickBehaviour += "document.body.removeChild(document.getElementById('saveToDiv'));; return false;";
	
	div.setAttribute("onclick", onclickBehaviour);
	return div;
}

function removeSaveToDiv() {
	document.body.removeChild(document.getElementById("saveToDiv"));
}

function handleMessage(msgEvent) {
	var messageName = msgEvent.name;
	var messageData = msgEvent.message;
	if (messageName === "showSaveToOptions") {
		showSaveToOptions(messageData);
	}
}

safari.self.addEventListener("message", handleMessage, false);
