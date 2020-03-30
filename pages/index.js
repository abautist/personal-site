import styled from 'styled-components'
import Typical from 'react-typical'
import { Box, Button, Flex, Text, Image, Link, getPaletteColor } from 'pcln-design-system'

const StyledHeader = styled(Flex)`
  background-color: white;
`

const Strikethrough = styled(Text)`
  display: inline;
  text-decoration: line-through;
`

const StyledProfileImage = styled(Image)`
  border-radius: 50%;
  height: 80px;
  border: 2px solid ${getPaletteColor('text.lightest')};
  box-shadow: 0 3px 6px 0 rgba(0,0,0,.5);
`

const StyledNavigationButton = styled(Button)`
  background-color: ${getPaletteColor('promoSecondary.light')};
  box-shadow: 7px 7px ${getPaletteColor('text.light')};
`

const navigationContent = [
  {
    displayText: 'About',
    onClick: () => alert('about')
  },
  {
    displayText: 'Work Experience',
    onClick: () => alert('work experience')
  }
]

const Home = () => (
  <>
  <header>
    <StyledHeader p={2} justifyContent='center'>
      <Text>Let's <Strikethrough>break</Strikethrough> build the Internet</Text>
    </StyledHeader>
  </header>
  <main>
    <Flex flexDirection='column' m={3}>
      <Flex alignItems='center' flexDirection='column'>
        <Box mb={2}>
          <StyledProfileImage alt='profile-pic' src='/ab-profile.jpeg' />
        </Box>
        <Text fontWeight='bold' fontSize={3}>Agustin Bautista</Text>
        <Text>Full Stack Developer</Text>
      </Flex>
      <Flex mt={3} px={3} justifyContent='center' style={{ height: '90px', textAlign: 'center' }}>
        <Typical
          steps={[
            'The Internet and developer tools are more accessible than ever before.',
            500, 
            'The Internet and developer tools are more accessible than ever before. It\'s truly an exciting time to be working in the tech industry.'
          ]}
          wrapper='div'
        />
      </Flex>
      {displayNavigationButtons(navigationContent)}
    </Flex>
  </main>
  </>
)

function displayNavigationButtons(array) {
  return array.map(button => (
    <StyledNavigationButton onClick={button.onClick} p={2} mt={3} justifyContent='center'>
      <Text fontSize={3} color='text.lightest'>{button.displayText}</Text>
    </StyledNavigationButton>
  ))
}

export default Home
