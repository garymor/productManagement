import React , {Component} from 'react' ;
import Plist from "./plist.js"
import SubmitForm from "./SubmitForm"
import './App.css'

function App() {
  return (
    <div>
      <div className="header">
        M Y  ___ S T O  R E _
      </div>
      <ProductList />
    </div>
  );
}

class Button extends Component {
  render() {
     const {
     onClick='',
     className='',
     children,
    } = this.props;
   return (
    <button
      onClick={onClick} className={className} type="button">
      {children}
    </button>
    );
 }
}

function isSearched(searchTerm) {
  return function (item) {
  return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }
  }

  class ProductList extends Component{
  constructor(props){
    super(props);

    this.state = {
      products:[],
      loading:true,
      searchTerm:''
    }
  
  this.handleRemove = this.handleRemove.bind(this);
  this.handleAdd = this.handleAdd.bind(this);
  this.onSearchChange = this.onSearchChange.bind(this);
  
  }

  async wait() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("load has finished"), 1000)
    });
    let result = await promise;
    this.setState({products:Plist().products,loading:false});

    console.log(result);
  }

  
  componentDidMount() {
    this.wait();
  }

  handleAdd(){
      const elem = document.querySelector('.no_display') ? document.querySelector('.no_display').classList.remove('no_display') : '' ;
      
    }

  handleRemove(id) {
  
    const updatedProducts = this.state.products.filter( item => item.id !== id );
    this.setState({products:updatedProducts});
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
    }

  render() {
    const {products,loading }= this.state;
    const productsComponent = products.filter(isSearched(this.state.searchTerm)).map(({id ,name,description,productImageUrl,editmode}) => (
    //const productsComponent = products.map(({id ,name,description,productImageUrl,editmode}) => (
      <>
      <Product 
      id={id}
      name={name}
      description={description}
      productImageUrl={productImageUrl}
      editmode={editmode}
      key={id}
      />
      <Button onClick={() => this.handleRemove(id)}>
        Dismiss
      </Button>
      </>
    ))
    if (loading) return <div className="load-message" >l  o  a  d  i  n  g . . . . . . . . . .  .</div>
    return(
      <>
     
        <input className="searchInput" placeholder="F I L T E R == >" onChange={this.onSearchChange}/>
      
      <div>
      <Button className='_add' onClick={() => this.handleAdd()}>
        Add
      </Button>
      </div>
      <div className="grid-container ">
        <div className='table grid-item'>
          {productsComponent}
        </div>
        <SubmitForm className="no_display" onClick={() => this.handleSave()} ProductList={this}></SubmitForm>
      </div>
      </>
      )
  }
}


class Product extends Component {
  
  render() {
    
    return(
      <div className={ "table-row " +this.props.editmode} key={this.props.id} >
        <div className='img-div'>
          <img  style={{width: '10vh'}} src={this.props.productImageUrl}  />
        </div>
        <div className="txt title">{this.props.name}</div>
        <div className="txt desc">{this.props.description}</div>
      </div>
    )
  }

}


export default App;


