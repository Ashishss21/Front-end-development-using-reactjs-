import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { addComment, fetchDishes } from '../redux/ActionCreators';
import {Switch, Route, Redirect, withRouter } from 'react-router-dom';
import CommentForm from './CommentForm';
import '../Assets/boot/css/bootstrap.min.css';
import DishDetail from './DishDetailComponent';
import { connect } from 'react-redux';


const mapStateToProps = state =>{
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) =>({
  addComment:(dishId, rating, author, comment) =>dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: ()=>{dispatch(fetchDishes())}
})

class Main extends Component {

  constructor(props)
  {
    super(props);

  }

  componentDidMount(){
    this.props.fetchDishes();
  }

  onDishSelect(dishId)
  {
      this.setState({ SelectedDish :dishId });
  }

  render()
  {
    const HomePage=()=>{
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        dishesLoading={this.props.dishes.isLoading}
        dishesErrMess={this.props.dishes.errMess}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
         />
      );
    }

    const DishWithID=({match})=>{
      return(
        <DishDetail
         dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10)[0])} 
         isLoading={this.props.dishes.isLoading}
         errMess={this.props.dishes.errMess}
         comments={this.props.comments.filter((comments)=>Comment.dishId===parseInt(match.params.dishId,10)[0])}
         addComment={this.props.addComment}
        />
      );
    }

  return (
    <div className="App">
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishID" component={DishWithID} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={()=><About leaders={this.props.leaders} />} />
            <Route exact path="/commentform" component={()=><CommentForm addComment={this.props.addComment} /> } />
            <Redirect to="/home" />
          </Switch>
        <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));