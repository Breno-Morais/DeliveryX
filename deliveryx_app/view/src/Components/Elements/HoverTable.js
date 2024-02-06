import React from 'react'

function HoverTable({headers, body}) {
  return (
    <div className="col-sm-12 col-xl-6">
      <div className="bg-light rounded h-100 p-4">
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map( header => <th scope='col'>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {body.map( row => {
              return <tr>
                {row.map((element, index) => <td>{element}</td>)}
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HoverTable