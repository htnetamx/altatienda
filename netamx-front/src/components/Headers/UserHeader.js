// reactstrap components
import { Container, Row, Col } from 'reactstrap';

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: '400px',
          backgroundImage:
            'url(' +
            require('../../assets/img/theme/profile-cover.jpg').default +
            ')',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Alta de tiendas</h1>
              <p className="text-white mt-0 mb-5">
                A continuacion te dejamos un rápido formulario para poder dar de
                alta tu tienda. Te solicitamos solo los datos indispensables
                para ello. Al final, con el registro exítoso obtendrás la url
                que deberás compartir con todos tus clientes y empezar a vender.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
