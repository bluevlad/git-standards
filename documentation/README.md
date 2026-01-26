# 문서화 표준 (Documentation Standards)

프로젝트 문서화를 위한 표준 가이드입니다.

## 개요

효과적인 프로젝트 문서화는 다음 목표를 달성합니다:
- 신규 개발자의 빠른 온보딩
- 기술 부채 감소
- 유지보수성 향상
- 지식 공유 및 협업 촉진

## 문서 체계

### 이중 문서 전략 (Dual Documentation Strategy)

| 위치 | 용도 | 대상 | 동기화 |
|------|------|------|--------|
| **`docs/` 폴더** | 개발 문서 | 개발자 | 코드와 함께 버전 관리 |
| **GitHub Wiki** | 사용자 문서 | 모든 사용자 | 독립적, 안정 버전 |

### docs/ 폴더 구조

```
docs/
├── README.md              # 문서 구조 설명
├── IMPLEMENTATION.md      # 구현 상세 (선택)
│
├── adr/                   # Architecture Decision Records
│   ├── 001-title.md
│   ├── 002-title.md
│   └── template.md
│
├── api/                   # API 관련 문서
│   ├── CHANGELOG.md       # API 변경 이력
│   └── {기타 API 문서}
│
├── dev/                   # 개발자 가이드
│   ├── SETUP.md           # 개발 환경 설정
│   ├── DEPLOYMENT.md      # 배포 가이드
│   └── TROUBLESHOOTING.md # 문제 해결
│
├── roadmap/               # 로드맵 및 계획
│   └── {feature}_ROADMAP.md
│
└── wiki/                  # GitHub Wiki 동기화 (선택)
    └── {wiki 페이지들}
```

### GitHub Wiki 구조

```
Wiki/
├── Home                   # 프로젝트 홈
├── 1.-Project-Overview    # 프로젝트 개요
├── 2.-Architecture        # 아키텍처
├── 3.-Domain-Model        # 도메인 모델 (선택)
├── 4.-API-Specification   # API 명세
├── 5.-Development-Guide   # 개발 가이드
├── 6.-Deployment          # 배포 가이드
├── 7.-Roadmap             # 로드맵
└── 8.-User-Guide          # 사용자 가이드
```

## 문서 유형별 가이드

| 문서 유형 | 위치 | 작성 시점 | 예시 |
|----------|------|----------|------|
| 설계 결정 (ADR) | `docs/adr/` | 주요 기술 결정 시 | `001-database-selection.md` |
| API 변경 | `docs/api/CHANGELOG.md` | API 변경 시 | Breaking changes 기록 |
| 개발 환경 | `docs/dev/` | 환경 변경 시 | Docker 설정, 환경변수 |
| 기능 로드맵 | `docs/roadmap/` | 기능 기획 시 | `AUTHENTICATION_ROADMAP.md` |
| 사용자 가이드 | Wiki | 기능 완료 후 | User Guide 페이지 |
| 프로젝트 개요 | Wiki | 프로젝트 시작 시 | Home, Overview |

## 관련 문서

- [DOCS_STRUCTURE.md](./DOCS_STRUCTURE.md) - docs 폴더 상세 구조
- [WIKI_GUIDE.md](./WIKI_GUIDE.md) - GitHub Wiki 작성 가이드
- [ADR_TEMPLATE.md](./ADR_TEMPLATE.md) - ADR 작성 템플릿
- [templates/](./templates/) - 문서 템플릿 모음
