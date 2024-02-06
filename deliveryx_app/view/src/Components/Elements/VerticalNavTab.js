import React from 'react'

function VerticalNavTab() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Vertical Navs & Tabs</h6>
        <div className="d-flex align-items-start">
          <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
            aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-home" type="button" role="tab"
              aria-controls="v-pills-home" aria-selected="true">Home</button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-profile" type="button" role="tab"
              aria-controls="v-pills-profile" aria-selected="false">Profile</button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-messages" type="button" role="tab"
              aria-controls="v-pills-messages" aria-selected="false">Messages</button>
            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
              data-bs-target="#v-pills-settings" type="button" role="tab"
              aria-controls="v-pills-settings" aria-selected="false">Settings</button>
          </div>
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
              Consetetur at sit est sit ut ipsum clita at. Sit elitr sit sea dolor tempor eos sit, erat diam ea rebum clita no ea. Et amet sed nonumy sadipscing dolor et ut sed et. Stet eirmod est nonumy clita invidunt rebum. Nonumy dolor ut diam invidunt eirmod nonumy sed gubergren,.
            </div>
            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
              Tempor et kasd accusam duo et dolor no accusam dolore, dolor sed voluptua duo no, sit et stet lorem dolor ipsum tempor consetetur vero, consetetur est eos sit eirmod erat diam accusam sadipscing sit. Takimata erat ea eirmod tempor elitr dolore sadipscing kasd justo, elitr tempor sed eos sadipscing magna.
            </div>
            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
              Sed kasd kasd ea clita sed lorem amet tempor est voluptua, labore stet dolores gubergren clita lorem sed nonumy at. Dolores et ut erat voluptua. Est voluptua stet accusam rebum, elitr amet sit takimata sea eirmod. Sanctus elitr amet sit dolore sea stet et ut. Dolor et sanctus elitr ut.
            </div>
            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
              Sit et vero kasd sea et at, aliquyam takimata et et est, labore et takimata sed ut stet sanctus, nonumy dolor invidunt sit labore et, amet et dolor sit dolor tempor et dolor ipsum nonumy, accusam clita sadipscing ut et labore labore est, dolore accusam vero at est sit. Invidunt.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerticalNavTab