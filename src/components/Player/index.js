import React, { Component } from 'react'
import Sound from 'react-sound'
import track from './track.mp3'

class Player extends Component {
  constructor() {
    super()
		this.state = {
		  status: 'PLAYING'
		}
    this.handlePlaying = this.handlePlaying.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handlePlaying({ position, duration }) {
    console.log(position)
  }

	handleClick() {
	  this.setState((prevState, props) => {
	    let status
	    prevState.status === 'PLAYING' ? status = 'PAUSED' : status = 'PLAYING'
	    return { status }
	  })
	}

  render() {
    return(
      <div>
			  <div onClick={this.handleClick}>
			    button
		    </div>
        <Sound
          onPlaying={this.handlePlaying}
          url={track}
          playStatus={Sound.status[this.state.status]}
        />
      </div>
    )
  }
}

export default Player
