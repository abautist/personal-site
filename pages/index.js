import Head from 'next/head'
import { Box, Flex, Text, Image, Link, getPaletteColor } from 'pcln-design-system'
import styled from 'styled-components'

const StyledHeader = styled(Flex)`
  background-color: ${getPaletteColor('promoSecondary.light')};
  box-shadow: 5px 5px ${getPaletteColor('text.light')};
`

const Home = () => (
  <>
    <Head>
      <title>Test</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Flex flexDirection='column'>
        <StyledHeader p={2} justifyContent='center'>
          <Text fontSize={3} color='text.lightest'>Test</Text>
        </StyledHeader>
      </Flex>
    </main>
  </>
)

export default Home
