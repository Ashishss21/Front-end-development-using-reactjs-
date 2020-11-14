
import { DISHES } from "../shared/dishes";
import { LEADERS } from "../shared/leaders";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";

export const intialState={
    dishes:DISHES,
      comments:COMMENTS,
      promotions:PROMOTIONS,
      leaders:LEADERS
};

export const Reducer=(state = intialState, action)=>{
    return state;
}