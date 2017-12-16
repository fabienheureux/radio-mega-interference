import React, { Component } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import track from './track.mp3'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlayCircle, faPauseCircle } from '@fortawesome/fontawesome-free-solid'

const Duration = styled.div`
  position: relative;
  background: white;
  width: 100%;
  margin-left: 10px;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
`

const Position = styled.div`
  position: absolute;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  background: #333;
`

const Wrapper = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  font-size: 30px;
  padding: 5px;
  svg {
    color: white;
    cursor: pointer;
  }
`

class Player extends Component {
  constructor() {
    super()
		this.state = {
		  status: 'PAUSED',
		  position: 0,
		}
    this.handlePlaying = this.handlePlaying.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handlePlaying({ position, duration }) {
	  this.setState((prevState, props) => {
	    return {
	      ...this.state,
	      position: position * 100 / duration,
	    }
	  })
  }

	handleClick() {
	  this.setState((prevState, props) => {
	    let status
	    prevState.status === 'PLAYING' ? status = 'PAUSED' : status = 'PLAYING'
	    return {
	      ...this.state,
	      status,
	    }
	  })
	}

  render() {
    return(
      <Wrapper>
			  <div onClick={this.handleClick}>
			    { this.state.status === 'PAUSED' ?
			      <FontAwesomeIcon icon={faPlayCircle} /> :
			      <FontAwesomeIcon icon={faPauseCircle} />
			    }
		    </div>
		    <Duration>
		      <Position style={{width: `${this.state.position}%`}} />
		    </Duration>
        <Sound
          onPlaying={this.handlePlaying}
          url={track}
          playStatus={Sound.status[this.state.status]}
        />
      </Wrapper>
    )
  }
}

export default Player
