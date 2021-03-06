import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a{
    display: flex;
    aling-items: center;
    text-decoration: none;
    color: #3d3d4d;
    transition: color 0.2s;

    &hover{
      color #666;
    }

    svg{
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header{
    display: flex;
    align-items: center;

    img{
      width: 120px;
      heidth: 120px;
      border-radius: 50%;
    }

    div{
      margin-left: 24px;

      strong{
        font-size: 36px;
        color: #3d3d4d;
      }

      p{
        font-size: 36px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul{
    display: flex;
    list-style: none;
    margin-top: 40px;

    li{
      & + li{
        margin-left: 80px;
      }

      strong{
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span{
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 40px;

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

    svg{
      margin-left: auto;
      color: #cbcbd6;
    }
    
  }

`;
