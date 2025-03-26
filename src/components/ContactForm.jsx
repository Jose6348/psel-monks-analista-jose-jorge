import React, { useState } from 'react';
import styled from 'styled-components';

const FormSection = styled.section`
  padding: 3rem 2rem;
  background-color: #1a1a1a;
  color: white;
  display: flex;
  align-items: center;
  gap: 4rem;
`;

const FormContainer = styled.div`
  flex: 1;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #cccccc;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #cccccc;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #222;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8a2be2;
  }
`;

const CaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const CaptchaNumber = styled.span`
  font-size: 1.2rem;
  color: #8a2be2;
`;

const SubmitButton = styled.button`
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a1dd2;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const Illustration = styled.div`
  flex: 1;
  max-width: 400px;

  svg {
    width: 100%;
    height: auto;
    stroke: #8a2be2;
    fill: none;
    stroke-width: 2;
  }
`;

const HandsIllustration = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="95" strokeWidth="1" opacity="0.2" />
    <path d="M70,100 C70,85 85,70 100,70 C115,70 130,85 130,100" strokeLinecap="round" />
    <path d="M60,90 C60,60 140,60 140,90" strokeLinecap="round" />
    <path d="M50,80 C50,40 150,40 150,80" strokeLinecap="round" />
    <path d="M65,110 C65,130 90,140 100,140 C110,140 135,130 135,110" strokeLinecap="round" />
    <circle cx="80" cy="95" r="5" fill="#8a2be2" />
    <circle cx="120" cy="95" r="5" fill="#8a2be2" />
  </svg>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    categoria: '',
    categoria2: '',
    categoria3: '',
    captcha: '',
  });

  const captchaNum1 = 427;
  const captchaNum2 = 628;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementar lógica de envio
  };

  return (
    <FormSection>
      <FormContainer>
        <Title>Lorem ipsum dolor sit amet consectetur</Title>
        <Description>Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing faucibus sit scelerisque</Description>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="categoria">Categoria*</Label>
            <Input
              type="text"
              id="categoria"
              value={formData.categoria}
              onChange={(e) => setFormData({...formData, categoria: e.target.value})}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="categoria2">Categoria</Label>
            <Input
              type="text"
              id="categoria2"
              value={formData.categoria2}
              onChange={(e) => setFormData({...formData, categoria2: e.target.value})}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="categoria3">Categoria</Label>
            <Input
              type="text"
              id="categoria3"
              value={formData.categoria3}
              onChange={(e) => setFormData({...formData, categoria3: e.target.value})}
            />
          </FormGroup>

          <CaptchaContainer>
            <Label>Verificação de segurança</Label>
            <CaptchaNumber>{captchaNum1}</CaptchaNumber>
            <span>+</span>
            <CaptchaNumber>{captchaNum2}</CaptchaNumber>
            <span>=</span>
            <Input
              type="text"
              value={formData.captcha}
              onChange={(e) => setFormData({...formData, captcha: e.target.value})}
              style={{ width: '80px' }}
              required
            />
          </CaptchaContainer>

          <SubmitButton 
            type="submit" 
            disabled={!formData.categoria || !formData.captcha || Number(formData.captcha) !== captchaNum1 + captchaNum2}
          >
            Lorem ipsum
          </SubmitButton>
        </Form>
      </FormContainer>

      <Illustration>
        <HandsIllustration />
      </Illustration>
    </FormSection>
  );
};

export default ContactForm; 