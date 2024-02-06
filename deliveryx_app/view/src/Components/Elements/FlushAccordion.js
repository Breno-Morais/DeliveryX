import React from 'react'

function FlushAccordion() {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <h6 className="mb-4">Flush Accordion</h6>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button className="accordion-button" type="button"
                data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="true" aria-controls="flush-collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse show"
              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Lorem et ea ea consetetur voluptua duo et aliquyam sanctus sit. Et dolore at erat amet et diam labore lorem dolores. Erat amet stet at dolore dolor ea invidunt, justo nonumy justo takimata magna. Stet lorem vero sed eos justo diam dolores, dolor sit takimata et voluptua aliquyam gubergren tempor.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                aria-expanded="false" aria-controls="flush-collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Sea diam dolore aliquyam aliquyam diam et consetetur et. Accusam amet no invidunt invidunt et consetetur, magna ut nonumy kasd erat tempor dolor et. Diam magna dolor sed amet duo dolores magna vero. Amet sit sadipscing ea diam clita lorem sit. Vero et et et tempor diam. Ipsum eirmod sit.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button className="accordion-button collapsed" type="button"
                data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                aria-expanded="false" aria-controls="flush-collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body">
                Sea sea sit sanctus magna gubergren kasd, magna justo ea lorem lorem. Elitr aliquyam ipsum clita consetetur duo at nonumy invidunt, invidunt eos dolore vero sit amet amet magna tempor clita, takimata diam justo stet erat et vero erat. Sit ipsum eirmod sea ut vero dolores sea clita nonumy, no.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlushAccordion