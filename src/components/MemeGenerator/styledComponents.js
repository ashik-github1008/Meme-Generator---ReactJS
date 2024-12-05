// Style your components here
import styled from 'styled-components'

export const MemeGeneratorAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  height: min 100vh;
  font-family: "Open Sans";
  padding: 136px;
`

export const MemeGeneratorMainContainer = styled.div`
  display:flex;
  flex-direction: row;
  // justify-content: space-between;
  align-items: center;
`

export const MemeGeneratorFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 140px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-weight: 500;
  font-size: 42px;
  font-weight: bold;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`
export const Label = styled.label`
  color: #7e858e;
  margin-bottom: 5px;
  font-size: 14px;
`

export const Input = styled.input`
  color: #5a7184;
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  padding: 9px;
  outline: none;
  cursor: pointer

  ::placeholder{
    color: #7e858e;
  }
`
export const Selector = styled.select`
  color: #1e293b;
  border-radius: 4px;
  border: 1px solid #d7dfe9;
  padding: 9px;
  outline: none;
  cursor: pointer
`

export const OptionElement = styled.option`
  font-weight: 500;
`

export const GenerateButtonContainer = styled.div`
  margin-top: 12px;
`

export const GenerateButton = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  padding-left: 22px;
  padding-right: 22px;
`
export const ImageGeneratorContainer = styled.div`
  display: ${props => props.display};
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.imageUrl});
  font-size: ${props => props.fontSize}px;
  height: 290px;
  width: 400px;
  background-size: cover;
`
export const TopText = styled.p`
  color: #ffffff;
`

export const BottomText = styled(TopText)``
