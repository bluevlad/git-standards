# Development Standards

소프트웨어 개발 표준 및 방법론 문서 모음입니다.

## 개요

이 저장소는 프로젝트에 적용할 수 있는 개발 표준을 제공합니다:

- **Git 컨벤션**: 커밋 메시지, 브랜치 전략
- **문서화 표준**: docs 폴더 구조, Wiki 가이드
- **코드 리뷰**: 리뷰 체크리스트, PR 가이드
- **프로젝트 구조**: Backend/Frontend 표준 구조

## 목차

### Git 컨벤션
| 문서 | 설명 |
|------|------|
| [COMMIT_CONVENTION](./git/COMMIT_CONVENTION.md) | Conventional Commits 기반 커밋 메시지 규칙 |
| [BRANCH_CONVENTION](./git/BRANCH_CONVENTION.md) | Git Flow 기반 브랜치 네이밍 규칙 |
| [SETUP_GUIDE](./git/SETUP_GUIDE.md) | 프로젝트 적용 가이드 |

### 문서화 표준
| 문서 | 설명 |
|------|------|
| [README](./documentation/README.md) | 문서화 전략 개요 |
| [DOCS_STRUCTURE](./documentation/DOCS_STRUCTURE.md) | docs/ 폴더 표준 구조 |
| [WIKI_GUIDE](./documentation/WIKI_GUIDE.md) | GitHub Wiki 작성 가이드 |
| [ADR_TEMPLATE](./documentation/ADR_TEMPLATE.md) | Architecture Decision Records 가이드 |

### 코드 리뷰
| 문서 | 설명 |
|------|------|
| [REVIEW_CHECKLIST](./code-review/REVIEW_CHECKLIST.md) | 코드 리뷰 체크리스트 및 가이드 |

### 프로젝트 구조
| 문서 | 설명 |
|------|------|
| [BACKEND_STRUCTURE](./project-structure/BACKEND_STRUCTURE.md) | Backend 프로젝트 구조 (Python/Node.js) |
| [FRONTEND_STRUCTURE](./project-structure/FRONTEND_STRUCTURE.md) | Frontend 프로젝트 구조 (React) |

### 템플릿
| 템플릿 | 용도 |
|--------|------|
| [docs-readme.md](./documentation/templates/docs-readme.md) | docs/ 폴더 README 템플릿 |
| [adr-template.md](./documentation/templates/adr-template.md) | ADR 작성 템플릿 |
| [api-changelog.md](./documentation/templates/api-changelog.md) | API 변경 이력 템플릿 |
| [roadmap-template.md](./documentation/templates/roadmap-template.md) | 기능 로드맵 템플릿 |

## 빠른 시작

### 1. 저장소 클론

```bash
git clone https://github.com/bluevlad/git-standards.git
```

### 2. Git 컨벤션 적용

```bash
# 프로젝트에 파일 복사
cp git-standards/git/commitlint.config.js /path/to/your/project/
cp git-standards/git/.gitmessage /path/to/your/project/

# 커밋 템플릿 설정
git config commit.template .gitmessage
```

### 3. docs 폴더 구조 생성

```bash
# 프로젝트에 docs 구조 생성
mkdir -p docs/{adr,api,dev,roadmap}

# README 템플릿 복사
cp git-standards/documentation/templates/docs-readme.md /path/to/your/project/docs/README.md
```

### 4. Commitlint + Husky (Node.js 프로젝트)

```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
npx husky init
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

## 디렉토리 구조

```
git-standards/
├── README.md
│
├── git/                      # Git 컨벤션
│   ├── COMMIT_CONVENTION.md
│   ├── BRANCH_CONVENTION.md
│   ├── SETUP_GUIDE.md
│   ├── commitlint.config.js
│   └── .gitmessage
│
├── documentation/            # 문서화 표준
│   ├── README.md
│   ├── DOCS_STRUCTURE.md
│   ├── WIKI_GUIDE.md
│   ├── ADR_TEMPLATE.md
│   └── templates/
│       ├── docs-readme.md
│       ├── adr-template.md
│       ├── api-changelog.md
│       └── roadmap-template.md
│
├── code-review/              # 코드 리뷰
│   └── REVIEW_CHECKLIST.md
│
├── project-structure/        # 프로젝트 구조
│   ├── BACKEND_STRUCTURE.md
│   └── FRONTEND_STRUCTURE.md
│
└── .vscode/                  # VS Code 설정
```

## 신규 프로젝트 체크리스트

### 초기 설정

- [ ] Git 저장소 초기화
- [ ] .gitignore 설정
- [ ] README.md 작성
- [ ] 커밋 컨벤션 설정 (commitlint)
- [ ] 브랜치 전략 결정

### 문서 구조

- [ ] docs/ 폴더 생성
- [ ] docs/README.md 작성
- [ ] docs/adr/ 디렉토리 생성
- [ ] docs/api/CHANGELOG.md 생성
- [ ] docs/dev/SETUP.md 작성

### GitHub 설정

- [ ] Wiki 활성화
- [ ] Issue 템플릿 설정
- [ ] PR 템플릿 설정
- [ ] Branch protection rules 설정

## 적용 사례

- [AllergyInsight](https://github.com/bluevlad/AllergyInsight) - 이 표준을 적용한 프로젝트 예시

## 참고 자료

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Flow](https://nvie.com/posts/a-successful-git-branching-model/)
- [ADR (Architecture Decision Records)](https://adr.github.io/)
- [Semantic Versioning](https://semver.org/)

## License

MIT
