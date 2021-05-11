import React from "react";
import { Card, CardBody, CardImg, Col } from "reactstrap";

const Product = ({ name, img, price }) => {
  return (
    <Col>
      <Card>
        <CardImg src={img} />
        <CardBody>
          {name} -<span className="text-primary">GH₵{price}.00</span>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Product;
