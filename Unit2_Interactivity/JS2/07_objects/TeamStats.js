/**
 * A simple team stat tracker to create, retrieve, and add information about your favorite sports team.
 * You can add players and games to the team object, and retrieve the current list of players and games.
 */

const team = {
    _players: [
        { firstName: 'Pablo', lastName: 'Sanchez', age: 22 },
        { firstName: 'Sam', lastName: 'Johnson', age: 24 },
        { firstName: 'Mike', lastName: 'Brown', age: 21 },
    ],
    _games: [
        { opponent: 'Tigers FC', teamPoints: 30, opponentPoints: 27 },
        { opponent: 'Fire Blazors FC', teamPoints: 25, opponentPoints: 30 },
        { opponent: 'FC Bears', teamPoints: 28, opponentPoints: 25 },
    ],

    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },

    addPlayer(firstName, lastName, age) {
        const player = { firstName: firstName, lastName: lastName, age: age };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game = { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints };
        this._games.push(game);
    }

}

team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Tigers FC', 4, 3);