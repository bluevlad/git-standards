# Architecture Decision Records (ADR) 가이드

ADR은 중요한 아키텍처 결정을 문서화하여 "왜 이런 결정을 했는가"를 기록합니다.

## ADR이란?

Architecture Decision Record는 소프트웨어 아키텍처에서 내린 중요한 결정을 기록하는 문서입니다.

### ADR의 가치

- **지식 보존**: 결정 당시의 컨텍스트와 이유 보존
- **온보딩**: 신규 팀원이 시스템 이해에 도움
- **회고**: 과거 결정을 되돌아보고 학습
- **일관성**: 유사한 결정에 대한 일관된 접근

## 언제 ADR을 작성하는가?

✅ **ADR 작성 대상:**
- 새로운 기술 스택 선택 (언어, 프레임워크, DB)
- 아키텍처 패턴 결정 (모놀리스 vs 마이크로서비스)
- 중요한 라이브러리 선택
- 데이터 모델 설계 결정
- API 설계 방식 결정
- 인증/보안 방식 결정
- 기존 결정의 변경

❌ **ADR 작성 불필요:**
- 사소한 코드 변경
- 버그 수정
- 리팩토링 (아키텍처 변경 없음)
- UI/UX 변경

## ADR 작성법

### 파일명 규칙

```
docs/adr/NNN-short-title.md

예시:
docs/adr/001-use-postgresql-for-database.md
docs/adr/002-adopt-microservices-architecture.md
docs/adr/003-implement-jwt-authentication.md
```

### 상태 (Status)

| 상태 | 설명 |
|------|------|
| `Proposed` | 제안됨, 논의 중 |
| `Accepted` | 승인됨, 적용 중 |
| `Deprecated` | 더 이상 사용하지 않음 |
| `Superseded` | 다른 ADR로 대체됨 |

### 템플릿

```markdown
# NNN. 제목

## 상태

Accepted | Proposed | Deprecated | Superseded by [ADR-XXX](./XXX-title.md)

## 날짜

YYYY-MM

## 컨텍스트

어떤 문제/상황에 직면했는가?
- 현재 상황 설명
- 해결해야 할 문제
- 제약 조건

## 고려한 대안

### 대안 1: {이름}
- 장점: ...
- 단점: ...

### 대안 2: {이름}
- 장점: ...
- 단점: ...

### 대안 3: {이름} ✅ 선택
- 장점: ...
- 단점: ...

## 결정

{대안 N}을 선택한다.

### 구체적인 결정 내용
- 결정 1
- 결정 2

## 결과

### 긍정적 결과
- ...

### 부정적 결과 (Trade-offs)
- ...

### 향후 고려사항
- ...

## 관련 문서

- [관련 ADR](./XXX-title.md)
- [외부 참조](https://...)
```

## 예시: 데이터베이스 선택

```markdown
# 001. PostgreSQL 데이터베이스 선택

## 상태

Accepted

## 날짜

2025-01

## 컨텍스트

새로운 프로젝트의 메인 데이터베이스를 선택해야 한다.

요구사항:
- 관계형 데이터 모델 필요
- JSON 데이터 지원
- 트랜잭션 지원
- 오픈소스 선호
- 팀 내 경험 고려

## 고려한 대안

### 대안 1: MySQL
- 장점: 널리 사용됨, 팀 경험 있음
- 단점: JSON 지원 제한적

### 대안 2: MongoDB
- 장점: 스키마 유연성, JSON 네이티브
- 단점: 복잡한 관계 모델링 어려움, 트랜잭션 제한

### 대안 3: PostgreSQL ✅ 선택
- 장점: 강력한 JSON 지원, 확장성, 표준 SQL
- 단점: MySQL 대비 약간 높은 학습 곡선

## 결정

PostgreSQL을 메인 데이터베이스로 선택한다.

### 구체적인 결정 내용
- PostgreSQL 15 버전 사용
- JSONB 타입으로 유연한 스키마 지원
- Docker 기반 로컬 개발 환경

## 결과

### 긍정적 결과
- 관계형 + JSON 하이브리드 모델 가능
- 강력한 쿼리 최적화 기능
- 활발한 커뮤니티 지원

### 부정적 결과 (Trade-offs)
- 팀원 일부 PostgreSQL 학습 필요
- MySQL 기존 쿼리 일부 수정 필요

## 관련 문서

- [PostgreSQL 공식 문서](https://www.postgresql.org/docs/)
```

## ADR 관리

### 디렉토리 구조

```
docs/adr/
├── 000-template.md        # 템플릿 (복사용)
├── 001-database-selection.md
├── 002-api-versioning.md
├── 003-authentication.md
└── README.md              # ADR 목록 및 요약
```

### ADR 목록 README

```markdown
# Architecture Decision Records

| ID | 제목 | 상태 | 날짜 |
|----|------|------|------|
| [001](./001-database-selection.md) | PostgreSQL 선택 | Accepted | 2025-01 |
| [002](./002-api-versioning.md) | URL 기반 API 버저닝 | Accepted | 2025-01 |
| [003](./003-authentication.md) | JWT 인증 방식 | Accepted | 2025-01 |
```

## 팁

1. **간결하게**: 핵심만 명확하게
2. **컨텍스트 충분히**: 나중에 읽는 사람도 이해할 수 있게
3. **대안 기록**: 선택하지 않은 대안도 기록
4. **Trade-offs 명시**: 부정적 결과도 솔직하게
5. **변경 시 새 ADR**: 기존 ADR 수정보다 새 ADR 작성 (Superseded)
