import { useEffect } from 'react'
import Chart from 'chart.js'
import { Container, Flex, getPaletteColor } from 'pcln-design-system'

const About = () => {
  useEffect(() => {
    const ctx = document.getElementById('myRadarChart')
    const myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        datasets: [
          {
            label: 'My life in 2015',
            data: [6, 6, 3, 1, 1, 6, 7, 7, 5],
            backgroundColor: 'rgba(254, 62, 129, .5)',
            borderColor: 'rgba(254, 62, 129, 1)'
          },
          {
            label: 'My life in 2020',
            data: [9, 8, 9, 8, 7, 3, 3, 2, 7],
            backgroundColor: 'rgba(0, 122, 255, .5)',
            borderColor: 'rgba(0, 122, 255, 1)'
          }
        ],
        labels: [
          'ES6+',
          'HTML',
          'React16+',
          'CSS-in-JS',
          'graphQL',
          'Ruby on Rails',
          'SASS',
          'Angular',
          'Node'
        ]
      },
      options: {
        legend: {
          labels: {
            fontColor: getPaletteColor('text.dark'),
            defaultFontStyle: 'bold',
            fontSize: 14
          }
        },
        scale: {
          pointLabels: {
            fontSize: 12,
            fontColor: getPaletteColor('text.dark')
          },
          ticks: {
            display: false,
            beginAtZero: true,
            min: 0,
            max: 20,
            stepSize: 2
          }
        }
      }
    })
  })

  return (
    <Container maxWidth={600}>
      <Flex px={3} my={4} flexDirection="column">
        <canvas id="myRadarChart" width="320" height="320" />
      </Flex>
    </Container>
  )
}

export default About
