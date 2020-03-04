# MovieQL

## `GraphQL` 이 해결할 수 있는 문제
1. `Over-fetching`  
- 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것(쓸모없는 정보도 받음)

2. `Under-fetching`  
- REST에서 하나를 완성하려고 많은 소스를 요청

# 
### `Nodemon`
- 파일을 수정할때마다 서버를 재시작
#

### `Playground` -> `GraphQL-yoga` 
- `Database` 를 `test`(localhost:4000)
#

### `Resolvers`
- `Query`를 해결(resolve)
- `GraphQL` 서버가 `Query`나 `Mutation`의 정의를 발견하면 `Resolver`를 찾아 해당 함수를 실행
#
### `Mutation` 
- `DB` 상태가 변할 때 사용 `change of state`
- `GraphQL` 에게 `Mutation`이나 `Query`를 요청하길 원할 때 `type Query`와 `type Mutation`에 넣어야 함

