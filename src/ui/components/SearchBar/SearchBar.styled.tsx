import styled from "styled-components"
import { COLORS } from "theme/colors"

const SearchBarContainer = styled.input`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  height: 32px;
  width: 400px;
  transition: outline 0.1s;
  font-size: 16px;
  color: ${COLORS.gray900};
  background-color: ${COLORS.white};
  outline: 1px solid ${COLORS.gray800};
  &:focus {
    outline: 2px solid ${COLORS.blue600};
  }
`

export { SearchBarContainer }
