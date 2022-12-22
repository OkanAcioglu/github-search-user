import React from 'react'
import styled from 'styled-components'
import { GithubContext } from '../context/context'
//! All of the charts coming from index.js that is inside of the chart folder...
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts'
const Repos = () => {
  const { repos } = React.useContext(GithubContext)

  // let languages = repos.reduce((total, item) => {
  //   const { language } = item
  //   ! If the property is falsey --> return total
  //   if (!language) return total
  //   ! If the property doesnt exist
  //   if (!total[language]) {
  //     total[language] = 1
  //   } else {
  //     total[language] = total[language] + 1
  //   }
  //   return total
  // }, {})

  //!!! We will make above code more dynamic because we need them in object with two properties of "label" and "value"

  let languages = repos.reduce((total, item) => {
    const { language } = item
    if (!language) return total
    if (!total[language]) {
      total[language] = { label: language, value: 1 }
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      }
    }

    return total
  }, {})

  //!!! We wanna display most popular languages and we will remove some of the languages and at the end we want to have an array that only has the 5 language...
  //! For that first we wanna convert "languages" object to an array...
  languages = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value
    })
    .slice(0, 5)

  const chartData = [
    {
      label: 'HTML',
      value: '13',
    },
    {
      label: 'CSS',
      value: '23',
    },
    {
      label: 'JavaScript',
      value: '80',
    },
  ]

  return (
    <section className='section'>
      <Wrapper className='section-center'>
        <Pie3D data={languages} />
        <div></div>
        {/* <ExampleChart data={chartData} /> */}
        <Doughnut2D data={chartData} />
        <div></div>
      </Wrapper>
    </section>
  )
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`

export default Repos
