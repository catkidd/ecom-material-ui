import { Box, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddProductButton = () => {
  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [file, setFile] = useState();
  const [productTitle, setProductTitle] = useState();
  const [productDesc, setProductDesc] = useState();
  const [productPrice, setProductPrice] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(file);
    console.log(productTitle);
    console.log(productDesc);
    console.log(productPrice);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("productTitle", productTitle);
    formData.append("productDesc", productDesc);
    formData.append("productPrice", productPrice);
    console.log(formData);

    axios
      .post("http://localhost:5000/api/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        handleClose();
      });
  };

  return (
    <div>
      <>
        <Button variant="primary"
onClick={handleShow}>
          Add Products
        </Button>

        <Modal show={show}
onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Product Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Title"
                  onChange={(e) => setProductTitle(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e) => setProductDesc(e.target.value)}
                  rows={3}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Product Price"
                  onChange={(e) => setProductPrice(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Product Image</Form.Label>
                <Form.Control type="file"
onChange={(e) => setFile(e.target.value)}
autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary"
onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"
onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddProductButton;
