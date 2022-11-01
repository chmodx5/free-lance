import React from "react";
import { useParams } from "react-router-dom";

const ClientSingleFreelancer = () => {
  const location = useParams();
  console.log(location);
  return <div>ClientSingleFreelancer - {location.id}</div>;
};

export default ClientSingleFreelancer;
