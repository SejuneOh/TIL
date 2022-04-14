# Use Git-Flow Cooperation(협업)

## 프로젝트 관리자

1.  GitHub organizations : 협업 단체계정 생성, 다른 개발자 초대가능
1.  Make Github Repo
1.  Move Dev Folder
1.  Clone Repo in Local Dev Folder
1.  Git flow init
1.  Make Public File(공동 파일로 생성)
1.  Commit And Push -u
1.  Pull Request 확인 및 소스 확인
1.  File Changed tab에서 viewed 처리 및 approve 처리
1.  Merge pull Request 처리
1.  Close issue

### 팀장의 자신의 프로젝트 업데이트

- git pull origin develop

### 반려 생각하기전

- Pull request는 바로 바로 닫아줘야한다. 안 그럼 섞인다.

## 팀 개발자

1. Issues 작성(해야 할 일, Bug Report)
1. Fork Project(사본에서 작업)-> 팁장에게 Pull Request
1. Clone Project of Fork Project
1. Git-flow init
1. 작업을 할때는 Feature에서 작업
1. 개발 단위별로 Commit 완료 되면 issue에서 체크
1. feature finish
1. Merge Commit 내용에 #이슈번호 적으면 해당 이슈에 내용에 붙는다.
1. Git hub page에서 Pull request 요청 (Comment에 #이슈 자동 태그된다.)
1. Pull request 시 branch 이름 확인 !!!!!!

### UpStream

- 프로젝트 관리자의 URL UpStream remote를 만들자
- 수정된 내용을 다운 받을 때, git pull upstream develop

### 반려시

- Open 되어있는 Pull Request에서는 develop에서는 자동으로 들어간다
- develop -> develop 하면 바로 Pull Request로 들어간다.
