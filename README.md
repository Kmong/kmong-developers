# KMONG FRONT END MONOREPO
![PnP Yarn2](https://img.shields.io/badge/Yarn2-PnP-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)
![Next.JS](https://img.shields.io/badge/next.js-TypeScript-007ACC?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-C865B9.svg?&style=for-the-badge&logo=Emotion&logoColor=C865B9)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![Gatsby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=663399)
![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![Github Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)

----


## App

아이디어를 바로 바로 구현 하기도 하고, 각종 최신 기술이나 실험 기능을 실 서비스 영향이 가지 않고 마음껏 사용 해 볼 수 있는 공간 입니다. 즐기세요


## 개발 환경 구성

```Shell
brew install yarn
```


의존성 설치

```Shell
yarn install
```


## ESLint
우리는 코드의 일관성을 유지하기 위해 ESLint를 사용하며, Pull Request를 생성하면 github actions를 통해 자동으로 검사를 수행하며, 아래 명령어로 로컬 머신에서 실행이 가능합니다.
```Shell
yarn lint
```

## Test
우리는 코드의 테스트를 위해 Jest와 @testing-library/react를 사용하며, Pull Request를 생성하면 github actions를 통해 자동으로 검사를 수행하며, 아래 명령어로 로컬 머신에서 실행이 가능합니다.
```Shell
yarn test
```

## dev
```Shell
yarn dev
```

## local bundle
```Shell
yarn build
```

## References

- [언제나 환영합니다](https://recruit.wanted.co.kr/p/QFVWQwleQWpIVg==)