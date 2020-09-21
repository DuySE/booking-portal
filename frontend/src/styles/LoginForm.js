import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 10px #888888;
`;

export const InnerWrapper = styled.div`
  border: 1px solid;
  box-shadow: 5px 10px #888888;
  padding: 10px;
  width: 30%;
`;

export const Label = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 10%;
`;

export const TextFieldWrapper = styled.div`
  text-align: center;
  margin-top: 5%;
`;

export const TextField = styled.input`
  width: 80%;
  height: 40px;
  padding-left: 2%;
`;

export const ButtonWrapper = styled.div`
  margin-top: 5%;
  text-align: center;
`

export const Button = styled.button`
  width: 80%;
  border-radius: 0;
  height: 35px;
  background-color: #4272DA;
  color: white;
`;

export const LinkWrapper = styled.button`
  width: 100%;
  text-align: center;
  border: 0;
  margin-top: 5%;
`;