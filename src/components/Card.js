import { Card, Button } from "react-bootstrap";
import { addToCart } from "src/redux/slice/cartSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

function MyCard(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAdd = (product) => {
    dispatch(addToCart(product));
    router.push({ pathname: "/cartProduct" });
  };

  return (
    <>
      <Card border="dark" 
        className="m-3 card-container">
        <Card.Img variant="top" 
          src={props.prodData.image}
          alt="abc" />
        <Card.Body>
          <Card.Title>{props.prodData.title}</Card.Title>

          <div className="price">
            <Card.Text>Price : {`$${props.prodData.price}`}</Card.Text>
            <Card.Text>Ratings : {`$${props.prodData.rating.rate}`}</Card.Text>
            {/* <Card.Text>Category : {props.prodData.category}</Card.Text> */}
          </div>
          <Button 
            onClick={() => handleAdd(props.prodData)} 
            variant="primary">
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;
