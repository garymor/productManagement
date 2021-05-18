import React  from 'react' ;
import './SubmitForm.css'

class SubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          id:0,
          name: '',
          description:'',
          productImageUrl: './products/matthew.png',
          editmode:"unedit",
          price:0
    
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    
     generateRandom() {
        return Math.floor((Math.random() * 50) + 4);
      }

    handleChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
          });
    }
  
    handleSubmit(event) {
      const newStateproducts =  [...[this.state]];
      this.props.ProductList.setState({products:this.props.ProductList.state.products.concat(newStateproducts)});
      event.preventDefault();
      this.setState({
        id:this.generateRandom(),
        name: '',
        description:'',
        productImageUrl: './matthew.png',
        editmode:"unedit",
        price:0
        });
    }
  
    render() {
        const {onClick,className} = this.props;
        return (
        
        <form  className={"grid-item " + className} onSubmit={this.handleSubmit}>

          <label>
            product name:
            </label>
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          <label>
            try to describe:
            </label>
            <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
          <label>
            name your price:
            <input name="price" type="text" value={this.state.price} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Save"  />
        </form>
      
      );
    }
  }

  export default SubmitForm