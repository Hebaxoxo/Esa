// pages/events.js

import React from 'react';
import styles from '/workspaces/codespaces-nextjs/styles/events.module.css'; // Import the CSS module

const EventsPage = ({ events }) => {
  return (
    <div className={styles['events-container']}>
      <h1>Events/News</h1>
      <ul className={styles['events-list']}>
        {events.map((event, index) => (
          <li key={index} className={styles['event-card']}>
            <div className={styles['event-info']}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p>Date: {event.date}</p>
            </div>
            <img
              src={event.photo} // Placeholder image link
              alt={event.photoalt}
              className={styles['event-image']}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Rest of the code remains the same...



export async function getStaticProps() {
  // Fetch events from a data source (e.g., a JSON file or an API)
  // For demonstration purposes, using mock data
  const events = [
    {
      title: 'Watch the sky with us!',
      description: 'On this day, there will be an aurora-like phenomemnon but in space!',
      date: '2023-11-15',
      photo: 'https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg',
      photoalt: 'aurora in space',
    },
    {
      title: 'Event 2',
      description: 'Description of Event 2',
      date: '2023-11-20',
      photo: 'https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg',
      photoalt: 'aurora in space',
    },
  ];

  return {
    props: {
      events,
    },
  };
}

export default EventsPage;
