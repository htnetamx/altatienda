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
  Col,
} from 'reactstrap';
// core components
import { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { useMutation, useQuery } from '@apollo/client';
import { LOAD_MASSIVE_PROMOTIONS } from '../../mutations';
import { GET_LIST_PROMOTIONS } from '../../queries';
import { Spinner } from 'reactstrap';
import UserHeader from 'components/Headers/HeaderNeta';
import HistoryData from 'components/Tables/HistoryData';
import ModalUpload from 'components/Modals/modalUploads';
import { useHistory } from 'react-router-dom';

const CreatePromotions = () => {
  const history = useHistory();
  const headers = [
    { label: 'ShowOnHomepage', key: 'sohp' },
    { label: 'SKU', key: 'sku' },
    { label: 'MaxNumberOfDownloads', key: 'mnod' },
    { label: 'ManageInventoryMethod', key: 'mim' },
    { label: 'StockQuantity', key: 'stockQ' },
    { label: 'DisplayStockAvailability', key: 'dsa' },
    { label: 'DisplayStockQuantity', key: 'dsq' },
    { label: 'LowStockActivity', key: 'lsa' },
    { label: 'NotifyAdminForQuantityBelow', key: 'nafqb' },
    { label: 'BackorderMode', key: 'bm' },
    { label: 'OrderMinimumQuantity', key: 'orderMinQ' },
    { label: 'OrderMaximumQuantity', key: 'orderMaxQ' },
    { label: 'Price', key: 'price' },
    { label: 'OldPrice', key: 'oldPrice' },
    { label: 'MarkAsNew', key: 'man' },
    { label: 'AvailableStartDateTimeUtc', key: 'asdtu' },
    { label: 'AvailableEndDateTimeUtc', key: 'aedtu' },
  ];
  const filas2 = [
    {
      sohp: '',
      sku: '',
      mnod: '',
      mim: '',
      stockQ: '',
      dsa: '',
      dsq: '',
      lsa: '',
      nafqb: '',
      bm: '',
      orderMinQ: '',
      orderMaxQ: '',
      price: '',
      oldPrice: '',
      man: '',
      asdtu: '',
      aedtu: '',
    },
    {
      sohp: '',
      sku: '',
      mnod: '',
      mim: '',
      stockQ: '',
      dsa: '',
      dsq: '',
      lsa: '',
      nafqb: '',
      bm: '',
      orderMinQ: '',
      orderMaxQ: '',
      price: '',
      oldPrice: '',
      man: '',
      asdtu: '',
      aedtu: '',
    },
  ];
  const [description, setDescription] = useState('Creación de promociones');
  const [textTitleModal, setTextTitleModal] = useState('Titulo del Modal');
  const [textBodyModal, setTextBodyModal] = useState('Texto modal');
  const [modal, setModal] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [errorData, setErrorData] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorDetail, setErrorDetail] = useState([]);

  const closeModal = () => setModal(!modal);

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const getBase64 = (file) => {
    const data = new Promise((resolve) => {
      let baseURL = '';
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
    return data;
  };

  const [createMassiveProducts] = useMutation(LOAD_MASSIVE_PROMOTIONS, {
    onCompleted({ updateMassivePromotionsProducts }) {
      if (updateMassivePromotionsProducts.statusCode === 200) {
        setTextTitleModal('Guardado exitoso');
        setTextBodyModal('Las modificaciones se han aplicado con éxito.');
        setModal(true);
        setErrorDetail([]);
        refetch();
      } else {
        const datos = JSON.parse(updateMassivePromotionsProducts.response);
        //console.log('datos error', datos);
        setErrorDetail(datos.errorDetail);
        setTextTitleModal('Necesitamos de tu atención');
        setTextBodyModal(
          `${
            datos.errorDocument === undefined || datos.errorDocument === ''
              ? 'Hemos encontrado algunos errores.'
              : datos.errorDocument
          } Por favor revise la información y vuelva a intentarlo. No se realizó ningún cambio.`
        );
        setModal(true);
      }
      setLoading(false);
    },
    onError(err) {
      setErrorDetail([]);
      setLoading(false);
      setTextTitleModal('Lo sentimos');
      setTextBodyModal(
        'Nuestro servicio ha presentado fallas, por favor intente mas tarde'
      );
      setModal(true);
    },
  });
  const uploadFile = async (file) => {
    const streamString = await getBase64(file);
    const partsStream = streamString.split(',');
    const fileToUpload = {
      File: {
        path: file.name,
        mimetype: partsStream[0].split(';')[0].replace('data:', ''),
        encoding: partsStream[0].split(';')[1],
        body: partsStream[1],
      },
    };
    createMassiveProducts({
      variables: { doc: fileToUpload, Description: description },
    });
  };

  const checkInput = () => {
    const file = document.getElementsByName('archivosubido')[0].files[0];
    if (file !== undefined) {
      if (
        file.type === 'text/csv' ||
        file.type === 'application/vnd.ms-excel'
      ) {
        setErrorData(
          'Formato de archivo no válido, por favor guarde el layout en formato Excel (.xls)'
        );
        setTimeout(() => {
          setErrorData('');
        }, 5000);
      } else {
        uploadFile(file);
        setLoading(true);
      }
    } else {
      setErrorData('Por favor seleccione un archivo');
      setTimeout(() => {
        setErrorData('');
      }, 3000);
    }
  };

  useEffect(() => {
    if (!sessionStorage.getItem('session')) {
      history.push('/access/login');
    }
  }, [history]);

  const updateData = (data) => {
    if (data.getListLogCreateMassiveProductsPromotions.statusCode === 200) {
      const datos = JSON.parse(
        data.getListLogCreateMassiveProductsPromotions.response
      );
      setDataTable(datos);
    } else {
      setDataTable([]);
    }
  };

  const { refetch } = useQuery(GET_LIST_PROMOTIONS, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (dat) => updateData(dat),
  });

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
                    <h3 className="mb-0">Crear promociones</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col lg="6" style={{ marginBottom: 40 }}>
                      <label
                        className="form-control-label"
                        htmlFor="archivosubido"
                      >
                        Formato disponible
                      </label>
                      <br />
                      <CSVLink
                        data={filas2}
                        headers={headers}
                        filename={'layout-create-promotions.csv'}
                      >
                        <div className="btn btn-secondary">
                          Descargar layout
                        </div>
                      </CSVLink>
                    </Col>
                    <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="archivosubido"
                        >
                          Seleccionar archivo
                        </label>

                        <Input
                          className="form-control-alternative"
                          id="archivosubido"
                          placeholder="Username"
                          type="file"
                          name="archivosubido"
                        />
                      </FormGroup>
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="description"
                        >
                          Descripción
                        </label>

                        <Input
                          className="form-control-alternative"
                          id="description"
                          type="text"
                          name="description"
                          placeholder="Descripción"
                          onChange={updateDescription}
                          value={description}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                <Row>
                  <Col lg="6"></Col>
                  <Col lg="6">
                    <div style={{ textAlign: 'center' }}>
                      {loading ? (
                        <Spinner color="info" />
                      ) : (
                        <Button onClick={checkInput}>Cargar archivo</Button>
                      )}
                    </div>
                    <div
                      style={{
                        color: 'red',
                        marginTop: 15,
                        textAlign: 'center',
                      }}
                    >
                      {errorData}
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Registros de inserciones</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody className="container-log">
                <HistoryData data={dataTable} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalUpload
          textBody={textBodyModal}
          titleModal={textTitleModal}
          modal={modal}
          closeModal={closeModal}
          errorDetail={errorDetail}
        />
      </Container>
    </>
  );
};

export default CreatePromotions;
