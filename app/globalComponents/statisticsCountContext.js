"use client"
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const StatisticsContext = createContext();

export const StatisticsProvider = ({ children }) => {
  const [visitorsCount, setVisitorsCount] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3001');

    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    socket.on('userCount', (count) => {
      setVisitorsCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <StatisticsContext.Provider value={visitorsCount}>
      {children}
    </StatisticsContext.Provider>
  );
};

export default StatisticsContext;
