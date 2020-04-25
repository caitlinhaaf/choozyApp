import React from 'react';
import { useDispatch } from "react-redux";
import { setListData } from '../utils/actions';

import Layout from '../components/layout/Layout';
import Tablist from '../components/tablist/Tablist';
import ButtonLink from '../components/buttonLink/ButtonLink';

import listdata from '../helper/sampleLists.json'; //TODO: replace with backend data

function ListHomePage({...props}) {
    const dispatch = useDispatch();

    const selectActiveList = (listCategory, listName, listId, listOptions) => {
      dispatch(setListData({
        "listCategory": listCategory,
        "listName": listName,
        "listId": listId, 
        "listOptions": listOptions
      }))
    }

    return(
        <Layout>
          <Tablist>
            {
              Object.keys(listdata).map((key) => (
                  <option key={key} label={listdata[key].categoryName}>
                    {listdata[key].lists.map((list, i) => (
                      <ButtonLink 
                        key={i} 
                        linkRoute={`/listlaunch/${key}/${list.listId}`}
                        btnText={list.listName}
                        clickEvt={
                          () => 
                          selectActiveList(
                            key,
                            list.listName,
                            list.listId, 
                            list.listOptions
                        ) }
                      />
                    ))}
                  </option>
              ))
            }
        </Tablist>
      </Layout>
    )
}

export default ListHomePage