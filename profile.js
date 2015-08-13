// For simplicity, we're using jQuery for some things
//   However, the library has no jQuery dependency
$(document).ready(function() {
  var id = null;
  var access = null;
$(function(){
  
// Initialize library
  SE.init({ 
    // Parameters obtained by registering an app, these are specific to the SE
    //   documentation site

    clientId: 5345, 
    key: 'C3XsC1VXoWOuirD0IlisuQ((', 
    // Used for cross domain communication, it will be validated
    channelUrl: 'http://davideighmey.github.io/proxy',
    // Called when all initialization is finished
    complete: function(data) { 
        console.log(data);
        $('#login-button')
            .removeAttr('disabled')
            .text('Sign In '); 
    }
  });

// Attach click handler to login button
  $('#login-button').click(function() {
    console.log("Log In Clicked");
    // Make the authentication call, note that being in an onclick handler
    //   is important; most browsers will hide windows opened without a
    //   'click blessing'
    
      SE.authenticate({
        success: function(data) { 
            
           id= data.networkUsers[0].account_id;
           access = data.accessToken;
           console.log(id);
           console.log(access);

           document.getElementById("SignIn").innerHTML = "Signed in successful";
        },
        error: function(data) { 

            alert('An error occurred:\n' + data.errorName + '\n' + data.errorMessage); 
        },
        networkUsers: true
    });
  });

  
  $('#answerButton').click(function() {
    $.ajax({
        url: 'https://api.stackexchange.com/2.2/users/'+ id +'/answers?order=desc&sort=activity&site=stackoverflow',
        success: function (response) {
            console.log(response);
            console.log(response);
            
            if (response.items.length == 0){
              document.getElementById("profileAnswer").innerHTML +="Answers: 0 <br>";
            } else {
              for (var i in response.items){
                document.getElementById("profileAnswer").innerHTML += "Answer: <a href=" + i.link+ ">" + i.title +"</a><br>"
              }
            }
           
        },
        error: function () { },
      });
  });

  $('#badgesButton').click(function() {
          console.log(id);

        $.ajax({
        url: 'https://api.stackexchange.com/2.2/users/'+ id +'/badges?order=desc&sort=rank&site=stackoverflow',
        success: function (response) {
            console.log(response);

            console.log(response);
             if (response.items.length == 0){
              document.getElementById("profileBadges").innerHTML += "Badges: 0 <br>";
            } else {
              for (var i in response.items){
                document.getElementById("profileBadges").innerHTML += "Badges: <a href=" + i.owner.link+ ">" + i.name + " "  + i.rank + " " + i.badge_id +"</a><br>"
              }
            }
        },
        error: function () { },
        });
    });
    $('#favoriteButton').click(function() {
      console.log(id);
      $.ajax({
        url: 'https://api.stackexchange.com/2.2/users/'+ id +'/favorites?order=desc&sort=activity&site=stackoverflow',
        success: function (response) {
          console.log(response);
           if (response.items.length == false){
              document.getElementById("profileFavorite").innerHTML +="Favorites: 0 <br>";
            } else {
              for (var i in response.items){
                document.getElementById("profileFavorite").innerHTML += "Favorites: <a href=" + i.link+ ">" + i.title +"</a><br>"
              }
            }
        },
        error: function () { },
    });
  });


  $('#login-out').click(function() {


    var id = null;
    var access = null;
    document.getElementById("SignIn").innerHTML = "Signed out";
    document.getElementById("profileAnswer").innerHTML = " ";
    document.getElementById("profileBadges").innerHTML = " ";
    document.getElementById("profileFavorite").innerHTML = " ";
            
  });
});
});
