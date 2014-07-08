
// user search

/* 

Person will enter user's first name or last name. When they click "search", they will see a list of users whose name 
matches the searched words and who is within 50 miles of Buffalo, NY. 

The function will also clear any results from previous searches.

API document: https://dev.twitter.com/docs/api/1.1/get/users/search

Example request: https://api.twitter.com/1.1/users/search.json?q=Twitter%20API&page=1&count=3


Twitter returns this:

[
  {
    "profile_sidebar_fill_color": "DDEEF6",
    "profile_background_tile": true,
    "profile_sidebar_border_color": "C0DEED",
    "name": "Twitter API",
    "created_at": "Wed May 23 06:01:13 +0000 2007",
    "profile_image_url": "http://a0.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png",
    "location": "San Francisco, CA",
    "follow_request_sent": false,
    "id_str": "6253282",
    "is_translator": false,
    "profile_link_color": "0084B4",
    "entities": {
      "url": {
        "urls": [
          {
            "expanded_url": null,
            "url": "http://dev.twitter.com",
            "indices": [
              0,
              22
            ],
            "display_url": null
          }
        ]
      },
      "description": {
        "urls": [
 
        ]
      }
    },
    "default_profile": false,
    "contributors_enabled": false,
    "favourites_count": 25,
    "url": "http://dev.twitter.com",
    "profile_banner_url": "https://twimg0-a.akamaihd.net/profile_banners/6253282/1347394302",
    "utc_offset": -28800,
    "profile_image_url_https": "https://twimg0-a.akamaihd.net/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png",
    "id": 6253282,
    "listed_count": 11426,
    "profile_use_background_image": true,
    "lang": "en",
    "profile_text_color": "333333",
    "followers_count": 1562132,
    "protected": false,
    "verified": true,
    "description": "The Real Twitter API. I tweet about API changes, service issues and happily answer questions about Twitter and our API. Don't get an answer? It's on my website.",
    "geo_enabled": true,
    "time_zone": "Pacific Time (US & Canada)",
    "notifications": false,
    "profile_background_image_url_https": "https://twimg0-a.akamaihd.net/profile_background_images/656927849/miyt9dpjz77sc0w3d4vj.png",
    "profile_background_color": "C0DEED",
    "status": {
      "coordinates": null,
      "truncated": false,
      "favorited": false,
      "created_at": "Wed Mar 27 01:19:47 +0000 2013",
      "id_str": "316721175038406658",
      "entities": {
        "urls": [
 
        ],
        "hashtags": [
 
        ],
        "user_mentions": [
          {
            "name": "TwitterDevJP",
            "id_str": "70915829",
            "id": 70915829,
            "indices": [
              106,
              119
            ],
            "screen_name": "TwitterDevJP"
          }
        ]
      },
      "in_reply_to_user_id_str": null,
      "text": "In case you didn't know, we have an official account tweeting about Twitter developer topics in Japanese: @TwitterDevJP",
      "contributors": null,
      "id": 316721175038406658,
      "in_reply_to_status_id_str": null,
      "retweet_count": 19,
      "geo": null,
      "retweeted": false,
      "in_reply_to_user_id": null,
      "source": "web",
      "place": null,
      "in_reply_to_screen_name": null,
      "in_reply_to_status_id": null
    },
    "friends_count": 34,
    "profile_background_image_url": "http://a0.twimg.com/profile_background_images/656927849/miyt9dpjz77sc0w3d4vj.png",
    "default_profile_image": false,
    "statuses_count": 3406,
    "screen_name": "twitterapi",
    "following": true
  }

*/

$(document).ready(function() {
  // Click function
  $('.user-getter').submit(function(event) {
      // prevent form refresh
      event.preventDefault();
      // zero out results if previous search has run
      $('.user-results').html('');
      // Get the values of what the person entered in search
      var query = $(this).find("input[name='user_search']").val();
      // Run function to send API request to Twitter
      getUser(query);
  }); // end click function
}); // end document ready

// Function to get users from Twitter - ?? Not sure how to write the API Call
var getUser = function(query) {

  OAuth.initialize('oMQua1CuWerqGKRwqVkzDx5uijo')
  OAuth.popup('twitter').done(function(twitterData) {

    twitterData.get('/1.1/users/search.json?&geocode=42.94003620000001,-78.8677924,50mi&q=', {
         data: {
             q: query
         }
    }).done(function(search) {
         //result of the search here
         console.log(search);
    }).fail(function(error) {
         //error management here
    });

  }); // end oAuth popup
};

/* //Call to Twitter

  $.ajax({
    type: "GET",
    url: "https://api.twitter.com/1.1/users/search.json?&geocode=42.94003620000001,-78.8677924,50mi&q=" + query,
    dataType: "jsonp"
  })

  .done(function( twitterData ) {
    console.log( "Data Saved: " + twitterData ); // can see in inspector tab under Network
  }); */


  /*.done(function() {
    
    // Show search results title
      $('.user-search .resultsTitle').removeClass("hidden");

      });

    }).fail(function() {
     
    }); */

// Function that appends search result to DOM
var showUser = function(user) {

  console.log(user);
  /*var image = result.find('.profile-img');
  image.attr('src', users.profile_image_url);

  var result = $('.user-template .user-result').clone();
  var name = result.find('.real-name');
  name.append(user.name);

  var screenName = result.find('.screen-name');
  screenName.append(user.screen_name);

  var followers = result.find('.followers');
  followers.append(user.followers_count);

  var description = result.find('description');
    description.append(user.description); 

  return result; */
}; // end showUser function


