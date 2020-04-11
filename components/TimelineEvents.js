import { Timeline, TimelineEvent } from 'react-event-timeline'
import styled from 'styled-components'
import { Flex, Image, Text, getPaletteColor } from 'pcln-design-system'
import constants from '../constants'
const { workEvents } = constants

const FlexWrapped = styled(Flex)`
  flex-wrap: wrap;
`

const ImageWithShadow = styled(Image)`
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
`

const BorderedFlexTitle = styled(Flex)`
  align-self: center;
  border: 2px solid ${getPaletteColor('text.base')};
`

const customizedBubbleStyle = {
  backgroundColor: '#fff',
  border: '2px solid black',
  width: '36px',
  height: '36px',
  boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.5)',
  marginLeft: '-2px',
  overflow: 'hidden'
}

const contentStyle = {
  backgroundColor: 'transparent',
  boxShadow: 'none'
}

const TimelineEvents = () => (
  <Timeline lineColor="#001023">
    {workEvents.map(
      ({
        title,
        createdAt,
        icon,
        collapsible = true,
        firstContentTitle,
        firstContent,
        firstImageUrl,
        secondContentTitle,
        secondContent,
        secondImageUrl
      }) => (
        <TimelineEvent
          title={title}
          createdAt={createdAt}
          bubbleStyle={customizedBubbleStyle}
          contentStyle={contentStyle}
          icon={icon}
          collapsible={collapsible}
          key={event.title}
        >
          <Flex flexDirection="column" alignItems="center">
            <Flex mb={2}>
              {firstContentTitle ? (
                <BorderedFlexTitle mr={2} p={1}>
                  <Text fontSize={0} fontWeight="bold" caps>
                    {firstContentTitle}
                  </Text>
                </BorderedFlexTitle>
              ) : null}
              <FlexWrapped>{firstContent}</FlexWrapped>
            </Flex>
            {firstImageUrl ? <ImageWithShadow src={firstImageUrl} /> : null}
            {secondContentTitle && secondContent ? (
              <Flex mt={2}>
                {secondContentTitle ? (
                  <BorderedFlexTitle mr={2} p={1}>
                    <Text fontSize={0} fontWeight="bold" caps>
                      {secondContentTitle}
                    </Text>
                  </BorderedFlexTitle>
                ) : null}
                <FlexWrapped my={2}>{secondContent}</FlexWrapped>
              </Flex>
            ) : null}
            {secondImageUrl ? <ImageWithShadow src={secondImageUrl} /> : null}
          </Flex>
        </TimelineEvent>
      )
    )}
  </Timeline>
)

export default TimelineEvents
