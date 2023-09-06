import React from 'react'
import Navbar from '../../organisms/navbar'
import Hero from '../../organisms/hero'
import NextMeetup from '../../organisms/next-meetup'
import AboutMeetup from '../../organisms/about-meetup'
import Members from '../../organisms/members'
import PastMeetups from '../../organisms/past-meetups'
import Footer from '../../organisms/footer'

export default function Home({ titleNextMeetup, dateNextMeetup, mainTextNextMeetup, closingTextNextMeetup, mainTextAboutMeetup, socialMedia, valOrganizers, countMembers, footerText }) {
  return (
    <div>
        <Navbar />
        <Hero />
        <NextMeetup 
            title={titleNextMeetup}
            date={dateNextMeetup}
            mainText={mainTextNextMeetup}
            closingText={closingTextNextMeetup}
        />
        <AboutMeetup 
            mainTextAboutMeetup={mainTextAboutMeetup}
            socialMedia={socialMedia}
        />
        <Members 
            valOrganizers={valOrganizers}
            count={countMembers}
        />
        <PastMeetups />
        <Footer 
            text={footerText}
        />
    </div>
  )
}
