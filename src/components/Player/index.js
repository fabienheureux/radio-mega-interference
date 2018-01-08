import React, { Component } from 'react'
import styled from 'styled-components'
import Sound from 'react-sound'
import track from './fiction.mp3'
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

const Loaded = styled.div`
  position: absolute;
  left: 0;
  right: auto;
  top: 0;
  bottom: 0;
  background: #777;
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
  width: 320px;
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
		  loaded: 0,
		  position: 0,
		  duration: 0,
		}
    this.handlePlaying = this.handlePlaying.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleLoading = this.handleLoading.bind(this)
  }

  handlePlaying({ position, duration }) {
	  this.setState((prevState, props) => {
	    return {
	      ...this.state,
	      position,
	      duration,
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

	handleLoading({ bytesLoaded, bytesTotal, duration }) {
	  this.setState((prevState, props) => {
	    return {
	      ...this.state,
	      loaded: bytesLoaded * 100 / bytesTotal,
	    }
	  })
	}

  render() {
    const convertMs = milliseconds => {
      return {
        seconds: parseInt(
          ((milliseconds / 1000) % 60)
        ),
        minutes: parseInt(
          ((milliseconds / 1000) / 60)
        ),
      }
    }

    const formatNumber = numberToFormat => `${0}${numberToFormat}`.slice(-2)

    console.log(convertMs(this.state.position))

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
		      <Loaded style={{width: `${this.state.loaded}%`}} />
		    </Duration>
        <Sound
          onPlaying={this.handlePlaying}
          onLoading={this.handleLoading}
          url={track}
          playStatus={Sound.status[this.state.status]}
        />
        {formatNumber(convertMs(this.state.position).minutes)}:{formatNumber(convertMs(this.state.position).seconds)}
      </Wrapper>
    )
  }
}

export default Player
