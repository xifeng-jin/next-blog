"use client";

import { useState, useEffect } from "react";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import useRandomTime from "./_hooks/useRandomTime";

import styles from "./root.module.css";

function HomeContentComponent() {
  const router = useRouter();
  const [time, setTime] = useState(new Date());

  const { color } = useRandomTime();
  // console.log(color, 'jjjkk')

  // 更新时间并计算渐变
  useEffect(() => {
    const interval = setInterval(() => {
      // 这里会触发 SSR 问题，客户端和服务端的时间可能不一致
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // 处理点击跳转
  const handleClick = () => {
    router.push("/blog");
  };

  return (
    <div 
      className={styles.container}
      style={{ background: color }}
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