import styled from 'styled-components'
import colors from '../../utils/style/colors'
import notFoundLogo from '../../assets/404.svg'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  background-color: ${colors.backgroundLight};
`

const Text = styled.h3``

function Error() {
  return (
    <MainContainer>
      <Text>Oups...</Text>
      <img src={notFoundLogo} alt="Page introuvable" />
      <Text>Il semblerait qu’il y ait un problème</Text>
    </MainContainer>
  )
}

export default Error
