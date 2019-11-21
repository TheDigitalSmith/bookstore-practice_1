import React from 'react';
import {Media} from 'reactstrap';
class BooksComponents extends React.Component {
    state = {  }
    render() { 
        console.log (this.props);
        return (  
            <Media> 
                <Media left href="#">
                    <Media object src={this.props.book.img} alt= "Generic placeholder image"></Media>
                    <Media heading>{this.props.book.title}</Media>
                    <Media>{this.props.book.category}</Media>
                </Media>
            </Media>
        );
    }
}
 
export default BooksComponents;