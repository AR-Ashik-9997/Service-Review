import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsService = () => {
    const DetailsData=useLoaderData();
    console.log(DetailsData);
    return (
        <div>
            <h1>this details service page</h1>
        </div>
    );
};

export default DetailsService;