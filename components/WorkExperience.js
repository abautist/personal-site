import styled from 'styled-components'
import { Flex } from 'pcln-design-system'
import TimelineEvents from './TimelineEvents'
import displayWorkLogos from '../helpers/displayWorkLogos'
import constants from '../constants'
const { professionalExperience } = constants

const FlexWrapped = styled(Flex)`
  flex-wrap: wrap;
`

const WorkExperience = () => (
  <Flex flexDirection="column" mt={4}>
    <FlexWrapped width={1} justifyContent="center">
      {displayWorkLogos(professionalExperience)}
    </FlexWrapped>
    <TimelineEvents />
  </Flex>
)

export default WorkExperience
