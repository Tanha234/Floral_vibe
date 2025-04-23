import React from 'react'

function ShopByOccasions() {
  return (
    <div><div className="py-10 bg-white text-center">
    <p className="text-sm text-gray-700">Occasions</p>
    <h2 className="text-3xl font-bold mb-10">
      Shop By <span className="text-indigo-900">Occasions</span>
    </h2>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  px-36 mx-25">
      {[
        { icon: '💍', title: 'Weddings', count: 42 },
        { icon: '🎁', title: 'Birthday', count: 56 },
        { icon: '💜', title: 'Anniversary', count: 11 },
        { icon: '🙏', title: 'Thank You', count: 48 },
        { icon: '🎓', title: 'Graduation', count: 13 },
        { icon: '🤒', title: 'Get Well Soon', count: 16 },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-purple-50 w-20 h-20 flex items-center justify-center rounded-full text-3xl shadow-sm mb-3">
            {item.icon}
          </div>
          <p className="font-medium text-sm">{item.title}</p>
          <p className="text-xs text-gray-500">{item.count} Products</p>
        </div>
      ))}
    </div>
  </div>
  </div>
  )
}

export default ShopByOccasions