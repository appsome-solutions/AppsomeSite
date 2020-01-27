import { css } from 'styled-components';

export const InputStyled = css`
  margin-bottom: 32px;
  border: 1px solid ${props => props.theme.colors.utils.border.borderLight};
  background-color: ${props => props.theme.colors.main.primary};
  outline-color: ${props => props.theme.colors.utils.background.mid.color};
  :: placeholder {
    color: ${props => props.theme.colors.utils.border.borderLight};
  }
`;
