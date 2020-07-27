function loadjson(){
    var fs = require('fs');
    axios.fetch("https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data){
        console.log(data);
    });
    fs.appendFile("data_class.json", function(err){
        if (err) return console.log(err);
        console.log(data);
    });
}