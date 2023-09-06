import React from 'react'
import Card from '../../molecules/card'
import TitleSection from '../../atoms/title-section'

export default function PastMeetups() {
  return (
    <div>
        <div class="m-3 mt-5" id="past-meetups">
            <div class="row">
                <div class="col-6">
                    <TitleSection>Past Meetups</TitleSection>
                </div>
                <div class="col-6 text-right">
                    <p class="text-danger">See all</p>
                </div>
            </div>
        </div>
      <div class="row mx-2">
        <Card 
            title={'28 November 2023'}
            mainText={'#5 PontianakJS November Meetup with Mimbar Untan'}
            count={150}
            buttonText={'View'}
        />
        <Card 
            title={'28 Oktober 2023'}
            mainText={'#5 PontianakJS November Meetup with Vindes Chanel'}
            count={150}
            buttonText={'View'}
        />
        <Card 
            title={'28 September 2023'}
            mainText={'#5 PontianakJS November Meetup with Indosiar'}
            count={150}
            buttonText={'View'}
        />
      </div>
    </div>
  )
}
