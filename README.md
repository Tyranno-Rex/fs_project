# 프로젝트명 README

## 소개
이 프로젝트는 [프로젝트명]에 관한 소스 코드 및 실행 파일들을 포함하고 있습니다. 각 폴더와 파일은 다음과 같은 역할을 수행합니다.

## 1. `check_project` ##
이 폴더는 레포지토리에 있는 파일들의 코드 수와 같은 정량적인 정보를 담은 파일입니다. 프로젝트의 규모와 성격을 빠르게 파악할 수 있도록 도움을 주는 결과물들이 여기에 있습니다.

## 2. server ##
이 폴더는 server를 실행하는 폴더로 client를 실행하기 전에 무조건 먼저 실행해야합니다. 해당 파일에 존재하는 pip 라이브러리를 꼭 설치하시길 바랍니다.

## 3. `project` ##
`project` 폴더는 클라이언트 실행 폴더로, 해당 프로그램의 개발환경은 Windows 환경의 Visual Studio Code에서 개발되었습니다. 클라이언트 측의 소스 코드와 관련된 파일들이 이 폴더에 위치합니다.

### 4. `webtoonDB` ##
`webtoonDB` 폴더는 해당 프로젝트를 돌리기 위해서 서버에게 필요한 정보를 담고 있습니다. server는 해당 코드를 기반으로 생성된 웹툰 DB를 통해서 client에게 데이터를 수신합니다. 해당 폴더로 db를 구성하지 않으면 프로젝트가 돌아가지 않으니 유의하세요.

## 프로젝트 실행
프로젝트를 실행하기 위해서는 다음 단계를 따르세요:

1. `node_modules` 폴더에서 필요한 설정을 진행하세요.
2. `webtoonDB` 폴더에서 데이터베이스와 관련된 설정을 확인하고 필요한 알고리즘을 실행하세요. 요일별, 장르별, 모델별 DB가 클라이언트의 안에 구성이 되어야합니다.
    mongodb의 구조는 다음과 같습니다.
4. `project` 폴더에서 클라이언트 실행을 위한 환경을 구축하세요.

## 주의사항
- 프로젝트는 Windows 환경에서 Visual Studio Code를 사용하여 개발되었으므로, 다른 환경에서 실행 시 주의가 필요합니다.
- `server.py` 파일은 유일한 서버 실행 파일이므로, 해당 파일을 이용하여 서버를 실행하세요.

이제 프로젝트에 대한 간략한 소개와 실행 방법이 제공되었습니다. 추가적인 정보는 각 폴더와 파일에 대한 상세한 내용을 참고하세요.
