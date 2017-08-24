var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
    application_id: 'ab61adbe',
    application_key: 'b29cb39c9cb2e39e0d815a10661a8dab'
});

var params = {
    text: "RS 600.00 was withdrawn using your HDFC Bank Card ending 6769.Avl bal:Rs 13196.26",
    class: ['BANK', 'OTP', 'CINEMA']
};

textapi.unsupervisedClassify(params, function(error, response) {
    console.log("\n************************************");
    console.log("Unsupervised Classification Results:");
    console.log("************************************\n");     
    if (error !== null) {
        console.log(error, response);
    } else {
        console.log("\nThe text to classify is : \n\n", response.text, "\n");
        for (var i = 0; i < response.classes.length; i++) {
            console.log("label - ", response.classes[i].label, ", score -", response.classes[i].score, "\n");
        }
    }
});

//**********************************************************
// Entity Extraction
// Extracts the entities mentioned in a text
//**********************************************************

textapi.entities(params.text, function(err, resp) {
    console.log("\n************************************");
    console.log("Entity Extraction Results:");
    console.log("************************************\n");     
    if (err !== null) {
        console.log("Error: " + err);
    } else {
        console.log("Organisations  :", resp.entities.organization);
        console.log("Locations  :", resp.entities.location);
        console.log("Keywords :", resp.entities.keyword);
        console.log("Dates  :", resp.entities.date);
        console.log("People :", resp.entities.person);
    }
});

textapi.extract(params.text, function(err, resp) {
    console.log("\n************************************");
    console.log("Article Extraction Results:");
    console.log("************************************\n");    
    if (err !== null) {
        console.log("Error: " + err);
    } else {
        console.log("Article Title  :", resp.title);
        console.log("Article text :", resp.article);
    }
});