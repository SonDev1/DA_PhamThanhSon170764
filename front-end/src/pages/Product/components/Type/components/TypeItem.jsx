// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Card } from 'antd';
// import { Box, CardContent, CardMedia, Typography } from '@material-ui/core';

// function TypeItem({onChange ,data}) {
//     const [isHovered, setIsHovered] = useState(false);
//     const handleClick = () => {
//         console.log('TypeItem clicked: ', data._id);
//         // if (onChange) {
//         //     onChange( data._id);
//         // }
//     };
//     return (
//         <Card
//             style={{
//                 background: 'transparent',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 boxShadow: 'none',
//                 border: 'none',
//                 width: '100%',
//                 height: '100%',
//                 borderRadius: '0px',
//                 position: 'relative',
//                 cursor: 'pointer',
//             }}
//             onClick={handleClick}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <Box style={{ 
//                 position: 'relative', 
//                 // width: '100%', 
//                 // height: '100%' 
//                 }}>
//                 <CardMedia
//                     component='img'
//                     alt={data.name}
//                     image={data.image}
//                     style={{
//                         width: '100%',
//                         height: '100px',
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s ease',
//                         transform: isHovered ? 'scale(1.05)' : 'scale(1)',
//                     }}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }} style={{ margin: '0', padding: '0', paddingTop: "0px" }}>
//                     <Typography
//                         variant='h6'
//                         component='div'
//                         style={{
//                             overflow: 'hidden',
//                             textOverflow: 'ellipsis',
//                             whiteSpace: 'nowrap',
//                             // fontWeight: 'bold',
//                             color: '#333',
//                             fontFamily: 'monospace',
//                         }}
//                     >
//                         {data.name}
//                     </Typography>
//                 </CardContent>
//             </Box>
//         </Card>
//     );
// }

// TypeItem.propTypes = {};

// export default TypeItem;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';
import { Box, CardContent, CardMedia, Typography } from '@material-ui/core';

function TypeItem({ onChange, data }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        console.log('TypeItem clicked: ', data._id);
        if (onChange) {
            onChange(data._id);
        }
    };

    return (
        <Card
            style={{
                background: 'transparent',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'none',
                border: 'none',
                width: '100%',
                height: '100%',
                borderRadius: '0px',
                position: 'relative',
                cursor: 'pointer',
            }}
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box style={{ position: 'relative' }}>
                <CardMedia
                    component='img'
                    alt={data.name}
                    image={data.image}
                    style={{
                        width: '100%',
                        height: '100px',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }} style={{ margin: '0', padding: '0', paddingTop: '0px' }}>
                    <Typography
                        variant='h6'
                        component='div'
                        style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            color: '#333',
                            fontFamily: 'monospace',
                        }}
                    >
                        {data.name}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

TypeItem.propTypes = {
    onChange: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
};

export default TypeItem;
