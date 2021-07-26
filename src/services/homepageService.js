require('dotenv').config();


let handleGetStartedButton = () => {
    console.log("url image ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "+ process.env.IMAGE_GET_STARTED_BUTTON_URL);
    console.log("url ggsheet ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> "+ process.env.URL_WEB_VIEW_SURVEY);
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [
                    {
                        "title": "Chào mừng đến chatbot Nhập mã sách cực mạnh!",
                        "image_url": `${process.env.IMAGE_GET_STARTED_BUTTON_URL}`,
                        "subtitle": "(saving data to google sheet)",
                        "default_action": {
                            "type": "web_url",
                            "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                            "webview_height_ratio": "tall",
                        },
                        "buttons": [
                            {
                                "type": "web_url",
                                "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                                "webview_height_ratio": "tall",
                                "title": "Mở form điền mã sách",
                                "messenger_extensions": true //false: open the webview in new tab
                            }
                        ]
                    }
                ]
            }
        }
    };
    return response;

}

// let ctkHandlebot = () => {
//     let response = {
//         "attachment": {
//             "type": "template",
//             "payload": {
//                 "template_type": "generic",
//                 "elements": [
//                     {
//                         "title": "chu tuan kiet dep trai that",
//                         "image_url": "https://bit.ly/eric-bot1",
//                         "subtitle": "(saving data to google sheet)",
//                         "default_action": {
//                             "type": "web_url",
//                             "url": "https://mess-bot-kiet.herokuapp.com/get-survey",
//                             "webview_height_ratio": "tall",
//                         },
//                         "buttons": [
//                             {
//                                 "type": "web_url",
//                                 "url": "https://mess-bot-kiet.herokuapp.com/get-survey",
//                                 "webview_height_ratio": "tall",
//                                 "title": "Điền hộ bố mày cái form với :/",
//                                 "messenger_extensions": true //false: open the webview in new tab
//                             }
//                         ]
//                     }
//                 ]
//             }
//         }
//     };
//     return response;

// }


let getButtonMessageTemplate = () => {
    let response = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Bạn muốn làm gì tiếp?",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://docs.google.com/spreadsheets/d/1xce6lPTXTB89DeAK8wASM4vBiXARveDABEoUCYhyk24/edit?usp=sharing",
                        "title": "View Data 😁"
                    },
                    {
                        "type": "web_url",
                        "url": `${process.env.URL_WEB_VIEW_SURVEY}`,
                        "webview_height_ratio": "tall",
                        "title": "Điền lại form mới ?!",
                        "messenger_extensions": true //false: open the webview in new tab
                    },

                ]
            }
        }
    }

    return response;
}
module.exports = {
    handleGetStartedButton: handleGetStartedButton,
    getButtonMessageTemplate: getButtonMessageTemplate,
};