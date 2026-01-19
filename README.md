# Git Standards

프로젝트에 적용할 수 있는 Git 커밋 및 브랜치 컨벤션 템플릿입니다.

## 구성 요소

| 파일 | 설명 |
|------|------|
| [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md) | Conventional Commits 기반 커밋 메시지 규칙 |
| [BRANCH_CONVENTION.md](BRANCH_CONVENTION.md) | Git Flow 기반 브랜치 네이밍 규칙 |
| [SETUP_GUIDE.md](SETUP_GUIDE.md) | 프로젝트 적용 가이드 |
| [commitlint.config.js](commitlint.config.js) | Commitlint 설정 파일 |
| [.gitmessage](.gitmessage) | Git 커밋 메시지 템플릿 |
| [.vscode/](.vscode) | VS Code / Antigravity 설정 |

## 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/bluevlad/git-standards.git
```

### 2. 프로젝트에 파일 복사

```bash
# 프로젝트 루트로 필요한 파일 복사
cp git-standards/COMMIT_CONVENTION.md /path/to/your/project/
cp git-standards/BRANCH_CONVENTION.md /path/to/your/project/
cp git-standards/commitlint.config.js /path/to/your/project/
cp git-standards/.gitmessage /path/to/your/project/
cp -r git-standards/.vscode /path/to/your/project/
```

### 3. Git 커밋 템플릿 설정

```bash
# 전역 설정
git config --global commit.template ~/.gitmessage

# 또는 프로젝트별 설정
git config commit.template .gitmessage
```

### 4. Commitlint + Husky 설정 (Node.js 프로젝트)

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
npx husky init
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

## 커밋 메시지 형식

```
<type>(<scope>): <subject>

<body>

<footer>
```

### 타입

| 타입 | 설명 |
|------|------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 변경 |
| `style` | 코드 포맷팅 |
| `refactor` | 코드 리팩토링 |
| `test` | 테스트 추가/수정 |
| `build` | 빌드 시스템 변경 |
| `ci` | CI/CD 설정 변경 |
| `perf` | 성능 개선 |
| `chore` | 기타 변경사항 |

### 예시

```
feat(auth): add OAuth2 login support

Implement Google and GitHub OAuth2 providers.

Closes #123
```

## 브랜치 네이밍

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

## VS Code 확장 프로그램

권장 확장 프로그램 (`.vscode/extensions.json`):

- **Conventional Commits** - 커밋 메시지 작성 도우미
- **Commitlint** - 커밋 메시지 검증
- **Git Graph** - 브랜치 시각화
- **GitLens** - Git 기능 강화

## 참고 자료

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [Semantic Versioning](https://semver.org/)

## License

MIT
