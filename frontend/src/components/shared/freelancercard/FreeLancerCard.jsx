import React from "react";
import Card from "./../card/Card";
import Chip from "../chip/Chip";
import { Link } from "react-router-dom";

const FreeLancerCard = ({
  name,
  rating,
  reviews,
  completion_rate,
  description,
  id,
  skills,
  display_image,
}) => {
  return (
    <Link to={`/client/freelancer/${id}`} className={"hover:cursor-pointer"}>
      <Card>
        <div className="flex space-x-3">
          <div className="">
            <div className="aspect-square w-36 rounded bg-gray-400"></div>
          </div>
          <div>
            <h3 className="mb-1 font-bold text-lg capitalize">{name}</h3>
            <div className="flex  text-sm divide-x-2 divide-black">
              <div className="pr-3">
                Rating <span className="font-semibold">{rating}</span>
              </div>
              <div className="px-3">
                <span className=" font-semibold">{reviews}</span> Reviews
              </div>
              <div className="pl-3">
                <span className="font-semibold">{completion_rate}%</span>{" "}
                Completion rate
              </div>
            </div>
            <p className="py-3">{description}</p>
            <div>
              <ul className="flex space-x-3">
                {skills.map((item, index) => (
                  <li key={index}>
                    <Chip key={index} text={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default FreeLancerCard;
