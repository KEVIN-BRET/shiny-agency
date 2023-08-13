import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'

const HomeContainer = styled.div`
  margin: 2rem;
  padding: 3rem;
  background: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h2`
  ${'' /* width: 463px; */}
  height: auto;
  margin: auto 2rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1.7rem;
  line-height: 35px;
  display: block;
  text-align: center;
  max-width: 450px;
  color: #000000;
  & > span {
    display: inline-block;
    color: ${colors.primary};
  }
`

const DescriptionsWrapper = styled.div`
  didplay: flex;
  width: 450px;
  color: ${colors.secondary};
  & span {
    color: ${colors.primary};
  }
`

const StyledLink = styled(Link)`
  margin: 2rem auto;
  padding: 7px 25px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

function Home() {
  return (
    <HomeContainer>
      <Title>
        Les compétences dont vous avez besoin :<span>UX Design</span>
        <span>frontend,</span>
        <span>backend</span>
      </Title>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionsWrapper>
        <div>
          <p>
            <span>UX Design</span>
            <br />
            Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          </p>
        </div>
        <div>
          <p>
            <span>Frontend</span>
            <br />
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
          </p>
        </div>
        <div>
          <p>
            <span>Backend</span>
            <br />
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </DescriptionsWrapper>
    </HomeContainer>
  )
}

export default Home
