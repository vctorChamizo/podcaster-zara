import styled from "styled-components"
import { COLORS } from "theme/colors"
import Typography from "../Typography/Typography"

type TableRowProps = {
  index?: number
}

type ItemListProps = {
  width?: number
}

const Table = styled.div`
  width: 100%;
`

const TableHader = styled.th`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  border-bottom: 2px solid ${COLORS.gray700};
  padding: 16px 0;
`

const TableRow = styled.div<TableRowProps>`
  cursor: pointer;
  width: 100%;
  display: flex;
  gap: 8px;
  background-color: ${({ index }) => (index && index % 2 === 1 ? COLORS.gray400 : COLORS.white)};
  padding: 12px 0;
  border-bottom: 0.5px solid ${COLORS.gray700};
`

const ItemList = styled(Typography)<ItemListProps>`
  width: ${({ width }) => width || "100%"};
  text-align: start;
`

export { TableHader, Table, TableRow, ItemList }
