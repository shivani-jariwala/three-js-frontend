import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editProduct } from "../../../services/ProductService";
import {
  BgContainer,
  Container,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Hr
} from "../LoginPages/Styled";

const EditProduct = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({
    name: "",
    description:"",
    price:"",
    id:history.location.state?.id
  });

//   useEffect(() => {
//     document.title = "Log in"
//   }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProduct(productInfo,dispatch);
    history.push('/products')
  };
  return (
    <>
      <BgContainer>
      </BgContainer>
      <Container>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Edit Product</Title>
              <Input
                type="text"
                placeholder="Edit Product Name"
                required
                value={productInfo.name}
                onChange={(e) =>
                  setProductInfo({
                    ...productInfo,
                    name: e.target.value,
                  })
                }
              />
              <Input
                type="text"
                placeholder="Enter Product Description"
                required
                value={productInfo.description}
                onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      description: e.target.value,
                    })
                  }
              />
              <Input
                type="number"
                placeholder="Enter Product Price"
                required
                value={productInfo.price}
                onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      price: e.target.value,
                    })
                  }
              />
              <Button>Submit</Button>
              <Hr />
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default EditProduct;
