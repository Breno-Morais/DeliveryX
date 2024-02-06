import React from 'react'

function BasicAccordion() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Basic Accordion</h6>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseOne" aria-expanded="true"
                aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show"
              aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Gubergren justo eos magna eirmod lorem magna, amet dolores ipsum sadipscing ipsum consetetur invidunt et clita diam, vero dolor dolor est eirmod. Rebum accusam amet ipsum et. Et et lorem sanctus amet eos eos elitr ea, sanctus magna et et sed eos sit takimata sadipscing, dolor rebum sed stet vero.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"
              aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Voluptua sit dolores consetetur ea et diam est et takimata. Et erat sadipscing dolores et stet diam ut ut diam, sit aliquyam no magna et dolore lorem dolor sit. Lorem lorem sed sed duo, eirmod sit diam ipsum sit erat, lorem sit dolor diam amet ea aliquyam tempor rebum invidunt,.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse"
              aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Dolore eos dolor tempor justo sea eos amet eos kasd dolor, et diam tempor lorem dolores vero. Stet dolore gubergren nonumy diam. Consetetur sit takimata magna invidunt, dolore sea amet consetetur ea et rebum, invidunt et amet sit sea. Dolor eirmod sed magna sadipscing sadipscing lorem lorem sed, sit lorem.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicAccordion