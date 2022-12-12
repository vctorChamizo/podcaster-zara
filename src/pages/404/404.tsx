import { COLORS } from "theme/colors"
import Typography, { Types } from "ui/components/Typography/Typography"
import Layout from "ui/Layout/Layout"
import { Container } from "./404.styled"

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Typography type={Types.H2} color={COLORS.gray800}>
          404 - Not found
        </Typography>
      </Container>
    </Layout>
  )
}

export default NotFound
