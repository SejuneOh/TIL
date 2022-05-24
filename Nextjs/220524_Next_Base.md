# Next.js 


## Goals
1. Next.js란 ?
   1. SSR
   2. React.js vs Next.js
   3. 설치
2. Pre-rendering
3. Next.js 사용하는 이유



## Next.js란 ? 
Vercel에서 만든 React FrameWork로 기존의 lib라고 설명하는 React의 기술을 가지고 만든 Framework이다.
해당 FrameWork는 다은과 같은 기능을 제공한다.

- 개발환경 제공(실시간 개발시 브라우저에 반영해준다.)
- 다양한 컴포넌트 import
- SSR
- SEO 가능

### SSR(Server Side Rendering)

React는 CSR(Client Side Rendering)으로 화면을 구현할 때, js로 화면을 구성하는 lib면, js를 사용하지  
못하는 환경에서는 화명 구현을 작동하지 못한다. SSR은 서버에서 화면의 구성(html)을 미리 구현하고 사용자에게  
보여주기 때문에,  css,js 외에 html 기능은 정상적으로 작동한다.   
즉, 서버에서 미리 화면을 Rendering한 것을 사용자에게 보여주는 것을 의미하며, 속도와 seo 측면에서 좋은 평가를 받는다.

### 설치 
- CNA(Create-Next-App)
```zsh
$ npx create-next-app [projectName]
```

- n Package 
  - 노드 버전관리 package로 next.js에서 필요하는 node 버전을 사용할 때, 사용한다.
```zsh
$ npm i n
```
 
---

## Pre-Rendering


### Pre-Rendering이란?

CSR 방식이 아닌, 서버에서 HTML을 미리 구현하여, 화면에 전달하는 것을 Pre-Rendering이라고한다.  
Next.js에서는 Pre-Rendering 방식을 크게 2가지로 구현 할 수 있다.

다음과 내용을 확인해서 확인해보자 

- SSG(Static Generation)
- SSR(Server Side Rendering)

_두가지 방식은 한번에 사용 할 수 없다._ 

#### SSG(Static Generation)

- 화면이 빌드되는 타이밍에 Pre-Rendering을 진행한다. 
- html이 빌드되는 순간에 실행된다. 
- 변경되지 않는 데이터라면, 빌드시에만 실행되기 때문에 조금더 효율적이다.
- SSR과 차이점은, SSR은 Server에서 요청이 있을 때(ReRendering)마다 호출되지만  StaticGeneration은
한번만 실행된다.
- blog, 제품페이지 동적으로 변화가 없는 페이지

#### SSR(Server Side Rendering)

- 서버에서 미리 html rendering을 하여 미리 화면을 구현한다. 
- data 요청 같은 경우 re-rendering할 때 지속적으로 요청한다.


**두가지 예시 코드**

```js
import React from 'react'

export default function launches({ data }) {

  if (data == null) {
    return null
  }

  return (
    // CSR
    <div>
      <ol>
        {
          data.map((luanch, index) => {
            return (
              <li key={index}>
                {luanch.mission_name}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}

// ServerSide Props (SSR)
// export async function getServerSideProps() {
//   const res = await fetch("http://api.spacexdata.com/v3/launches");
//   const data = await res.json();

//   console.log("GetServerSideProps");

//   return (
//     // 페이지 컴포넌트에 props로 전달
//     {
//       props: { data },
//     }
//   )
// }

// SSG
export async function getStaticProps(cotext) {
  const res = await fetch("http://api.spacexdata.com/v3/launches");
  const data = await res.json();

  console.log("GetStatic Generation");

  return (
    // 페이지 컴포넌트에 props로 전달
    {
      props: { data },
    }
  )
}
```
--- 

## Next.js 사용하는 이유

웹 어플리케이션에서 필요 요소 
- bundler(package bundler) 및 , babel compiler가 필요하다.
- 최적화 되어있는 코드 나눔이 필요
- SEO에 최적화된 PreRender의 페이지 구성이 필요하다
- React에서의 Server-Side를 이용한 데이터 및 관리 코드로 작성해야한다.

위의 요소를 가지고있는 Next.js로 구현할 수 있다.


### Page Rounting
**페이지 폴더의 구성이 화면의 페이리 라우팅 구성과 동일하게 작동한다.**

### Use Link Client-Side
next.js에서 Link tag를 지원한다. 기존 a tag와 다른점은 무엇이 있을까? 

- Client Rendering의 차이
  - 필요 부분만 Re-Rendering한다.

  - a tag는 전체 화면을 재구성한다.
  - a tag 보다 빠른 화면 구성이 가능하다.
  - 화면의 Property 같은 경우에도 기존으로 유지되는 것을 볼 수 있는데 이거슨 화면에 전체가 아닌 필요 요소만 rerenderging 되는 것을 말한다.
- 내부 화면의 Routing일때 사용하면 좋다.

```js
import Link from 'next/link'
import React from 'react'

export default function FirstPost() {
  return (
    <>
      <h1>First Blog!!!</h1>
      <Link href="/">Back to home</Link>
    </>

  )
}
```

### Code Splitting & Learn Prefetching

#### **Code Splitting**

화면의 구성을 부분을 나누어 코드를 작성하면 필요 부분이 변화가 있을 때만 렌더링을 하기 때문에,  
구성을 잘 나눠서 작성하면 브라우저의 Rendering 속도에 있어서 빠르게 구성이 가능 하는 것을 말한다.

#### **Learn Prefetching**

빌드 후 첫 화면에 Link tag가 있다면, 진입이 가능한 화면이 있다면 미리 받아와서 구현을 하기 때문에  
빠른 속도로 이동이 가능하다.


