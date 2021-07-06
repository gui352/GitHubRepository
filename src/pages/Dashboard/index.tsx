import { useState, FormEvent } from 'react';
import { Title, Repositories, Form } from './styles';
import api from '../../services/api';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const[newRepo, setNewrepo] = useState('');
  const[repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void>{
      event.preventDefault();

      const response = await api.get<Repository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input onChange={e => setNewrepo(e.target.value)} placeholder="Digite o nome do repositório" value={newRepo}/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>

        {repositories.map(repository => (
        <>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
