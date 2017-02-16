import React, {Component} from 'react';
import {connect} from 'react-redux';
import GamesList from './GamesList';
import {fetchGames, deleteGame} from './actions';

class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <GamesList games={this.props.games} deleteGame={this.props.deleteGame}/>
      </div>
    );
  }
}

GamesPage.propTypes = {
  games: React.PropTypes.array.isRequired,
  fetchGames: React.PropTypes.func.isRequired,
  deleteGame: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
};

export default connect(mapStateToProps, {fetchGames, deleteGame})(GamesPage);
