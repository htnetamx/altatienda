import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalUpload = (props) => {
  const { textBody, titleModal, modal, errorDetail } = props;

  //const ejem = ['errorejemplo1', 'errorejemplo2'];

  const getErrorsDetails = (data) =>
    data.map((error) => (
      <li key={error} style={{ fontSize: 12 }}>
        {error}
      </li>
    ));

  const toggle = () => props.closeModal();

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
            {titleModal}
          </h2>
          {textBody}
          <div style={{ marginTop: 10 }}>
            {errorDetail !== undefined ? (
              errorDetail.map((error) => (
                <div style={{ marginBottom: 5 }}>
                  <div>Fila: {error.fila}</div>
                  <ul>{getErrorsDetails(error.errors)}</ul>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <Button onClick={toggle} color="secondary">
              Aceptar
            </Button>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalUpload;
