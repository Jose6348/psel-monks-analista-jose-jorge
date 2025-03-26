import React, { useState } from 'react';
import styled from 'styled-components';
import userMonks from '../assets/images/User_monks.png';

const FormSection = styled.section`
  padding: 2rem;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 500px;
`;

const Illustration = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    width: 100%;
    height: auto;
    opacity: 0.9;
  }
`;

const FormContainer = styled.div`
  flex: 2;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

const SubDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  font-style: italic;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #666;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #8a2be2;
  }
`;

const CaptchaContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const CaptchaNumber = styled.span`
  font-size: 1rem;
  color: #8a2be2;
  background-color: #eee;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;

  &:hover {
    background-color: #7a1dd2;
  }

  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  grid-column: 1 / -1;
  color: #ff4444;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  grid-column: 1 / -1;
  color: #4caf50;
  background-color: #e8f5e9;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    categoria: '',
    categoria2: '',
    categoria3: '',
    categoria4: '',
    captcha: '',
  });

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);
  const [resposta, setResposta] = useState(null);

  const captchaNum1 = 427;
  const captchaNum2 = 628;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar captcha
    if (Number(formData.captcha) !== captchaNum1 + captchaNum2) {
      setErro('Verificação de segurança incorreta');
      return;
    }

    setEnviando(true);
    setErro(null);
    setResposta(null);

    try {
      const response = await fetch('http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formulario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: formData.categoria,  // usando categoria como nome
          email: formData.categoria2, // usando categoria2 como email
          categoria3: formData.categoria3,
          categoria4: formData.categoria4,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResposta(data);
        // Limpar formulário após sucesso
        setFormData({
          categoria: '',
          categoria2: '',
          categoria3: '',
          categoria4: '',
          captcha: '',
        });
      } else {
        setErro(data.message || 'Erro ao enviar o formulário.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor. Verifique se o WordPress está rodando.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <FormSection>
      <Illustration>
        <img src={userMonks} alt="Monks - Sua parceira em tecnologia" />
      </Illustration>
      <FormContainer>
        <Title>Vamos criar algo incrível juntos?</Title>
        <Description>
          Somos especialistas em desenvolvimento de software e transformação digital. 
          Com mais de 10 anos de experiência, ajudamos empresas a crescerem através da tecnologia.
          Conte-nos sobre seu projeto e descubra como podemos ajudar sua empresa a se destacar no mundo digital.
        </Description>
        <SubDescription>
          *Preencha os campos abaixo e nossa equipe entrará em contato em até 24 horas
        </SubDescription>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="categoria">Como podemos te chamar?*</Label>
            <Input
              type="text"
              id="categoria"
              value={formData.categoria}
              onChange={(e) => setFormData({...formData, categoria: e.target.value})}
              placeholder="Seu nome completo"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="categoria2">Qual seu melhor e-mail?*</Label>
            <Input
              type="email"
              id="categoria2"
              value={formData.categoria2}
              onChange={(e) => setFormData({...formData, categoria2: e.target.value})}
              placeholder="email@suaempresa.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label>Qual solução você procura?</Label>
            <Input
              type="text"
              value={formData.categoria3}
              onChange={(e) => setFormData({...formData, categoria3: e.target.value})}
              placeholder="Ex: Site, Aplicativo, Sistema Web, E-commerce"
            />
          </FormGroup>

          <FormGroup>
            <Label>Qual a dimensão do seu projeto?</Label>
            <Input
              type="text"
              value={formData.categoria4}
              onChange={(e) => setFormData({...formData, categoria4: e.target.value})}
              placeholder="Ex: Startup, Média Empresa, Grande Porte"
            />
          </FormGroup>

          <CaptchaContainer>
            <Label>Confirme que você é humano*</Label>
            <CaptchaNumber>{captchaNum1}</CaptchaNumber>
            <span>+</span>
            <CaptchaNumber>{captchaNum2}</CaptchaNumber>
            <span>=</span>
            <Input
              type="text"
              value={formData.captcha}
              onChange={(e) => setFormData({...formData, captcha: e.target.value})}
              placeholder="Resultado da soma"
              style={{ width: '120px' }}
              required
            />
          </CaptchaContainer>

          {erro && <ErrorMessage>{erro}</ErrorMessage>}
          {resposta && (
            <SuccessMessage>
              <h3>Ótimo! Recebemos sua mensagem.</h3>
              <p>
                Estamos ansiosos para conhecer mais sobre seu projeto! 
                Um de nossos consultores entrará em contato para uma conversa personalizada.
              </p>
              {resposta.id && <p>Seu número de protocolo: #{resposta.id}</p>}
            </SuccessMessage>
          )}

          <SubmitButton 
            type="submit" 
            disabled={enviando || !formData.categoria || !formData.categoria2 || !formData.captcha || Number(formData.captcha) !== captchaNum1 + captchaNum2}
          >
            {enviando ? 'Enviando sua mensagem...' : 'Começar Meu Projeto'}
          </SubmitButton>
        </Form>
      </FormContainer>
    </FormSection>
  );
};

export default ContactForm; 