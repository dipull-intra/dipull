<p align="center">
  <img src="./dipull/public/public/logo_text.svg" height="50px">
  <p align="center"><b><i>Dipull :: 한국디지털미디어고등학교 인트라넷의 새 이름</i></b></p>
</p>

# 1. 디풀

[한국디지털미디어고등학교](https://dimigo.hs.kr/)에서 사용하는 인트라넷입니다.

개발에 참여하고 싶다면 디풀 개발자 커뮤니티에 가입해주세요.

[Discord 디풀 개발자 커뮤니티에 가입하기
](https://discord.gg/U7FBXyPKM6)

# 2. 설정

이 프로그램은 Next.JS로 작성되었습니다.

## 1) 환경 설정

### 1️⃣ VScode 확장 프로그램
VScode 실행 후, Extensions 탭에서 아래의 확장 프로그램을 설치해주세요.

> Extensions 탭에서 검색창에 `@recommended`를 입력하면 아래의 확장 프로그램을 한번에 설치할 수 있습니다.

> 또는 VScode에서 `Ctrl + Shift + P`를 누르고 `Show Recommended Extensions`를 입력해주세요.

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "christian-kohler.npm-intellisense",
    "dbaeumer.vscode-eslint",
    "github.copilot",
    "github.vscode-pull-request-github",
    "naumovs.color-highlight",
    "PKief.material-icon-theme",
  ]
}
```

### 2️⃣ VScode 설정

VScode 실행 후, `settings.json`을 열어 아래의 설정을 추가해주세요.

> [`.vscode/settings.json`](./.vscode/settings.json)에 추가되어 있어서 따로 추가할 필요가 없을 수 있습니다.

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.tabSize": 2,
  "editor.formatOnType": true,
  "workbench.iconTheme": "material-icon-theme"
}

```
### 3️⃣ 환경 변수 설정

`.env` 파일을 생성하고 [`.env.example`](./.env.example)의 내용을 추가해주세요.

#### 자체 발급 항목 (필수)
- `OAUTH_JWT_PUBLIC` JWT 토큰 인증 시 사용할 공개 키 (RS256)
- `OAUTH_JWT_SECRET` JWT 토큰 생성 시 사용할 비밀 키 (RS256)

#### 해당 사이트에서 발급 필요 (필수)
- `NEXT_PUBLIC_GOOGLE_CLIENT_ID` 구글 로그인 클라이언트 ID (GCP에서 발급)

#### 해당 기능 사용 시 (선택)
- `YOUTUBE_API_KEY` 기상송 검색 시 사용할 Youtube API 키 (GCP 발급)


# 3. 개발

## 1) Develop 서버 실행

개발을 시작하기 전에 아래의 명령어를 입력하여 개발 서버를 실행해주세요.

```bash
docker compose up
```
<br>

종료 시 아래의 명령어를 입력해주세요.
```bash
docker compose down
```

<br>

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 `Dipull`의 로컬 개발 서버를, [http://localhost:3001](http://localhost:3001)에서 `Dipull Auth`의 로컬 개발 서버를 확인할 수 있습니다.

`dipull/src/`과 `dipull-auth/src` 폴더 안의 소스코드를 수정하여 페이지를 수정할 수 있습니다. 

파일을 수정할 때마다 페이지가 자동으로 업데이트됩니다.

## 2) Develop 서버 패키지 설치/삭제
```bash
docker exec -t <dipull/dipull-auth> bun <add/remove> <package-name>
```

## 3) Production 서버 실행 

아래의 명령어를 입력하여 프로젝트를 빌드 및 실행 할 수 있습니다.

```bash
docker compose -f docker-compose.prd.yml up
```

## 4) 배포

Github의 `Main` 브랜치에 `Merge`하면 `Vercel`을 통해 자동으로 배포됩니다.

여러분들은 권한이 없기 때문에 `Main` 브랜치에 `Push` 및 배포를 직접 할 수 없습니다.

또한 `Main` 브랜치에 직접 `Push`하지 않고 `Github Pull Request`를 통해 `Merge`를 요청해주세요.
