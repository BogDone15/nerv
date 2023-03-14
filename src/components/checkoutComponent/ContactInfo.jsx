import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 65%;
  height: 100%;
`;

const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-end;
  height: 6.8rem;
  border-bottom: 1px solid ${(props) => props.theme.colorBorder};
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  padding-left: 1.8rem;
  padding-bottom: 0.7rem;
  & > h2 {
    font-weight: 400;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
  }
`;

const WrapperTop = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  height: 4.6rem;
  padding-left: 1.8rem;
  border-left: 1px solid ${(props) => props.theme.colorBorder};
  border-bottom: 1px solid ${(props) => props.theme.colorBlack};
`;

const WrapperMain = styled.div`
  width: 100%;
  height: calc(100% - 11.4rem);
  border: 1px solid ${(props) => props.theme.colorBlack};
  border-top: none;
  padding: 2rem 2.5rem;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
`;

const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colorBorder};
  background: transparent;
  outline: none;
  width: 100%;
  height: 4.3rem;
  padding-left: 1rem;
`;

const InputPlaceHolder = styled.span`
  position: absolute;
  background: #cecece;
  padding: 0 0.8rem;
  left: 2rem;
  top: -0.8rem;
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.7rem;
  color: #000000;
  text-transform: uppercase;
  transition: all 0.2s ease;
`;

const InputBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > div {
    width: 50%;
  }
`;

const PaymentBlockTitle = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
  border: ${(props) =>
    props.hidePaymentBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
  padding: ${(props) => (props.hidePaymentBlock ? '0' : '1.4rem 0')};
  & > h2 {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
    text-align: center;
  }
`;

const InfoBlockTitle = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
  border: ${(props) =>
    props.hideInfoBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
  padding: ${(props) => (props.hideInfoBlock ? '0' : '1.4rem 0')};
  & > h2 {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
    text-align: center;
  }
`;

const Button = styled.button`
  padding: 1.4rem 0;
  cursor: pointer;
  & > span {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: #adadad;
  }
`;

const ContactBlockTitle = styled.div`
  position: relative;
  margin-bottom: 1.7rem;
  border: ${(props) =>
    props.hideContactBlock ? 'none' : `1px solid ${props.theme.colorBorder}`};
  padding: ${(props) => (props.hideContactBlock ? '0' : '1.4rem 0')};
  & > h2 {
    font-weight: 450;
    font-size: ${(props) => props.theme.fontsm};
    line-height: 1.8rem;
    color: ${(props) => props.theme.colorBlack};
    text-transform: uppercase;
    text-align: center;
  }
`;

const ContactBlock = styled.div`
  margin-bottom: 1.7rem;
`;

const InfoBlock = styled.div`
  margin-bottom: 1.7rem;
`;

const PaymentGroup = styled.div`
  display: ${(props) => (props.hidePaymentBlock ? 'none' : 'block')};
`;

const Edit = styled.div`
  position: absolute;
  top: 50%;
  right: 1.4rem;
  transform: translateY(-50%);
  font-weight: 450;
  font-size: ${(props) => props.theme.fontsm};
  line-height: 1.8rem;
  color: ${(props) => props.theme.colorBlack};
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
  &:before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colorMain};
    transform: translateX(-101%);
    backface-visibility: hidden;
    transform-origin: left;
    transition: all 0.2s ease;
  }
  &:hover {
    opacity: 0.7;

    &:before {
      transform: translateX(101%);
    }
  }
`;

export const ContactInfo = () => {
  const [hideContactBlock, setHideContactBlock] = useState(true);
  const [hideInfoBlock, setHideInfoBlock] = useState(false);
  const [hidePaymentBlock, setHidePaymentBlock] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const [editInfo, setEditInfo] = useState(false);

  const handleClick = (type) => {
    if (type === 'contact') {
      setHideContactBlock(false);
      setHideInfoBlock(true);
      setEditContact(true);
      setEditInfo(false);
    } else if (type === 'info') {
      setHideInfoBlock(false);
      setHidePaymentBlock(true);
      setEditInfo(true);
    }
  };

  const handleEdit = (type) => {
    if (type === 'contact') {
      setEditContact(false);
      setHideContactBlock(true);
      setHidePaymentBlock(false);
      setHideInfoBlock(false);
      setEditInfo(true);
    } else {
      setEditInfo(false);
      setEditContact(true);
      setHidePaymentBlock(false);
      setHideContactBlock(false);
      setHideInfoBlock(true);
    }
  };

  return (
    <Wrapper>
      <WrapperTitle>
        <h2>CONTACT INFORMATION</h2>
      </WrapperTitle>
      <WrapperTop>ORDER / CONTACT / SHIPPING / PAYMENT</WrapperTop>
      <WrapperMain>
        <Form>
          <ContactBlock>
            <ContactBlockTitle hideContactBlock={hideContactBlock}>
              <h2>01 CONTACT</h2>
              {editContact && (
                <Edit onClick={() => handleEdit('contact')}>[EDIT]</Edit>
              )}
            </ContactBlockTitle>
            {hideContactBlock && (
              <>
                <InputWrapper>
                  <Input type="email" name="email" />
                  <InputPlaceHolder>Email</InputPlaceHolder>
                </InputWrapper>
                <InputBlock>
                  <InputWrapper>
                    <Input type="text" name="name" />
                    <InputPlaceHolder>FIRST NAME</InputPlaceHolder>
                  </InputWrapper>
                  <InputWrapper>
                    <Input type="text" name="lastname" />
                    <InputPlaceHolder>LAST NAME</InputPlaceHolder>
                  </InputWrapper>
                </InputBlock>
                <Button type="button" onClick={() => handleClick('contact')}>
                  <span>CONTINUE</span>
                </Button>
              </>
            )}
          </ContactBlock>
          <InfoBlock>
            <InfoBlockTitle hideInfoBlock={hideInfoBlock}>
              <h2>02 SHIPPING INFO</h2>
              {editInfo && (
                <Edit onClick={() => handleEdit('info')}>[EDIT]</Edit>
              )}
            </InfoBlockTitle>
            {hideInfoBlock && (
              <>
                <InputWrapper>
                  <Input type="email" name="email" />
                  <InputPlaceHolder>Email</InputPlaceHolder>
                </InputWrapper>
                <InputWrapper>
                  <Input type="text" name="state" />
                  <InputPlaceHolder>State</InputPlaceHolder>
                </InputWrapper>
                <InputBlock>
                  <InputWrapper>
                    <Input type="text" name="code" />
                    <InputPlaceHolder>ZIP CODE</InputPlaceHolder>
                  </InputWrapper>
                  <InputWrapper>
                    <Input type="text" name="location" />
                    <InputPlaceHolder>CITY / TOWN</InputPlaceHolder>
                  </InputWrapper>
                </InputBlock>
                <InputWrapper>
                  <Input type="text" name="adress" />
                  <InputPlaceHolder>
                    ADRESS / STREET / BUILDING
                  </InputPlaceHolder>
                </InputWrapper>
                <InputWrapper>
                  <Input type="text" name="appartment" />
                  <InputPlaceHolder>
                    APPARTMENT / SUIT ( OPTIONAL)
                  </InputPlaceHolder>
                </InputWrapper>
                <InputWrapper>
                  <Input type="tel" name="phone" />
                  <InputPlaceHolder>CELL PHONE NUMBER</InputPlaceHolder>
                </InputWrapper>
                <Button type="button" onClick={() => handleClick('info')}>
                  <span>CONTINUE</span>
                </Button>
              </>
            )}
          </InfoBlock>
          <PaymentBlockTitle hidePaymentBlock={hidePaymentBlock}>
            <h2>03 PAYMENT</h2>
          </PaymentBlockTitle>
          {hidePaymentBlock && (
            <PaymentGroup>
              <Button type="button">
                <span>PAY WIA FONDY </span>
              </Button>
            </PaymentGroup>
          )}
        </Form>
      </WrapperMain>
    </Wrapper>
  );
};
