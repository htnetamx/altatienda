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
import { useMutation } from '@apollo/client';
import { MUTATION_TEST } from '../../mutations';
import UserHeader from 'components/Headers/UserHeader.js';

const Upload = () => {
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

  const [createMassiveProducts] = useMutation(MUTATION_TEST, {
    onCompleted({ createMassiveProducts }) {},
    onError(err) {},
  });
  const uploadTest = async (file) => {
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
    console.log('fileToUpload', fileToUpload);
    createMassiveProducts({
      variables: { doc: fileToUpload, Description:'Carga masiva de productos Test' },
    });
  };

  const checkInput = () => {
    console.log(
      'archivo subido',
      document.getElementsByName('archivosubido')[0].files[0]
    );
    const file = document.getElementsByName('archivosubido')[0].files[0];
    console.log('file cargadooo', file);
    if (file === undefined) {
      console.log('no hay archivo');
    } else {
      uploadTest(file);
    }
  };

  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col
            className="order-xl-2 mb-5 mb-xl-0"
            xl="4"
            style={{ display: 'none' }}
          >
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={
                          require('../../assets/img/theme/team-4-800x800.jpg')
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <span className="heading">22</span>
                        <span className="description">Friends</span>
                      </div>
                      <div>
                        <span className="heading">10</span>
                        <span className="description">Photos</span>
                      </div>
                      <div>
                        <span className="heading">89</span>
                        <span className="description">Comments</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <h3>
                    Jessica Jones
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    Bucharest, Romania
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                  <hr className="my-4" />
                  <p>
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Upload</h3>
                  </Col>
                  <Col className="text-right" xs="4"></Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Carga Archivo
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="archivosubido"
                          >
                            Archivo elegido
                          </label>

                          <Input
                            className="form-control-alternative"
                            id="archivosubido"
                            placeholder="Username"
                            type="file"
                            name="archivosubido"
                            onChange={checkInput}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6"></Col>
                    </Row>
                  </div>
                </Form>
                <Button onClick={checkInput}>Cargar</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Upload;
