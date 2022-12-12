import styled from "styled-components"
import { COLORS } from "theme/colors"

const CounterContainer = styled.div`
  background-color: ${COLORS.blue600};
  width: 52px;
  height: 32px;
  padding: 2px 4px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`

export { CounterContainer }
