'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
// web 性能指标相关
export function WebVitals() {
  // const reporter
  useReportWebVitals((metric) => {
    console.log(metric)
  })

  return null;
}