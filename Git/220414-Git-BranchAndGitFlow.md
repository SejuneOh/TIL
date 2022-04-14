# Git branch 와 Git Flow 사용하기

## Branch란 ?

Git 프로젝트에서 원래의 소스와 독립적인 분기점을 만들어 코드를 변경 할 수 있도록 도와주는 모델  
Branch의 명령어를 같이 보면서 내용을 확인하자

- Local에 존재하는 브랜치 확인

```bash
 # 브랜치 확인
 $ git branch
```

- repo 원격 branch 확인
  :

```bash
 # 원격 브랜치 확인
 $ git branch -r
```

- 모든 Branch

```bash
 $ git branch -a
```

- branch 생성

```bash
 # 생성
 $ git branch BranchName
```

- branch 변경

```bash
 # 과거에서는 checkout을 사용하여 변경
 $ git checkout ChangeBranchName

 # 현재
 $ git switch ChangeBranchName
```

- branch 삭제

```bash
$ git branch -D DeleteName
```

- remote에 local 처음 branch push하기

```bash
# -u flag는 remote와 local의 branch 싱크를 맞춰 달라고하는 것이다.
$ git push -u origin branchNm
```

- branch의 차이 확인하기

```bash
$ git diff main branchNm
```

---

## Branch Model(GitFlow)

- Branch Models  
  Branch를 조금 더 효울적으로 사용하기 위한 모델링

  - Git Flow  
     (hotfix)- master -(release)- develop - feature
    개발과 운영을 나누어 관리하며, 각 단계가 명확하다.
    단점으로 복잡하다.
    <br/>
  - GitHub Flow  
    즉각적인 개발의 배포가 가능하며 단순하 모딜로 바로바로 배포되는 연구쪽에서 많이 사용한다
    <br/>
  - Gitlab Flow  
    잘 사용하지 않는다.
    <br/>

- Git Flow에서 중점적으로 배워보자  
  _로직_
  ![GitFlow](/resource/Gitflow.png)

  - Master : 운영, 사용자가 바라보는 소스
  - HotFix : 긴급으로 수정후 배포해야하는 Branch
  - Develop : 모든 개발 및 테스트를 하는 Branch
  - Feature : Develop에서 기능 단위로 개발하는 Branch  
    <br/>

- Git-Flow 설치  
  [Git-Flow](https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html) 설치 사이트

- Homebrew를 통한 설치

```bash
$ brew install git-flow-avh
```

- Git-Flow init

```bash
$ git flow init
```

- Develop Branch에서 기능 단위 FeatureBranch 사용하기

```bash
$ git flow feature start featureBranchNm
```

- 기능 개발 완료

```bash
# feature 작업이 완료되어야 하는 시점  commit 후 실행 -> develop 브랜치로 이동하고
# feature branch는 삭제
$ git flow feature finish featureBranchNm
```

- Git Flow Release(배포)

```bash
# develop 계정에서
$ git flow release start v0.1
```

- Finish Release

```bash
#
$ git flow release finish v0.1
```

### 3단계의 걸쳐서 release를 한다

1. Vim으로 버전 정보
1. tagging(작성해야함)
1. total 을 확인 한 후 배포
1. devolop branch도 push 처음이라면 -u
1. tag push (git push --tag)

---

## .gitignore?

.gitignore 파일은 무엇일까?

- git에서 트랙킹 파일을 제한적으로 할 수있게 도와주는 파일이다.
- 트랙킹을 멈추기 위해서 규칙을 해당 파일에 작성하여 트랙킹을 멈춘다.
- 직접 작성할 수도 있지만, [Toptal](https://www.toptal.com/developers/gitignore/)에서 프로젝트 조건에 맞는 ignore 내용을 받아 사용 할 수 있다.
- 예시

```bash
*.java
keyfile.*
FileName.Extension
*Secret*
```

---

## README.md 파일 필수적으로 작성해야하는 내용

- README.md 파일이란 ?  
  _Project_ 와 _Repository_ 를 설명하는 책의 표지와 같은 문서  
  나와 동료, 혹은 _repo_ 사용자를 위한 문서

- README.md 파일에 적어야 하는 내용

```bash
# Project Name
간략한 프로젝스 소개

# Documentation
프로젝트 설명

# Installation
설치 관련 내용

# 지원 버전
`>=3.6`

# 라이센스
Sesame is Free software, and may be redistributed under the terms of specified in the [LICENSE]() file
```

### License

오픈 소스라도 라이센스에 따라 요금을 지불할 수 있다. 개발 lib 파일을 사용할 때 아래의 라이센스 종류를 보고 확인하자.

- MIT License: 무료로 사용할 수 있는 라이센스
- Apache Liecese 2.0 : 명시적으로, 라이센스를 표시해야 사용할 수있다.
- GNU General Public Licese v3.0 : 의무사항이 존재합니다. 해당 라이세스가 적용된 소스코드 GPL을 따라야 함

  _MIT < Apache < GNU_
