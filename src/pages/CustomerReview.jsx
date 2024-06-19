import React, { useEffect, useState } from "react";
import appwriteService1 from "../appwrite/auth";
import { Card } from "../components";
import { Link } from "react-router-dom";

function CustomerReview() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch current user
    appwriteService1.getCurrentUser().then((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <div>
      {user && (
        <div>
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-5">Customer Review</h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center  ">
            <Card
              kye="h1"
              img={
                "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />

            <Card
              kye="h1"
              img={
                "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />

            <Card
              kye="h1"
              img={
                "https://media.istockphoto.com/id/1644526466/photo/loving-parents-embracing-daughter-over-white-background.jpg?s=2048x2048&w=is&k=20&c=ozdE-A_Qgb7xYw-uFkEbDsmss6pj1xEYLxEzM9-3FHg="
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />
          </div>
        </div>
      )}
      {!user && (
        <div>
          <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl pt-5">Customer Review</h1>
          </div>
          <div className="flex  flex-wrap justify-center items-center  ">
            <Card
              kye="h1"
              img={
                "https://images.pexels.com/photos/341970/pexels-photo-341970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />

            <Card
              kye="h1"
              img={
                "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />

            <Card
              kye="h1"
              img={
                "https://media.istockphoto.com/id/1644526466/photo/loving-parents-embracing-daughter-over-white-background.jpg?s=2048x2048&w=is&k=20&c=ozdE-A_Qgb7xYw-uFkEbDsmss6pj1xEYLxEzM9-3FHg="
              }
              title={"Senhal Roy"}
              text={
                " This is Good Plase to Parche and also have good product cowlity. "
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerReview;
