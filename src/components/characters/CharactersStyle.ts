import styled from 'styled-components'

export const CharactersStyle = styled.div`
  .container-characters {
    h2 {
      color: #333333;
      font-size: 34px;
      line-height: 40px;
      margin-bottom: 43px;
    }

    .contents {
      grid-template-columns: repeat(4, 1fr);
      display: grid;
      column-gap: 30px;

      .container-people {
        margin-bottom: 110px;
      }
    }

    .loading {
      display: flex;
      justify-content: center;
      margin-bottom: 200px;
      img {
        width: 70px;
      }
    }
  }
  .search-empty {
    line-height: 25px;
    font-weight: 300;
    letter-spacing: 0.5px;
    span {
      font-weight: normal;
    }
  }
  .load-more {
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    button {
      background-color: transparent;
      text-transform: uppercase;
      text-align: center;
      font-size: 14px;
      line-height: 46px;
      color: #002b53;
      border: 1px solid #002b53;
      padding: 0 200px;
      cursor: pointer;
      transition: 0.3s;
      font-weight: 500;
      &:hover {
        background: #002b53;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .container-characters {
      .contents {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  @media screen and (max-width: 800px) {
    .container-characters {
      h2 {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 32px;
      }
      .contents {
        grid-template-columns: repeat(1, 1fr);
        .container-people {
          margin-bottom: 30px;
        }
      }
    }
    .load-more {
      button {
        padding: 0 55px;
      }
    }
  }
`
