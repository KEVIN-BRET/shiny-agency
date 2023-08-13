import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DarkLogo from '../../assets/dark-logo.png'

const StyledLink = styled(Link)`
  padding: 7px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const Logo = styled.img`

`

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <BannerContainer>
      <Logo src={DarkLogo} />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </BannerContainer>
  )
}

export default Header
