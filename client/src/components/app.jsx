import React from 'react';
import Summary from './summary';
import GoodToKnow from './goodToKnow';
import Reviews from './reviews';

class App extends React.Component {
  constructor(props) {
    super(props);

    let id = 1;

    const pathName = window.location.pathname.split('/');

    const pathId = Number.parseInt(pathName[1], 10);
    if (!Number.isNaN(pathId)) {
      id = pathId;
    }

    this.state = {
      restaurantId: id,
    };
  }

  render() {
    const { restaurantId } = this.state;

    return (
      <div>
        <Summary id={restaurantId} />
        <GoodToKnow id={restaurantId} />
        {/* <Reviews /> */}
      </div>
    );
  }
}

export default App;
