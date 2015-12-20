Team = new Mongo.Collection('teams');

if (Meteor.isClient) {
    Template.teams.onRendered(function () {
        var drake;// = dragula($(document.querySelectorAll('#dragulaContainer')).toArray());
        Meteor.setTimeout(function () {
            drake = dragula($('.dragula-container').toArray());
            drake.on('drop', function (el, target, source) {
                var targetTeamId = target.dataset.team;
                if (targetTeamId) {   //don't change db collection if this is just moving to temporary container
                    var playerId = el.dataset.id;
                    Meteor.call('swapTeams', playerId, targetTeamId);
                }
            });
        }, 1000);
    });

    Template.teams.helpers({
        theTeams: function () {
            return Team.find({}).fetch();
        },
        players: function () {
            var fullPlayerList = [];
            this.players.forEach(function (p) {
                fullPlayerList.push(p);
            });
            return fullPlayerList;
        }
    });
}


