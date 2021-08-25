
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Clipboard from 'react-clipboard.js';

const ModalNotification = (props) => {
  const {
    textBody,
    titleModal,
    modal,
  } = props;

  

  const toggle = () => props.closeModal();
  const clean = () => {
    if (props.cleanInputs){
      props.cleanInputs();
    }
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{titleModal}</ModalHeader>
        <ModalBody>
          {textBody} <br/>
          <div style={{textAlign:"center", marginTop:30}}>{props.urlGenerada}</div>
          <div style={{textAlign:"center", marginTop:30}}>
          <Clipboard data-clipboard-text={props.urlGenerada} style={{border:0, background:'none'}}>
            {props.urlGenerada === '' ? null :  <Button onClick={clean} color="secondary">Copiar URL</Button>}
          
      </Clipboard>
          </div>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalNotification;