# Branch Naming Convention

본 문서는 프로젝트의 Git 브랜치 네이밍 표준을 정의합니다.

---

## 1. 브랜치 네이밍 구조

```
<type>/<ticket-id>-<short-description>
```

### 예시

```
feature/PROJ-123-user-authentication
bugfix/PROJ-456-fix-login-error
hotfix/PROJ-789-critical-security-patch
release/v2.1.0
```

---

## 2. 브랜치 타입

### 주요 브랜치

| 브랜치 | 설명 | 예시 |
|--------|------|------|
| `main` / `master` | 프로덕션 배포 브랜치 | `main` |
| `develop` | 개발 통합 브랜치 | `develop` |

### 작업 브랜치

| 접두사 | 용도 | 예시 |
|--------|------|------|
| `feature/` | 새로운 기능 개발 | `feature/PROJ-123-add-login` |
| `bugfix/` | 버그 수정 (develop 기반) | `bugfix/PROJ-456-fix-null-pointer` |
| `hotfix/` | 긴급 프로덕션 버그 수정 | `hotfix/PROJ-789-security-fix` |
| `release/` | 릴리즈 준비 | `release/v1.2.0` |
| `refactor/` | 코드 리팩토링 | `refactor/PROJ-101-cleanup-auth` |
| `docs/` | 문서 작업 | `docs/PROJ-102-api-documentation` |
| `test/` | 테스트 관련 작업 | `test/PROJ-103-add-unit-tests` |
| `chore/` | 기타 작업 | `chore/PROJ-104-update-deps` |
| `experiment/` | 실험적 기능 | `experiment/new-ui-concept` |

---

## 3. 네이밍 규칙

### 필수 규칙

| 규칙 | 올바른 예 | 잘못된 예 |
|------|-----------|-----------|
| 소문자 사용 | `feature/add-login` | `Feature/Add-Login` |
| 단어 구분: 하이픈(-) | `fix-login-error` | `fix_login_error`, `fixLoginError` |
| 타입/설명 구분: 슬래시(/) | `feature/add-login` | `feature-add-login` |
| 영문만 사용 | `feature/user-auth` | `feature/사용자-인증` |

### 권장 규칙

- **간결하게**: 브랜치명은 **30자 이내** 권장
- **설명적으로**: 브랜치의 목적을 명확히 표현
- **티켓 ID 포함**: 이슈 추적 시스템과 연동
- **현재형 동사 사용**: `add`, `fix`, `update`, `remove`

---

## 4. 티켓 ID 형식

프로젝트 관리 도구에 따른 티켓 ID 형식:

| 도구 | 형식 | 예시 |
|------|------|------|
| Jira | `PROJ-123` | `feature/PROJ-123-add-login` |
| GitHub Issues | `#123` 또는 `123` | `feature/123-add-login` |
| GitLab Issues | `#123` 또는 `123` | `bugfix/123-fix-error` |
| Linear | `ABC-123` | `feature/ABC-123-new-feature` |
| Azure DevOps | `12345` | `feature/12345-user-story` |

---

## 5. Git Flow 브랜치 전략

### 브랜치 흐름도

```
main ─────────────────────────────────────────────► production
  │                                        ▲
  │                                        │ merge
  └──► release/v1.0.0 ─────────────────────┘
         ▲
         │ merge
develop ──┴───────────────────────────────────────► integration
  │              ▲          ▲
  │              │          │ merge
  └──► feature/  └──► bugfix/
       add-login      fix-error
```

### 브랜치 생성 규칙

| 브랜치 타입 | 분기 원본 | 병합 대상 |
|-------------|-----------|-----------|
| `feature/*` | `develop` | `develop` |
| `bugfix/*` | `develop` | `develop` |
| `release/*` | `develop` | `main`, `develop` |
| `hotfix/*` | `main` | `main`, `develop` |

---

## 6. 예시 시나리오

### 새 기능 개발

```bash
# develop에서 feature 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b feature/PROJ-123-user-authentication

# 작업 완료 후
git push -u origin feature/PROJ-123-user-authentication
# PR 생성 → develop으로 병합
```

### 버그 수정

```bash
# develop에서 bugfix 브랜치 생성
git checkout develop
git pull origin develop
git checkout -b bugfix/PROJ-456-fix-login-timeout

# 작업 완료 후 PR 생성
```

### 긴급 수정 (Hotfix)

```bash
# main에서 hotfix 브랜치 생성
git checkout main
git pull origin main
git checkout -b hotfix/PROJ-789-security-vulnerability

# 수정 후 main과 develop 모두에 병합
```

### 릴리즈 준비

```bash
# develop에서 release 브랜치 생성
git checkout develop
git checkout -b release/v1.2.0

# 버전 업데이트, 최종 테스트 후
# main과 develop에 병합
```

---

## 7. CI/CD 연동

브랜치 네이밍을 활용한 자동화 예시:

### GitHub Actions 예시

```yaml
on:
  push:
    branches:
      - main
      - develop
      - 'release/**'
      - 'feature/**'
      - 'bugfix/**'

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        run: ./deploy-prod.sh

      - name: Deploy to Staging
        if: startsWith(github.ref, 'refs/heads/release/')
        run: ./deploy-staging.sh

      - name: Run Tests
        if: startsWith(github.ref, 'refs/heads/feature/') || startsWith(github.ref, 'refs/heads/bugfix/')
        run: npm test
```

---

## 8. 피해야 할 패턴

### Bad Examples

```
# 너무 모호함
feature/update
bugfix/fix
new-stuff

# 대소문자 혼용
Feature/AddLogin
FEATURE/add-login

# 특수문자 사용
feature/add@login
feature/add login

# 너무 긴 이름
feature/PROJ-123-implement-user-authentication-with-oauth2-and-jwt-and-session-management
```

### Good Examples

```
feature/PROJ-123-oauth-login
bugfix/456-fix-session-timeout
hotfix/critical-xss-fix
release/v2.0.0
refactor/cleanup-user-service
```

---

## 9. 브랜치 정리

### 병합 후 삭제

```bash
# 로컬 브랜치 삭제
git branch -d feature/PROJ-123-completed-feature

# 원격 브랜치 삭제
git push origin --delete feature/PROJ-123-completed-feature
```

### 오래된 브랜치 정리

```bash
# 병합된 브랜치 목록 확인
git branch --merged

# 원격에서 삭제된 브랜치 로컬 정리
git fetch --prune
```

---

## References

- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
