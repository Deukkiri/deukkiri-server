# ๐deukkiri-server๐

๋๋ผ๋ฆฌ ๋ฐฑ์๋ ๊ฐ๋ฐ ๋ด๋น ๋ฐ์ฌ์ฉ(@jaypyon)์๋๋ค. 

๊ฐ๋ฐ์ **Node.js**, **MySQL**์ ์ฌ์ฉํฉ๋๋ค.
Node.js์ ๊ตฌ์กฐ๋ **3 Layer architecture**๋ฅผ ์ค์ํฉ๋๋ค.

## ๊ตฌํ ์๋ฌด ์ธ๋ถํ
1. ํ์๊ฐ์์ ๋ํ CRUD ๊ตฌํ.
2. ๋ก๊ทธ์ธ์ ๋ํ ๊ฒ์ฆ ์ ์ฐจ ๊ตฌํ.
3. ๋ฉํ ๋ง ์์ฒญ์ ๋ํ CRUD ๊ตฌํ.
4. ๊ธฐํ API ๊ตฌํ 

## DB Schema

#### deukkiri_user
> ๊ณ ์  ์๋ณ์๋ก์ ์ด๋ฉ์ผ์ ์ฌ์ฉํฉ๋๋ค. ๋น๋ฐ๋ฒํธ๋ SHA-512 ํด์ํจ์๋ฅผ ์ฌ์ฉํ์ฌ ์ผ๋ฐฉํฅ ์ํธํ๋ฅผ ์งํํ์ฌ ๋ณด์์ 3์์น์ ์ค์ํ๋๋ก ํฉ๋๋ค. ๊ณ ์ ์๋ณ์์ธ emailAddress๋ฅผ P.K๋ก ์ค์ ํฉ๋๋ค.
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
> ๋ฉํ ๋ง ์์ฒญ ๊ฒ์๊ธ์ ๊ณ ์ ์๋ณ์๋ postID๋ก ์ง์ ํ๊ณ  ์ด๋ฅผ 0๋ถํฐ ์ฐจ๋ก๋๋ก ๋๋ ค๊ฐ๋ฉฐ ์ฌ์ฉํฉ๋๋ค. 
```sql
CREATE TABLE deukkiri_post (
    postID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    emailAddress VARCHAR(50) NOT NULL,
    requestedContent VARCHAR(2000) NOT NULL,
    FOREIGN KEY (emailAddress) REFERENCES deukkiri_users(emailAddress)
);
```
