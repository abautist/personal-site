import { useState } from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'
import { Box, Button, Flex, Text, Image, Link, getPaletteColor } from 'pcln-design-system'
import About from '../components/About'

const StyledHeader = styled(Flex)`
  background-color: ${getPaletteColor('text.lightest')};
  border-bottom-style: dashed;
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

const StyledFooter = styled(Flex)`
  position: absolute;
  bottom: 0;
  background-color: ${getPaletteColor('text.lightest')};
`

const StyledLink = styled(Link)`
  &:hover {
    color: ${getPaletteColor('promoSecondary.light')};
    text-decoration: none;
  }
`

const footerLinkContent = [
  {
    href: 'abautist703@gmail.com',
    text: 'Email'
  },
  {
    href: 'https://www.linkedin.com/in/agustinbautista/',
    text: 'LinkedIn'
  },
  {
    href: 'https://github.com/abautist',
    text: 'Github'
  }
]

const Home = () => {
  const [isAboutPageDisplayed, setAboutPageDisplayed] = useState(false)
  const navigationContent = [
    {
      displayText: 'About',
      onClick: () => setAboutPageDisplayed(true)
    },
    {
      displayText: 'Work Experience',
      onClick: () => alert('work experience')
    }
  ]
  
  return (
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
          {!isAboutPageDisplayed && (
            <>
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
            </>
          )}
          
          {isAboutPageDisplayed && (
            <About />
          )}
        </Flex>
      </main>
      <footer>
        <StyledFooter width={1} p='12px' justifyContent='space-evenly'>
          {displayFooterLinks(footerLinkContent)}
        </StyledFooter>
      </footer>
    </>
  )
}

function displayNavigationButtons(array) {
  return array.map(button => (
    <StyledNavigationButton p={2} mt={3} onClick={button.onClick} justifyContent='center' key={button.displayText}>
      <Text fontSize={3} color='text.lightest'>{button.displayText}</Text>
    </StyledNavigationButton>
  ))
}

function displayFooterLinks(array) {
  return array.map((link, i) => (
    <Flex ml={i > 0 ? 2 : 0} key={link.text}>
      <StyledLink
        href={link.href}
        target='blank'
        rel='noopener noreferrer'
        color='text.dark'
      >
        {link.text}
      </StyledLink>
    </Flex>
  ))
}

export default Home
