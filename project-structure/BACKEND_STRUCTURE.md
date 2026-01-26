# Backend 프로젝트 구조 표준

Python/FastAPI 및 Node.js/Express 기반 백엔드 프로젝트의 표준 구조입니다.

## Python/FastAPI 구조

### 기본 구조

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI 앱 엔트리포인트
│   │
│   ├── api/                 # API 라우터
│   │   ├── __init__.py
│   │   └── v1/
│   │       ├── __init__.py
│   │       ├── routes.py    # 라우터 통합
│   │       └── endpoints/
│   │           ├── users.py
│   │           └── items.py
│   │
│   ├── core/                # 핵심 설정
│   │   ├── __init__.py
│   │   ├── config.py        # 환경 설정
│   │   ├── security.py      # 인증/보안
│   │   └── dependencies.py  # 공통 의존성
│   │
│   ├── models/              # DB 모델
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── item.py
│   │
│   ├── schemas/             # Pydantic 스키마
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── item.py
│   │
│   ├── services/            # 비즈니스 로직
│   │   ├── __init__.py
│   │   ├── user_service.py
│   │   └── item_service.py
│   │
│   ├── repositories/        # 데이터 접근 (선택)
│   │   ├── __init__.py
│   │   └── user_repository.py
│   │
│   └── utils/               # 유틸리티
│       ├── __init__.py
│       └── helpers.py
│
├── tests/
│   ├── __init__.py
│   ├── conftest.py          # pytest fixtures
│   ├── unit/
│   └── integration/
│
├── alembic/                 # DB 마이그레이션
│   ├── versions/
│   └── env.py
│
├── requirements.txt
├── Dockerfile
├── .env.example
└── README.md
```

### 대규모 프로젝트 구조 (도메인 분리)

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   │
│   ├── core/                # 공통 모듈
│   │   ├── config.py
│   │   ├── security.py
│   │   ├── database.py
│   │   └── dependencies.py
│   │
│   ├── {domain1}/           # 도메인별 모듈
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── services.py
│   │   └── dependencies.py
│   │
│   ├── {domain2}/
│   │   ├── __init__.py
│   │   ├── routes.py
│   │   └── ...
│   │
│   └── shared/              # 공유 모듈
│       ├── models.py
│       └── utils.py
```

### 파일별 책임

| 파일 | 책임 |
|------|------|
| `main.py` | FastAPI 앱 생성, 미들웨어, 라우터 등록 |
| `routes.py` | 엔드포인트 정의 (입출력만) |
| `models.py` | SQLAlchemy 모델 (DB 스키마) |
| `schemas.py` | Pydantic 모델 (요청/응답) |
| `services.py` | 비즈니스 로직 |
| `dependencies.py` | FastAPI Depends 함수 |

---

## Node.js/Express 구조

### 기본 구조

```
backend/
├── src/
│   ├── index.js             # 엔트리포인트
│   ├── app.js               # Express 앱 설정
│   │
│   ├── config/              # 설정
│   │   ├── index.js
│   │   └── database.js
│   │
│   ├── routes/              # 라우터
│   │   ├── index.js
│   │   ├── userRoutes.js
│   │   └── itemRoutes.js
│   │
│   ├── controllers/         # 컨트롤러
│   │   ├── userController.js
│   │   └── itemController.js
│   │
│   ├── services/            # 비즈니스 로직
│   │   ├── userService.js
│   │   └── itemService.js
│   │
│   ├── models/              # DB 모델
│   │   ├── User.js
│   │   └── Item.js
│   │
│   ├── middlewares/         # 미들웨어
│   │   ├── auth.js
│   │   └── errorHandler.js
│   │
│   └── utils/               # 유틸리티
│       └── helpers.js
│
├── tests/
│   ├── unit/
│   └── integration/
│
├── package.json
├── Dockerfile
├── .env.example
└── README.md
```

---

## 공통 원칙

### 레이어 분리

```
┌─────────────────────────────────────┐
│           Routes/Controllers         │  ← HTTP 처리
├─────────────────────────────────────┤
│              Services                │  ← 비즈니스 로직
├─────────────────────────────────────┤
│           Repositories               │  ← 데이터 접근
├─────────────────────────────────────┤
│              Models                  │  ← 데이터 구조
└─────────────────────────────────────┘
```

### 의존성 방향

```
Routes → Services → Repositories → Models
         ↓
      외부 서비스
```

- 상위 레이어는 하위 레이어만 의존
- 하위 레이어는 상위 레이어를 모름
- 순환 의존 금지

### 네이밍 규칙

| 항목 | Python | JavaScript |
|------|--------|------------|
| 파일명 | snake_case | camelCase |
| 클래스 | PascalCase | PascalCase |
| 함수 | snake_case | camelCase |
| 상수 | UPPER_SNAKE | UPPER_SNAKE |

### 환경 변수

```
# .env.example
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-secret-key
JWT_EXPIRE_HOURS=24
API_VERSION=v1
DEBUG=false
```

### 에러 처리

일관된 에러 응답 형식:

```json
{
  "success": false,
  "error": {
    "code": "USER_NOT_FOUND",
    "message": "사용자를 찾을 수 없습니다.",
    "details": {}
  }
}
```
