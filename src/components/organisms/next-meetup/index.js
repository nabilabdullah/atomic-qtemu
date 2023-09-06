import React from 'react'
import TitleSection from '../../atoms/title-section'

export default function NextMeetup({ title, date, mainText, closingText }) {
  return (
    <div class="m-3 mt-5" id="next-meetup">
        <TitleSection>Next Meetup</TitleSection>
        <div class="bg-light m-2 p-2">
          <p class="font-weight-bold mt-3">{title}</p>
          <p class="font-weight-bold text-warning">{date}</p>
          <div class="row">
            <div class="col-12 text-justify">{mainText}</div>
          </div>
          <p class="mt-3">{closingText}</p>
        </div>
      </div>
  )
}
