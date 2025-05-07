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

import { useDispatch } from "react-redux";
import { addItem } from "../../slices/cartSlice";



type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  text?: string;
  image?: string;
  price?: number;
  portion?: string;
  id?: number;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
  image,
  price,
  portion,
  id,
}) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleAddToCart = () => {
    if (id && title && price) {
      dispatch(
        addItem({
          id,
          name: title,
          price,
          quantity: 1,
          foto: image ?? "",
        })
      );
      onClose(); 
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {image && <Img src={image} alt={title} />}
        <DivGrid>
          {title && <H2>{title}</H2>}
          {text && <P>{text}</P>}
          {portion && <P>{portion}</P>}
          <Button onClick={handleAddToCart}>
            Adicionar ao Carrinho - R$ {price?.toFixed(2)}
          </Button>
        </DivGrid>
      </ModalContent>
    </Overlay>
  );
};

export default Modal;
