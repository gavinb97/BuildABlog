require('dotenv').config()
const { TwitterApi } = require("twitter-api-v2")

const consumerClient = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  })

  const client = consumerClient.readWrite

const sendTweet = async (tweetText) => {

    try {  
    const data = await client.v2.tweet(tweetText)
    console.log(data)
    } catch (e) {
      console.log(e)
    }
}


module.exports = sendTweet