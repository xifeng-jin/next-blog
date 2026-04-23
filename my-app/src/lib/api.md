
# 接口解读

## 日报数据
```javascript
// 模拟REST API，支持CRUD
const API = "https://jsonplaceholder.typicode.com";
```

## 占位图
```javascript
const API = "https://picsum.photos";
// 随机图片
<img src={`${API}/200/300`} />  // 宽200高300

// 指定图片
<img src={`${API}/id/237/200/300`} />  // 图片ID 237

// 灰度
<img src={`${API}/id/237/200/300?grayscale`} />

// 模糊
<img src={`${API}/id/237/200/300?blur=2`} />
```