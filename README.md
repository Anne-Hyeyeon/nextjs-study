# My NextJS project

## configuration of the project which is made by create-react-app

- pages : The most important folder. Because that is where we set up that file based routing, defines the different pages...
- public : 이미지같은 퍼블릭 리소스들이 들어감
- styles : 디자인, 스타일과 관련한 정보가 들어감.

* NextJS allows us to determine WHEN a page should be pre-rendered.
* When a request reaches the sever, that single page is dynamically pre-rendered. So that you do return an initial page with content.

## 필요없는 폴더, 파일 지우기

- pages - \_document.tsx 그리고 index.tsx
- pages - api 폴더
- styles - home-module.css

* 파일 이름은 그대로 / 뒤의 요청이 된다. index 이름은 특수해서 / 뒤에 아무것도 없을 때 불러오게 되지만, 다른 파일 이름은 그대로 경로 이름으로 사용된다.

* index 파일이 / 앞의 가장 최상 경로. 폴더 명을 지정하고 그 안에 index.tsx를 만들면 해당 폴더명이 / 뒤의 주소가 된다.

```js
// our-domain.com/news (news.tsx file)
```

## npm run dev로 개발 모드 실행

```
npm run dev
```

- 개발 모드를 키면 페이지에 들어갈 수 있는 URL을 볼 수 있다.

## 동적 경로 만들기

- 파일 이름에 대괄호를 쓰면 NextJS는 이것을 동적 페이지로 인식한다.
- 동적 매개변수 값 추출하기 : useRouter React Hook 사용하기 \
- query를 사용하면 중첩 객체에 접근할 수 있음.

```js
router.quesry.newsId;
```

- 처음 console.log를 찍으면 undefined가 뜬다. 라우터는 페이지 오픈과 동시에 실행되는데, 처음에는 url이 무엇인지 모르기 때문이다.

## 페이지 간 연결하기

- a link를 사용하면 어떨까? a link를 사용하면 브라우저가 새 요청을 보내고 새 HTML을 받게 된다. (증거로 새로고침 페이지가 잠깐 x로 변함). 이는 싱글페이지 어플리케이션이라고 부를 수 없다. 매번 새 요청을 백엔드에 보내고 새 HTML 페이지를 받는다는 뜻이기 때문이다.
- 싱글 페이지 어플리케이션을 유지하려면 어떻게 해야할까? `Link`를 사용하면 된다.

```js
import Link from "next/link";
```

- anchor 사용하듯이 Link 사용하면 된다!
- next의 Link 역시 anchor처럼 href를 사용한다.
- Link는 앵커 태그를 렌더링하고 이 앵커 태그에 하는 클릭을 감지해서 브라우저가 기본 동작으로 새 HTML페이지를 받아오는 요청을 하지 못하게 한다.
- 대신, 불러올 컴포넌트를 받아들이고 URL만 변경하여 페이지가 바뀐 것처럼 보이게 하는 것이다.

```js
<Link href="/news/hi">고고싱</Link>
```
