
var request = require('request');
var username = 'apiuser';
var password = 'APIKEY';
var options = {
    url: 'https://api.myngp.com/v2/broadcastEmails',
    auth: {
        user: username,
        password: password
    },


};


request(options, function (err, res, body) {
    if (err) {
        console.dir(err);
        return;
    }
    //parsing the json file into a hash table 
    var new_dictionary = JSON.parse(body);

    //getting items from json file
    var items_list = new_dictionary["items"]



    //iterating through the item list to get the id and the name of the email
    for (var i = 0; i < items_list.length; i++) {
        console.log(items_list[i]["emailMessageId"] + " " + items_list[i]["name"]);
    }


    //prints out total count of emails
    console.log("Total: " + new_dictionary["count"])
});

