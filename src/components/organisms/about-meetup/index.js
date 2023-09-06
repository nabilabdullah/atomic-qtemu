import React from 'react'
import TitleSection from '../../atoms/title-section'

export default function AboutMeetup({ mainTextAboutMeetup, socialMedia }) {
  return (
    <div class="m-3 mt-5" id="about-meetup">
        <TitleSection>About Meetup</TitleSection>
        <div class="m-2 p-2">
            <p class="">{mainTextAboutMeetup}</p>
            <p class="mt-3">{socialMedia}</p>
        </div>
    </div>
  )
}
