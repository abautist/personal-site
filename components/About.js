import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Chart from 'chart.js'
import { Box, Button, Flex, Text, Image, Link, getPaletteColor } from 'pcln-design-system'

const About = () => {
  useEffect(() => {
    const ctx = document.getElementById('myRadarChart')
    const myRadarChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Running', 'Swimming', 'Eating', 'Cycling', 'test2', 'test3', 'test4'],
        datasets: [{
            data: [20, 10, 4, 2, 1, 1, 5]
        }]
    },
      // options: options
    })
  })
  

  return (
    <Flex p={3} flexDirection='column'>
      <Text>This is the about page WIP</Text>
      <canvas id="myRadarChart" width="400" height="400"></canvas>
    </Flex>
  )
}

export default About
