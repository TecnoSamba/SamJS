import { useEffect } from "react"
import { useState } from "react"

function Stars() {
    const [stars, setStars] = useState(0)

    const getStars = async () => {
        fetch('https://api.github.com/repos/tecnosamba/samjs')
            .then(res => res.json())
            .then(response => {
                setStars(() => response.stargazers_count)
            })
            .catch(err => {
                console.error(err)
            })
    }

    useEffect(() => {
        getStars()
    }, [])

    return (
        <span className='starBadge' onClick={() => window.open('https://github.com/tecnosamba/samjs')}>
            <img src="/star.svg" alt="GitHub Logo" fetchPriority="high" />
            <span>{stars}</span>
        </span>
    )
}

export default Stars