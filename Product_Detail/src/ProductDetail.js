import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductDetailJSON from '../ProductDetail.json';
import Cake1 from '../assets/Cake.PNG';
import Cake2 from '../assets/Cake2.JPG';
import Cake3 from '../assets/Cake3.JPG';
import Cake4 from '../assets/Cake4.JPG';
import Cake5 from '../assets/Cake5.JPG';

const ProductDetail = (props) => {
  const cakeImg= [Cake1,Cake2,Cake3,Cake4,Cake5];
  const renderCards = () => {
    
     let markup = [];
     ProductDetailJSON.map((detail,index)=> {
        markup.push(<Card style={{ width: '18rem' , 'margin' : '30px' }}>
              <Card.Img variant="top" src={cakeImg[index]} />
              <Card.Body>
                  <Card.Title>{detail.title}</Card.Title>
                  <Card.Link style={{"cursor": "pointer"}} onClick={()=> props.productDetailCLicked(detail.id)}>Product Detail</Card.Link>
              </Card.Body>
        </Card>)
     })
     return markup;
  }
  return (
    <div style={{display: 'flex'}}>
        {
            renderCards()
        }
          
    </div>
  )
}

export default ProductDetail;