  
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Messenger'));

window.extAsyncInit = function () {
    // the Messenger Extensions JS SDK is done loading 

    //get user PSID
    MessengerExtensions.getContext(facebookAppId,
        function success(thread_context) {
            let userPSID = thread_context.psid;
            alert(JSON.stringify(thread_context))
            document.getElementById("psid").value = userPSID;
        },
        function error(err) {
            // errors
            console.log(err);
        }
    );


    $('#submitBtn').on('click', function () {
        let dataBody = {
            psid: document.getElementById("psid").value,
            name: document.getElementById("name").value,
            
            sach1: document.getElementById("sach1").value,
            sach2: document.getElementById("sach2").value,
            sach3: document.getElementById("sach3").value,

            note: document.getElementById("note").value,
        }

        //send a request to node.js server
        $.ajax({
            method: 'POST',
            data: dataBody,
            url: `${window.location.origin}/post-survey`,
            success: function (data) {
                //on Close webview
                MessengerExtensions.requestCloseBrowser(function success() {
                    // webview closed
                    alert('Gửi form thành công rồi nhé!');

                }, function error(err) {
                    alert('Đã gửi form thành công!')
                    console.log('err submit post webview', err)
                    // an error occurred
                });


            },
            error: function (error) {
                console.log('error response from node js server :', error)
            }
        })

    })

};