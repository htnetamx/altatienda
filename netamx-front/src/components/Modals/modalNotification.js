/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Clipboard from 'react-clipboard.js';

const ModalNotification = (props) => {
  const {
    textBody,
    titleModal,
    modal,
    nameStore, 
    urlGenerada
  } = props;
  const msj = `Hola!%20Encuentra%20🧻🧻%20papel%20higiénico%20Pétalo%2012%20rollos%20a%20$30%20pesitos%20(%20~antes%20$69%20pesos~%20)%20en%20*${nameStore}*,%20sí%20juntamos%2010%20clientes%20entre%20todos!%20Ingresa%20a%20esta%20liga%20y%20compártela%20cuando%20termines%20para%20que%20lleguemos%20a%2010%20🥳🥳:%20${props.urlGenerada}`;
  

  const Emoji = props => (
    <span
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
    >
      {props.symbol}
    </span>
  )

  

  const toggle = () => props.closeModal();
  const clean = () => {
    if (props.cleanInputs){
      props.cleanInputs();
    }
    setTimeout(() => {
      toggle();
    }, 5000);
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          <h1 style={{textAlign:"center", marginBottom:20}}>{titleModal}</h1>
          {textBody === '' ? <div>
          ¡<strong>{nameStore}</strong> bienvenido a *netamx*! <Emoji label="wave-hand" symbol="👋🏼"/><Emoji label="party-face" symbol="🥳"/><br/>
          En esta liga encontrarás el mejor catálogo de productos y las mejores promociones de todo México! <Emoji label="money-face" symbol="🤑"/><Emoji label="surprise-face" symbol="😱"/><Emoji label="smiley-face" symbol="😁"/><br/>
          ¡Comparte esta liga todos los días con tus clientes, amigos y vecinos para que empiecen a comprar! <Emoji label="shoppin-cart" symbol="🛒"/><Emoji label="money-bag" symbol="💰"/><br/>
          {urlGenerada}
          </div>
          : textBody}
            {urlGenerada === '' ? null :  <div style={{textAlign:"center", marginTop:30}}><Clipboard data-clipboard-text={props.urlGenerada} style={{border:0, background:'none'}}>
            <a onClick={clean} className="btn btn-secondary" href={"https://api.whatsapp.com/send?text="+msj} target="_blank">Enviar url por  WhatsApp</a></Clipboard></div>}
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalNotification;