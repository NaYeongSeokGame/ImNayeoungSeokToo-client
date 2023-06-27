# 나도 나영석

#### 목차
- [프로젝트 소개](#지구오락실이-부럽지-않아요)
- [스프린트 일정](#스프린트-일정)
    - [Day1](#day01-팀-캔버스)
    - [Day2](#day02-서비스-맵)
    - [Day3](#day03-서비스-스케치-및-bddsdd)
    - [Day4-6](#day0406-mvp-제작-및-데모)
- [구현 기능](#구현-기능)
- [개발 환경](#개발-환경)


### 지구오락실이 부럽지 않아요!
회사 워크숍이나 지인들과의 여행에서 **아이스브레이킹**에 적합한 게임을 찾고 계신가요?  더 이상 한땀 한땀 PPT로 퀴즈를 낼 필요가 없어요! ‘**나도 나영석**’을 사용하면 누구나 손쉽게 **직접 자신만의 인물퀴즈**를 만들고 즐길 수 있어요 🙂

한 번의 퀴즈 타임동안 **몇 개의 문제**를 풀지, 문제당 **타이머는 몇 초**로 설정할지 모두 선택할 수 있어요. 순발력 있는 친구들이 많다면 타이머 시간을 좀더 줄여보는 건 어떨까요? 😈  ~~(3, 2, 1 땡!!!)~~


* 🎮 **인기 인물 퀴즈 Play**

  직접 퀴즈를 만들 시간이 부족하신가요?  제공되는 인기 인물 퀴즈를 사용해보세요. 지인들이 알 만한 카테고리를 선택하여 흥미진진한 퀴즈로 함께 즐거운 시간을 보낼 수 있을 거예요!

  💯 친구들 다 나와! **직접  인물 퀴즈** **Make**

  우리끼리만 아는 친구들의 눈! 코! 입! 인기 인물 퀴즈가 지겹다면 직접 사진을 올려 우리만 풀 수 있는 지인 퀴즈를 만들어보세요. ‘이 코… 누구였더라?’ 무심코 지나쳤던 친구의 구석구석을 관찰하고 찾다보면 사이가 더욱 돈독해질지도 몰라요!



## 스프린트 일정

- **서비스 기획**  : 2023.06.21 ~ 2023.06.23 (3일)
- **MVP 개발** : 2023.06.24 ~ 2023.06.26 (3일)
  (테오의 스프린트 15기)
> **스프린트**란? 짧은 기간동안 협업을 통해 '서비스 기획-설계-디자인-프로토타입-테스트’를 이루어내는 과정

### 주요 논의
#### Day01. 팀 캔버스
- 팀원의 개인적 목표뿐 아니라, 팀의 공통 목표를 확인하고 맞추는 시간
- 원활한 협업을 위하여 서로의 니즈와 기대, 강약점을 공유하며 서로를 알아가는 과정

        "협업을 통한 커뮤니케이션 능력 향상시키기"
        "모두가 편하게 즐길수 있는 퀴즈 서비스 만들기"

![image](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/3740e5cd-5657-47f2-a72f-574d8859b10e)



#### Day02. 서비스 맵
* 각자의 아이디어를 발산함으로써 서비스의 궁극적인 목적, 주요 대상, 핵심 가치를 공유함

        "언제 어디든 장소 상관없이 할 수 있어야 한다"
        "만들때 귀찮다는 생각이 들지않게 간편해야 한다"

* 서비스의 메인 및 서브 기능을 공유함

        "귀찮아요 버튼을 누르면 만들어진 퀴즈를 제공하기"
        "사운드와 화면 효과로 긴장감 생성하기"
![image](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/4f7ac470-212c-4bf1-a2eb-f8a1e2abd4a9)


#### Day03. 서비스 스케치 및 BDD/SDD
* 서비스의 화면을 스케치하고 임팩트와 노력을 고려하여 기능의 우선순위를 정함
* 타겟 유저와 유저의 행동을 재확인하며 기능을 설계함

![image](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/ccb0e5ed-9847-4aeb-a283-f5555e9e1d9e)


#### Day04~06. MVP 제작 및 데모
* 주요 기능을 태스크로 나누어 구현 진행
* 상시 논의를 통해 협업하며 기능 개발
* MVP 데모 진행


## 구현 기능
[**인물 퀴즈 풀기**]


| 홈 | 퀴즈 설정 |
| ------- | -------------- |
|![landing-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/c1a62265-ec91-4dad-80cd-334551c583a4)     |![setting-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/9b2ce86a-57df-4df2-ba3e-20dfd0c78dc0)            |

| 퀴즈 진입 | 퀴즈 풀이 |
| -------- | -------- |
|![loading-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/dbaf3262-e9fe-4f6c-b481-809258662e0e)      |![quiz-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/dbda77a8-b34e-4ee6-8cc9-b3155d4242d8)      |

| 정답 공개  | 풀이 결과  |
| -------- | -------- |
|![answer-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/61ba6c3c-4118-4866-9199-73b38efe4ccb)      |![score-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/b38f1726-08db-47e4-ae57-fca031b44103)      |

[**인물 퀴즈 만들기**]
| 퀴즈 프리셋 생성 | 이미지-답 업로드 | 퀴즈 발행    |
| ---------------- | ---------------- | --- |
|![custom-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/1dfdd043-0a16-4200-bf97-f81cca68b435)|![image-insert-page](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/58731630-1809-4164-a604-313b2d35168e)|![quiz-create](https://github.com/NaYeongSeokGame/ImNayeoungSeokToo-client/assets/111723390/5d76e264-1bcf-4a78-bccb-3ee73c499713) |





## 개발 환경

#### 기술 스택

- Front-End
<div style="margin-bottom: 10px">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
    <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
    <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
</div>

- Back-End
<div style="margin-bottom: 10px">
    <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
    <img src="https://img.shields.io/badge/redis-DC382D?style=for-the-badge&logo=redis&logoColor=white">
    <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
    <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white">
</div>

- Infra / CI-CD
<div style="margin-bottom: 10px">
    <img src="https://img.shields.io/badge/githubactions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">
    <img src="https://img.shields.io/badge/aws ec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white">
    <img src="https://img.shields.io/badge/aws s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white">
    <img src="https://img.shields.io/badge/AWS CloudFront-0033FF?style=for-the-badge&logo=amazonaws&logoColor=white">
    <img src="https://img.shields.io/badge/AWS CodeDeploy-CA4245?style=for-the-badge&logo=amazonaws&logoColor=white">

- Build
<div style="margin-bottom: 10px">
    <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>

- Communication
<div style="margin-bottom: 10px">
    <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
    <img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</div>

##
