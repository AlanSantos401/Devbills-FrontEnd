import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  h2 {
    font-size: 1.75rem;
    color: ${theme.colors.white};
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    color: ${theme.colors.neutrol};
    font-weight: 400;
  }


`