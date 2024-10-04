import prismKF from '../../assets/work/prism-kf-2.png';
import impactHeatmap from '../../assets/work/imapct-heatmap.gif';
import opioidPaper from '../../assets/work/opioid-paper.gif';
import prismAppV1 from '../../assets/work/prism-app-v1.png';
import prismCharts from '../../assets/work/prism-charts.gif';
import travelWise from '../../assets/work/travelwise-placeview.png';
import vizAccessibility from '../../assets/work/viz-accessibility.png';
import { SingleProject } from './types';

export const projects: SingleProject[] = [
  {
    id: 'prism-app-v1',
    shortTitle: 'Prism App V1',
    longDescription:
      'The Prism Platform is a biomedical research web application that allows researchers and scientists to create interactive data landscapes and reports. Users can upload, search, and explore their data with filters and engaging, interactive visualizations. As a member of a small team of engineers, I was responsible for building various data visualizations, secure endpoints, permissions structures, and UI components.',
    image: prismAppV1,
    website: 'https://app.prism.bio/',
    type: ['app'],
    technologies: ['Typescript', 'React', 'Next.js', 'Prisma']
  },
  {
    id: 'prism-kf',
    shortTitle: 'Prism Knowledge Finder',
    longDescription:
      'Prism Knowledge Finder is a web-based research tool that makes it fast and easy for users to search for and uncover the important information within their documents by allowing them to upload, organize, search, filter, and chat with their PowerPoints and PDFs. Building this product with a small team, I contributed to the creation of data extraction and vectorization pipelines, performant search functionality, and intuitive and responsive UIs.',
    image: prismKF,
    website: 'https://www.prism.bio/solutions/knowledge-finder',
    type: ['app'],
    technologies: ['Typescript', 'React', 'Nest.js', 'Python', 'PostgreSQL']
  },
  {
    id: 'prism-charts',
    shortTitle: 'Prism Charts',
    longDescription:
      'When a client wanted to integrate Prism’s visualizations into their own platform, I created Prism Charts, a React component library for data visualizations. Powered by various existing visualization libraries like Vega, D3, and Sigma.js, Prism Charts offers components for a wide variety of chart types and features and makes implementing complex styles and interactions incredibly fast and simple. As the lead engineer on this project, I responsible for the entire workflow from architecture and design to implementation and testing.',
    image: prismCharts,
    website: 'https://www.prism.bio/',
    type: ['app', 'dataviz'],
    technologies: ['Vega', 'Sigma', 'D3', 'Storybook']
  },
  {
    id: 'impact-heatmap',
    shortTitle: 'Impact Heatmap',
    longDescription:
      'To help the NIA IMPACT Collaboratory more effectively display their research on improving the health and care outcomes of people living with dementia, I worked with their team to create a custom interactive heatmap. The heatmap alone provides stakeholders with a summary view of the research findings while the drill down interaction (activated by clicking on different cells in the map) allows them to get a deeper understanding of the underlying data.',
    image: impactHeatmap,
    website: 'https://kgarrity22.github.io/impact-heat-map/',
    code: '', // TODO: make public
    type: ['app', 'dataviz'],
    technologies: ['Nivo', 'React']
  },
  {
    id: 'viz-paper',
    shortTitle: 'Visualization Accessibility in the Wild',
    longTitle: 'Visualization Accessibility in the Wild: Challenges Faced by Visualization Designers',
    longDescription:
      'As a research assistant at Boston College, I had the chance to contribute to research on data visualization and the different methods used to make web-based visualizations accessible for people with visual impairments. This involved researching screen readers and web accessibility, uncovering what challenges developers face when designing accessible visualizations and discovering what tools and methods exist for making web visualizations more accessible. The culmination of this research was this paper presented at the Conference on Human Factors in Computing Systems (CHI ‘22).',
    image: vizAccessibility,
    website: 'https://dl.acm.org/doi/10.1145/3491102.3517630',
    type: ['research', 'dataviz'],
    technologies: ['Pandas', 'Altair', 'Excel']
  },
  {
    id: 'opioid-paper',
    shortTitle: 'Opioid Use Evidence Map',
    longTitle: 'Opioid Use Disorder Treatments: An Evidence Map',
    longDescription:
      'When researchers at NYU Langone’s Lee Lab wanted a better way to visualize the gaps in opioid use disorder research, the Prism team collaborated with them to create this interactive evidence map. We worked to create an engaging interactive data landscape that allowed users to easily see high level trends while also allowing them to filter and drill down into a more detailed view of individual data points. ',
    image: opioidPaper,
    website: 'https://med.nyu.edu/research/lee-lab/research/opioid-use-disorder-treatment-evidence-map',
    type: ['research'],
    technologies: ['Vega', 'React']
  },
  {
    id: 'travelwise',
    shortTitle: 'TravelWise',
    longDescription:
      'TravelWise is an iOS app I built as a part of a Swift course. Powered by Firebase and Google’s MLKit, TravelWise allows users to take a photo of any historical landmark and instantly see historical information about that landmark. Users can also track and add their own notes about different places they have visited.',
    image: travelWise,
    website: 'https://github.com/kgarrity22/TravelWise',
    code: 'https://github.com/kgarrity22/TravelWise',
    type: ['app'],
    technologies: ['Swift', 'Firebase', 'MLKit']
  }
];
