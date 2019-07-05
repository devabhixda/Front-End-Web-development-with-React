import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {


renderDish(dish) {
  console.log(dish);
    if (dish != null)
    {
        return(
          <div className="row">
              <div  className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
              </div>
              <div  className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
            {this.renderComments(dish)}
            </div>
          </div>
        );

    }
    else
        return(
            <div></div>
        );
}
renderComments(selectedDish){
  return selectedDish.comments.map(function(currentDish, i) {
    if(currentDish.author!==null)
            return(
             <div>
             <ul className="list-unstyled">
             <li>{currentDish.comment}</li>
             <li>--{currentDish.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(currentDish.date)))}</li>
             </ul>
             </div>
            );
    else
    return(
      <div></div>
    )
   });
}

render() {
  return (
      <div className="container">
              {this.renderDish(this.props.dish)}
      </div>
  );
}
}

export default DishDetail;
