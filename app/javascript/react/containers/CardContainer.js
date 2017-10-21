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
    this.handleSingleClick = this.handleSingleClick.bind(this)
  }
  handleClick() {
    let newState = !this.state.played
    this.setState({played: newState})
  }
  handleSingleClick(event) {
    debugger
  }
  render() {
    console.log(this.state.played)
    // let image = 'http://sweetclipart.com/multisite/sweetclipart/files/ace_of_hearts.png'
    let image = 'http://res.freestockphotos.biz/pictures/15/15524-illustration-of-an-ace-of-diamonds-playing-card-pv.png'
    let className = this.state.played? 'played' : 'dealt'
    let playerClassName
    let player_cards = this.state.player_cards.map(card => {
      playerClassName = card.played? 'played' : 'dealt'
      return(
        <CardTile image={image}
                  key={card.id}
                  className={className}
                  onClick={this.handleClick}
                />
      )
    })
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
