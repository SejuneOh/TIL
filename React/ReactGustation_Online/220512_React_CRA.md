# Creat React App(CRA)

## CRA란?

- React프로젝트를 통한 boilerplate(해당 템플렛을 사용하기위해서 최소한의 환경을 만들어서 개발을한다.)

- node가 설치 되어 있어야 하며, 최소 버전은 공식 사이트에서 확인해야 한다.
- npm(node package manager), npx(node package runner)
- CRA 시작하기

  - typescript로 CRA를 시작할 수 있다.

    ```bash
    $ npx create-react-app my-app -template typescript
    ```

## 구조

- Package.json  
   : 어떤 lib를 사용하고 버전을 확인할 수 있다. / webpack같은 경우 자동으로 숨겨두고 개발자의 입장을 편하게 해준다.

  - script의 명령어를 alias를 사용할 수 있다.

    ```json
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      <!-- npm run eject를 하면, webpack, babel 숨겨인 lib파일들이 들어온다. -->
      "eject": "react-scripts eject"
    },
    ```
