// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col, Tooltip
} from 'reactstrap';
// core components
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_STORE } from '../../mutations';
import UserHeader from 'components/Headers/UserHeader.js';
import ModalNotification from 'components/Modals/modalNotification';
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
const Profile = () => {
  const [storeName, setStoreName] = useState('');
  //const [hostValue, setHostValue] = useState('https://tutienda.netamx.app');
  const [phoneStore, setPhoneStore] = useState('');
  const [addressStore, setAddressStore] = useState('');
  const [hunterStore, setHunterStore] = useState('');
  const [placeId, setplaceId] = useState('');
  const [errorForm, setErrorForm] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [textTitleModal, setTextTitleModal]= useState('Titulo del Modal');
  const [textBodyModal, setTextBodyModal]= useState('Texto modal');
  const [urlGenerada, setUrlGenerada] =  useState('https://tutiendita.netamx.app')
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpenCompany, setTooltipOpenCompany] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  const toggleCompany = () => setTooltipOpenCompany(!tooltipOpenCompany);


  const updateName = (e) => {
    const re = /^[a-zA-Z0-9_ ]*$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setStoreName(e.target.value);
    }
    //let valueClean = e.target.value.replace(/ /g, '');
    //setHostValue(`https://${valueClean}.netamx.app`);
  };

  const updateAdress = (e) => {
      setAddressStore(e.description);
      setplaceId(e.place_id);
  };

  const updateNameCompany = (e) => {
    setCompanyName(e.target.value);
  };

  const updateHunter = (e) => {
    setHunterStore(e.target.value);
  };

  const updateplaceId = (e) => {
    setplaceId(e.target.value);
  };

  const updatePhone = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhoneStore(e.target.value);
    }
  };

  const [saveStore] = useMutation(CREATE_STORE, {
    onCompleted({ createStore }) {
      if (createStore.statusCode === 200) {
        const data = JSON.parse(createStore.response);
        //console.log("data obtendida:", data)
        setTextTitleModal('Guardado exitoso');
        setTextBodyModal(`La tienda se ha guardado con exito, a continuación te dejaremos la url que deberás copiar para compartirla con tus clientes:`);
        setUrlGenerada(data.url)
        setModal(true)
      } else if(createStore.statusCode === 401) {
        setTextTitleModal('Necesitamos de tu atención');
        setTextBodyModal(`La tienda no ha podido ser guardada debido a que el nombre de la tienda ya existe, por favor coloca en el campo Nombre de la tienda un identificador,  por ejemplo: "Nombre de mi tienda 2" y prueba de nuevo`);
        setUrlGenerada('')
        setModal(true)
      }
      else{
        setTextTitleModal('Lo sentimos');
        setTextBodyModal(`Hubo un error inesperadp, por favor intenta nuevamente en unos minutos`);
        setUrlGenerada('')
        setModal(true)
      }
    },
    onError(error) {
      
    },
  });

  const closeModal = () => setModal(!modal);

  const cleanInputs = () => {
    setStoreName('');
    setCompanyName('');
    setAddressStore('');
    setPhoneStore('');
    setPhoneStore('');
    setHunterStore('');
    setplaceIdStore('');
  }

  const validateForm = () => {
    if(storeName === '' || storeName === null || storeName === undefined || phoneStore === '' || phoneStore === null || phoneStore === undefined || addressStore === '' || addressStore === null || addressStore === undefined ||  companyName === '' || companyName === null || companyName === undefined || hunterStore === ''){
      setErrorForm('Todos los campos son obligatorios');
      setTimeout(() => {
        setErrorForm('');
      }, 3000);
    }else{
      saveStore({
        variables: {
          storeName,
          companyName,
          companyAddress: addressStore,
          companyPhoneNumber: phoneStore,
          hunter: hunterStore,
          placeId: placeId
        },
      });
      
    }
  };

 
  
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Para dar de alta una tienda necesitarás la siguiente información:</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="storeName"
                            
                          >
                            Nombre de la tienda <i style={{marginLeft:10}} className="ni ni-support-16" id="TooltipExample"/>
                            <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
                            Nombre comercial a mostrar en el sitio de la tienda
      </Tooltip>
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="storeName"
                            placeholder=""
                            type="text"
                            value={storeName}
                            onChange={updateName}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="companyName"
                          >
                            Nombre del dueño <i style={{marginLeft:10}} className="ni ni-support-16" id="TooltipExampleCompany"/>
                            <Tooltip placement="right" isOpen={tooltipOpenCompany} target="TooltipExampleCompany" toggle={toggleCompany}>
                            Nombre del propietario de la tienda
      </Tooltip>
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="companyName"
                            placeholder=""
                            type="text"
                            value={companyName}
                            onChange={updateNameCompany}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="phoneStore"
                          >
                            Teléfono
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="phoneStore"
                            value={phoneStore}
                            type="text"
                            onChange={updatePhone}
                            maxLength={10}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        {/*<FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="hostValue"
                          >
                            Valor del host
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="hostValue"
                            value={hostValue}
                            type="text"
                            disabled="disabled"
                          />
                        </FormGroup>*/}
                      </Col>
                    </Row>
                    <Row>
                      {/* <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="addressStore"
                          >
                            Dirección
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="addressStore"
                            value={addressStore}
                            type="text"
                            onChange={updateAdress}
                          />
                        </FormGroup>
                       </Col> */}
                      <Col md={12}>
                        <GooglePlacesAutocomplete
                            required={true}
                            inputClassName="form-control"
                            suggestionsStyles={{ boxSizing: "content-box", width: "2px", background: "0px center", border: "0px", fontSize: "inherit", opacity: "1", outline: "0px", padding: "0px", color: "inherit" }}
                            placeholder="Dirección Tiendita"
                            autocompletionRequest={{
                                componentRestrictions: {
                                    country: ['mx'],
                                }
                            }}
                            autoComplete={false}
                            onSelect={updateAdress}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="hunterStore"
                          >
                            Hunter
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="hunterStore"
                            value={hunterStore}
                            type="text"
                            onChange={updateHunter}
                            maxLength={50}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        {/*<FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="hostValue"
                          >
                            Valor del host
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="hostValue"
                            value={hostValue}
                            type="text"
                            disabled="disabled"
                          />
                        </FormGroup>*/}
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
                <div style={{ textAlign: 'center' }}>
                  <Button onClick={validateForm}>Dar de alta</Button>
                  <div style={{color:'red', marginTop:15}}>{errorForm}</div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    <ModalNotification textBody={textBodyModal} titleModal={textTitleModal} modal={modal} closeModal={closeModal} urlGenerada={urlGenerada} cleanInputs={cleanInputs}/>
    </>
  );
};

export default Profile;
