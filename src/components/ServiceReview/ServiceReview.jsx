import React from "react";

const ServiceReview = ({ data }) => {
    const {image,name,rating,description}=data;
  return (
    <tr>
      <td><img src={image} alt="" className="user-profile" /></td>
      <td>{name}</td>
      <td>{rating}</td>  
      <td>{description}</td>  
    </tr>
  );
};

export default ServiceReview;
