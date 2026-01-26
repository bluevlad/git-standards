# Frontend 프로젝트 구조 표준

React 기반 프론트엔드 프로젝트의 표준 구조입니다.

## React/Vite 구조

### 기본 구조

```
frontend/
├── public/
│   ├── favicon.ico
│   └── assets/
│
├── src/
│   ├── main.jsx             # 엔트리포인트
│   ├── App.jsx              # 루트 컴포넌트
│   │
│   ├── components/          # 공통 컴포넌트
│   │   ├── common/          # 범용 UI 컴포넌트
│   │   │   ├── Button.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── LoadingSpinner.jsx
│   │   └── layout/          # 레이아웃 컴포넌트
│   │       ├── Header.jsx
│   │       ├── Footer.jsx
│   │       └── Sidebar.jsx
│   │
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── HomePage.jsx
│   │   ├── LoginPage.jsx
│   │   └── Dashboard/
│   │       ├── index.jsx
│   │       └── components/
│   │
│   ├── hooks/               # 커스텀 훅
│   │   ├── useAuth.js
│   │   └── useFetch.js
│   │
│   ├── contexts/            # React Context
│   │   └── AuthContext.jsx
│   │
│   ├── services/            # API 서비스
│   │   ├── api.js           # API 클라이언트
│   │   ├── authService.js
│   │   └── userService.js
│   │
│   ├── utils/               # 유틸리티
│   │   ├── helpers.js
│   │   └── constants.js
│   │
│   └── styles/              # 스타일
│       ├── globals.css
│       └── variables.css
│
├── tests/
│   └── components/
│
├── package.json
├── vite.config.js
├── .env.example
└── README.md
```

### Feature-based 구조 (대규모)

```
frontend/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── shared/              # 공유 모듈
│   │   ├── components/
│   │   │   ├── Button.jsx
│   │   │   └── Modal.jsx
│   │   ├── hooks/
│   │   │   └── useAuth.js
│   │   ├── contexts/
│   │   │   └── AuthContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   └── utils/
│   │
│   ├── features/            # 기능별 모듈
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   └── LoginForm.jsx
│   │   │   ├── pages/
│   │   │   │   └── LoginPage.jsx
│   │   │   ├── hooks/
│   │   │   │   └── useLogin.js
│   │   │   ├── services/
│   │   │   │   └── authApi.js
│   │   │   └── index.js
│   │   │
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── index.js
│   │   │
│   │   └── users/
│   │       └── ...
│   │
│   └── app/                 # 앱 설정
│       ├── routes.jsx
│       └── store.js
```

### 앱 분리 구조 (멀티 앱)

```
frontend/
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   │
│   ├── shared/              # 공유 모듈
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── hooks/
│   │   └── services/
│   │
│   └── apps/                # 앱별 분리
│       ├── admin/           # 관리자 앱
│       │   ├── AdminApp.jsx
│       │   ├── components/
│       │   ├── pages/
│       │   └── services/
│       │
│       └── customer/        # 고객 앱
│           ├── CustomerApp.jsx
│           ├── components/
│           ├── pages/
│           └── services/
```

---

## 파일 네이밍 규칙

| 유형 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase.jsx | `UserProfile.jsx` |
| 페이지 | PascalCase + Page | `LoginPage.jsx` |
| 훅 | use + camelCase | `useAuth.js` |
| 서비스 | camelCase + Service | `userService.js` |
| 유틸리티 | camelCase | `formatDate.js` |
| 상수 | camelCase 또는 UPPER_SNAKE | `constants.js` |
| 스타일 | 컴포넌트명.module.css | `Button.module.css` |

---

## 컴포넌트 구조

### 컴포넌트 파일 구조

```jsx
// 1. Imports
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../common';
import { useAuth } from '../../hooks';
import styles from './ComponentName.module.css';

// 2. Types/Interfaces (TypeScript)
// interface Props { ... }

// 3. Component
function ComponentName({ prop1, prop2 }) {
  // 3.1 Hooks
  const navigate = useNavigate();
  const { user } = useAuth();
  const [state, setState] = useState(null);

  // 3.2 Effects
  useEffect(() => {
    // ...
  }, []);

  // 3.3 Handlers
  const handleClick = () => {
    // ...
  };

  // 3.4 Render helpers (선택)
  const renderItem = (item) => (
    <div key={item.id}>{item.name}</div>
  );

  // 3.5 Return
  return (
    <div className={styles.container}>
      {/* ... */}
    </div>
  );
}

// 4. Export
export default ComponentName;
```

### index.js 패턴

```
components/
├── Button/
│   ├── index.js          # export { default } from './Button';
│   ├── Button.jsx
│   └── Button.module.css
```

```js
// components/Button/index.js
export { default } from './Button';

// 사용
import Button from './components/Button';
```

---

## 상태 관리

### Context API (소규모)

```
contexts/
├── AuthContext.jsx
├── ThemeContext.jsx
└── index.js
```

### Redux/Zustand (대규모)

```
store/
├── index.js              # store 생성
├── slices/
│   ├── authSlice.js
│   └── userSlice.js
└── hooks.js              # useAppDispatch, useAppSelector
```

---

## API 서비스

### apiClient.js

```js
// services/apiClient.js
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 인터셉터
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
```

### 도메인별 서비스

```js
// services/userService.js
import apiClient from './apiClient';

export const userService = {
  getAll: () => apiClient.get('/users'),
  getById: (id) => apiClient.get(`/users/${id}`),
  create: (data) => apiClient.post('/users', data),
  update: (id, data) => apiClient.put(`/users/${id}`, data),
  delete: (id) => apiClient.delete(`/users/${id}`),
};
```

---

## 환경 변수

```
# .env.example
VITE_API_URL=http://localhost:9040/api
VITE_APP_NAME=MyApp
VITE_GOOGLE_CLIENT_ID=xxx
```

**사용:**
```js
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 라우팅

### routes.jsx

```jsx
// app/routes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage, HomePage, DashboardPage } from '../pages';
import { ProtectedRoute } from '../components';

function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/login" element={<LoginPage />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
```
