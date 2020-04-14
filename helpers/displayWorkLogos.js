import { Flex, Hide } from 'pcln-design-system'

export default function displayWorkLogos(array) {
  return array.map((workItem) => (
    <Flex flexDirection="column" mb={3} key={workItem.id}>
      <Hide xs sm>
        <Flex mr={3}>{workItem.component('100px')}</Flex>
      </Hide>
      <Hide md lg xl xxl>
        <Flex mr={3}>{workItem.component('60px')}</Flex>
      </Hide>
    </Flex>
  ))
}
