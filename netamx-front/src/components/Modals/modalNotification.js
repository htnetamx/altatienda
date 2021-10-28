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
 const msj=`¡${nameStore}%20bienvenido%20a%20*netamx*!%20👋🏼🥳%0a
En%20esta%20liga%20encontrarás%20el%20mejor%20catálogo%20de%20productos%20y%20las%20mejores%20promociones%20de%20todo%20México!🤑😱😁%0a
¡Comparte%20esta%20liga%20todos%20los%20días%20con%20tus%20clientes,%20amigos%20y%20vecinos%20para%20que%20empiecen%20a%20comprar!🛒💰%0a
${urlGenerada}`

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