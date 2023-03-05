import styled from 'styled-components'

export const CharactersStyle = styled.div`
  .container-people {
    font-weight: normal;
    .image {
      overflow: hidden;
      height: 230px;
      margin-bottom: 16px;
      position: relative;
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: 100% !important;
        height: 100% !important;
        object-fit: cover;
      }
    }

    h4 {
      color: #000;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 1px;
      margin-bottom: 5px;
      font-weight: normal;
    }

    h5 {
      color: #000;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 1px;
      margin-bottom: 13px;
      font-weight: normal;
    }

    p {
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-weight: normal;
      color: #757575;
    }
  }
  @media screen and (max-width: 800px) {
    .container-people {
      display: flex;
      align-items: flex-start;
      .image {
        width: 115px;
        height: 130px;
        margin-right: 12px;
      }
      .content {
        h4 {
          font-size: 20px;
          margin: 0;
          margin-bottom: 5px;
        }
        h5 {
          font-size: 15px;
        }
        p {
          display: none;
        }
      }
    }
  }
`
