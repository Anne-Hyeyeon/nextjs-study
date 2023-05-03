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

```js
// our-domain.com/news (news.tsx file)
```

## npm run dev로 개발 모드 실행

```
npm run dev
```

- 개발 모드를 키면 페이지에 들어갈 수 있는 URL을 볼 수 있다.
