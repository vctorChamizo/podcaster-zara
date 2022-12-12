import React from "react"
import { COLORS } from "theme/colors"
import Typography, { Types } from "../Typography/Typography"
import { CounterContainer } from "./Counter.styled"

interface ICounterProps {
  count: number
  style?: object
}

const Counter: React.FC<ICounterProps> = ({ count, style }) => {
  return (
    <CounterContainer style={style}>
      <Typography color={COLORS.white} type={Types.H3}>
        {count}
      </Typography>
    </CounterContainer>
  )
}

export default Counter
