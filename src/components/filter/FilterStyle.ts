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
            font-weight: 400;
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
                padding-right: 20px;
                &:after {
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 40%;
                    transform: translateY(-50%);
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

    .clear-all {
        color: #C8C8C8;
        background-color: transparent;
        border: 1px solid #C8C8C8;
        text-transform: uppercase;
        line-height: 36px;
        padding: 0 39px;
        transition: .3s;
        cursor: pointer;
        transition:.3s;
        pointer-events: none;
        white-space: nowrap;
        font-weight: 500;
        letter-spacing: 0.8px;
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
    .content-mobile{
        display: none;
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
            letter-spacing: 0.5px;
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
                }
                .close-search{
                    position: absolute;
                    right: 0;
                    top: 50%;
                    transform: translateY(-50%);
                    font-weight: 300;
                    pointer-events: none;
                    opacity: 0;
                    transition: .3s;
                    &.open{
                        pointer-events: auto;
                        opacity: 1;
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 800px) {
  .container_filter {
    border-bottom: 0;
    padding: 15px 0;
    margin-bottom: 15px;
    .filter{
        width: 100%;
        .label{
            display: flex;
            span{
                max-width: initial;
                flex: 1;
            }
        }
    }
    .clear-all{
        display: none;
    }
    .box-itens{
        position: fixed;
        max-width: inherit;
        top: 0;
        left: 0;
        bottom: 0;
        max-height: 100vh;
        .item{
            width: 100%;
            .search{
                width: 100%;
            }
        }
    }
    .content-mobile{
        margin: 0 -15px;
        display: block;
        .content-top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #C8C8C8;
            padding: 0 15px;
            padding-bottom: 16px;
            color: #606060;
            margin-bottom: 15px;
            .close{
                display: block;
                width: 16px;
                height: 16px;
                position: relative;
                &:after{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background:url('/img/close.svg') no-repeat center center / cover;
                }
            }
        }
        .buttons{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #C8C8C8;
            margin-bottom: 15px;
            padding: 0 15px;
            padding-bottom: 16px;
            button{
                width: 48%;
                line-height: 40px;
                border-radius: 2px;
                text-transform: uppercase;
                display: block;
                background: transparent;
                border: 1px solid #002B56;
                &.clear{
                    color: #002B56;
                }
                &.apply{
                    background-color: #002B56;
                    color: #fff;
                }
            }
        }
    }
  }
}

`