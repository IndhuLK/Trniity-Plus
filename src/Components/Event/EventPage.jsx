import React from 'react'
import Movement from './Movement'
import UpcomingEvents from './UpcomingEvents'
import ImpactfulJourneys from './ImpactfulJourneys'


const EventPage = () => {
  return (
    <div>
        <Movement />
        <UpcomingEvents />
        <ImpactfulJourneys />
    </div>
  )
}

export default EventPage