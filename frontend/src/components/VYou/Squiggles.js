import React, {Component} from 'react';

class Squiggles extends Component {
  render() {
    return <React.Fragment>
        <span className='squiggle'></span>
        <span className='squiggle'></span>
        <span className='squiggle squiggle-small'></span>
    </React.Fragment>
  }
}

export default Squiggles;
