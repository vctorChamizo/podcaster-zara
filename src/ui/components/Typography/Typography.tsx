import { COLORS } from "theme/colors"
import { Typographys } from "./Typography.styled"

export enum Sizes {
  XL = "XL",
  L = "L",
  M = "M",
  S = "S",
  XS = "XS"
}

export enum Weights {
  LIGHT = "LIGHT",
  REGULAR = "REGULAR",
  SEMIBOLD = "SEMIBOLD"
}

export enum Types {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  P = "P",
  CAPTION = "CAPTION"
}

export interface ITypographyProps {
  dataTestId?: string
  type?: Types
  weight?: Weights | null
  size?: Sizes | null
  color?: string
  children?: React.ReactNode
  style?: object
}

const Typography: React.FC<ITypographyProps> = ({ ...props }) => {
  const {
    children,
    type = Types.P,
    size = null,
    weight = null,
    color = COLORS.gray800,
    dataTestId = "typography-component",
    style,
    ...otherProps
  } = props
  const Text = Typographys[type]
  return (
    <Text data-test-id={dataTestId} type={type} size={size} weight={weight} color={color} style={style} {...otherProps}>
      {children}
    </Text>
  )
}

export default Typography
