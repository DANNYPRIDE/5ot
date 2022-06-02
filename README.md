# 쇼핑몰 웹 서비스 프로젝트

제품들을 조회하고, 장바구니에 추가하고, 또 주문을 할 수 있는 쇼핑몰 웹 서비스 제작 프로젝트입니다. <br />
**웹 구현 예시** (링크는 프로젝트 기간에만 유효합니다)

### http://shopping-demo.elicecoding.com/

<br>

** 핵심 기능은 하기입니다. (이외에도 더 있으며, 추가 안내 될 프로젝트 평가기준표에서 구체화될 예정입니다.) <br>
1. 회원가입, 로그인, 회원정보 수정 등 **유저 정보 관련 CRUD** 
2. **제품 목록**을 조회 및, **제품 상세 정보**를 조회 가능함. 
3. 장바구니에 제품을 추가할 수 있으며, **장바구니에서 CRUD** 작업이 가능함.
4. 장바구니는 서버 DB가 아닌, 프론트 단에서 저장 및 관리됨 (localStorage, indexedDB 등)
5. 장바구니에서 주문을 진행하며, **주문 완료 후 조회 및 삭제**가 가능함.

## 주요 사용 기술

### 1. 프론트엔드

- **Vanilla javascript**, html, css (**Bulma css**)
- Font-awesome 
- Daum 도로명 주소 api 
- 이외

### 2. 백엔드 

- **Express** (nodemon, babel-node로 실행됩니다.)
- Mongodb, Mongoose
- cors
- 이외

## 폴더 구조
- 프론트: `src/views` 폴더 
- 백: src/views 이외 폴더 전체
- 실행: **프론트, 백 동시에, express로 실행**



## 설치 방법

1. **.env 파일 설정 (MONGODB_URL 환경변수를, 개인 로컬 혹은 Atlas 서버 URL로 설정해야 함)**

2. express 실행

```bash
# npm 을 쓰는 경우 
npm install
npm run start

# yarn 을 쓰는 경우
yarn
yarn start
```

### 3. 후기

- 최두웅: 우리는 만날 때에 떠날 것을 염려하는 것과 같이 떠날 때에 다시 만날 것을 믿습니다. 프로젝트는 끝이지만 회사에서, 어쩌면 인생의 우연한 골목에서 재회하기를 기대합니다. 인연의 시작도 우연했으니 다음번 만남 역시 우연이더라도 이상할 일은 아닐겁니다. 언제 어디서 왜 어떻게 재회할지 인간인 저는 잘 모르겠으나 재회한다면 여러분이 무척 반가울 것 같습니다. 그때는 지금보다 더 밝게 웃으며 먼저 인사드리겠습니다. "안녕하세요~! 오랜만이네요."
<br>
<br>
- 한수정 : 비전공자에 프로젝트도 완전 처음인 초보중에 초보여서 맨 처음에 정말 많이 걱정했습니다... 프론트엔드를 지원했고 어떻게 백엔드분들과 소통을 해야 하는지도, 필요한 정보를 어떻게 요청해야 하는지도, 기본적인 CSS를 예쁘게 만드는 법도 몰랐던 제가 이 팀에 과연 몇 퍼센트라도 이바지 할 수 있을까 의문이였는데, 이 프로젝트를 하면서 개인적으로 매우 크게 성장했던 것 같습니다.
팀 운도 정말 좋았고(다들 능력있는 멋지신 분들..) 많이 여쭤보고 많은 것들을 얻었습니다! 초반에는 정말 허둥댔지만 직접 많은 문제들에 부딪치고, 실전 경험(?)을 하며 거의 반강제적으로 지식을 얻게 됐습니다 ㅎㅎ 정말 의미있는 시간이었고 하루에 6~9시간씩 코딩을 하는(실력이 부족하니 오래 붙잡고 있어야 하더라구요..) 경험을 처음으로 하게 되고, 말로 형용할 수 없는 뿌듯함을 느꼈습니다. 1인분은 하자!라는 것이 제 목표였는데, 팀원분들께서 어떻게 생각해주실지 모르겠네요 ㅎㅎ 2주 내내 하루도 빠짐없이 값졌습니다.. 5팀에게 감사의 말씀 드립니다 !!!!!

---

본 프로젝트에서 제공하는 모든 코드 등의는 저작권법에 의해 보호받는 ㈜엘리스의 자산이며, 무단 사용 및 도용, 복제 및 배포를 금합니다.
Copyright 2022 엘리스 Inc. All rights reserved.

