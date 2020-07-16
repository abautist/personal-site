import { useState } from 'react'
import styled from 'styled-components'
import Typical from 'react-typical'
import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  Image,
  Link,
  getPaletteColor,
  mediaQueries
} from 'pcln-design-system'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'

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
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.5);
  ${mediaQueries[1]} {
    height: 110px;
  }
`

const StyledNavigationButton = styled(Button)`
  background-color: ${({
    isAboutPageDisplayed,
    isWorkExperienceDisplayed,
    isHomeDisplayed
  }) =>
    isAboutPageDisplayed || isWorkExperienceDisplayed || isHomeDisplayed
      ? getPaletteColor('promoSecondary.dark')
      : getPaletteColor('promoSecondary.base')};
  box-shadow: 7px 7px ${getPaletteColor('text.light')};
`

const StyledFooter = styled(Flex)`
  position: fixed;
  bottom: 0;
  background-color: ${getPaletteColor('text.lightest')};
`

const FullWidthContainer = styled(Container)`
  width: 100%;
`

const StyledLink = styled(Link)`
  &:hover {
    color: ${getPaletteColor('promoSecondary.base')};
    text-decoration: none;
  }
`

const footerLinkContent = [
  {
    href: 'mailto:abautist703@gmail.com',
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
  const [isWorkExperienceDisplayed, setWorkExperienceDisplayed] = useState(
    false
  )
  const navigationContent = [
    {
      displayText: 'Home',
      handleClick: () => {
        setAboutPageDisplayed(false)
        setWorkExperienceDisplayed(false)
      }
    },
    {
      displayText: 'About',
      handleClick: () => {
        setWorkExperienceDisplayed(false)
        setAboutPageDisplayed(true)
      }
    },
    {
      displayText: 'Work Experience',
      handleClick: () => {
        setAboutPageDisplayed(false)
        setWorkExperienceDisplayed(true)
      }
    }
  ]

  return (
    <>
      <header>
        <StyledHeader p={2} justifyContent="center">
          <Text>
            <Strikethrough>Break</Strikethrough> Build the Internet
          </Text>
        </StyledHeader>
      </header>
      <main>
        <Container maxWidth={700}>
          <Flex flexDirection="column" m={3}>
            <Flex
              alignItems="center"
              flexDirection="column"
              pt={3}
              pb="12px"
              // pr={[null, null, 3]}
            >
              <Box mb={2}>
                <StyledProfileImage alt="profile-pic" src="/ab-profile.jpeg" />
              </Box>
              <Text fontWeight="bold" fontSize={3}>
                Agustin Bautista
              </Text>
              <Text>Full Stack Developer</Text>
            </Flex>
            <Flex
              flexDirection={['column', null, 'row']}
              justifyContent="center"
              width={1}
            >
              {displayNavigationButtons(
                navigationContent,
                isAboutPageDisplayed,
                isWorkExperienceDisplayed
              )}
            </Flex>
            {isAboutPageDisplayed && !isWorkExperienceDisplayed ? (
              <About />
            ) : isWorkExperienceDisplayed && !isAboutPageDisplayed ? (
              <WorkExperience />
            ) : (
              <Flex
                mt={4}
                px={3}
                justifyContent="center"
                style={{ height: '90px', textAlign: 'center' }}
              >
                <Typical
                  steps={[
                    'The Internet and developer tools are more accessible than ever before.',
                    500,
                    "The Internet and developer tools are more accessible than ever before. It's truly an exciting time to be working in the tech industry 😊"
                  ]}
                  wrapper="div"
                />
              </Flex>
            )}
          </Flex>
        </Container>
      </main>
      <footer>
        <StyledFooter width={1} p={2}>
          <FullWidthContainer maxWidth={600}>
            <Flex width={1} justifyContent="space-evenly">
              {displayFooterLinks(footerLinkContent)}
            </Flex>
          </FullWidthContainer>
        </StyledFooter>
      </footer>
    </>
  )
}

function displayNavigationButtons(
  array,
  isAboutPageDisplayed,
  isWorkExperienceDisplayed
) {
  return array.map((button, index) => (
    <StyledNavigationButton
      width={[null, null, 1 / 3]}
      key={button.displayText}
      p={2}
      mr={[null, null, 3]}
      mt={3}
      onClick={button.handleClick}
      justifyContent="center"
      isHomeDisplayed={
        !isAboutPageDisplayed && !isWorkExperienceDisplayed && index === 0
      }
      isAboutPageDisplayed={isAboutPageDisplayed && index === 1}
      isWorkExperienceDisplayed={isWorkExperienceDisplayed && index === 2}
    >
      <Text fontSize={3} color="text.lightest">
        {button.displayText}
      </Text>
    </StyledNavigationButton>
  ))
}

function displayFooterLinks(array) {
  return array.map((link, i) => (
    <Flex ml={i > 0 ? 2 : 0} key={link.text}>
      <StyledLink
        href={link.href}
        target="blank"
        rel="noopener noreferrer"
        color="text.dark"
      >
        {link.text}
      </StyledLink>
    </Flex>
  ))
}

export default Home
