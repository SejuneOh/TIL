# Bash, Kernel Command Line Study

## Goals

- Kernel의 이해
- Kernel의 종류
- Kernel 명령어

---

### Kernel의 이해

- Kernel 이란?  
  하드웨어와 응용프로그램을 이어주는 운영체제의 핵심 시스템소프트웨어

- Shell 이란?  
  운영체제의 커널과 사용자를 이어주는 소프트웨어

- Shell의 종류
  - sh(Bourne Shell): AT&T Bell 연구소의 Steve Bourne이 작성한 유닉스 쉘
  - csh : 버클리의 Bill Joy가 작성한 유닉스 쉘
  - bash : Brian Fox가 작성한 유닉스 쉘 다양한 운영체제에서 기본 쉘로 채택
  - zsh : Paul Falstad가 작성한 유닉스 쉘, 현재까지 가장 완벽한 쉘

### Kernel 명령어 정리

- ls (파일 리스트를 보여준다)<br/>

| 플래그 |                                의미                                |
| :----- | :----------------------------------------------------------------: |
| -A     |     .과 ..을 제외한 모든 파일과 디렉토리의 리스트를 보여준다.      |
| -a     |            숨겨진 파일과 디렉토리의 리스트를 보여준다.             |
| -l     | 파일에 대한 권한, 링크의 수, 그룹, 크기, 마지막 변경시간 등을 표시 |
| -t     |          가장 최근 것 먼저 정렬한다. (마지막 변경순서로)           |

- mkdir FolderName : 폴더 생성<br/>
- rm : 폴더, 파일 삭제

| 플래그 |                         설명                         |
| :----- | :--------------------------------------------------: |
| -r     | 폴더를 삭제하기 위해 하위 경로 파일과 함께 폴더 삭제 |
| -f     |                 강제적으로 삭제 실행                 |

- touch fileName : 파일 만들기
- mv : 파일 이동 및 이름 변경

```bash
$ mv fileName moveFilePath
$ mv fileName ./ChangeFileName
```

