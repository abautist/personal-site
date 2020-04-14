import PricelineSvg from '../components/svgs/PricelineSvg'
import GaSvg from '../components/svgs/GaSvg'
import JfSvg from '../components/svgs/JfSvg'
import OgilvySvg from '../components/svgs/OgilvySvg'
import displayTechStamps from '../helpers/displayTechStamps'

const oldPostBookingTech = ['Angular', 'node.js', 'gulp', 'bower']

const newPostBookingTech = [
  'React 16+',
  'node.js',
  'graphQL',
  'jest',
  'React testing library',
  'Storybook v4',
  'Design system',
  'Responsive'
]

const monoRepoTech = [
  'Rush mono repo',
  'React hooks',
  'jest',
  'React Testing Library',
  'Storybook v4',
  'Design system',
  'Responsive',
  'Composable'
]

const whiteLabelTech = [
  'Next.js',
  'React 16+',
  'jest',
  'React Testing Library',
  'Storybook v4',
  'Design system',
  'Responsive',
  'Semantic theming'
]

const oldHomepage = ['Angular', 'node6', 'gulp', 'Desktop only']

const newHomepage = [
  'React',
  'Common components',
  'Adaptive',
  'Performance budget',
  'Lazy load images',
  'Bundle splitting',
  'Optimize script loads'
]

const oneTapTech = [
  'Google hackathon',
  'A/B test winner',
  'Increased account creation'
]

const teachingAssistant = [
  'JavaScript',
  'HTML',
  'CSS',
  'Angular',
  'express/node.js',
  'Ruby on Rails',
  'DOM manipulation',
  'browser dev tools'
]

const retrievalAppTech = [
  'Angular',
  'node.js',
  'SASS',
  'mongodb',
  'bootstrap',
  'authentication',
  'responsive'
]

const explorAppTech = [
  'Ruby on Rails',
  'SASS',
  'postgreSQL',
  'Google places API',
  'Flickr API',
  'Yahoo weather API',
  'Heroku'
]

const earlierProjectsTech = [
  'JavaScript',
  'HTML',
  'CSS',
  'Express',
  'PostgreSQL',
  'Stripe API',
  'jQuery',
  'Heroku'
]

const professionalExperience = [
  {
    id: 1,
    component: (size) => <PricelineSvg width={size} height={size} />,
    duration: "Aug'16 to present"
  },
  {
    id: 2,
    component: (size) => <GaSvg width={size} height={size} />,
    duration: "Jan'16 to Apr'16"
  },
  {
    id: 3,
    component: (size) => <JfSvg width={size} height={size} />,
    duration: "May'14 to Dec'15"
  },
  {
    id: 4,
    component: (size) => <OgilvySvg width={size} height={size} />,
    duration: "Aug'09 to Dec'12"
  }
]

const workEvents = [
  {
    title: 'Post Booking, Packages',
    createdAt: 'Restack of customer itinerary page (current)',
    icon: <PricelineSvg width="31px" />,
    firstContentTitle: 'Old',
    firstContent: displayTechStamps(oldPostBookingTech),
    firstImageUrl: './old-pb.png',
    secondContentTitle: 'New',
    secondContent: displayTechStamps(newPostBookingTech),
    secondImageUrl: './new-pb.png'
  },
  {
    title: 'Mono Repo Initiative',
    createdAt: 'Universal cross sell component (2020)',
    icon: <PricelineSvg width="31px" />,
    firstContent: displayTechStamps(monoRepoTech),
    firstImageUrl: './cross-sell.png'
  },
  {
    title: 'White Label Initiative',
    createdAt: 'Configurable booking platform for partners (2019)',
    icon: <PricelineSvg width="31px" />,
    firstContent: displayTechStamps(whiteLabelTech),
    firstImageUrl: './united.png'
  },
  {
    title: 'Site Experience (Site-X)',
    createdAt: 'Google one tap sign in (2018)',
    icon: <PricelineSvg width="31px" />,
    firstContent: displayTechStamps(oneTapTech),
    firstImageUrl: './google-one-tap.png'
  },
  {
    title: 'Site Experience (Site-X)',
    createdAt: 'Homepage redesign, performance optimizations (2017)',
    icon: <PricelineSvg width="31px" />,
    firstContentTitle: 'Old',
    firstContent: displayTechStamps(oldHomepage),
    firstImageUrl: './Old-hp.png',
    secondContentTitle: 'New',
    secondContent: displayTechStamps(newHomepage),
    secondImageUrl: './new-hp.png'
  },
  {
    title: 'General Assembly',
    createdAt: 'Web development teaching assistant (2016)',
    icon: <GaSvg width="37px" />,
    firstContent: displayTechStamps(teachingAssistant)
  },
  {
    title: 'General Assembly - Web dev immersive',
    createdAt: 'Final project - retrieval app (2015)',
    icon: <GaSvg width="37px" />,
    firstContent: displayTechStamps(retrievalAppTech),
    firstImageUrl: './retrieval.png'
  },
  {
    title: 'General Assembly - Web dev immersive',
    createdAt: 'Group project - explor app (2015)',
    icon: <GaSvg width="37px" />,
    firstContent: displayTechStamps(explorAppTech),
    firstImageUrl: './explor.png'
  },
  {
    title: 'General Assembly - Web dev immersive',
    createdAt: 'Earlier projects... (2015)',
    icon: <GaSvg width="37px" />,
    firstContent: displayTechStamps(earlierProjectsTech),
    firstImageUrl: './jumanji.png',
    secondImageUrl: './vegquiz.png'
  },
  {
    title: 'Jumanji Farm',
    createdAt: 'Business owner - organic farming (2014-15)',
    icon: <JfSvg width="37px" />,
    collapsible: false
  },
  {
    title: 'Ogilvy Public Relations',
    createdAt: 'Investor relations, account management (2009-12)',
    icon: <OgilvySvg width="37px" />,
    collapsible: false
  }
]

export default {
  oldPostBookingTech,
  newPostBookingTech,
  monoRepoTech,
  whiteLabelTech,
  oldHomepage,
  newHomepage,
  oneTapTech,
  teachingAssistant,
  retrievalAppTech,
  explorAppTech,
  earlierProjectsTech,
  professionalExperience,
  workEvents
}
