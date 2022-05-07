import React from 'react'
import { Tab } from 'semantic-ui-react'
import './tab.css'


const TabExampleBasic = ({component}) => <Tab panes={panes} />
const panes=[
  { menuItem: 'Tab 1', render: () => <Tab.Pane>{component}</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
]

export default TabExampleBasic
