import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #e66767;
  color: white;
  padding: 2rem;
  max-width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 315px;
  right: 4px;
  color: white;
  background-color: transparent;
  border: none;
  font-size: 2rem;
  font-weight: 100;
  cursor: pointer;
`;

export const Img = styled.img`
  max-width: 280px;
  height: 280px;
  object-fit: cover;
`;

export const H2 = styled.h2`
  color: #fff;
  margin-left: 24px;
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`;

export const P = styled.p`
  color: #fff;
  margin-left: 24px;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 16px;
  line-height: 25px;
`;

export const Button = styled.button`
  background-color: #fff;
  margin-left: 24px;
  width: 218px;
  height: 24px;
  border: none;
  padding: 4px 0;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const DivGrid = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
