import React from 'react'

function WatchList() {

  return (
    <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5" >
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-4 font-medium text-gray-900">Name</th>
          <th>
            <div className="flex">Ratings</div></th>
          <th><div className="flex">Popularity</div></th>
          <th><div className="flext">Genre</div></th>

        </tr>

      </thead>

      <tbody>
        

      </tbody>
    </table>
    </div>
  )
}

export default WatchList
