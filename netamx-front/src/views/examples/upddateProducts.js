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
import {useState} from 'react'
;import { CSVLink } from 'react-csv';
import { useMutation, useQuery } from '@apollo/client';
import { LOAD_MASSIVE_PRODUCTS } from '../../mutations';
import { GET_LIST_REGISTER_PRODUCTS } from '../../queries';
import UserHeader from 'components/Headers/HeaderNeta';
import HistoryData from 'components/Tables/HistoryData';
import ModalUpload from 'components/Modals/modalUploads';

const UpdateProducts = () => {
  const headers = [
    { label: 'ProductId', key: 'PI' },
    { label: 'ProductType', key: 'PT' },
    { label: 'ParentGroupedProductId', key: 'PGPI' },
    { label: 'VisibleIndividually', key: 'VI' },
    { label: 'Name', key: 'name' },
    { label: 'ShortDescription', key: 'SD' },
    { label: 'FullDescription', key: 'FD' },
    { label: 'Vendor', key: 'vendor' },
    { label: 'ProductTemplate', key: 'PTem' },
    { label: 'ShowOnHomepage', key: 'SOH' },
    { label: 'DisplayOrder', key: 'DO' },
    { label: 'MetaKeywords', key: 'MK' },
    { label: 'MetaDescription', key: 'MD' },
    { label: 'MetaTitle', key: 'MT' },
    { label: 'SeName', key: 'SN' },
    { label: 'AllowCustomerReviews', key: 'ACR' },
    { label: 'Published', key: 'published' },
    { label: 'SKU', key: 'sku' },
    { label: 'ManufacturerPartNumber', key: 'MPN' },
    { label: 'Gtin', key: 'gtin' },
    { label: 'IsGiftCard', key: 'IGC' },
    { label: 'GiftCardType', key: 'GCT' },
    { label: 'OverriddenGiftCardAmount', key: 'OGCA' },
    { label: 'RequireOtherProducts', key: 'ROP' },
    { label: 'RequiredProductIds', key: 'RPI' },
    { label: 'AutomaticallyAddRequiredProducts', key: 'AARP' },
    { label: 'IsDownload', key: 'ID' },
    { label: 'DownloadId', key: 'DI' },
    { label: 'UnlimitedDownloads', key: 'UD' },
    { label: 'MaxNumberOfDownloads', key: 'MND' },
    { label: 'DownloadActivationType', key: 'DAT' },
    { label: 'HasSampleDownload', key: 'HSD' },
    { label: 'SampleDownloadId', key: 'SDI' },
    { label: 'HasUserAgreement', key: 'HUA' },
    { label: 'UserAgreementText', key: 'UAT' },
    { label: 'IsRecurring', key: 'IR' },
    { label: 'RecurringCycleLength', key: 'RCL' },
    { label: 'RecurringCyclePeriod', key: 'RCP' },
    { label: 'RecurringTotalCycles', key: 'RTC' },
    { label: 'IsRental', key: 'IRental' },
    { label: 'RentalPriceLength', key: 'RPL' },
    { label: 'RentalPricePeriod', key: 'RPP' },
    { label: 'IsShipEnabled', key: 'ISE' },
    { label: 'IsFreeShipping', key: 'IFS' },
    { label: 'ShipSeparately', key: 'SS' },
    { label: 'AdditionalShippingCharge', key: 'ASC' },
    { label: 'DeliveryDate', key: 'DD' },
    { label: 'IsTaxExempt', key: 'ITE' },
    { label: 'TaxCategory', key: 'TC' },
    { label: 'IsTelecommunicationsOrBroadcastingOrElectronicServices', key: 'ITOBOES' },
    { label: 'ManageInventoryMethod', key: 'MIM' },
    { label: 'ProductAvailabilityRange', key: 'PAR' },
    { label: 'UseMultipleWarehouses', key: 'UMW' },
    { label: 'WarehouseId', key: 'WHI' },
    { label: 'StockQuantity', key: 'SQ' },
    { label: 'DisplayStockAvailability', key: 'DSA' },
    { label: 'DisplayStockQuantity', key: 'DSQ' },
    { label: 'MinStockQuantity', key: 'MSQ' },
    { label: 'LowStockActivity', key: 'LSA' },
    { label: 'NotifyAdminForQuantityBelow', key: 'NAFQB' },
    { label: 'BackorderMode', key: 'BMO' },
    { label: 'AllowBackInStockSubscriptions', key: 'ABISS' },
    { label: 'OrderMinimumQuantity', key: 'OMQ' },
    { label: 'OrderMaximumQuantity', key: 'OMAXQ' },
    { label: 'AllowedQuantities', key: 'AQU' },
    { label: 'AllowAddingOnlyExistingAttributeCombinations', key: 'AAOEAC' },
    { label: 'NotReturnable', key: 'NOTR' },
    { label: 'DisableBuyButton', key: 'DBB' },
    { label: 'DisableWishlistButton', key: 'DWB' },
    { label: 'AvailableForPreOrder', key: 'AFPO' },
    { label: 'PreOrderAvailabilityStartDateTimeUtc', key: 'POASDTU' },
    { label: 'CallForPrice', key: 'CADP' },
    { label: 'Price', key: 'price' },
    { label: 'OldPrice', key: 'Oprice' },
    { label: 'ProductCost', key: 'PCost' },
    { label: 'CustomerEntersPrice', key: 'CEP' },
    { label: 'MinimumCustomerEnteredPrice', key: 'MCEP' },
    { label: 'MaximumCustomerEnteredPrice', key: 'MAXCEP' },
    { label: 'BasepriceEnabled', key: 'BEE' },
    { label: 'BasepriceAmount', key: 'BPA' },
    { label: 'BasepriceUnit', key: 'BPU' },
    { label: 'BasepriceBaseAmount', key: 'BBA' },
    { label: 'BasepriceBaseUnit', key: 'BBU' },
    { label: 'MarkAsNew', key: 'MAN' },
    { label: 'MarkAsNewStartDateTimeUtc', key: 'MANSDTU' },
    { label: 'MarkAsNewEndDateTimeUtc', key: 'MANEDTU' },
    { label: 'Weight', key: 'weight' },
    { label: 'Length', key: 'length' },
    { label: 'Width', key: 'width' },
    { label: 'Height', key: 'height' },
    { label: 'AvailableStartDateTimeUtc', key: 'ASDTU' },
    { label: 'AvailableEndDateTimeUtc', key: 'AEDTU' },
    { label: 'Categories', key: 'categories' },
    { label: 'Manufacturers', key: 'manufacturers' },
    { label: 'ProductTags', key: 'PTags' },
    { label: 'LimitedToStores', key: 'LTS' },
  ];
  const filas2 = [
    { PI: "", PT: "", PGPI: "", VI: "", name: "", SD:"", FD:"", vendor:"", PTem:"", SOH:"", DO:"", MK:"",MD:"", MT:"",SN:"", ACR:"", published:"", sku:"", MPN:"", gtin:"", IGC:"", GCT:"", OGCA:"", ROP:"", RPI:"", AARP:"", ID:"", DI:"", UD:"", MND:"", DAT:"", HSD:"", SDI:"", HUA:"", UAT:"", IR:"", RCL:"", RCP:"", RTC:"", IRental:"", RPL:"", RPP:"", ISE:"", IFS:"", SS:"", ASC:"", DD:"", ITE:"", TC:"", ITOBOES:"", MIM:"", PAR:"", UMW:"", WHI:"", SQ:"", DSA:"", DSQ:"", MSQ:"", LSA:"", NAFQB:"", BMO:"", ABISS:"", OMQ:"", OMAXQ:"", AQU:"", AAOEAC:"", NOTR:"", DBB:"", DWB:"", AFPO:"", POASDTU:"", CADP:"", price:"", Oprice:"", PCost:"", CEP:"", MCEP:"", MAXCEP:"", BEE:"", BPA:"", BPU:"", BBA:"", BBU:"", MAN:"", MANSDTU:"", MANEDTU:"", weight:"", length:"", width:"", height:"", ASDTU:"", AEDTU:"", categories:"", manufacturers:"", PTags:"", LTS:""},
    { PI: "", PT: "", PGPI: "", VI: "", name: "", SD:"", FD:"", vendor:"", PTem:"", SOH:"", DO:"", MK:"",MD:"", MT:"",SN:"", ACR:"", published:"", sku:"", MPN:"", gtin:"", IGC:"", GCT:"", OGCA:"", ROP:"", RPI:"", AARP:"", ID:"", DI:"", UD:"", MND:"", DAT:"", HSD:"", SDI:"", HUA:"", UAT:"", IR:"", RCL:"", RCP:"", RTC:"", IRental:"", RPL:"", RPP:"", ISE:"", IFS:"", SS:"", ASC:"", DD:"", ITE:"", TC:"", ITOBOES:"", MIM:"", PAR:"", UMW:"", WHI:"", SQ:"", DSA:"", DSQ:"", MSQ:"", LSA:"", NAFQB:"", BMO:"", ABISS:"", OMQ:"", OMAXQ:"", AQU:"", AAOEAC:"", NOTR:"", DBB:"", DWB:"", AFPO:"", POASDTU:"", CADP:"", price:"", Oprice:"", PCost:"", CEP:"", MCEP:"", MAXCEP:"", BEE:"", BPA:"", BPU:"", BBA:"", BBU:"", MAN:"", MANSDTU:"", MANEDTU:"", weight:"", length:"", width:"", height:"", ASDTU:"", AEDTU:"", categories:"", manufacturers:"", PTags:"", LTS:""},
  ];
  const [description, setDescription] = useState('Descripcion');
  const [textTitleModal, setTextTitleModal]= useState('Titulo del Modal');
  const [textBodyModal, setTextBodyModal]= useState('Texto modal');
  const [modal, setModal] = useState(false);
  const [dataTable, setDataTable] = useState([]);
  const [errorData, setErrorData] = useState('');

  const closeModal = () => setModal(!modal);

  const updateDescription = (e) =>{
setDescription(e.target.value);
  }

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

  const [createMassiveProducts] = useMutation(LOAD_MASSIVE_PRODUCTS, {
    onCompleted({ createMassiveProducts }) {
      if(createMassiveProducts.statusCode === 200){
        //console.log('todo ok');
        setTextTitleModal('Guardado exitoso');
        setTextBodyModal('Las modificaciones se han aplicado con éxito.');
        setModal(true)
      }else{
        //console.log('tuvimos error');
        const datos = JSON.parse(createMassiveProducts.response);
        setTextTitleModal('Necesitamos de tu atención');
        setTextBodyModal(`${datos.errorDocument} Por favor revise la información y vuelva a intentarlo. No se realizó ningún cambio.`);
        setModal(true)
      }
    },
    onError(err) {},
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
    //console.log('fileToUpload', fileToUpload);
    createMassiveProducts({
      variables: { doc: fileToUpload, Description: description },
    });
  };

  const checkInput = () => {
    const file = document.getElementsByName('archivosubido')[0].files[0];
    //console.log('file cargadooo', file);
    if (file !== undefined) {
      uploadFile(file);
    }else{
      setErrorData('Por favor seleccione un archivo');
      setTimeout(() => {
        setErrorData('');
      }, 3000);
    }
  };

  const updateData = (data) => {
    const datos = JSON.parse(data.getListLogCreateMassiveProducts.response);
    //console.log(datos)
    setDataTable(datos);
  };

  const { refetch } = useQuery(GET_LIST_REGISTER_PRODUCTS, {
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
                    <h3 className="mb-0">Subir productos</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                <Row>
                      
                  <Col lg="6" style={{marginBottom:40}}>
                    <label className="form-control-label" htmlFor="archivosubido">
                            Formato disponible 
                    </label><br/>
                    <CSVLink
                      data={filas2}
                      headers={headers}
                      filename={'layout-productos.csv'}
                    >
                      <div className="btn btn-secondary">Descargar layout</div>
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
                  <Col lg="6"><div style={{textAlign:"center"}}><Button onClick={checkInput}>Cargar archivo</Button></div>
                  <div style={{color:'red', marginTop:15, textAlign:"center"}}>{errorData}</div>
                  </Col>
                </Row>
                
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{marginTop:20}}>
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
              <CardBody>
               <HistoryData data={dataTable}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <ModalUpload textBody={textBodyModal} titleModal={textTitleModal} modal={modal} closeModal={closeModal}/>
      </Container>
    </>
  );
};

export default UpdateProducts;
