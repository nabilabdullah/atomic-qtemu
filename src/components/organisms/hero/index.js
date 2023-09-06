import React from 'react'
import CardHero from '../../molecules/card-hero'

export default function Hero() {
  return (
    <div class="bg-light m-3" id="create-meetup">
        <div class="row">
            <div class="col-4">
                <img src="meetup.jpg" width="100%" class="m-3" alt="ini foto" />
            </div>
            <CardHero 
                valLocation={'Pontianak, Indonesia'}
                valMembers={10}
                valOrganizers={'UPT. TIK Universitas Tanjungpura'}
            ></CardHero>
        </div>
      </div>
  )
}
