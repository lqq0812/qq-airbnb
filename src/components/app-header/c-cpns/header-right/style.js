import styled from "styled-components";

export const RightWrapper = styled.div`
display: flex;
justify-content: flex-end;
.controls {
    display: flex;
    font-weight: 700;
    .item {
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        border-radius: 22px;
        cursor: pointer;
        &:hover {
            background-color: #f5f5f5;
        }
    }
}
.profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 76px;
    height: 42px;
    margin-right: 24px;
    border-radius: 23px;
    border: 1px solid #ccc;
    color: ${props => props.theme.text.primary};
    cursor: pointer;
    
    ${props => props.theme.mixin.boxShadow};

    .panel {
        padding: 5px 0;
        position: absolute;
        right: 0;
        top: 55px;
        width: 240px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(0,0,0,.2);
        color: #666;
        .top {
            border-bottom: 1px solid #ddd;
        }

        .item {
            padding: 5px 20px;
            height: 38px;
            line-height: 38px;
            &:hover {
            background-color: #f5f5f5;
          }
        }
    }
}
`