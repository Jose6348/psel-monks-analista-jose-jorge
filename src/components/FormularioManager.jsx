import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ManagerSection = styled.section`
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: 500px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1rem;
`;

const FormList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FormItem = styled.li`
  background-color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormDetails = styled.div`
  flex: 1;
`;

const Button = styled.button`
  background-color: ${(props) => (props.danger ? '#ff4444' : '#8a2be2')};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.danger ? '#cc0000' : '#7a1dd2')};
  }
`;

const SearchForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 0.9rem;
`;

const EditForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.div`
  color: #ff4444;
  background-color: #ffebee;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  color: #4caf50;
  background-color: #e8f5e9;
  padding: 1rem;
  border-radius: 4px;
  margin-top: 1rem;
`;

const FormularioManager = () => {
  const [formularios, setFormularios] = useState([]);
  const [searchParams, setSearchParams] = useState({ nome: '', dimensao: '' });
  const [editData, setEditData] = useState(null);
  const [erro, setErro] = useState(null);
  const [mensagem, setMensagem] = useState(null);

  // Listar formulários ao carregar o componente
  useEffect(() => {
    fetchFormularios();
  }, []);

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

  const handleSearch = async (e) => {
    e.preventDefault();
    const params = {};
    if (searchParams.nome) params.nome = searchParams.nome;
    if (searchParams.dimensao) params.dimensao = searchParams.dimensao;
    await fetchFormularios(params);
  };

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
    <ManagerSection>
      <Title>Gerenciar Formulários</Title>

      {/* Formulário de busca */}
      <SearchForm onSubmit={handleSearch}>
        <Input
          type="text"
          placeholder="Buscar por nome"
          value={searchParams.nome}
          onChange={(e) => setSearchParams({ ...searchParams, nome: e.target.value })}
        />
        <Input
          type="text"
          placeholder="Buscar por dimensão"
          value={searchParams.dimensao}
          onChange={(e) => setSearchParams({ ...searchParams, dimensao: e.target.value })}
        />
        <Button type="submit">Buscar</Button>
        <Button type="button" onClick={() => { setSearchParams({ nome: '', dimensao: '' }); fetchFormularios(); }}>
          Limpar
        </Button>
      </SearchForm>

      {/* Lista de formulários */}
      <FormList>
        {formularios.map((formulario) => (
          <FormItem key={formulario.id}>
            <FormDetails>
              <strong>{formulario.nome}</strong> ({formulario.email})<br />
              Solução: {formulario.solucao || 'N/A'}<br />
              Dimensão: {formulario.dimensao || 'N/A'}
            </FormDetails>
            <div>
              <Button onClick={() => handleEdit(formulario.id)}>Editar</Button>
              <Button danger onClick={() => handleDelete(formulario.id)}>Deletar</Button>
            </div>
          </FormItem>
        ))}
      </FormList>

      {/* Formulário de edição */}
      {editData && (
        <EditForm onSubmit={handleUpdate}>
          <h3>Editar Formulário</h3>
          <Input
            type="text"
            placeholder="Nome"
            value={editData.nome}
            onChange={(e) => setEditData({ ...editData, nome: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={editData.email}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Solução"
            value={editData.solucao}
            onChange={(e) => setEditData({ ...editData, solucao: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Dimensão"
            value={editData.dimensao}
            onChange={(e) => setEditData({ ...editData, dimensao: e.target.value })}
          />
          <Button type="submit">Salvar Alterações</Button>
          <Button type="button" onClick={() => setEditData(null)}>Cancelar</Button>
        </EditForm>
      )}

      {erro && <ErrorMessage>{erro}</ErrorMessage>}
      {mensagem && <SuccessMessage>{mensagem}</SuccessMessage>}
    </ManagerSection>
  );
};

export default FormularioManager;