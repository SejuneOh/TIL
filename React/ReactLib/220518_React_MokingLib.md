# Moking Service Worker

## Goals 

1. Moking?
2. MSWJS


## Moking?
Moking 이란 ?  
: 모의 데이터를 만들어서 활용하는 방식을 말한다. 서버와의 통신이 필요하지만 임이의 데이터를 만들어서 사용하는 방식을 말합니다.

api 요청으로 내려올 프론트 모킹하거나 서버의 역할을 해주는 무언가를 만들어서 사용해본다.


---

## [MSWJS lib](https://mswjs.io/)
필요의 요청 데이터를 만들어 network를 가로체서 스스로의 등답을 제공하는 lib이다.

- Rest API, GraphQL API를 사용하는 방식으로 요청 할 수 있다.
- 요청과 동시에 Res 데이터를 정하여, 임이의 데이터를 사용할 수 있다.
- Brower에서는 Service Worker API를 사용하고, Node 환경에서는 server API를 사용해서 임이의 데이터를 사용한다.


### MWS Setup

1. lib 설치 

```bash
$ npm install msw --save-dev
```