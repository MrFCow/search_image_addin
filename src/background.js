/*
function onMsgSearch(data, sender) {
	const url = "https://cors-anywhere.herokuapp.com/vision.googleapis.com/v1/images:annotate"

	const postData = {
			requests:[
					{
							image:{
									"imageUri": data.rawUrl
							},
							features:[
								{
									type:"TYPE_UNSPECIFIED",
									maxResults:50
								},
								{
									type:"LANDMARK_DETECTION",
									maxResults:50
								},
								{
									type:"FACE_DETECTION",
									maxResults:50
								},
								{
									type:"LOGO_DETECTION",
									maxResults:50
								},
								{
									type:"LABEL_DETECTION",
									maxResults:50
								},
								{
									type:"DOCUMENT_TEXT_DETECTION",
									maxResults:50
								},
								{
									type:"SAFE_SEARCH_DETECTION",
									maxResults:50
								},
								{
									type:"IMAGE_PROPERTIES",
									maxResults:50
								},
								{
									type:"CROP_HINTS",
									maxResults:50
								},
								{
									type:"WEB_DETECTION",
									maxResults:50
								}
							],
							imageContext:{
								cropHintsParams:{
									aspectRatios:[0.8,1,1.2]
								}
							}
					}
			]
	}

	fetch(url, {method:"POST", body: JSON.stringify(postData)}).then(result => console.log(`"MsgSearch result: ${result}`))
}
*/

browser.runtime.onInstalled.addListener(function () {
	browser.runtime.openOptionsPage(() => console.log('options page opened'));
	browser.runtime.onMessage.addListener((data, sender) => {
		console.log(data);
    if (data.type === 'search') {
      let creating = browser.windows.create(data.createData);
			console.log(creating);

			// onMsgSearch(data,sender);
    }
  });
});

