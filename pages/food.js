import React from 'react'
import Layout from 'layouts/Main'
import fetch from 'isomorphic-unfetch'

const Food = (props) => {
  const foodData = props.foodData.data
  console.log(foodData)
  return (
    <div>
      <Layout>
        <p>{foodData.title}</p>
      </Layout>
    </div>
  )
}

Food.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://fe-workshop.dylanharbour.com/api/food/${id}`)
  const foodData = await res.json()

  return { foodData }
}

export default Food
