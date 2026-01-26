# Commit Message Convention

본 문서는 프로젝트의 Git 커밋 메시지 작성 표준을 정의합니다.
[Conventional Commits](https://www.conventionalcommits.org/) 명세를 기반으로 합니다.

---

## 1. 커밋 메시지 구조

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 구성 요소

| 요소 | 필수 | 설명 |
|------|------|------|
| `type` | O | 커밋의 종류 |
| `scope` | X | 변경된 범위 (모듈, 컴포넌트 등) |
| `subject` | O | 변경 사항 요약 (50자 이내) |
| `body` | X | 상세 설명 (72자에서 줄바꿈) |
| `footer` | X | 이슈 참조, Breaking Change 등 |

---

## 2. Commit Types

### 주요 타입

| 타입 | 설명 | SemVer | 예시 |
|------|------|--------|------|
| `feat` | 새로운 기능 추가 | MINOR | `feat(auth): add OAuth2 login` |
| `fix` | 버그 수정 | PATCH | `fix(api): resolve null pointer` |
| `docs` | 문서 변경 | - | `docs: update README` |
| `style` | 코드 포맷팅 (기능 변경 X) | - | `style: fix indentation` |
| `refactor` | 코드 리팩토링 | - | `refactor(user): simplify logic` |
| `test` | 테스트 추가/수정 | - | `test: add unit tests` |
| `build` | 빌드 시스템, 의존성 변경 | - | `build: upgrade gradle` |
| `ci` | CI/CD 설정 변경 | - | `ci: add GitHub Actions` |
| `perf` | 성능 개선 | PATCH | `perf: optimize query` |
| `chore` | 기타 변경사항 | - | `chore: update .gitignore` |
| `revert` | 커밋 되돌리기 | - | `revert: revert commit abc123` |

---

## 3. 작성 규칙

### Subject (제목)

- **명령형** 사용: "add feature" (O) / "added feature" (X) / "adds feature" (X)
- **50자 이내**로 작성
- 첫 글자 **소문자** 시작
- 끝에 **마침표(.) 사용 금지**
- **한글 사용 시**: "기능 추가" (O) / "기능을 추가함" (X)

### Body (본문)

- **72자**에서 줄바꿈
- **무엇을, 왜** 변경했는지 설명
- 제목과 본문 사이 **빈 줄** 필수

### Footer (꼬리말)

- 이슈 참조: `Closes #123`, `Fixes #456`, `Refs #789`
- Breaking Change: `BREAKING CHANGE: description`
- 여러 이슈: `Closes #123, #456`

---

## 4. 예시

### 기본 예시

```
feat(auth): add social login support

Implement Google and GitHub OAuth2 providers for user authentication.
This allows users to sign in without creating a separate account.

Closes #123
```

### Breaking Change 예시

```
feat(api)!: change user endpoint response format

Modify the /api/users endpoint to return paginated results.
The response structure has been changed from array to object.

BREAKING CHANGE: API response format changed.
Previous: [user1, user2, ...]
Current: { data: [...], pagination: {...} }

Migration guide: Update client code to handle new response format.

Closes #456
```

### 간단한 수정

```
fix(login): resolve session timeout issue
```

```
docs: update installation guide
```

```
style: apply prettier formatting
```

---

## 5. Scope 가이드

프로젝트에 맞게 scope를 정의합니다:

### 예시 Scope 목록

| Scope | 설명 |
|-------|------|
| `auth` | 인증/인가 관련 |
| `api` | API 엔드포인트 |
| `ui` | UI 컴포넌트 |
| `db` | 데이터베이스 |
| `config` | 설정 파일 |
| `deps` | 의존성 |
| `core` | 핵심 로직 |

---

## 6. Breaking Change 표기

Breaking Change는 두 가지 방법으로 표기할 수 있습니다:

### 방법 1: 타입 뒤에 `!` 추가

```
feat(api)!: remove deprecated endpoints
```

### 방법 2: Footer에 명시

```
feat(api): remove deprecated endpoints

BREAKING CHANGE: The following endpoints have been removed:
- GET /api/v1/legacy
- POST /api/v1/old-endpoint
```

---

## 7. 피해야 할 패턴

### Bad Examples

```
# 너무 모호함
fix: fix bug
update: update code
WIP

# 여러 변경사항 혼합
feat: add login and fix header bug and update docs

# 과거형 사용
fixed: fixed the login issue

# 마침표 사용
feat: add new feature.
```

### Good Examples

```
fix(auth): resolve token expiration handling

feat(user): add profile image upload

docs(api): add swagger annotations
```

---

## 8. 도구 설정

### commitlint

프로젝트에 `commitlint.config.js` 파일을 추가하여 규칙을 강제할 수 있습니다.

### Git Hooks (Husky)

커밋 전 자동 검증을 위해 husky를 설정합니다.

### IDE 확장 프로그램

- **VS Code / Antigravity**: Conventional Commits 확장
  - 설치: `vivaxy.vscode-conventional-commits`
  - Source Control 패널에서 아이콘 클릭하여 사용
- **Commitlint 확장**: 커밋 메시지 실시간 검증
  - 설치: `joshbolduc.commitlint`

---

## References

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Semantic Versioning](https://semver.org/)
