# Make Hexo Blog

## Hexo란?

Node.js 기반으로 블로그를 생성하게 도와주는 생성기로 (정적화면)  
Node.js를 안다면 커스텀 마이즈 하기 쉬고 요즘 빠르게 증가하고있다.

---

## Hexo로 블로그 만들기 !

1. 필요 설치 프로그램
1. 블로그 만들기
1. Github Blog 연결
1. Theme 수정

- 필요 설치 프로그램

  - Node.js (HomeBrew를 통해서 설치)
  - NPM(Node.js 설치시 자동으로 설치)
  - Hexo

  ```bash
  # Hexo 설치
  $ sudo npm install -g hexo-cli

  #설치 확인
  $ hexo -v
  $ hexo
  ```

- 블로그 만들기

  - 설치와 동시에 기본적인 블로그 틀은 자동으로 만들어진다
  - 기본 블로그 실행 확인

  ```bash
  # hexo의 설정에 따른 html, css, js 파일을 만emsek
  $ hexo generate
  ```

  ```bash
  # Hexo server를 기동한다.
  # LocalHost:port 출력이 되는데 접속하면 블로그를 확인 할 수 있다.
  $ hexo server
  ```

  - 포스트 생성

  ```bash
  # post생성하여 생성된 md 파일을 수정하여 업로드한다.
  $ hexo new post postFileName
  ```

  - 블로그 수성 시 해야하는 작업

  ```bash
  # 1. public 폴더 삭제, 이유는 정적인 사이트이기때문에  refresh 필요
  $ hexo clean

  # 2. 다시 생성
  $ hexo generate

  # 3. server 다시 접속
  $ hexo server

  ```

---

### Github Blog 연결

1. GitHub Repo 만들기
   1. Repo의 주소는 Github가입이름.github.io로 생성
1. 연동을 위한 hexo \_config.yml 파일 수정
   1. title : 블로그 이름
   1. url : Github가입이름.github.io로 생성
   1. type: git
   1. repo: github repo url
   1. branch: main
1. hexo deploy 하기

```bash
# git 배포직전 전송상태를 만든다
$ npm install hexo-deployer-git --save

# 배포
$ git hexo deploy
```

_주의사항 cofing 파일의 구조는 무너트리면 안된다!!!!_

---

### Theme 입히기

- [Next](https://github.com/next-theme/hexo-theme-next) Theme 입히기
- 테마 같은 경우 Theme 배포하는 문서를 확인해서 입힐 수 있다.<br/>링크는 위체 첨부하였다 .
- next theme의 config 경로는 <br/>
  :Blog/node_modules/hexo-theme-next/config.yml

---

### REFERENCE

[Hexo Docs](https://hexo.io/ko/docs/)  
[Next Theme Docs](https://theme-next.js.org/docs/)

