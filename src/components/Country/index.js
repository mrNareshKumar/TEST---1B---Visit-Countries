import {
  CountryContainer,
  Heading,
  Button,
  VisitedText,
} from './styledComponents'

const Country = props => {
  const {countryDetails, addVisitedCountry} = props
  const {id, name, isVisited} = countryDetails
  const addCountry = () => {
    addVisitedCountry(id)
  }
  return (
    <CountryContainer key={id}>
      <Heading>{name}</Heading>
      {isVisited ? (
        <VisitedText>Visited</VisitedText>
      ) : (
        <Button type="button" onClick={addCountry}>
          Visit
        </Button>
      )}
    </CountryContainer>
  )
}

export default Country
