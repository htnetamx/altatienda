
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";

import { useState } from "react";
import { Spinner } from 'reactstrap';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../mutations';
import { useHistory } from "react-router";

const Login = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorForm, setErrorForm] = useState('');
  const [loading, setLoading] = useState(false);

  const updateName = (e) =>{
    setUserName(e.target.value);
  }

  const updatePassword = (e) =>{
    setPassword(e.target.value);
  }

  const [logIn] = useMutation(LOGIN, {
    onCompleted({ login }) {
      if (login.statusCode === 200) {
        sessionStorage.setItem('session', 'true');
        history.push('/admin/index');
      } else {
          setErrorForm(`${login.error}. Por favor verifique sus datos`);
          setTimeout(() => {
            setErrorForm('');
          }, 3000);
      }
      setLoading(false);
    },
    onError(error) {
      setLoading(false);
    },
  });

  const validateForm = () => {
    if(userName === '' || userName === null || userName === undefined || password === '' || password === null || password === undefined ){
      setErrorForm('Todos los campos son obligatorios');
      setTimeout(() => {
        setErrorForm('');
      }, 3000);
    }else{
      setLoading(true);
      logIn({
        variables: {
          nameUser: userName,
          password,
        },
      });
    }
  };
  

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <h1>Bienvenido</h1>
            </div>
            </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h3>Ingresa tus datos</h3>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="User name"
                    type="text"
                    value={userName}
                    onChange={updateName}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={updatePassword}
                  />
                </InputGroup>
              </FormGroup>
              
              <div className="text-center">
                {loading ? <Spinner  color="info" /> : <Button className="my-4" color="primary" type="button" onClick={validateForm}>Ingresar</Button>}
                <div style={{color:'red', marginTop:10}}>{errorForm}</div>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Login;
