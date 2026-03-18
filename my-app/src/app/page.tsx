"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import styles from "./root.module.css";

function HomeContentComponent() {
  const router = useRouter();
  const [time, setTime] = useState(new Date());
  const [gradient, setGradient] = useState("");

  // 更新时间并计算渐变
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 根据时间计算渐变背景色
  useEffect(() => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    
    // 将时间转换为0-1的值
    const timeRatio = (hours * 3600 + minutes * 60 + seconds) / 86400;
    
    // 根据时间生成不同的渐变
    let newGradient;
    
    if (hours >= 6 && hours < 12) {
      // 早晨：橙色到黄色渐变
      const ratio = (hours - 6 + minutes/60) / 6;
      newGradient = `linear-gradient(135deg, 
        rgba(255, ${Math.floor(150 + ratio * 100)}, ${Math.floor(100 + ratio * 50)}, 0.9),
        rgba(255, ${Math.floor(200 + ratio * 55)}, 0, 0.9)
      )`;
    } else if (hours >= 12 && hours < 18) {
      // 下午：蓝色到青色渐变
      const ratio = (hours - 12 + minutes/60) / 6;
      newGradient = `linear-gradient(135deg, 
        rgba(0, ${Math.floor(150 + ratio * 100)}, 255, 0.9),
        rgba(0, 255, ${Math.floor(200 + ratio * 55)}, 0.9)
      )`;
    } else if (hours >= 18 && hours < 22) {
      // 傍晚：紫色到深蓝色渐变
      const ratio = (hours - 18 + minutes/60) / 4;
      newGradient = `linear-gradient(135deg, 
        rgba(${Math.floor(150 + ratio * 100)}, 0, 255, 0.9),
        rgba(0, 0, ${Math.floor(150 + ratio * 100)}, 0.9)
      )`;
    } else {
      // 夜晚：深蓝色到黑色渐变
      const ratio = hours < 6 ? (hours + 24 - 22) / 8 : (hours - 22) / 8;
      newGradient = `linear-gradient(135deg, 
        rgba(0, 0, ${Math.floor(100 - ratio * 100)}, 0.9),
        rgba(0, 0, ${Math.floor(50 - ratio * 50)}, 0.9)
      )`;
    }
    
    setGradient(newGradient);
  }, [time]);

  // 处理点击跳转
  const handleClick = () => {
    router.push("/blog");
  };

  return (
    <div 
      className={styles.container}
      style={{ background: gradient }}
    >
      <div className={styles.content}>
        {/* 时间显示（可选） */}
        <div className={styles.timeDisplay}>
          {time.toLocaleTimeString("zh-CN")}
        </div>
        
        {/* 中央圆圈 */}
        <div 
          className={styles.circle}
          onClick={handleClick}
        >
          <div className={styles.text}>
            欢迎来到峡谷！
          </div>
          <div className={styles.hint}>
            点击进入
          </div>
        </div>
        
        {/* 底部说明 */}
        <div className={styles.footer}>
          <p>背景颜色会随着时间动态变化</p>
          <p>当前时间: {time.toLocaleString("zh-CN")}</p>
        </div>
      </div>
    </div>
  );
}

// 动态导入避免 SSR
const HomeContent = dynamic(() => Promise.resolve(HomeContentComponent), {
  ssr: false,
  loading: () => <div className={styles.loading}>加载中...</div>
});

export default function Home() {
  return <HomeContent />;
}