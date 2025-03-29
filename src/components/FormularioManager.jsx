import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrash, FaSearch } from 'react-icons/fa';

// **Estilos Ajustados**
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  background-color: #666;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

const SearchFieldsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const SearchButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const SearchLabel = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const SearchInput = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  font-size: 0.9rem;
  
  &::placeholder {
    color: #999;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
  }
`;

const SearchButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #8a2be2;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
  width: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ClearButton = styled(SearchButton)`
  background-color: #666;
  
  &:hover {
    background-color: #555;
  }
`;

const FormList = styled.div`
  padding: 1rem 1.5rem;
  flex: 1;
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`;

const FormItem = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const FormName = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
`;

const FormId = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const FormEmail = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const FormField = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${props => props.danger ? '#ff4444' : '#8a2be2'};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: auto;

  &:hover {
    background-color: ${props => props.danger ? '#cc0000' : '#7a1dd2'};
  }
  
  @media (max-width: 768px) {
    width: 48%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }
`;

const EditForm = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1.5rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  
  h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.75rem;
    }
    ${SearchInput} {
      margin-bottom: 0.75rem;
      padding: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const Message = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 4px;
  background-color: ${props => props.error ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.error ? '#ff4444' : '#4caf50'};
  
  @media (max-width: 768px) {
    padding: 0.75rem;
    margin: 0.75rem 0;
    font-size: 0.9rem;
  }
`;

const Tooltip = styled.span`
  position: relative;
  cursor: help;
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    background-color: #333;
    color: white;
    padding: 0.5rem;
    border-radius: 4px;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
`;

// **Componente Principal**
const FormularioManager = () => {
  const [formularios, setFormularios] = useState([]);
  const [searchParams, setSearchParams] = useState({ id: '', nome: '' });
  const [editData, setEditData] = useState(null);
  const [erro, setErro] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  const [loading, setLoading] = useState(false);

  // **Carregar dados iniciais**
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await fetchFormularios();
      setLoading(false);
    };
    fetchData();
  }, []);

  // **Função para buscar formulários**
  const fetchFormularios = async (params = {}) => {
    try {
      const query = new URLSearchParams(params).toString();
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios${query ? `?${query}` : ''}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setFormularios(data);
      } else {
        setErro('Erro ao listar formulários.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  // **Busca por parâmetros**
  const handleSearch = async (e) => {
    e.preventDefault();
    const params = {};
    if (searchParams.id) params.id = searchParams.id;
    if (searchParams.nome) params.nome = searchParams.nome;
    await fetchFormularios(params);
  };

  // **Editar formulário**
  const handleEdit = async (id) => {
    try {
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setEditData(data);
      } else {
        setErro('Erro ao obter formulário para edição.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  // **Atualizar formulário**
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${editData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: editData.nome,
          email: editData.email,
          solucao: editData.solucao,
          dimensao: editData.dimensao,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMensagem('Formulário atualizado com sucesso!');
        setEditData(null);
        fetchFormularios();
      } else {
        setErro(data.message || 'Erro ao atualizar formulário.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  // **Excluir formulário**
  const handleDelete = async (id) => {
    if (!window.confirm('Tem certeza que deseja deletar este formulário?')) return;

    try {
      const response = await fetch(`http://psel-monks-analista-jose-jorge.local/wp-json/custom/v1/formularios/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      if (response.ok) {
        setMensagem('Formulário deletado com sucesso!');
        fetchFormularios();
      } else {
        setErro(data.message || 'Erro ao deletar formulário.');
      }
    } catch (error) {
      setErro('Erro de conexão com o servidor.');
    }
  };

  return (
    <Container>
      <Header>
        <Title>Gerenciar Formulários</Title>
        <CloseButton>Fechar</CloseButton>
      </Header>

      <SearchContainer>
        <SearchForm onSubmit={handleSearch}>
          <SearchFieldsContainer>
            <div>
              <SearchLabel>Buscar por ID</SearchLabel>
              <SearchInput
                type="text"
                placeholder="Digite o ID do formulário"
                value={searchParams.id}
                onChange={(e) => setSearchParams({ ...searchParams, id: e.target.value })}
              />
            </div>
            <div>
              <SearchLabel>Buscar por nome</SearchLabel>
              <SearchInput
                type="text"
                placeholder="Digite o nome"
                value={searchParams.nome}
                onChange={(e) => setSearchParams({ ...searchParams, nome: e.target.value })}
              />
            </div>
          </SearchFieldsContainer>
          <SearchButtonsContainer>
            <SearchButton type="submit">
              <FaSearch /> Buscar
            </SearchButton>
            <ClearButton 
              type="button" 
              onClick={() => setSearchParams({ id: '', nome: '' })}
            >
              Limpar
            </ClearButton>
          </SearchButtonsContainer>
        </SearchForm>
      </SearchContainer>

      <FormList>
        {loading ? (
          <div>Carregando...</div>
        ) : (
          <>
            {formularios.map((formulario) => (
              <FormItem key={formulario.id}>
                <FormInfo>
                  <FormName>
                    <Tooltip data-tooltip="Nome protegido por privacidade">
                      (Nome protegido)
                    </Tooltip>
                  </FormName>
                  <FormId>ID: #{formulario.id}</FormId>
                  <FormEmail>
                    <Tooltip data-tooltip="Email protegido por segurança">
                      Email: (Email protegido)
                    </Tooltip>
                  </FormEmail>
                  <FormField>Solução: {formulario.solucao || 'N/A'}</FormField>
                  <FormField>Dimensão: {formulario.dimensao || 'N/A'}</FormField>
                </FormInfo>
                <ButtonGroup>
                  <Button onClick={() => handleEdit(formulario.id)}>
                    <FaEdit /> Editar
                  </Button>
                  <Button danger onClick={() => handleDelete(formulario.id)}>
                    <FaTrash /> Excluir
                  </Button>
                </ButtonGroup>
              </FormItem>
            ))}
            {erro && <Message error>{erro}</Message>}
            {mensagem && <Message>{mensagem}</Message>}
          </>
        )}
      </FormList>

      {editData && (
        <EditForm onSubmit={handleUpdate}>
          <h3>Editar Formulário</h3>
          <SearchInput
            type="text"
            placeholder="Nome"
            value={editData.nome}
            onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
            required
          />
          <SearchInput
            type="email"
            placeholder="Email"
            value={editData.email}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
          />
          <SearchInput
            type="text"
            placeholder="Solução"
            value={editData.solucao}
            onChange={(e) => setEditData({ ...editData, solucao: e.target.value })}
          />
          <SearchInput
            type="text"
            placeholder="Dimensão"
            value={editData.dimensao}
            onChange={(e) => setEditData({ ...editData, dimensao: e.target.value })}
          />
          <ButtonGroup>
            <Button type="submit">Salvar Alterações</Button>
            <Button type="button" onClick={() => setEditData(null)}>Cancelar</Button>
          </ButtonGroup>
        </EditForm>
      )}
    </Container>
  );
};

export default FormularioManager;