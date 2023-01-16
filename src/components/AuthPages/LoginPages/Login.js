import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../services/UserService";
import {
  BgContainer,
  Container,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Icon,
  Hr,
  Link,
} from "./Styled";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [userInformations, setUserInformations] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Log in"
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(userInformations,dispatch);
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
              <Title>Log in</Title>
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Button>Log in</Button>
              <Hr />
              <Link
                fontSize="0.85rem"
                onClick={() => history.push("/register")}
              >
                Sign up for an account
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Login;
