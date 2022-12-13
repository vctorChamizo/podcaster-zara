import SpinnerContainer from "./Spinner.style"

interface ISpinnerProps {
  error?: boolean
}
const Spinner: React.FC<ISpinnerProps> = ({ error }) => {
  return (
    <SpinnerContainer error={error}>
      <div />
    </SpinnerContainer>
  )
}

export default Spinner
