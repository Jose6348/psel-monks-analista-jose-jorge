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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
    align-items: stretch;
  }
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

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
    
    img {
      max-width: 200px;
    }
  }
`;

const FormContainer = styled.div`
  flex: 2;
  background-color: #eae8e4;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 20px;
    margin: 12px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 0.85rem;
  }
`;

const SubDescription = styled.p`
  color: #666;
  margin-bottom: 2rem;
  font-size: 0.8rem;
  font-style: italic;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2D2D2D;
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
    border-color: #6B46C1;
  }
`;

const CaptchaContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  color: #7D26C9;
`;

const CaptchaOperation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;

  span {
    color: #7D26C9;
  }
`;

const CaptchaNumber = styled.span`
  font-size: 1rem;
  color: #7D26C9;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  background-color: #f0f0f0;
`;

const CaptchaInput = styled(Input)`
  max-width: 120px;
  margin-left: 0.5rem;
  color: #7D26C9;
  
  @media (max-width: 768px) {
    max-width: 150px;
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background-color: #DFBBFE;
  color: #2D2D2D;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;
  align-items: center;

  &:hover {
    background-color: #553C9A;
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

const ManageButton = styled(SubmitButton)`
  background-color: #DFBBFE;
  margin-left: 1rem;
  color: #2D2D2D;
  align-items: center;

  &:hover {
    background-color: #553C9A;
  }

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    
    button {
      width: 100%;
      
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2.5rem;
  border-radius: 12px;
  width: 90%;
  max-width: 900px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f0f0f0;

  h2 {
    font-size: 1.8rem;
    color: #333;
    margin: 0;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  align-items: flex-end;
`;

const SearchGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
`;

const SearchLabel = styled.label`
  font-size: 0.9rem;
  color: #666;
  font-weight: 500;
`;

const FormList = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormItem = styled.div`
  padding: 1.5rem;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-color: #ddd;
  }
`;

const FormItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.1rem;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
    font-size: 0.95rem;
  }
`;

const IdTag = styled.span`
  color: #666;
  font-size: 0.85rem;
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 12px;
  margin-bottom: 0.3rem;
  display: inline-block;
`;

const ActionButton = styled.button`
  padding: 0.7rem 1.2rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${props => props.color || '#7D26C9'};
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.color ? props.color : '#553C9A'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditFormContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1.5rem;
  background-color: #F8F9FA;
  border-radius: 8px;
  border-left: 4px solid #8a2be2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const EditFormTitle = styled.h3`
  color:rgb(0, 0, 0);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:before {
    content: '✏️';
  }
`;

const EditFormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    solucao: '',
    dimensao: '',
    captcha: '',
  });

  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(null);
  const [resposta, setResposta] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formularios, setFormularios] = useState([]);
  const [editingForm, setEditingForm] = useState(null);
  const [searchParams, setSearchParams] = useState({ id: '', dimensao: '' });

  const captchaNum1 = 427;
  const captchaNum2 = 628;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação dos campos obrigatórios
    if (!formData.nome.trim()) {
      setErro('O campo nome é obrigatório');
      return;
    }

    if (!formData.email.trim()) {
      setErro('O campo email é obrigatório');
      return;
    }

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
          nome: formData.nome.trim(),
          email: formData.email.trim(),
          solucao: formData.solucao.trim(),
          dimensao: formData.dimensao.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setResposta(data);
        // Limpar formulário após sucesso
        setFormData({
          nome: '',
          email: '',
          solucao: '',
          dimensao: '',
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

  const fetchFormularios = async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios`);
      if (!response.ok) {
        throw new Error('Erro ao buscar formulários');
      }
      const data = await response.json();
      console.log('Dados recebidos:', JSON.stringify(data, null, 2)); // Log detalhado
      setFormularios(data);
      setErro(null);
    } catch (error) {
      console.error('Erro completo:', error);
      setErro('Erro ao carregar formulários: ' + error.message);
      setFormularios([]);
    }
  };

  const handleSearch = async () => {
    try {
      let url = 'http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios';
      
      // Se tiver ID, busca diretamente pelo ID
      if (searchParams.id) {
        url = `http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${searchParams.id}`;
        const response = await fetch(url);
        
        if (!response.ok) {
          if (response.status === 404) {
            setErro('Formulário não encontrado');
            setFormularios([]);
            return;
          }
          throw new Error('Erro na busca');
        }
        
        const data = await response.json();
        // Transforma a resposta única em array para manter consistência
        setFormularios([data]);
        setErro(null);
        return;
      }
      
      // Se não tiver ID, mas tiver dimensão, usa a busca por dimensão
      if (searchParams.dimensao) {
        const query = new URLSearchParams({ dimensao: searchParams.dimensao }).toString();
        url += '/search?' + query;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Erro na busca');
      }
      
      const data = await response.json();
      setFormularios(data);
      setErro(null);
    } catch (error) {
      console.error('Erro na busca:', error);
      setErro('Erro ao realizar busca: ' + error.message);
      setFormularios([]);
    }
  };

  const handleEdit = async (id) => {
    try {
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${id}`);
      if (!response.ok) {
        throw new Error('Erro ao carregar formulário');
      }
      const data = await response.json();
      console.log('Dados do formulário para edição:', data);
      setEditingForm({
        id: data.id,
        nome: data.nome || '(Nome protegido)',
        email: '(Email protegido)',
        solucao: data.solucao || '',
        dimensao: data.dimensao || ''
      });
    } catch (error) {
      setErro('Erro ao carregar formulário para edição: ' + error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      console.log('Iniciando atualização para o formulário:', editingForm.id);
      
      // Buscando o formulário original para obter o nome real
      const responseOriginal = await fetch(
        `http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${editingForm.id}`
      );
      
      if (!responseOriginal.ok) {
        throw new Error('Erro ao buscar dados originais do formulário');
      }
      
      const formOriginal = await responseOriginal.json();
      console.log('Dados originais do formulário:', formOriginal);
      
      // Preparando os dados no formato esperado pelo backend
      const dadosAtualizacao = {
        nome: formOriginal.nome || formOriginal.title || formOriginal.post_title || editingForm.nome,
        email: formOriginal.email,
        solucao: editingForm.solucao,
        dimensao: editingForm.dimensao
      };
      
      console.log('Dados a serem enviados:', dadosAtualizacao);

      const response = await fetch(
        `http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${editingForm.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(dadosAtualizacao)
        }
      );

      const responseData = await response.json();
      console.log('Resposta do servidor:', responseData);

      if (!response.ok) {
        throw new Error(`Erro ao atualizar: ${responseData.message || 'Erro desconhecido'}`);
      }

      setResposta({ message: 'Formulário atualizado com sucesso!' });
      setTimeout(() => setResposta(null), 3000);
      
      await fetchFormularios();
      setEditingForm(null);
      setErro('');
    } catch (error) {
      console.error('Erro completo:', error);
      setErro('Erro ao atualizar formulário: ' + error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja excluir este formulário?')) return;

    try {
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchFormularios();
      } else {
        setErro('Erro ao excluir formulário');
      }
    } catch (error) {
      setErro('Erro ao excluir formulário');
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
            <Label htmlFor="nome">Como podemos te chamar?*</Label>
            <Input
              type="text"
              id="nome"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              placeholder="Seu nome completo"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Qual seu melhor e-mail?*</Label>
            <Input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="email@suaempresa.com"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="solucao">Qual solução você procura?</Label>
            <Input
              type="text"
              id="solucao"
              value={formData.solucao}
              onChange={(e) => setFormData({ ...formData, solucao: e.target.value })}
              placeholder="Ex: Site, Aplicativo, Sistema Web, E-commerce"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="dimensao">Qual a dimensão da sua empresa?</Label>
            <Input
              type="text"
              id="dimensao"
              value={formData.dimensao}
              onChange={(e) => setFormData({ ...formData, dimensao: e.target.value })}
              placeholder="Ex: Startup, Média Empresa, Grande Porte"
            />
          </FormGroup>

          <CaptchaContainer>
            <Label>Verificação de segurança</Label>
            <CaptchaOperation>
              <CaptchaNumber>{captchaNum1}</CaptchaNumber>
              <span>+</span>
              <CaptchaNumber>{captchaNum2}</CaptchaNumber>
              <span>=</span>
              <CaptchaInput
                type="text"
                value={formData.captcha}
                onChange={(e) => setFormData({ ...formData, captcha: e.target.value })}
                placeholder="Resultado*"
                required
              />
            </CaptchaOperation>
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

          <ButtonContainer>
            <SubmitButton
              type="submit"
              disabled={
                enviando ||
                !formData.nome ||
                !formData.email ||
                !formData.captcha ||
                Number(formData.captcha) !== captchaNum1 + captchaNum2
              }
            >
              {enviando ? 'Enviando sua mensagem...' : 'Começar Meu Projeto'}
            </SubmitButton>
            <ManageButton type="button" onClick={() => {
              setShowModal(true);
              fetchFormularios();
            }}>
              Gerenciar Formulários
            </ManageButton>
          </ButtonContainer>
        </Form>

        {showModal && (
          <Modal>
            <ModalContent>
              <ModalHeader>
                <h2>Gerenciar Formulários</h2>
                <ActionButton color="#666" onClick={() => setShowModal(false)}>
                  Fechar
                </ActionButton>
              </ModalHeader>
              
              <SearchContainer>
                <SearchGroup>
                  <SearchLabel>Buscar por ID</SearchLabel>
                  <Input
                    type="number"
                    placeholder="Digite o ID do formulário..."
                    value={searchParams.id}
                    onChange={(e) => setSearchParams({ ...searchParams, id: e.target.value })}
                  />
                </SearchGroup>
                <SearchGroup>
                  <SearchLabel>Buscar por dimensão</SearchLabel>
                  <Input
                    type="text"
                    placeholder="Digite uma dimensão..."
                    value={searchParams.dimensao}
                    onChange={(e) => setSearchParams({ ...searchParams, dimensao: e.target.value })}
                  />
                </SearchGroup>
                <ButtonGroup>
                  <ActionButton onClick={handleSearch}>
                    Buscar
                  </ActionButton>
                  <ActionButton color="#666" onClick={() => {
                    setSearchParams({ id: '', dimensao: '' });
                    fetchFormularios();
                  }}>
                    Limpar
                  </ActionButton>
                </ButtonGroup>
              </SearchContainer>

              <FormList>
                {formularios.map((form) => (
                  <React.Fragment key={form.id}>
                    <FormItem>
                      <FormItemInfo>
                        <strong>{form.nome || '(Nome protegido)'}</strong>
                        <IdTag>ID: #{form.id}</IdTag>
                        <p>Email: (Email protegido)</p>
                        <p>Solução: {form.solucao || 'N/A'}</p>
                        <p>Dimensão: {form.dimensao || 'N/A'}</p>
                      </FormItemInfo>
                      <ButtonGroup>
                        <ActionButton onClick={() => handleEdit(form.id)}>
                          Editar
                        </ActionButton>
                        <ActionButton color="#ff4444" onClick={() => handleDelete(form.id)}>
                          Excluir
                        </ActionButton>
                      </ButtonGroup>
                    </FormItem>

                    {editingForm && editingForm.id === form.id && (
                      <EditFormContainer>
                        <EditFormTitle>Editando Formulário #{form.id}</EditFormTitle>
                        <EditFormGrid>
                          <FormGroup>
                            <Label>Nome</Label>
                            <Input
                              type="text"
                              value="(Nome protegido)"
                              disabled
                              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Email</Label>
                            <Input
                              type="text"
                              value="(Email protegido)"
                              disabled
                              style={{ backgroundColor: '#f0f0f0', cursor: 'not-allowed' }}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Solução</Label>
                            <Input
                              type="text"
                              value={editingForm.solucao}
                              onChange={(e) => setEditingForm({ ...editingForm, solucao: e.target.value })}
                              placeholder="Digite a solução..."
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Dimensão</Label>
                            <Input
                              type="text"
                              value={editingForm.dimensao}
                              onChange={(e) => setEditingForm({ ...editingForm, dimensao: e.target.value })}
                              placeholder="Digite a dimensão..."
                            />
                          </FormGroup>
                        </EditFormGrid>
                        <ButtonGroup>
                          <ActionButton onClick={handleUpdate}>
                            Salvar Alterações
                          </ActionButton>
                          <ActionButton color="#666" onClick={() => setEditingForm(null)}>
                            Cancelar
                          </ActionButton>
                        </ButtonGroup>
                      </EditFormContainer>
                    )}
                  </React.Fragment>
                ))}
              </FormList>
            </ModalContent>
          </Modal>
        )}
      </FormContainer>
    </FormSection>
  );
};

export default ContactForm;