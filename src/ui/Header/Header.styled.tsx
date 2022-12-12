import styled from "styled-components"
import { COLORS } from "theme/colors"

const HeaderContainer = styled.div`
  border-bottom: 1px solid ${COLORS.gray600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  padding-bottom: 16px;
  padding-top: 16px;
`

export { HeaderContainer }
