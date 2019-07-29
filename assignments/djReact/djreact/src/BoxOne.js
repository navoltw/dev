import React from 'react';  

class boxOne extends React.Component {
    state = {
      play: false
    }
    audio = new Audio(this.props.url='./music/alt-J - In Cold Blood (Baauer Remix).mp3')
  
    togglePlay = () => {
      this.setState({ play: !this.state.play }, () => {
        this.state.play ? this.audio.play() : this.audio.pause();
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.togglePlay}>{this.state.play ? 'Pause' : 'Play'}</button>
        </div>
      );
    }
  }
  
  export default boxOne;