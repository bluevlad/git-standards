# Git Standards 설정 가이드

이 템플릿을 프로젝트에 적용하는 방법을 안내합니다.

---

## 1. 파일 복사

프로젝트 루트로 필요한 파일들을 복사합니다:

```bash
# 컨벤션 문서 복사
cp COMMIT_CONVENTION.md /path/to/your/project/
cp BRANCH_CONVENTION.md /path/to/your/project/

# commitlint 설정 복사
cp commitlint.config.js /path/to/your/project/

# Git 메시지 템플릿 복사
cp .gitmessage /path/to/your/project/

# VS Code / Antigravity 설정 복사
cp -r .vscode /path/to/your/project/
```

---

## 2. Git 커밋 템플릿 설정

### 전역 설정 (모든 프로젝트에 적용)

```bash
git config --global commit.template ~/.gitmessage
```

### 프로젝트별 설정

```bash
cd /path/to/your/project
git config commit.template .gitmessage
```

---

## 3. Commitlint + Husky 설정

### Node.js 프로젝트

```bash
# 의존성 설치
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky

# Husky 초기화
npx husky init

# commit-msg 훅 생성
echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
```

### package.json 스크립트 추가

```json
{
  "scripts": {
    "prepare": "husky"
  }
}
```

---

## 4. VS Code 설정

### 권장 확장 프로그램 설치

프로젝트를 열면 `.vscode/extensions.json`에 정의된 확장 프로그램 설치 알림이 표시됩니다.

수동 설치:

```
Ctrl+Shift+X → 확장 검색
```

| 확장 프로그램 | 설명 |
|---------------|------|
| **Conventional Commits** | 커밋 메시지 작성 도우미 |
| **Commitlint** | 커밋 메시지 검증 |
| **Git Graph** | 브랜치 시각화 |
| **GitLens** | Git 기능 강화 |

### Conventional Commits 확장 사용법

1. **Source Control** 패널 열기 (`Ctrl+Shift+G`)
2. 커밋 입력창 상단의 **원형 아이콘** 클릭
3. 순서대로 type, scope, description 입력
4. 자동으로 커밋 메시지 생성

### 커밋 메시지 유효성 검사

`.vscode/settings.json`에 설정된 규칙:

- Subject: **50자** 제한 (노란색 가이드라인)
- Body: **72자** 제한 (빨간색 가이드라인)
- main/master 브랜치 직접 커밋 **경고**

---

## 5. Antigravity 설정

Antigravity는 VS Code 기반이므로 동일한 설정이 적용됩니다.

### 설정 파일 적용

1. 프로젝트 폴더에 `.vscode` 폴더 복사
2. Antigravity에서 프로젝트 열기
3. 확장 프로그램 설치 알림 확인

### Git 통합 사용

1. **Source Control** 패널에서 변경사항 확인
2. Conventional Commits 확장으로 메시지 작성
3. 커밋 실행

### 터미널에서 Git 사용

Antigravity 내장 터미널에서도 `.gitmessage` 템플릿 사용 가능:

```bash
git commit
# 템플릿이 에디터에 표시됨
```

---

## 6. 폴더 구조

프로젝트 적용 후 구조:

```
your-project/
├── .gitmessage                 # Git 커밋 템플릿
├── .husky/
│   └── commit-msg              # Husky 훅
├── .vscode/
│   ├── settings.json           # VS Code/Antigravity 설정
│   └── extensions.json         # 권장 확장 프로그램
├── commitlint.config.js        # Commitlint 설정
├── COMMIT_CONVENTION.md        # 커밋 컨벤션 문서
├── BRANCH_CONVENTION.md        # 브랜치 컨벤션 문서
└── package.json
```

---

## 7. 검증

### Commitlint 테스트

```bash
# 올바른 커밋 메시지 테스트
echo "feat(auth): add login feature" | npx commitlint

# 잘못된 커밋 메시지 테스트 (에러 발생해야 함)
echo "added new feature" | npx commitlint
```

### Git 커밋 템플릿 확인

```bash
git commit
# 에디터에 템플릿이 표시되어야 함
```

### VS Code/Antigravity 설정 확인

1. 아무 파일 수정 후 Source Control 패널 열기
2. 커밋 메시지 입력창에 50자 넘게 입력
3. 노란색 가이드라인이 표시되는지 확인

---

## 8. 팀 온보딩

새 팀원을 위한 체크리스트:

- [ ] 컨벤션 문서 읽기 (COMMIT_CONVENTION.md, BRANCH_CONVENTION.md)
- [ ] Git 커밋 템플릿 설정
- [ ] VS Code/Antigravity 확장 프로그램 설치
- [ ] 첫 커밋 전 commitlint 테스트

---

## 문제 해결

### "husky - command not found" 에러

```bash
npm install
npx husky install
```

### commitlint 에러: "type must be one of..."

`commitlint.config.js`의 `type-enum` 규칙에 정의된 타입만 사용 가능합니다.

### VS Code/Antigravity 확장이 작동하지 않음

1. 확장 프로그램이 설치되었는지 확인
2. **Developer: Reload Window** 명령 실행 (`Ctrl+Shift+P`)
3. `.vscode/settings.json` 파일이 프로젝트 루트에 있는지 확인

### Conventional Commits 확장 아이콘이 보이지 않음

1. Source Control 패널이 열려있는지 확인
2. Git 저장소로 초기화되었는지 확인 (`git init`)
3. 확장 프로그램 재설치
