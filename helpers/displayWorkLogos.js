import { Flex, Hide, Text } from 'pcln-design-system'

export default function displayWorkLogos(array, size) {
  return array.map((workItem) => (
    <Flex flexDirection="column" mb={3} key={workItem.id}>
      <Flex mr={3}>{workItem.component(size)}</Flex>
      <Hide xs sm>
        <Flex justifyContent="center">
          <Text fontSize="12px">{workItem.duration}</Text>
        </Flex>
      </Hide>
    </Flex>
  ))
}
