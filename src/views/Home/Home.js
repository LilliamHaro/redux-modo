import React, {Component} from 'react'
import './Home.css';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux'
import { addToBuycar } from '../../redux/actions';


const mapStateToProps = state => {
  return {
    modoTitle:state.modoTitle
  }
}

function mapDispatchToProps(dispatch){
  return {
    addToBuycar: buyCar => dispatch(addToBuycar(buyCar))
    
  }
}


class ConnectedHome extends Component {
  constructor(){
    super();
    this.state = {
      toBuyCar: []
    }
    this.sendProducts = this.sendProducts.bind(this)
  }

  sendProducts() {
    this.setState({
      toBuyCar: [{name:'Producto 1'},{name:'Producto 2'}]
    }, function(){
      const newProducts = this.state.toBuyCar
    this.props.addToBuycar(newProducts)
    this.setState({
      toBuyCar: []
    })
    })
    
  }

  render(){
    return(
      <Layout>
        <section className="sectionContent home">
          <h1>HOME</h1>
          <h3>{this.props.modoTitle}</h3>

          <button onClick={this.sendProducts}>Add Products to Buycar</button>
        
        </section>
       
      </Layout>

    )
  }
}


const Home = connect(mapStateToProps,mapDispatchToProps)(ConnectedHome)


export default Home