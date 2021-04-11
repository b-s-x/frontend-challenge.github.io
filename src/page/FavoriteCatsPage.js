import React, { useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux'

import { CatCardList } from '../components/CatCardList'

import { selectors as likeSelectors, likes } from '../store/likes';
import { selectors as catSelectors } from '../store/cats';
import '../styles/components/cat_all_page.scss'

export const FavoriteCatsPage = function FavoriteCatsPage() {

  const likeElem = useSelector(catSelectors.images);

  const dispatch = useDispatch();
  const likeIds = useSelector(likeSelectors.likeIds);
  console.log('likes', likeIds);

  const onDislike = React.useCallback((catId) => {
    dispatch(likes.actions.toggle(catId));
  }, []);

  const likeIdsSet = new Set(likeIds)

  const likedImages = useMemo(() => likeElem.filter((elem) => {
    return likeIdsSet.has(elem.id)
  }), [])

  return (
    <div>
      <CatCardList
        likeIds={likeIdsSet}
        catImages={likedImages}
        onFavorite={onDislike}
      />

    </div>
  )
}
