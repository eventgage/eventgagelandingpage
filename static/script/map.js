//
//var terms = 'club';
//var near = 'Chicago';
//
//var accessor = {
//    consumerSecret: auth.consumerSecret,
//    tokenSecret: auth.accessTokenSecret
//};
//var parameters = [];
//parameters.push(['term', terms]);
//parameters.push(['location', near]);
//parameters.push(['callback', 'cb']);
//parameters.push(['oauth_consumer_key', auth.consumerKey]);
//parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
//parameters.push(['oauth_token', auth.accessToken]);
//parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
//
//var message = {
//    'action': 'http://api.yelp.com/v2/search',
//    'method': 'GET',
//    'parameters': parameters
//};
//
//OAuth.setTimestampAndNonce(message);
//OAuth.SignatureMethod.sign(message, accessor);
//
//var parameterMap = OAuth.getParameterMap(message.parameters);
//console.log(parameterMap);
//
//$.ajax({
//    'url': message.action,
//    'data': parameterMap,
//    'dataType': 'jsonp',
//    'jsonpCallback': 'cb',
//    'success': function (data, textStats, XMLHttpRequest) {
//        console.log(data.businesses);
//        for (var el in data.businesses) {
//            var obj = data.businesses[el];
//            for (var x in obj)
//                $('#test').append(x + " : " + obj[x] + '</br>');
//            $('#test').append('</br>');
//        }
//    }
//});