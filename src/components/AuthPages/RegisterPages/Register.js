import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../../services/UserService";
import { useDispatch, useSelector } from "react-redux";
import {
  BgContainer,
  Container,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Text,
  Icon,
  Hr,
  Link,
} from "./Styled";
import { useEffect } from "react";

const Register = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const { pending } = useSelector((state) => state.user);
  const [userInformations, setUserInformations] = useState({
    name: "",
    email: "",
    password: "",
  });

  const disabled = userInformations.name && userInformations.password && userInformations.email;

  useEffect(() => {
    document.title = "Create a Account"
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(userInformations,dispatch);
    history.push('/login')
  };

  return (
    <>
      <BgContainer>
      </BgContainer>
      <Container>
        <FormSection>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Sign up for your account</Title>
              <Input
                type="text"
                placeholder="Enter name"
                required
                value={userInformations.name}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    name: e.target.value,
                  })
                }
              />
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
              <Text>
                By signing up, you confirm that you've read and accepted our{" "}
                <Link fontSize="0.75rem">Terms of Service</Link> and{" "}
                <Link fontSize="0.75rem">Privacy Policy</Link>.
              </Text>
              <Button type="submit" disabled={!disabled}>
                Complete
              </Button>
              <Hr />
              <Link fontSize="0.85rem" onClick={() => history.push("/login")}>
                Already have an account? Log In
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
