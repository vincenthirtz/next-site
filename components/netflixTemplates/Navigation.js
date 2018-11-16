import React from 'react'
import Link from 'next/link'

function Navigation ({ url, page }) {
  return (
    <div>
      {page > 1 && (
        <Link href={`${url}${page - 1}`}>
          <button>Previous</button>
        </Link>
      )}
      <Link href={`${url}${(page || 1) + 1}`}>
        <button>Next</button>
      </Link>
    </div>
  )
}

export default Navigation