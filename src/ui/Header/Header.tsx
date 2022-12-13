import { Link } from "react-router-dom"
import { ErrorContainer, HeaderContainer } from "./Header.styled"
import { COLORS } from "theme/colors"
import Spinner from "ui/components/Spinner/Spinner"
import { ROUTES } from "utils/constants/route.constants"
import Typography, { Types } from "ui/components/Typography/Typography"

interface IHeaderProps {
  loading?: boolean
  error?: boolean
}

const Header: React.FC<IHeaderProps> = ({ loading, error }) => {
  return (
    <HeaderContainer>
      <Link to={ROUTES.HOME}>
        <Typography type={Types.H2} color={COLORS.blue400}>
          Podcaster
        </Typography>
      </Link>
      {loading && <Spinner />}
      {error && (
        <ErrorContainer>
          <Typography type={Types.CAPTION} color={COLORS.red}>
            Ha ocurrido un error
          </Typography>
          <Spinner error={error} />
        </ErrorContainer>
      )}
    </HeaderContainer>
  )
}

export default Header
