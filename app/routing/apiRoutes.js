var path = require("path");

var friends = require("../data/friends.js")
module.exports = function(app){
	app.get("/api/friends", function(req, res){
		res.json(friends);
	})

	app.post("/api/friends", function(req, res){
		var newFriend = req.body;

		friends.push(newFriend);

		var bestMatch = {
			name: "",
			picture: "",
			totalDifference: 1000
		}

		var newFriendScore = newFriend.score;

		

		for(let i = 0;i < friends.length; i++){
			
			var difference = 0;
			for(let j = 0; j < newFriendScore.length; j++){
				difference += Math.abs(friends[i].score[j] - newFriendScore[j]);
				// console.log(friends[i].score);
			}

			if(difference < bestMatch.totalDifference){
				bestMatch.name = friends[i].name;
				bestMatch.picture = friends[i].picture;
				bestMatch.totalDifference = difference;
			}
		}
		res.json(bestMatch);


	})
}