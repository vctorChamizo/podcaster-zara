import { Link } from "react-router-dom"
import { HeaderContainer } from "./Header.styled"
import { COLORS } from "theme/colors"
import Spinner from "ui/components/Spinner/Spinner"
import { ROUTES } from "utils/constants/route.constants"
import Typography, { Types } from "ui/components/Typography/Typography"

interface IHeaderProps {
  loading?: boolean
}

const Header: React.FC<IHeaderProps> = ({ loading }) => {
  return (
    <HeaderContainer>
      <Link to={ROUTES.HOME}>
        <Typography type={Types.H2} color={COLORS.blue400}>
          Podcaster
        </Typography>
      </Link>
      {loading && <Spinner />}
    </HeaderContainer>
  )
}

export default Header
