import React from 'react'

function ExlporeCataloge() {
  return (
    <div class="bg-white py-12 px-6 md:px-12">
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
    

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="austen.png" alt="Austen" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Austen</span>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="potter.png" alt="Potter" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Potter</span>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="christie.png" alt="Christie" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Christie</span>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="hardy.png" alt="Hardy" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Hardy</span>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="waugh.png" alt="Waugh" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Waugh</span>
    </div>

    <div class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center">
      <img src="wisley.png" alt="Wisley" class="h-24 mb-4" />
      <span class="text-indigo-900 font-semibold">Wisley</span>
    </div>

  </div>
</div>

  )
}

export default ExlporeCataloge