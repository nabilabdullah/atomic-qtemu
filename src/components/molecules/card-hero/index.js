import React from 'react'
import Button from '../../atoms/button'
import TitleSection from '../../atoms/title-section'

export default function CardHero({ valLocation, valMembers, valOrganizers }) {
  return (
    <div class="col-8">
        <div class="row ml-4 mt-4">
            <div class="col-12">
                <TitleSection>Hacktiv8 Meetup</TitleSection>
            </div>
        </div>
        <div class="row ml-4 mt-2">
            <div class="col-2">
                <p>Location</p>
            </div>
            <div class="col-10">
                <p>: {valLocation}</p>
            </div>
            <div class="col-2">
                <p>Members</p>
            </div>
            <div class="col-10">
                <p>: {valMembers}</p>
            </div>
            <div class="col-2">
                <p>Organizers</p>
            </div>
            <div class="col-10">
                <p>: {valOrganizers}</p>
            </div>
        </div>
        <div class="row ml-4 mt-5">
            <div class="col-12">
                <Button>Join Us</Button>
            </div>
        </div>
    </div>
  )
}
