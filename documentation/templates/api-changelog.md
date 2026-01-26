# API 변경 이력 (API Changelog)

API 변경사항을 기록합니다. [시맨틱 버저닝](https://semver.org/lang/ko/)을 따릅니다.

## [Unreleased]

### Added
-

### Changed
-

### Deprecated
-

### Removed
-

### Fixed
-

---

## [1.0.0] - YYYY-MM-DD

### Added

| Method | Endpoint | 설명 |
|--------|----------|------|
| GET | `/api/resource` | 리소스 목록 조회 |
| POST | `/api/resource` | 리소스 생성 |
| GET | `/api/resource/{id}` | 리소스 상세 조회 |
| PUT | `/api/resource/{id}` | 리소스 수정 |
| DELETE | `/api/resource/{id}` | 리소스 삭제 |

---

## 버전 관리 규칙

```
MAJOR.MINOR.PATCH

MAJOR: 하위 호환성이 깨지는 변경 (Breaking Changes)
MINOR: 하위 호환성 유지하며 기능 추가
PATCH: 하위 호환성 유지하며 버그 수정
```

### Breaking Changes 예시

- 기존 엔드포인트 삭제
- 응답 형식 변경
- 필수 파라미터 추가
- 인증 방식 변경

### 비-Breaking Changes 예시

- 새 엔드포인트 추가
- 선택적 파라미터 추가
- 응답에 새 필드 추가
