import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
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
               <RenderComments comments={dish.comments} />
              </div>
            </div>
          );
      }
      else
          return(
              <div></div>
          );
    }

    function RenderComments({comments}) {
      return comments.map(function(currentDish, i) {
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

    const  DishDetail = (props) => {
      return (
          <div className="container">
                  <RenderDish dish={props.dish}/>
          </div>
      );
    }
export default DishDetail;
