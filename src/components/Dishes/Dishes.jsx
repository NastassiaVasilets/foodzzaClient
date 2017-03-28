import React, { Component} from 'react';
import { connect } from 'react-redux';

import { addDishes, addDishesFail } from '../../actions/dishesActions';
import { getDishes } from '../../api/servicesApi';

import { Grid, Row, Col } from 'react-bootstrap';
import ServiceDetail from './ServiceDetail.jsx';
import Cart from './Cart/Cart.jsx';
import Dish from './Dish.jsx';

import './Dishes.css';

class Dishes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getDishes(this.props.params.id);
  }
  render() {
    return (
      <Grid>
        <Row className='showGrid'>
          <ServiceDetail service = {this.props.service}/>
        </Row>
        <Row className='showGrid mainRow'>
          <Col xs={12} md={7}>
            {
              this.props.dishes.map((dish,i) => (
                <Dish
                dish={dish}
                key={i}
                />
              ))
            }
          </Col>
          <Col xs={12} md={5}>
            <Cart/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    dishes: state.dishesReducer.dishes,
    service: state.orderReducer.service,
  };
}
//Придерживайся одного стиля, либо передавай вынесенные отдельно функции, либо ... ай я не знаю как правильно написать, лучше у меня спроси потом
export default connect(
  mapStateToProps,
  dispatch => {
    return {
      getDishes: (id) => {
        getDishes(id)
        .then((response) => {
          dispatch(addDishes(response.data))
        },
        (response) => {
          dispatch(addDishesFail(response))
        })
      }
    };
  }
)(Dishes);
