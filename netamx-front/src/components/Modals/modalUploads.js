
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalUpload = (props) => {
  const {
    textBody,
    titleModal,
    modal,
  } = props;

  

  const toggle = () => props.closeModal();
  

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{titleModal}</ModalHeader>
        <ModalBody>
          {textBody} <br/>
          <div style={{textAlign:"center", marginTop:30}}>{props.urlGenerada}</div>
          <div style={{textAlign:"center", marginTop:30}}>
          <Button onClick={toggle} color="secondary">Aceptar</Button>
          </div>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalUpload;