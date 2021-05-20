import React , {Component} from 'react' ;
import Product from "../product/product.js"
import Button from "../shared/button.js"
import SubmitForm from "../submitForm/SubmitForm.js"
import {prodList} from "../../mocks/products.js"

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
      this.setState({products:prodList,loading:false});
  
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


  export default ProductList;