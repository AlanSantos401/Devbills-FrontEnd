import styled from "styled-components";

import { theme } from "../../styles/theme";
import {InputNumberFormat} from '@react-input/number-format'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

   footer {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 0.75rem;
    }
`
export const Content = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.75rem;
`

export const InputGroup = styled.div`
 display: flex;
 flex-direction: column;
 gap:0.25rem;

 > label {
  color: ${theme.colors.white};
  font-size: 0.625rem;
 }

 select {
  height: 2.25rem;
  border-radius: 0.25rem;
  padding: 0 0.75rem;
  background-color: ${theme.colors.black};
  color: ${theme.colors.neutrol};
  border: 1px solid transparent;
  transform: all 100ms;

  &:focus {
    border-color: ${theme.colors.primary};
  }
 }
`;
export const CurrencyInput = styled(InputNumberFormat)`
   height: 2.25rem;
   background-color: ${theme.colors.black};
   border: 0;
   border-radius: 0.25rem;
   padding: 0 0.75rem;
   color: ${theme.colors.neutrol};
   font-size: 1rem;
   width: 100%;
   border: 1px solid transparent;
   transform: all 100ms;

   &:focus {
    border-color: ${theme.colors.primary};
   }

  &::placeholder {
    color: ${theme.colors.neutrol};
  }
`
export const RadionForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  cursor: pointer;
`
export const RadionGroup = styled.div`
 display: flex;
 align-items: center;
 gap: 0.5rem;


 input {
  width: 1rem;
  height: 1rem;
  accent-color: ${theme.colors.primary};
  cursor: pointer;
 }

 label {
  color: ${theme.colors.white};
  font-size: 0.875rem;
 }
`