# 🎈deukkiri-server🎈

드끼리 백엔드 개발 담당 박재용(@jaypyon)입니다. 

개발은 **Node.js**, **MySQL**을 사용합니다.
Node.js의 구조는 **3 Layer architecture**를 준수합니다.

## 구현 업무 세분화
1. 회원가입에 대한 CRUD 구현.
2. 로그인에 대한 검증 절차 구현.
3. 멘토링 요청에 대한 CRUD 구현.
4. 기타 API 구현 

## DB Schema

#### deukkiri_user
> 고유 식별자로서 이메일을 사용합니다. 비밀번호는 SHA-512 해시함수를 사용하여 일방향 암호화를 진행하여 보안의 3원칙을 준수하도록 합니다. 고유식별자인 emailAddress를 P.K로 설정합니다.
```sql
CREATE TABLE deukkiri_users (
    emailAddress VARCHAR(50) PRIMARY KEY,
    userPassword CHAR(128),
    studentID VARCHAR(50),
    GPA DECIMAL(1,2),
    semester INT,
    major VARCHAR(50),
    university VARCHAR(50),
    introduction VARCHAR(1000)
);
```
#### deukkiri_post
> 멘토링 요청 게시글의 고유식별자는 postID로 지정하고 이를 0부터 차례대로 늘려가며 사용합니다. 
```sql
CREATE TABLE deukkiri_post (
    postID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    emailAddress VARCHAR(50) NOT NULL,
    requestedContent VARCHAR(2000) NOT NULL,
    FOREIGN KEY (emailAddress) REFERENCES deukkiri_users(emailAddress)
);
```
