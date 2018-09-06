import React from 'react'
import Layout from 'layouts/Main'
import { getFoods } from 'api/foods'
import Food from 'components/Food'
import styled from 'styled-components'

const Filter = styled.filter`
  .filterArea {
    padding: 0 20px;
    height:50px;
    color: black;
    line-height: 50px;
    background-color: #efefef;
  }
`

const FoodPage = ({ foods }) => {
  const foodsData = foods.data
  return (
    <div>
      <Layout>
        <Filter>
          <div className='filterArea'>FILTER AREA</div>
        </Filter>
        <ul className='foodList'>
          {foodsData.map((item, i) =>
            <Food key={i} data={item} />
          )}
        </ul>
      </Layout>
    </div>
  )
}

FoodPage.getInitialProps = async ({ req }) => {
  const res = await getFoods()
  const json = await res.json()
  return { foods: json }
}

export default FoodPage
