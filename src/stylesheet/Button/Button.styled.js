import styled, { css } from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const ButtonStyled = styled.button`
  border: 0 solid transparent;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding:10px 16px;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  justify-content:center
  display: flex;
  align-items: center;
  transition: background 0.2s ease-in-out;
  vertical-align: middle;
  white-space: nowrap;
  color: #fff;
  width: 250px;
  font-weight:600;


 
  ${(props) =>
    props.primary &&
    css`
      background: #1e86ff;
      &:hover {
        opacity: 0.5;
      }
    `}

      ${(props) =>
    props.white &&
    css`
          background: #ffffff;
          color: #1e2327;
          &:hover {
            opacity: 0.5;
          }
        `}

       

    ${(props) => props.marginRight && css``}

       ${(props) =>
    props.small &&
    css`
           width: 145px !important;
           padding: 10px !important;
           height:40px;
           border-radius: 8px !important;
         `}

           ${(props) =>
    props.disabled &&
    css`
               background-color: #cccccc!important;
               color: #666666!important;
               cursor: not-allowed !important;
             `}

 ${(props) =>
    props.purple &&
    css`
      background: #a435f0;
      color: #fff;
      font-weight: 700;

      &:hover {
        opacity: 50%;
        background-color: #2f2a66;
      }
    `}

         ${(props) =>
    props.w100 &&
    css`
          width:100%!important
        `}
`;
