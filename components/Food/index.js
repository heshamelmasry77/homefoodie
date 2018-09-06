import React from 'react'
import { Link } from '../../routes'
import Wrapper from './Wrapper'

const FoodItem = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Wrapper>
        <li>
          <Link as={`/foods/${data.id}`} href={`/food?id=${data.id}`}>
            <a>
              {data.title}
              {/* <img src={data.image} /> */}
            </a>
          </Link>
        </li>
      </Wrapper>
    </div>
  )
}

export default FoodItem
