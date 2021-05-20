import React , {Component} from 'react' ;

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

  export default Product