import { Stamp } from 'pcln-design-system'

export default function displayTechStamps(array) {
  return array.map((technology) => (
    <Stamp key={technology} color="text" mr={1} mb={1}>
      {technology}
    </Stamp>
  ))
}
