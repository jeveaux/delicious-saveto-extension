
function showSaveToOptions(data) {
	var theBody = document.body;
	var previousDiv = document.getElementById("saveToDiv");
	
	var jsonData = {
		"saveToButtons": [
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"},
			{"name": "delicious", "onclick": "js aqui", "id": "saveToDeliciousButton", "title": "alguma coisa aqui"}
	    ]
	};
	
	if(previousDiv != null) {
		theBody.removeChild(previousDiv);
	} else {
		// Elements
		var saveToDiv = document.createElement("div");
		var saveToDeliciousButton = document.createElement("div");
		var saveToTwitterButton = document.createElement("div");
		var saveToGoogleButton = document.createElement("div");
		var saveToGoogleReaderButton = document.createElement("div");
		var saveToTechnoratiButton = document.createElement("div");
		var saveToBuzzButton = document.createElement("div");
		var saveToDiggButton = document.createElement("div");
		var saveToRedditButton = document.createElement("div");
		var saveToFacebookButton = document.createElement("div");
		var saveToFriendFeedButton = document.createElement("div");
	
		// Elements attributes
		saveToDeliciousButton = setBasicButtonAttributes(saveToDeliciousButton, 'saveToDeliciousButton');
		saveToDeliciousButton.setAttribute('onclick', 'javascript:window.open(\'' + data + '\', \'deliciousuiv5\',\'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550\'); return false;');
		saveToTwitterButton = setBasicButtonAttributes(saveToTwitterButton, 'saveToTwitterButton');
		saveToTwitterButton.setAttribute('onclick', 'javascript:window.open(\'' + data + '\', \'deliciousuiv5\',\'location=yes,links=no,scrollbars=no,toolbar=no,width=550,height=550\'); return false;');
		saveToGoogleButton = setBasicButtonAttributes(saveToGoogleButton, 'saveToGoogleButton');
		saveToTechnoratiButton = setBasicButtonAttributes(saveToTechnoratiButton, 'saveToTechnoratiButton');
		saveToBuzzButton = setBasicButtonAttributes(saveToBuzzButton, 'saveToBuzzButton');
		saveToDiggButton = setBasicButtonAttributes(saveToDiggButton, 'saveToDiggButton');
		saveToRedditButton = setBasicButtonAttributes(saveToRedditButton, 'saveToRedditButton');
		saveToGoogleReaderButton = setBasicButtonAttributes(saveToGoogleReaderButton, 'saveToGoogleReaderButton');
		saveToFacebookButton = setBasicButtonAttributes(saveToFacebookButton, 'saveToFacebookButton');
		saveToFriendFeedButton = setBasicButtonAttributes(saveToFriendFeedButton, 'saveToFriendFeedButton');
	
		saveToDiv.setAttribute('id', 'saveToDiv');
	
		// ?
	
		saveToDiv.appendChild(saveToDeliciousButton);
		saveToDiv.appendChild(saveToTwitterButton);
		saveToDiv.appendChild(saveToGoogleButton);
		saveToDiv.appendChild(saveToTechnoratiButton);
		saveToDiv.appendChild(saveToBuzzButton);
		saveToDiv.appendChild(saveToDiggButton);
		saveToDiv.appendChild(saveToRedditButton);
		saveToDiv.appendChild(saveToFriendFeedButton);
		saveToDiv.appendChild(saveToFacebookButton);
		saveToDiv.appendChild(saveToGoogleReaderButton);
	
		theBody.appendChild(saveToDiv);
	}
}

function setBasicButtonAttributes(div, divIdName) {
	div.setAttribute('id', divIdName);
	div.setAttribute('title', 'bla bla bla');
	return div;
}

function handleMessage(msgEvent) {
	var messageName = msgEvent.name;
	var messageData = msgEvent.message;
	if (messageName === "showSaveToOptions") {
		showSaveToOptions(messageData);
	}
}

safari.self.addEventListener("message", handleMessage, false);