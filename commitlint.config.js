/**
 * Commitlint Configuration
 *
 * 이 파일을 프로젝트 루트에 복사하여 사용하세요.
 *
 * 설치:
 *   npm install --save-dev @commitlint/cli @commitlint/config-conventional
 *
 * Husky와 함께 사용:
 *   npm install --save-dev husky
 *   npx husky init
 *   echo "npx --no -- commitlint --edit \$1" > .husky/commit-msg
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Type 관련 규칙
    'type-enum': [
      2, // Error level: 0 = disabled, 1 = warning, 2 = error
      'always',
      [
        'feat',     // 새로운 기능
        'fix',      // 버그 수정
        'docs',     // 문서 변경
        'style',    // 코드 포맷팅 (기능 변경 없음)
        'refactor', // 코드 리팩토링
        'test',     // 테스트 추가/수정
        'build',    // 빌드 시스템, 의존성 변경
        'ci',       // CI/CD 설정 변경
        'perf',     // 성능 개선
        'chore',    // 기타 변경사항
        'revert',   // 커밋 되돌리기
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],

    // Scope 관련 규칙
    'scope-case': [2, 'always', 'lower-case'],
    // 프로젝트에 맞게 scope를 제한하려면 아래 주석을 해제하고 수정하세요
    // 'scope-enum': [
    //   2,
    //   'always',
    //   ['auth', 'api', 'ui', 'db', 'config', 'deps', 'core'],
    // ],

    // Subject 관련 규칙
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-max-length': [2, 'always', 50],

    // Header 관련 규칙
    'header-max-length': [2, 'always', 72],

    // Body 관련 규칙
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 72],

    // Footer 관련 규칙
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 72],
  },

  // 커밋 메시지 파싱 설정
  parserPreset: {
    parserOpts: {
      // 이슈 참조 패턴 (예: #123, PROJ-123)
      issuePrefixes: ['#', 'PROJ-'],
    },
  },

  // 도움말 URL
  helpUrl: 'https://www.conventionalcommits.org/',
};
