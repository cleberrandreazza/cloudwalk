import styled from 'styled-components'


export const CharactersStyle = styled.div`
    .container-people {
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
                width: 100%!important;
                height: 100%!important;
                object-fit: cover;
            }
        }

        h4 {
            color: #000;
            font-size: 20px;
            line-height: 28px;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }

        h5 {
            color: #000;
            font-size: 16px;
            line-height: 28px;
            letter-spacing: 1px;
            margin-bottom: 13px;
        }

        p {
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.5px;
            text-transform: uppercase;
            color: #757575;
        }
    }
`