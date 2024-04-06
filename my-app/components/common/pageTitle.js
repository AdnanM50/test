import React from 'react'

function PageTitle({title, description, className}) {
    return (
        <div className={`text-center ${className}`}>
            <h1 className="heading_text capitalize">
                {title}
            </h1>
            <p className="mt-3 text-secondary_text px-2 lg:w-1/2 mx-auto">
                {description}
            </p>
        </div>
    )
}

export default PageTitle