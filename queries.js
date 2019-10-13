//import your models on this line
const { Tweets } = require('./models')
const sequelize = require('sequelize');
const Op = Sequelize.Op


//require sequlize and the Operator value. Check the docs, if you
//want to check the syntax for that.

//1. Write a sequelize query to find all the tweets.
const findAll = async () => {
    const users = await Tweets.findAll()
    console.log(users, null, 2);
}

//2. Write a query to find the tweet with a hashtag: "#react"
const findHashtag = async () => {
    const users = await Tweets.findAll({
        where: {
          hashtag: "#react"
        }
      })
    console.log(users, null, 2);
}


//3. Write a query to find the tweet with more than 50 retweets.
const findRetweets = async () => {
    const users = await Tweets.findAll({
        where: {
            retweets: {
                [Op.gt]: 50
              }
        }
      })
    console.log(users, null, 2);
}


//4. Write a query to find the tweet with an id of 3
const findId = async () => {
    const users = await Tweets.findAll({
        where: {
          id: 3
        }
      })
    console.log(users, null, 2);
}

//5. Write a query to delete the tweet with an id of 3
const destroyTweetByID = async () => {
    const users = await Tweets.destroy({
        where: {
          id: 3
        }
      })
    console.log(users, null, 2);
}

//BONUS SECTION
//6. Write a query to create a new tweet with any data you want

//7. Write a query to update the hashtag of the tweet you just created
// with #sequelize

//8. Write a query to update the retweets where the text includes Brad Pitt

const run = async () => {
    await findAll()
    await findHashtag()
    await findRetweets()
    await findId()
    await destroyTweetByID()
    await findId()
}

run()