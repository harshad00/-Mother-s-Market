import React from 'react';
 import { Card } from '../components';
function EventAndNews() {
    
      const  events = [
          {
            id:'e1',
            "title": "Summer Harvest Festival",
            "image": "/img/Summer-Harvest-Festival.jpg",
            "description": "Join us for our annual Summer Harvest Festival! Enjoy live music, family-friendly activities, cooking demonstrations, and a wide variety of seasonal produce. Don’t miss out on the fun!",
            "date": "Saturday, July 20th, 2024",
            "time": "10:00 AM - 4:00 PM",
            "location": "Mother's Market, 1234 Fresh Avenue, Greenfield",
            "link": "https://example.com/public\img\Farm-to-Table Dinner.jpg"
          },
          {
            id:'e2',
            "title": "Farm-to-Table Dinner",
            "image": "/img/Farm-to-Table Dinner.jpg",
            "description": "Experience the best of local cuisine at our Farm-to-Table Dinner event. Enjoy a multi-course meal prepared by top local chefs using ingredients sourced directly from our market vendors.",
            "date": "Friday, August 10th, 2024",
            "time": "6:00 PM - 9:00 PM",
            "location": "Mother's Market Pavilion",
            "link": "https://example.com/farm-to-table-dinner"
          },
          {
            id:'e3',
            "title": "Holiday Market Extravaganza",
            "image": "/img/Holiday-Market-Extravaganza.jpg",
            "description": "Celebrate the holiday season at our Holiday Market Extravaganza. Find unique gifts, holiday decorations, and enjoy festive activities for the whole family.",
            "date": "Saturday, December 15th, 2024",
            "time": "9:00 AM - 3:00 PM",
            "location": "Mother's Market, 1234 Fresh Avenue, Greenfield",
            "link": "https://example.com/holiday-market-extravaganza"
          }
        ]

    const  news =[
          {
            id:'n1',
            "title": "New Vendor Spotlight: Local Honey Haven",
            "image": "/img/bees.jpg",
            "description": "We’re excited to welcome Local Honey Haven to Mother’s Market! They offer a variety of honey products, beeswax candles, and more. Be sure to check them out at our next market.",
            "link": "https://example.com/new-vendor-local-honey-haven"
          },
          {
            id:'n2',
            "title": "Mother’s Market Receives Sustainability Award",
            "image": "/img/winner.jpg",
            "description": "We are proud to announce that Mother’s Market has received the Greenfield Sustainability Award for our efforts in promoting eco-friendly practices and supporting local agriculture.",
            "link": "https://example.com/sustainability-award"
          },
          {
            id:'n3',
            "title": "Expansion of Market Hours",
            "image": "/img/Dukan.jpeg",
            "description": "Due to popular demand, we are expanding our market hours! Starting in July, Mother’s Market will be open from 8:00 AM to 2:00 PM on both Saturdays and Sundays.",
            "link": "https://example.com/market-hours-expansion"
          }
        ]
      
      
  return (
    <div>
  <div className="p-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Events And News</h1>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((e) => (
            <Card key={e.id} img={e.image} title={e.title} text={e.description} />
          ))}
          {news.map((n) => (
            <Card key={n.id} img={n.image} title={n.title} text={n.description} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default EventAndNews;
