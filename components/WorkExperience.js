import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Link,
  getPaletteColor
} from 'pcln-design-system'
import { Timeline, TimelineEvent } from 'react-event-timeline'
import ReactSvg from '../components/svgs/ReactSvg'

const WorkExperience = () => (
  <Flex flexDirection="column">
    <Heading textAlign="center">Professional Highlights</Heading>
    <Timeline lineColor="#001023">
      <TimelineEvent
        title="Priceline - Post Booking, Core Packages"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Restack of Itinerary Page"
        icon={<ReactSvg />}
        collapsible
      >
        Compare Receipt to Travel Itinerary tech stack, gif/screenshot....
      </TimelineEvent>
      <TimelineEvent
        title="Priceline - Mono Repo Initiative"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Universal Cross Sell Carousel Component"
        icon={<ReactSvg />}
        collapsible
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="Priceline - White Label Initiative"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Restack of Itinerary Page"
        icon={<ReactSvg />}
        collapsible
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="Priceline - Site Experience (Site-X)"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Homepage Redesign, Performance Optimizations"
        icon={<ReactSvg />}
        collapsible
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="Priceline - Site Experience (Site-X)"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Google One Tap Initiative"
        icon={<ReactSvg />}
        collapsible
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="General Assembly"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Teaching Assistant"
        icon={<ReactSvg />}
        collapsible
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="General Assembly"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Web Development Immersive"
        icon={<ReactSvg />}
        collapsible
      >
        Final Project - Retrieval Note card app
      </TimelineEvent>
      <TimelineEvent
        title="General Assembly"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Web Development Immersive"
        icon={<ReactSvg />}
        collapsible
      >
        Group Project - Explor
      </TimelineEvent>
      <TimelineEvent
        title="General Assembly"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Web Development Immersive"
        icon={<ReactSvg />}
        collapsible
      >
        Earlier Projects - Farm store, veg game
      </TimelineEvent>
      <TimelineEvent
        title="Jumanji Farm"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Business Owner | Farmer"
        icon={<ReactSvg />}
      >
        Test....
      </TimelineEvent>
      <TimelineEvent
        title="Ogilvy Public Relations"
        bubbleStyle={{
          backgroundColor: '#fff',
          border: '2px solid black',
          width: '37px',
          height: '37px'
        }}
        createdAt="Investor Relations | Account Management"
        icon={<Image src='/ab-profile.jpeg' />}
      >
        Test....
      </TimelineEvent>
    </Timeline>
  </Flex>
)

export default WorkExperience
