import styled from 'styled-components'
import { Absolute, Box, Button, Flex, Heading, Text, Image, Link, getPaletteColor } from 'pcln-design-system'

const Line = styled(Absolute)`
  left: 18px;
  height: 100%;
  width: 4px;
  background-color: ${getPaletteColor('text.lightest')}
`


const WorkExperience = () => (
  <Flex mt={4} flexDirection='column'>
    <Line />
    <Heading.h4 mb={1}>Priceline Software Engineer, NYC</Heading.h4>
    <Text fontSize={1}>August 2016 - Present</Text>
  </Flex>
)

export default WorkExperience
