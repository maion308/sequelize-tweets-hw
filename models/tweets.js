'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweets = sequelize.define('Tweets', {
    text: DataTypes.STRING,
    hashtag: DataTypes.STRING,
    retweets: DataTypes.INTEGER
  }, {});
  Tweets.associate = function(models) {
    // associations can be defined here
  };
  return Tweets;
};