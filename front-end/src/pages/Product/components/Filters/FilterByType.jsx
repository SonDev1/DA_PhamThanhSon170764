import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import categoryApi from '../../../../api/categoryApi'
import { Typography } from 'antd'
import { Box } from '@material-ui/core'

function FilterByType(typeGender) {
    console.log("data :",typeGender.type);
  const [type,setType] = useState([]) 


    useEffect(() => {
        (async () =>{
            try {    
                const list = await categoryApi.getTypesByGender(typeGender.type)
                console.log("list :",list);
                setType(list.map(x => ({
                    id: x._id,
                    name : x.name,
                })))
            } catch (error) {
                // console.log('Failed to fetch type list', error);
            }
        })()
    },[typeGender.type])
  return (
    <Box >
        <ul >
            {
                type.map((type) => {
                    return <li key={type._id} 
                    // onClick={() => handleCategoryClick(category)}
                    >
                        <Typography variant='subtitle2'>
                            {type.name}
                        </Typography>
                    </li>
                })
            }
        </ul>
    </Box>
  )
}

FilterByType.propTypes = {}

export default FilterByType
