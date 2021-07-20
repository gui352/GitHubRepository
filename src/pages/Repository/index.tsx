import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfo } from './styles';
import LogoImg from '../../assets/logo.svg';

interface RepositoryParams{
  repository: string;
}

const Repository: React.FC = () =>{
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
          <img src={LogoImg} alt="GitHubExplorer"/>
          <Link to='/'>Voltar</Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars.githubusercontent.com/u/69631?s=88&v=4" alt="Facebook" />
          <div>
            <strong>Facebook</strong>
            <p>Repositório do ReactJS no GitHub do Facebook</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>172K</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>34K</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>574</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  )
};

export default Repository;
