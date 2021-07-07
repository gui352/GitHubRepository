import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;
export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    font-size: 16px;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 50px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;

    transition: 0.3s;

    &:hover {
      background: ${shade(0.3, '#04d361')};
    }
  }
`;
export const Repositories = styled.div`
  margin-top: 40px;
  max-width:700px;

  a {

    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translate(10px);
    }

    & + a {
      margin-top: 16px;
    }
    img {
      width: 64px;
      height: 64px;
      border-radius:50%;
    }
    div {
       margin: 12px 16px;
       flex: 1;

       strong {
         font-size:20px;
         color: #3d3d4d;
       }

       p {
        font-size: 16px;
        color: #a8a8b3;
        margin-top 4px;
       }
    }
  }

`;
