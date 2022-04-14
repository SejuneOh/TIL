# Git Revert !!!!

- 특정 파일 HEAD Commit으로 복구하기

```bash
$ git restore fileNm
```

- Git Unstaged

```bash
$ git reset HEAD unstagedFileNm
```

- Recent Changing Commit Message

```bash
$ git commit --amend
```

- Commit을 취소

```bash
# reset을 하면 앞의 내용이 사라지고 돌아가고자 하는 commit으로 돌아가고 remote에 강제로 push
# 문제점은 다른 사람의 repo가 있으면 다른사람의 프로젝트를 참조하면 파일이 돌아온다.
# 코드의 변화에 대한 설명이 없다.
$ git reset --hard HEAD~3
```

```bash
# revert는 돌아가는 이유의 설명을 남기고 히스토리에 남는다.
# revert에 대한 commit, push를 수행
# .. 순차적으로 돌린다.
# -no--commit 나중에 한번에 commit을 하겠다는 option
$ git revert --no-commit HEAD~3..
```
