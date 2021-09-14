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
  Col, Tooltip, Spinner,
} from 'reactstrap';
// core components
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_STORE } from '../../mutations';
import UserHeader from 'components/Headers/UserHeader.js';
import ModalNotification from 'components/Modals/modalNotification';
import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import Select from "react-dropdown-select";
import { error } from 'jquery';
const Profile = () => {
  const [storeName, setStoreName] = useState('');
  //const [hostValue, setHostValue] = useState('https://tutienda.netamx.app');
  const [phoneStore, setPhoneStore] = useState('');
  const [phoneStore2, setPhoneStore2] = useState('');
  const [tipo, setTipo] = useState('');
  const [addressStore, setAddressStore] = useState('');
  const [hunterStore, setHunterStore] = useState('');
  const [placeId, setplaceId] = useState('');
  const [errorForm, setErrorForm] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [textTitleModal, setTextTitleModal]= useState('Titulo del Modal');
  const [textBodyModal, setTextBodyModal]= useState('Texto modal');
  const [urlGenerada, setUrlGenerada] =  useState('https://tutiendita.netamx.app')
  const [nameStore, setNameStore] =  useState('')
  const [modal, setModal] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpenCompany, setTooltipOpenCompany] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setAddressStore(e.value.description);
      setplaceId(e.value.place_id);
  };

  const updateNameCompany = (e) => {
    setCompanyName(e.target.value);
  };

  const updateHunter = (e) => {
    setHunterStore(e[0].value);
  };

  const updatePhone = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhoneStore(e.target.value);
    }
  };

  const updatePhone2 = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
      setPhoneStore2(e.target.value);
    }
  };

  const updateTipo = (e) => {
      setTipo(e[0].value);
  };

  const [saveStore] = useMutation(CREATE_STORE, {
    onCompleted({ createStore }) {
      if (createStore.statusCode === 200) {
        const data = JSON.parse(createStore.response);
        //console.log("data obtendida:", data)
        setTextTitleModal('Guardado exitoso');
        setTextBodyModal('');
        setUrlGenerada(data.url)
        setNameStore(data.storeName);
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
      setLoading(false);
    },
    onError(error) {
      console.log(error);
    },
  });

  const closeModal = () => setModal(!modal);

  const cleanInputs = () => {
    setStoreName('');
    setCompanyName('');
    setAddressStore('');
    setPhoneStore('');
    setPhoneStore2('');
    setTipo('');
    setHunterStore('');
    setplaceId('');
  }

  const validateForm = () => {
    if(storeName === '' || storeName === null || storeName === undefined || phoneStore === '' || phoneStore === null || phoneStore === undefined || phoneStore2 === '' || phoneStore2 === null || phoneStore2 === undefined || tipo === '' || tipo === null || tipo === undefined|| addressStore === '' || addressStore === null || addressStore === undefined ||  companyName === '' || companyName === null || companyName === undefined || hunterStore === '' || hunterStore === null || hunterStore === undefined ){
      setErrorForm('Todos los campos son obligatorios');
      setTimeout(() => {
        setErrorForm('');
      }, 3000);
    }else{
      setLoading(true);
      saveStore({
        variables: {
          storeName,
          companyName,
          companyAddress: addressStore,
          companyPhoneNumber: phoneStore,
          companyPhoneNumber2: phoneStore2,
          hunter: hunterStore,
          tipo:tipo,
          placeId: placeId
        },
      });
    }
  };
  
  const hunterOptions = [
    { value: 'Alexis', label: 'Alexis'},
    { value: 'Estrella', label: 'Estrella'},
    { value: 'Javier', label: 'Javier' },
    { value: 'Javier Leyte', label: 'Javier Leyte'},
    { value: 'Jorge Eduardo', label: 'Jorge Eduardo' },
    { value: 'Ninguno, llegué solo', label: 'Ninguno, llegué solo'}
  ]
 
  const tipoOptions = [
    { value: 'Tienda Abarrotes', label: 'Tienda Abarrotes'},
    { value: 'Pollería', label: 'Pollería'},
    { value: 'Papelería', label: 'Papelería' },
    { value: 'Farmacia', label: 'Farmacia'},
    { value: 'Panadería', label: 'Panadería' },
    { value: 'Restaurante', label: 'Restaurante' },
    { value: 'Dulcería', label: 'Dulcería' },
    { value: 'Otro', label: 'Otro'}
  ]
  
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
                            maxLength={12}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="phoneStore2"
                          >
                            Teléfono 2
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="phoneStore2"
                            value={phoneStore2}
                            type="text"
                            onChange={updatePhone2}
                            maxLength={12}
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
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="tipoStore"
                            >
                              Tipo De La Tienda
                            </label>
                            <Select
                              className="form-control-alternative"
                              options={tipoOptions} 
                              onChange={updateTipo}
                              />
                          </FormGroup>
                      </Col>
                      <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="hunterStore"
                            >
                              Hunter
                            </label>
                            <Select
                              className="form-control-alternative"
                              options={hunterOptions} 
                              onChange={updateHunter}
                              />
                          </FormGroup>
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
                    </Row>
                    {/* <Row>
                      <Col lg="6">
                        <FormGroup>
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
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Row>
                      <Col md={12}>
                        <label
                              className="form-control-label"
                              htmlFor="addressStore"
                            >
                              Dirección
                            </label>
                          <GooglePlacesAutocomplete
                              onPlaceSelected={updateAdress}
                              language={"es"}
                              placeholder="Dirección Tiendita"
                              autocompletionRequest={{
                                  componentRestrictions: {
                                      country: ['mx']
                                  }
                              }}
                              selectProps={{
                                onChange: updateAdress
                              }}
                          />
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
                <div style={{ textAlign: 'center' }}>
                {loading ? <Spinner  color="info" /> : <Button onClick={validateForm}>Dar de alta</Button>}
                  <div style={{color:'red', marginTop:15}}>{errorForm}</div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    <ModalNotification textBody={textBodyModal} titleModal={textTitleModal} modal={modal} closeModal={closeModal} urlGenerada={urlGenerada} cleanInputs={cleanInputs} nameStore={nameStore}/>
    </>
  );
};

export default Profile;
