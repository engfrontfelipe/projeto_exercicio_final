import React from "react";
import {
  Overlay,
  ModalContent,
  CloseButton,
  Img,
  H2,
  P,
  Button,
  DivGrid,
} from "./styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  text?: string;
  image?: string;
  price?: number;
  portion?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
  image,
  price,
  portion,
}) => {
  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {image && <Img src={image} alt={title} />}
        <DivGrid>
          {title && <H2>{title}</H2>}
          {text && <P>{text}</P>}

          {portion && <P>{portion}</P>}
          <Button>Adicionar ao Carrinho - R$ {price}</Button>
        </DivGrid>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
