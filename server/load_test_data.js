    Meteor.startup(function () {
        // code to run on server at startup

        players = [
            /* 1 */
            {
                "player_number": 0,
                "player_name": "Albert Weaver"
            },

            /* 2 */
            {
                "player_number": 1,
                "player_name": "Noah Potter"
            },

            /* 3 */
            {
                "player_number": 2,
                "player_name": "Charles Brooks"
            },

            /* 4 */
            {
                "player_number": 3,
                "player_name": "Gilbert Caldwell"
            },

            /* 5 */
            {
                "player_number": 4,
                "player_name": "Ollie McLaughlin"
            },

            /* 6 */
            {
                "player_number": 5,
                "player_name": "Melvin Allison"
            },

            /* 7 */
            {
                "player_number": 6,
                "player_name": "Phillip Grant"
            },

            /* 8 */
            {
                "player_number": 7,
                "player_name": "Owen Strickland"
            },

            /* 9 */
            {
                "player_number": 8,
                "player_name": "Jeremy Soto"
            },

            /* 10 */
            {
                "player_number": 9,
                "player_name": "Mark Summers"
            },

            /* 11 */
            {
                "player_number": 10,
                "player_name": "Marvin Hart"
            },

            /* 12 */
            {
                "player_number": 11,
                "player_name": "Dean Bishop"
            },

            /* 13 */
            {
                "player_number": 12,
                "player_name": "Glen Phelps"
            },

            /* 14 */
            {
                "player_number": 13,
                "player_name": "Ricardo Clayton"
            },

            /* 15 */
            {
                "player_number": 14,
                "player_name": "Russell Adkins"
            },

            /* 16 */
            {
                "player_number": 15,
                "player_name": "Lester Bryan"
            },

            /* 17 */
            {
                "player_number": 16,
                "player_name": "Isaiah Hampton"
            },

            /* 18 */
            {
                "player_number": 17,
                "player_name": "Jared Morgan"
            },

            /* 19 */
            {
                "player_number": 18,
                "player_name": "Noah Ramsey"
            },

            /* 20 */
            {
                "player_number": 19,
                "player_name": "Jayden Crawford"
            },

            /* 21 */
            {
                "player_number": 20,
                "player_name": "Arthur Estrada"
            },

            /* 22 */
            {
                "player_number": 21,
                "player_name": "Ryan Cox"
            },

            /* 23 */
            {
                "player_number": 22,
                "player_name": "Curtis Reynolds"
            },

            /* 24 */
            {
                "player_number": 23,
                "player_name": "Ronnie McCormick"
            },

            /* 25 */
            {
                "player_number": 24,
                "player_name": "Billy Jensen"
            },

            /* 26 */
            {
                "player_number": 25,
                "player_name": "Jorge Walters"
            },

            /* 27 */
            {
                "player_number": 26,
                "player_name": "Gabriel Montgomery"
            },

            /* 28 */
            {
                "player_number": 27,
                "player_name": "Isaac Weber"
            },

            /* 29 */
            {
                "player_number": 28,
                "player_name": "Joshua Jackson"
            }
        ];

        if (Team.find({}).count() > 0) {
            Team.remove({});
        }

        if (Team.find({}).count() === 0) {
            var nPlayers = 6;
            var teamPlayers = [];
            var teamNumber = 0;

            players.forEach(function (player) {
                    if (teamPlayers.length < nPlayers) {
                        teamPlayers.push(player);
                    }
                    if (teamPlayers.length == nPlayers) {
                        teamNumber++;
                        addTeam(teamNumber, teamPlayers);
                    }
                }
            );
            if (teamPlayers.length > 0) {
                teamNumber++;
                addTeam();
            }

            function addTeam() {
                var obj = {
                    'name': "Team " + teamNumber,
                    'players': teamPlayers
                };
                Team.insert(obj);
                teamPlayers = [];
            }
        }
    });

