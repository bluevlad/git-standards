# {프로젝트명} 문서 구조

## 디렉토리 구조

```
docs/
├── README.md              # 이 파일
│
├── adr/                   # Architecture Decision Records
│   └── (설계 결정 기록)
│
├── api/                   # API 관련 문서
│   └── CHANGELOG.md       # API 변경 이력
│
├── dev/                   # 개발자 가이드
│   ├── SETUP.md           # 개발 환경 설정
│   └── DEPLOYMENT.md      # 배포 가이드
│
└── roadmap/               # 로드맵 및 계획
    └── (기능별 로드맵)
```

## 디렉토리 설명

| 디렉토리 | 용도 | 대상 |
|----------|------|------|
| `adr/` | 아키텍처 결정 기록 | 개발자 |
| `api/` | API 변경 이력, 연동 문서 | 개발자 |
| `dev/` | 개발/배포 환경 설정 | 개발자 |
| `roadmap/` | 기능별 로드맵, 계획 | 개발자/PM |

## 문서 작성 가이드

### 언제 어디에 작성할까?

| 상황 | 위치 | 예시 |
|------|------|------|
| 새 기능 설계 결정 | `adr/` | `adr/001-auth-strategy.md` |
| API 변경/추가 | `api/CHANGELOG.md` | Breaking changes 기록 |
| 개발 환경 변경 | `dev/` | Docker 설정, 환경변수 |
| 기능 로드맵 | `roadmap/` | `FEATURE_X_ROADMAP.md` |

## 관련 링크

- [GitHub Wiki]({wiki-url})
- [프로젝트 README](../README.md)
