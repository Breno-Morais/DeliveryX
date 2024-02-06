import React from 'react'
import Base from './Base'
import BasicAlerts from '../Elements/BasicAlerts'
import DismissAlerts from '../Elements/DismissAlerts'
import BasicAccordion from '../Elements/BasicAccordion'
import FlushAccordion from '../Elements/FlushAccordion'
import BasicNavTab from '../Elements/BasicNavTab'
import PillNavTab from '../Elements/PillNavTab'
import VerticalNavTab from '../Elements/VerticalNavTab'
import ProgressBar from '../Elements/ProgressBar'

function ElementTemplate() {
  return (
    <Base options="quad">
      <BasicAlerts />
      <DismissAlerts />
      <BasicAccordion />
      <FlushAccordion />
      <BasicNavTab />
      <PillNavTab />
      <VerticalNavTab />
      <ProgressBar />
    </Base>
  )
}

export default ElementTemplate