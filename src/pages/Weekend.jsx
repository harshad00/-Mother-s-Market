import React from 'react';

const weekendPlan = {
  "Saturday": {
    "title": "Saturday at Mother's Market",
    "image": "/img/bgimg.jpg",
    "activities": [
      {
        "time": "8:00 AM",
        "title": "Market Opening",
        "description": "Start your day with fresh produce and artisanal goods as the market opens."
      },
      {
        "time": "9:00 AM",
        "title": "Live Music",
        "description": "Enjoy live music from local bands while you shop."
      },
      {
        "time": "10:00 AM",
        "title": "Kids' Craft Corner",
        "description": "Bring your kids to the craft corner for fun, hands-on activities."
      },
      {
        "time": "11:00 AM",
        "title": "Cooking Demonstration",
        "description": "Watch a live cooking demonstration and learn how to prepare a delicious seasonal dish."
      },
      {
        "time": "12:00 PM",
        "title": "Food Truck Lunch",
        "description": "Grab lunch from one of the gourmet food trucks featuring a variety of cuisines."
      },
      {
        "time": "1:00 PM",
        "title": "Gardening Workshop",
        "description": "Join a gardening workshop to learn tips and tricks for your home garden."
      },
      {
        "time": "2:00 PM",
        "title": "Market Closing",
        "description": "The market closes at 2:00 PM. See you again next weekend!"
      }
    ]
  },
  "Sunday": {
    "title": "Sunday at Mother's Market",
    "image": "/img/Dukan.jpeg",
    "activities": [
      {
        "time": "9:00 AM",
        "title": "Market Opening",
        "description": "Start your Sunday morning with fresh produce and artisanal goods."
      },
      {
        "time": "10:00 AM",
        "title": "Yoga Session",
        "description": "Join a free outdoor yoga session to relax and rejuvenate."
      },
      {
        "time": "11:00 AM",
        "title": "Farm Tour",
        "description": "Take a guided tour of one of our local farms and learn about sustainable farming practices."
      },
      {
        "time": "12:00 PM",
        "title": "Local Author Book Signing",
        "description": "Meet a local author and get your book signed."
      },
      {
        "time": "1:00 PM",
        "title": "Picnic at the Market",
        "description": "Enjoy a picnic lunch with fresh ingredients from the market."
      },
      {
        "time": "2:00 PM",
        "title": "Artisan Workshop",
        "description": "Participate in an artisan workshop and create your own handcrafted item."
      },
      {
        "time": "3:00 PM",
        "title": "Market Closing",
        "description": "The market closes at 3:00 PM. Thank you for visiting!"
      }
    ]
  }
};

const WeekendPage = () => {
  const renderActivities = (activities) => {
    return activities.map((activity, index) => (
      <div key={index} className="activity mb-4">
        <h4 className=" text-center text-red-300 text-xl sm:text-2xl md:text-2xl lg:text-3xl mb-2">
          {activity.time} - {activity.title}
        </h4>
        <p className= "text-center text-balck text-lg sm:text-xl md:text-2xl">{activity.description}</p>
      </div>
    ));
  };

  return (
    <div className="weekend-page bg-[#85FFBD] p-4">
      <h1 className="text-center  text-white text-3xl sm:text-4xl md:text-5xl py-5">
              Weekend planing
            </h1>
      {Object.keys(weekendPlan).map((day) => (
        <div key={day} className="day-plan mb-8">
          <div className="flex flex-col justify-center items-center">
            
            <img
              className="w-full h-auto max-w-3xl rounded-lg shadow-md mb-4"
              src={weekendPlan[day].image}
              alt={weekendPlan[day].title}
            />
            <h1 className="text-white text-xl sm:text-3xl md:text-3xl lg:text-3xl mb-4">
              {weekendPlan[day].title}
            </h1>
            <div className="activities">
              {renderActivities(weekendPlan[day].activities)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekendPage;
