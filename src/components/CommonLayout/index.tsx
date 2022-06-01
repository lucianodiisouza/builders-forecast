import { AppColors } from '../../theme/GlobalStyles'
import { Container } from './styles'
import LinearGradientView from '../LinearGradientView'

type Props = {
  children?: JSX.Element | JSX.Element[]
}

const CommonLayout = ({ children }: Props) => {
  return (
    <Container>
      <LinearGradientView
        colors={[AppColors.BLUE, AppColors.LIGHT_BLUE]}
        start={{ x: 0, y: 0.01 }}
        end={{ x: 1, y: 1 }}
      >
        {children && children}
      </LinearGradientView>
    </Container>
  )
}

export default CommonLayout
