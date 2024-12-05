import {Component} from 'react'

import {
  MemeGeneratorAppContainer,
  MemeGeneratorMainContainer,
  MemeGeneratorFormContainer,
  Heading,
  InputContainer,
  Label,
  Input,
  Selector,
  OptionElement,
  GenerateButton,
  GenerateButtonContainer,
  ImageGeneratorContainer,
  TopText,
  BottomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    display: 'none',
    activeOptionId: fontSizesOptionsList[0].optionId,
  }

  changeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  changeTopText = event => {
    this.setState({topText: event.target.value})
  }

  changeBottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  changeFontSizeOption = event => {
    this.setState({
      activeOptionId: event.target.value,
    })
  }

  submitForm = event => {
    // console.log('form submitted')
    event.preventDefault()
    const {topText, bottomText, imageUrl, activeOptionId} = this.state
    if (topText && bottomText && imageUrl) {
      this.setState({display: 'flex', fontSize: activeOptionId})
    }
  }

  render() {
    const {topText, bottomText, fontSize, imageUrl, display, activeOptionId} =
      this.state
    return (
      <MemeGeneratorAppContainer>
        <MemeGeneratorMainContainer>
          <MemeGeneratorFormContainer onSubmit={this.submitForm}>
            <Heading>Meme Generator</Heading>
            <InputContainer>
              <Label htmlFor="image-url">Image URL</Label>
              <Input
                placeholder="Enter the Image Url"
                onChange={this.changeImageUrl}
                value={imageUrl}
                id="image-url"
              ></Input>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="top-text">Top Text</Label>
              <Input
                placeholder="I love to wake up early in the morning"
                onChange={this.changeTopText}
                value={topText}
                id="top-text"
              ></Input>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="bottom-text">Bottom Text</Label>
              <Input
                placeholder="To see the morning scenery"
                onChange={this.changeBottomText}
                value={bottomText}
                id="bottom-text"
              ></Input>
            </InputContainer>
            <InputContainer>
              <Label htmlFor="font-size">Font Size</Label>
              <Selector
                value={activeOptionId}
                onChange={this.changeFontSizeOption}
                id="font-size"
              >
                {fontSizesOptionsList.map(eachOption => (
                  <OptionElement
                    key={eachOption.optionId}
                    value={eachOption.optionId}
                  >
                    {eachOption.displayText}
                  </OptionElement>
                ))}
              </Selector>
            </InputContainer>
            <GenerateButtonContainer>
              <GenerateButton type="submit">Generate</GenerateButton>
            </GenerateButtonContainer>
          </MemeGeneratorFormContainer>
          <ImageGeneratorContainer
            fontSize={fontSize}
            imageUrl={imageUrl}
            display={display}
            data-testid="meme"
          >
            <TopText>{topText}</TopText>
            <BottomText>{bottomText}</BottomText>
          </ImageGeneratorContainer>
        </MemeGeneratorMainContainer>
      </MemeGeneratorAppContainer>
    )
  }
}

export default MemeGenerator
