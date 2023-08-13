import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
  },
  {
    name: 'Xavier Dupont',
    jobTitle: 'Branleur Pro',
  },
]

const CardsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  gap: 3rem;
  ${'' /* grid-template-rows: 350px 350px; */}
  grid-template-columns: repeat(2, 1fr);
`

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  margin: 2rem auto;
`

const SubTitle = styled.p`
  margin-bottom : 5rem;
  color: ${colors.secondary};
`

function Freelances() {
  return (
    <GlobalContainer>
      <Title>Trouvez votre prestataire</Title>
      <SubTitle>Chez Shiny nous réunissons les meilleurs profils pour vous.</SubTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </GlobalContainer>
  )
}

export default Freelances
