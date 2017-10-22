import React from 'react'
import CardTile from '../components/CardTile'

class CardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player_cards: [{id: 1, played: false},
                      {id: 2, played: false},
                      {id: 3, played: false},
                      {id: 4, played: false},
                      {id: 5, played: false},
                      {id: 6, played: false}],
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
    let new_player_cards = this.state.player_cards.concat()
    new_player_cards[id - 1].played = !this.state.player_cards[id-1].played
    this.setState({ player_cards: new_player_cards })
  }
  render() {
    // let image = 'http://sweetclipart.com/multisite/sweetclipart/files/ace_of_hearts.png'
    let image = 'http://res.freestockphotos.biz/pictures/15/15524-illustration-of-an-ace-of-diamonds-playing-card-pv.png'
    let className = this.state.played? 'played' : 'dealt'
    let playerClassName
    let player_cards = this.state.player_cards.map(card => {
      playerClassName = card.played? 'played' : 'dealt'
      let handleSingleClick = () => { this.changeCardPlayState(card.id)}
      return(
        <CardTile image={image}
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
          <CardTile image={image} name='One' className={className} onClick={this.handleClick}/>
          <CardTile image={image} name='Two' className={className} onClick={this.handleClick}/>
          <CardTile image={image} name='Three' className={className} onClick={this.handleClick}/>
          <CardTile image={image} name='Four' className={className} onClick={this.handleClick}/>
          <CardTile image={image} name='Five' className={className} onClick={this.handleClick}/>
          <CardTile image={image} name='Six' className={className} onClick={this.handleClick}/>


        </div>
        <hr/>
        <div className='board'>
          {track}
          {track}
        </div>
        <div className='player_cards'>
          {player_cards}
        </div>

      </div>
    )
  }
}

export default CardContainer

{/* <CardTile image={image} name='My One' className={className} onClick={this.handleClick}/>
<CardTile image={image} name='My Two' className={className} onClick={this.handleClick}/>
<CardTile image={image} name='My Three' className={className} onClick={this.handleClick}/>
<CardTile image={image} name='My Four' className={className} onClick={this.handleClick}/>
<CardTile image={image} name='My Five' className={className} onClick={this.handleClick}/>
<CardTile image={image} name='My Six' className={className} onClick={this.handleClick}/> */}
