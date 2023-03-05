import styled from 'styled-components'

export const HeaderStyle = styled.div`
  .container_header {
    margin-top: 40px;
    margin-bottom: 40px;

    h1 {
      font-size: 54px;
      line-height: 64px;
      margin-bottom: 25px;
      color: #333333;
    }

    p {
      font-size: 22px;
      line-height: 32px;
      max-width: 50vw;
      letter-spacing: 0.916667px;
    }
  }
  @media screen and (max-width: 1024px) {
    .container_header {
      p {
        max-width: 100vw;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .container_header {
      h1 {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 10px;
      }
      p {
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
`
