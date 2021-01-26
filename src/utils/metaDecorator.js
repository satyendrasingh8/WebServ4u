import React from 'react'
import {Helmet} from "react-helmet"

const MetaDecorator = ({title,description}) =>{


    return(
        <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
    </Helmet>
    );
}

export default MetaDecorator;