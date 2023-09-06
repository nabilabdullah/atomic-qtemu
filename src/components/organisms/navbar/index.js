import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger py-3">
        <a class="navbar-brand" href="#">QTemu</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse ml-5" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#create-meetup">Create Meetup <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ml-3">
                    <a class="nav-link" href="#next-meetup">Next Meetup</a>
                </li>
                <li class="nav-item ml-3">
                    <a class="nav-link" href="#about-meetup">About Meetup</a>
                </li>
                <li class="nav-item ml-3">
                    <a class="nav-link" href="#members">Members</a>
                </li>
                <li class="nav-item ml-3">
                    <a class="nav-link" href="#past-meetups">Past Meetups</a>
                </li>
            </ul>
            <span class="navbar-text">
                Login
            </span>
        </div>
    </nav>
  )
}
