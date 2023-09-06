import React from 'react'
import TitleSection from '../../atoms/title-section'

export default function Members({ valOrganizers, count }) {
  return (
    <div class="m-3 mt-5" id="members">
        <div class="row">
            <div class="col-12">
                <TitleSection>Members</TitleSection>
            </div>
        </div>
        <div class="row bg-light mx-2 p-2">
            <div class="col-2">
                <img src="user.jpg" alt="foto" width="100%" class="rounded-circle m-3 shadow p-3 mb-5 bg-white rounded" />
            </div>
            <div class="col-10 mt-4 pl-5">
                <div class="row">
                    <div class="col-12">
                        <TitleSection>Organizers</TitleSection>
                    </div>
                    <div class="col-4">
                        {valOrganizers}
                    </div>
                    <div class="col-8">
                        {count} others
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
