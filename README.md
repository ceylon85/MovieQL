# MovieQL(`GraphQL`)

## `GraphQL` 이 해결할 수 있는 문제
1. `Over-fetching`  
- 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것(쓸모없는 정보도 받음)

2. `Under-fetching`  
- `REST`에서 하나를 완성하려고 많은 소스를 요청
#
#### 하나의 `Query` 로 DB에 무언가를 요청하고 GraphQL 언어로 원하는 정보를 얻을 수 있다. 
#### `GraphQL Query` 예시
```GraphQL
Query {
    feed{
        comments
        likeNumber
    }
    notifications {
        idRead
    }
    user {
        username
        profilePic
    }
}

```
ex) 인스타그램에 하나의 Query 를 요청   
feed의 댓글과 좋아요  
notification의 알림 확인 정보  
user의 사용자명과 프로필 사진 
 
## `Playground` 테스트 화면
- Movie API 를 받아와 playground에서 실행  
# ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/45006553/75867719-5a12e500-5e4a-11ea-8b7a-cb99aee24a10.gif)

  
  
