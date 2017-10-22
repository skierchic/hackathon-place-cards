import React from 'react'
import CardTile from '../components/CardTile'

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerCards: [{id: 1, rank: '2', suit: 'D', played: false},
                      {id: 2, rank: '5', suit: 'H', played: false},
                      {id: 3, rank: '8', suit: 'C', played: false},
                      {id: 4, rank: 'J', suit: 'C', played: false},
                      {id: 5, rank: 'A', suit: 'S', played: false},
                      {id: 6, rank: 'K', suit: 'D', played: false}],
      played: false
    };
    this.handleClick = this.handleClick.bind(this)
    this.changeCardPlayState = this.changeCardPlayState.bind(this)
  }
  handleClick() {
    let newState = !this.state.played
    this.setState({played: newState})
  }
  changeCardPlayState(id) {
    let newPlayerCards = this.state.playerCards.concat()
    newPlayerCards[id - 1].played = !this.state.playerCards[id-1].played
    this.setState({ playerCards: newPlayerCards })
  }
  render() {
    // let image = 'http://sweetclipart.com/multisite/sweetclipart/files/ace_of_hearts.png'
    // let image = 'http://res.freestockphotos.biz/pictures/15/15524-illustration-of-an-ace-of-diamonds-playing-card-pv.png'
    let opponentImage = require(`../../../assets/images/Yellow_back.jpg`)
    let className = this.state.played? 'played' : 'dealt'
    let playerImage
    let playerClassName
    let playerCards = this.state.playerCards.map(card => {
      playerImage = require(`../../../assets/images/${card.rank}${card.suit}.jpg`)
      playerClassName = card.played? 'played' : 'dealt'
      let handleSingleClick = () => { this.changeCardPlayState(card.id)}
      return(
        <CardTile image={playerImage}
                  key={card.id}
                  className={playerClassName}
                  onClick={handleSingleClick}
                />
      )
    })
    let track = []
    for(let hole = 0; hole < 122; hole ++) {
      track.push(<div key={hole}></div>)
    }
    track[0] = <div key='0' className="peg"></div>
    return(
      <div className='wrapper'>

        <div className='opponent_cards'>
          <CardTile image={opponentImage} name='One' className={className} onClick={this.handleClick}/>
          <CardTile image={opponentImage} name='Two' className={className} onClick={this.handleClick}/>
          <CardTile image={opponentImage} name='Three' className={className} onClick={this.handleClick}/>
          <CardTile image={opponentImage} name='Four' className={className} onClick={this.handleClick}/>
          <CardTile image={opponentImage} name='Five' className={className} onClick={this.handleClick}/>
          <CardTile image={opponentImage} name='Six' className={className} onClick={this.handleClick}/>


        </div>
        <hr/>
        <div className='board'>
          {track}
          {track}
        </div>
        <hr/>
        <div className='player_cards'>
          {playerCards}
        </div>

      </div>
    )
  }
}

export default CardContainer
