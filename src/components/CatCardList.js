import React from "react"
import {CatCard} from "./CatCard"

import '../styles/components/cat_all_page.scss'

export const CatCardList = function CatCardList(props) {
  console.log('set', props.likeIds);
  return (
    <div className="card__container">
      {
        props.catImages.map((elem) => {
          return (
            <CatCard
              elem={elem}
              isLike={props.likeIds.has(elem.id)}
              key={elem.id}
              onFavorite={props.onFavorite}
            />

          )
        })
      }
    </div>
  )
}

