import React from 'react'
import Home from '../../template/home'

export default function HomePages() {
  return (
    <div>
        <Home
            titleNextMeetup={'Awesome Meetup and Event'} 
            dateNextMeetup='28 Oktober 2023' 
            mainTextNextMeetup="Hello JavaScript and React Js. Get ready for our monthly meetup PontianakJS! This will be our fifth meetup of 2023! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. Hello JavaScript and React Js. Get ready for our monthly meetup PontianakJS! This will be our fifth meetup of 2023! The meetup format will contain some short stories and technical talks. If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements. Remember to bring a photo ID to get through building security." 
            closingTextNextMeetup='See you there!' 
            mainTextAboutMeetup="Come and meet other developers interested in the JavaScript and it's library in the Greater Pontianak area." 
            socialMedia='Twitter: @PontianakJS and we use the hashtag #pontianakjs' 
            valOrganizers='UPT. TIK Universitas Tanjungpura' 
            countMembers={10} 
            footerText='UPT. TIK Universitas Tanjungpura'
        />
    </div>
  )
}
