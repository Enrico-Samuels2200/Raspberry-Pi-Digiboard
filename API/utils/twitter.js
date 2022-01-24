const Twitter = require('twitter');
let tweet_array = [];

// Sets up and connect client
let client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

module.exports = async (user_name) => {
    let params = { screen_name: user_name };

    client.get('statuses/user_timeline', params, async (error, tweets, res) => {
        try {
            let data = await tweets;
            
            for (i in data) {
                let image = `${data[i].user.profile_image_url.slice(0, -10)}400x400.png`;

                let item = {
                    name: data[i].user.name,
                    profile_picture: image,
                    tweet: data[i].text
                };
                
                tweet_array.push(item);
            }
        }
        catch(err) {
            console.log(err);
        }
    });

    return tweet_array;
};

