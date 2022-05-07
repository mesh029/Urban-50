import React from 'react'
import { Tab } from 'semantic-ui-react'
import './chess.css'
import Header from '../../components/header/Header'
import Section from '../../components/Sections/Section'

const chessEvents = (
  <div className="chessEvents">
    <div className="chessEventsHeader">
      <Header />
    </div>
    <br />
    <h1>
      I have some cool chess events I thought you may want to know
    </h1>
  </div>
)
const p = 'chess'
const TabExampleBasic = () =>
  <div className="chessPg">
    <div className="chessPgUp">
      <Section sectionId={'chess'}/>
    </div>
    <div className="chessPgDwn">
      <Tab panes={panes} />
    </div>

  </div>
const panes = [
  { menuItem: 'Posts', render: () => <Tab.Pane>{chessEvents}</Tab.Pane> },
  { menuItem: 'Events', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Top Player', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export default TabExampleBasic
