import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
export const TextMiddle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;


export const LoginBtn = styled.div`
    button{
        border: none;
        outline: none; 
        background: rgb(68, 149, 255);
        cursor: pointer;
        font-size: 15px;
        font-weight: bold;
        color: white;
        height: 45px;
        width: 100%;
        letter-spacing: 1px;
        text-transform: uppercase;
        padding: 15px 45px;
        background: rgb(68, 149, 255);
        box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
        border-radius: 8px;
        cursor: pointer;
        align-items: center;
        display : flex;
        justify-content : center;
    };
    
`;