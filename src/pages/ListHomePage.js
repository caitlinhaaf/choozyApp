import React from 'react';

import Layout from '../components/layout/Layout'
import Tablist from '../components/tablist/Tablist';
import ButtonLink from '../components/buttonLink/ButtonLink';

import listdata from '../helper/sampleLists.json';

function ListHomePage({...props}) {
    return(
        <Layout>
          <Tablist>
            {
              Object.keys(listdata).map((key) => (
                  <option key={key} label={listdata[key].categoryName}>
                    {listdata[key].lists.map((list, i) => (
                      <ButtonLink 
                        key={i} 
                        listName={list.listName}
                        listOptions={list.listOptions}/>
                    ))}
                  </option>
              ))
            }
        </Tablist>
      </Layout>
    )
}

export default ListHomePage