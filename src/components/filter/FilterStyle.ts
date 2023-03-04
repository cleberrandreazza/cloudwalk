import styled from 'styled-components'


export const FilterStyle = styled.div`

.container_filter {
    padding: 25px 0;
    border: 1px solid #E6E6E6;
    border-right: 0;
    border-left: 0;
    margin-bottom: 60px;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    .filter {
        font-size: 16px;

        .label {
            span {
                cursor: pointer;
                margin-left: 13px;
                display: inline-block;
                min-width: 190px;
                border-bottom: 1px solid #C8C8C8;
                padding-bottom: 7px;
                color: #002B56;
                position: relative;
                max-width: 90%;
                &:after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 40%;
                    transform: translateY(-50%);
                    pointer-events: none;
                    transition: .3s;
                    width: 7px;
                    height: 7px;
                     background:url('/img/arrow.svg') no-repeat center center;
                }
            }

            &.active {
                span {
                    &:after {
                        transform: rotate(180deg);
                    }
                }

                .box-itens {
                    pointer-events: inherit;
                    opacity: 1;
                }
            }
        }
    }

    button {
        color: #C8C8C8;
        background-color: transparent;
        border: 1px solid #C8C8C8;
        text-transform: uppercase;
        line-height: 36px;
        padding: 0 39px;
        font-family: 'Helvetica Neue', sans-serif;
        transition: .3s;
        cursor: pointer;
        transition:.3s;
        pointer-events: none;
        white-space: nowrap;
        &.active{
            pointer-events: inherit;
            border-color: #002B56;
            color: #002B56;
        }
        &:hover {
            background: #002B53;
            color: #fff;
        }
    }

    .box-itens {
        position: absolute;
        left: 0;
        width: 100%;
        top: 100%;
        max-width: 190px;
        box-sizing: border-box;
        border: 1px solid #C8C8C8;
        box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.1), inset 0px -1px 0px #C8C8C8;
        padding: 16px;
        z-index: 1;
        cursor: initial;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: .3s;
        max-height: 400px;
        overflow-y: scroll;
        .item {
            position: relative;
            margin-bottom: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            color: #606060;

            &.active {
                .check {
                    background-color: black;

                    &:after {
                        transform: scale(1);
                    }
                }
            }

            &:last-child {
                margin-bottom: 0;
            }

            .check {
                display: inline-block;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #FFFFFF;
                border: 1px solid #C8C8C8;
                margin-right: 8px;
                background-color: transparent;
                transition: .3s;
                position: relative;
                overflow: hidden;

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background:url('/img/check.svg') no-repeat center center;
                    transition: .3s;
                    transform: scale(0);
                }
            }

            .search{
                position: relative;
                input{
                    width: 100%;
                    border: 0;
                    border-bottom: 1px solid #C8C8C8;
                    outline: 0;             
                    line-height: 30px;
                    font-family: 'Helvetica 35 Thin', sans-serif;
                }
                .close-search{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    font-weight: bold;
                }
            }
        }
    }
}
`