import React from 'react';
import {Jumbotron, Button} from 'reactstrap'
class Welcome extends React.Component {
    state = {  }
    render() { 
        return (  
            <div>
      <Jumbotron>
        <h1 className="display-3">Welcome To StriveShop!</h1>
        <p className="lead">Food For The Hungry Mind</p>
        <hr className="my-2" />
        <p>Explore our library for a delicious brain meal</p>
        <p className="lead">
          <Button color="primary">Explore</Button>
        </p>
      </Jumbotron>
    </div>
        );
    }
}
 
export default Welcome;