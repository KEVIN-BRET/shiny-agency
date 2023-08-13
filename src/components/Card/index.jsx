import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  display: flex;  
  align-items: flex-start;
  ${'' /* font-weight: bold; */}
  text-align: start;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 335px;
  height: 335px;
  transition: 200ms;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

export default Card
