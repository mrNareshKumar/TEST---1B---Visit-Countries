import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #000000;
  min-height: 100vh;
`
export const ResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  background-color: #161624;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
`
export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  font-family: Roboto;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  margin: 0px;
`
export const CountriesList = styled.ul`
  display: flex;
  flex-direction: column;
  border: 1px solid #334155;
  border-radius: 5px;
  overflow-y: auto;
  height: 44vh;
  padding: 0px;
`
export const VisitedCountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
  margin-top: 15px;
`
export const NoVisitedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
export const NoVisitedText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`
