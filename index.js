var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'j3cbghR99SqntL9EVaD5Tmkgl',
  consumer_secret: '8BSrksnxMgjSOqylglwEUZ1ebIGUdIZ6UcB1iVgm4tGLg7f5Yx',
  access_token_key: '1483541906458296320-o8LsEBp5jv6pOGSo2pQ9tR728nSy6r',
  access_token_secret: 'aCuTpomh1EjSdwKL9qGlrPQxORsCMXMMpsVpkwDn5jmj8'
});
 
var params = {screen_name: 'tanuja'};
//var one_way_followers = [];


client.get('followers/ids', params, function(error, users, response) {
  if (!error){
console.log(users.ids.length);
  
  }
});
//throw error;
  

  //var followers = followers_results.ids;

  //client.get('friends/list',params, function(error, following_results, response) {
    //if (error) 
      //throw error;
    
  
    //var following = following_results.ids;

    //console.log(following);
     

    //following.forEach(function(person){

    //if(followers.indexOf(person)=== -1){
      //one_way_followers.push(person);

    //}
      
//    });



    //console.log(one_way_followers);
    
    //one_way_following = one_way_following.slice(0, 99);
    
    //var one_way_following_string = one_way_following.join();

    //console.log(one_way_following_string);
    
    //client.get('users/lookup', params, function(error, users_results, response){
   // console.log(users_results);
   // });
  //});
//});


