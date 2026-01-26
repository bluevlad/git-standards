# docs/ 폴더 구조 표준

프로젝트 내 `docs/` 폴더의 표준 구조 및 작성 가이드입니다.

## 표준 구조

```
docs/
├── README.md              # 필수: 문서 구조 설명
│
├── adr/                   # Architecture Decision Records
│   ├── 000-template.md    # ADR 템플릿
│   ├── 001-{title}.md     # 첫 번째 결정
│   └── ...
│
├── api/                   # API 관련 문서
│   ├── CHANGELOG.md       # API 변경 이력 (필수)
│   ├── SPECIFICATION.md   # API 명세 (선택)
│   └── {기타}.md
│
├── dev/                   # 개발자 가이드
│   ├── SETUP.md           # 개발 환경 설정
│   ├── DEPLOYMENT.md      # 배포 가이드
│   ├── TESTING.md         # 테스트 가이드
│   └── TROUBLESHOOTING.md # 문제 해결
│
├── roadmap/               # 로드맵 및 계획
│   └── {FEATURE}_ROADMAP.md
│
└── wiki/                  # GitHub Wiki 동기화 (선택)
    └── ...
```

## 디렉토리 설명

### adr/ - Architecture Decision Records

**목적:** 중요한 아키텍처/기술 결정을 기록하여 "왜 이렇게 했는가"를 추적

**파일명 규칙:**
```
NNN-short-title.md
예: 001-use-postgresql.md
    002-service-bifurcation.md
```

**작성 시점:**
- 새로운 기술 스택 선택
- 아키텍처 패턴 결정
- 중요한 라이브러리/프레임워크 선택
- 기존 결정 변경

**포함 내용:**
- 상태 (Proposed/Accepted/Deprecated/Superseded)
- 컨텍스트 (문제 상황)
- 고려한 대안들
- 결정 사항
- 결과 (긍정적/부정적 영향)

### api/ - API 문서

**필수 파일: `CHANGELOG.md`**

API 변경 이력을 시맨틱 버저닝으로 관리:

```markdown
## [2.0.0] - 2025-01-15

### Breaking Changes
- ...

### Added
- ...

### Changed
- ...

### Deprecated
- ...

### Removed
- ...
```

**선택 파일:**
- `SPECIFICATION.md` - OpenAPI/Swagger 외 추가 설명
- `INTEGRATION.md` - 외부 시스템 연동 문서
- `AUTHENTICATION.md` - 인증/인가 상세

### dev/ - 개발자 가이드

**SETUP.md** (필수)
```markdown
# 개발 환경 설정

## 필수 요구사항
- Node.js 20+
- Docker 20.10+
- ...

## 설치 방법
...

## 환경 변수
...
```

**DEPLOYMENT.md**
```markdown
# 배포 가이드

## 환경 구성
...

## 배포 절차
...

## 롤백 절차
...
```

**TROUBLESHOOTING.md**
```markdown
# 문제 해결 가이드

## 일반적인 문제

### 문제: {증상}
**원인:** ...
**해결:** ...
```

### roadmap/ - 기능 로드맵

**파일명 규칙:**
```
{FEATURE_NAME}_ROADMAP.md
예: AUTHENTICATION_ROADMAP.md
    PAYMENT_INTEGRATION_ROADMAP.md
```

**구조:**
```markdown
# {Feature Name} 로드맵

## 개요
...

## Phase 1: {제목}
- [ ] Task 1
- [ ] Task 2

## Phase 2: {제목}
...

## 변경 이력
| 날짜 | 변경 내용 |
|------|----------|
```

### wiki/ - GitHub Wiki 동기화 (선택)

`docs/wiki/` 폴더를 사용하여 GitHub Wiki와 동기화할 수 있습니다.

**동기화 방법:**
```bash
# Wiki 저장소 클론
git clone https://github.com/{owner}/{repo}.wiki.git

# 파일 복사
cp docs/wiki/* ../{repo}.wiki/

# 커밋 및 푸시
cd ../{repo}.wiki
git add . && git commit -m "docs: sync wiki" && git push
```

## 프로젝트 규모별 권장 구성

### 소규모 프로젝트
```
docs/
├── README.md
└── dev/
    └── SETUP.md
```

### 중규모 프로젝트
```
docs/
├── README.md
├── adr/
├── api/
│   └── CHANGELOG.md
└── dev/
    ├── SETUP.md
    └── DEPLOYMENT.md
```

### 대규모 프로젝트
```
docs/
├── README.md
├── adr/
├── api/
├── dev/
├── roadmap/
└── wiki/
```

## 문서 작성 원칙

1. **코드와 함께 커밋**: 기능 변경 시 관련 문서도 함께 업데이트
2. **리뷰 포함**: PR에 문서 변경도 리뷰 대상에 포함
3. **간결하게**: 필요한 정보만 명확하게
4. **최신 유지**: 오래된 문서는 코드보다 해로움
5. **예제 포함**: 코드 예제, 명령어 예제 적극 활용
