import React from 'react';
import ProductDetail from '../ProductDetail.json';
import ListGroup from 'react-bootstrap/ListGroup';
import './ProductIdDetail.css';
const ProductIdDetail = (props) => {
    let pathArr = props?.location?.pathname.split("/");
    let id = pathArr ? pathArr[pathArr.length - 1] : "1";
    let productDetailFromId = ProductDetail.filter((item)=> item.id==id);
    console.log('productDetailFromId',productDetailFromId);
    let title = productDetailFromId[0] && productDetailFromId[0]?.title;
    let description = productDetailFromId[0] && productDetailFromId[0]?.description;
    let tableHeaders = Object.keys(description);
 return (
    <div>
    <div className="heading"><h2>{title}</h2></div>
    <ListGroup className="listGrp">
        {
            tableHeaders.map((data)=>{
                return <ListGroup.Item>{data + "  :  " + description[data]}</ListGroup.Item>
            })
        }
      
    </ListGroup>
    </div>
 )
}

export default ProductIdDetail;