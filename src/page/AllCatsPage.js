import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';

import { CatCardList } from "../components/CatCardList"

import { selectors as catSelectors, cats } from '../store/cats';
import { selectors as likeSelectors, likes } from '../store/likes';

import '../styles/components/cat_all_page.scss'

export const AllCatsPage = function AllCatsPage() {
  const dispatch = useDispatch();
  const images = useSelector(catSelectors.images);
  const likeIds = useSelector(likeSelectors.likeIds);

  React.useEffect(() => {
    if (images.length !== 0) return;

    const URL = "https://api.thecatapi.com/v1/images/search?limit=100"
    axios.defaults.headers.common['x-api-key'] = "53eeb490-fd74-453a-a80a-826d1cb66fae"

    axios.get(URL).then(res => {
      dispatch(cats.actions.setImages({ images: res.data }));
    })
  }, [images]);

  const onCatClick = React.useCallback((catId) => {
    dispatch(likes.actions.toggle(catId));
  }, []);

  return (
    <div>
      <CatCardList
        likeIds={new Set(likeIds)}
        catImages={images}
        onFavorite={onCatClick}
      />
    </div>
  )
}
