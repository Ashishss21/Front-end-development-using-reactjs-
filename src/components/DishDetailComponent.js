import React from 'react';
import {Row,Col, Card, CardImg, CardText,CardTitle, Breadcrumb, BreadcrumbItem,Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const RenderDish = (props) => {
    return (

        <Card key={props.dish.id}>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            <CardTitle>{props.dish.name}</CardTitle>
            <CardText>{props.dish.description}</CardText>
        </Card>
    );
}

const RenderComments = (props) => {
    return (
       <Container fluid>
            <h3>Comments</h3>
            {props.comments.map(e =>
                <Row key={e.id}>
                    <Row>{e.comment}</Row>
                    <Row className="w-100">
                        <Col md="fluid">--{e.author}</Col>
                        <Col>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(e.date)))}</Col>
                    </Row>
                </Row>
            )}<br/>
            <Button outline>
                <span className=""></span>Submit Comments
                <CommentForm />
           </Button>
        </Container>
    );
}

const DishDetail = (props) =>{   

    if(props.dish != null){
        return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active><Link to="/menu">{props.dish.name}</Link></BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} dishID={props.dish.id} />
                </div>
            </div>
            </div>
        );
    } else return <div></div>
}
export default DishDetail;