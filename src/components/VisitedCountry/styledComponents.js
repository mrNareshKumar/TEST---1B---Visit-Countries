import styled from 'styled-components'

export const VisitedCountryContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-bottom: 10px;
`
export const CountryImage = styled.img`
  width: 220px;
  height: 150px;
`
export const CountryNameAndRemoveButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1f1f2f;
  padding: 10px;
`
export const CountryName = styled.p`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  color: #f8fafc;
  margin-left: 10px;
  padding: 0px;
  margin: 0px;
`
export const RemoveButton = styled.button`
  font-family: Roboto;
  font-size: 13px;
  font-weight: 500;
  color: #f1f5f9;
  background-color: transparent;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  padding: 5px;
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 10px;
  cursor: pointer;
`
