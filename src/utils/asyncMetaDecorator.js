import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';

const asyncMetaDecorator = ({title,url}) =>{


    return(
        <HelmetProvider>
        <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={url} />
    </Helmet>
    </HelmetProvider>
    );
}

export default asyncMetaDecorator;