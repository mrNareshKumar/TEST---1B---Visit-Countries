import {
  VisitedCountryContainer,
  CountryImage,
  CountryNameAndRemoveButton,
  CountryName,
  RemoveButton,
} from './styledComponents'

const VisitedCountry = props => {
  const {visitedCountryDetails, removeVisitedCountry} = props
  const {id, name, imageUrl} = visitedCountryDetails
  const onClickRemove = () => {
    removeVisitedCountry(id)
  }
  return (
    <VisitedCountryContainer>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <CountryNameAndRemoveButton>
        <CountryName>{name}</CountryName>
        <RemoveButton type="button" onClick={onClickRemove}>
          Remove
        </RemoveButton>
      </CountryNameAndRemoveButton>
    </VisitedCountryContainer>
  )
}

export default VisitedCountry
