"use client"

import { useEffect, useRef, useState, useCallback } from "react";

export const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const useRandomTime = (intervalMs: number = 1000) => {
    const [color, setColor] = useState(() => generateRandomColor());
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const timeCountRef = useRef(0);
    
    const startTimer = useCallback(() => {
        // 清理现有定时器
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        
        timerRef.current = setInterval(() => {
            const newColor = generateRandomColor();
            setColor(newColor);
            timeCountRef.current += 1;
            
            // 1小时（3600秒）后重置计数器
            if (timeCountRef.current >= 3600) {
                timeCountRef.current = 0;
                // eslint-disable-next-line react-hooks/immutability
                startTimer(); // 重新启动
            }
        }, intervalMs);
    }, [intervalMs]);
    useEffect(() => {
        startTimer();
        
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [startTimer]);

    return { color }
}

export default useRandomTime;
