import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useState, useEffect } from "react";
import data from "./data.js";
import {
    Routes,
    Route,
    Link,
    Router,
    useNavigate,
    Outlet,
} from "react-router-dom";
//index.js에서도 추가할 게 있음 그건 react 디렉토리 구조랑 react 라이브러리 사용법에 따라 다른가?
import Card from "./components/Card.js";
import Detail from "./pages/Detail.js";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Cart from "./pages/Cart.js";

function App() {
    // 더 보기 카운트 state
    let [count, setCount] = useState(0);
    // 데이터 state
    let [shoes, setShoes] = useState(data);
    // 더 보기 상품 없음 state
    const [isDone, setIsDone] = useState(false);
    // 더 보기 시 로딩 state
    const [loading, setLoading] = useState(false);
    // 최근 본 상품 진열대
    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify([]));
    }, []);

    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/">ShoppingMall</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            Home
                        </Nav.Link>

                        <Nav.Link
                            onClick={() => {
                                navigate("/cart");
                            }}
                        >
                            Cart
                        </Nav.Link>
                    </Nav>
                    {/* <Link to={"./detail"}>Detail</Link>
                    <Nav.Link href="./detail" style={{ color: "white" }}>
                        Detail2
                    </Nav.Link> */}
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg">
                                <div className="bg-img">

                                </div>
                                <h3>최근 본 상품</h3>
                                {/* // localStorage에 내가 들어간 페이지의 id에 해당하는 상품 넣어주면 됨 */}
                                {(localStorage.getItem("watched")
                                    ? JSON.parse(
                                        localStorage.getItem("watched")
                                    )
                                    : []
                                ).map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="latest-container"
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                width="10%"
                                            />
                                            <p>{item.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="container">
                                <div className="row">
                                    {shoes.map((a, i) => {
                                        return (
                                            <Card i={i} key={i} shoes={shoes} />
                                        );
                                    })}
                                </div>
                            </div>
                            <Button
                                onClick={() => {
                                    if (isDone) return;

                                    setLoading(true);
                                    setCount(count + 1);

                                    if (count === 0) {
                                        axios
                                            .get(
                                                "https://codingapple1.github.io/shop/data2.json"
                                            )
                                            .then((res) => {
                                                console.log(res.data);
                                                let copy = [...shoes];
                                                copy.push(...res.data);
                                                setShoes(copy);
                                            })
                                            .catch(() => {
                                                //예외처리
                                                console.log("실패함 ㅅㄱ");
                                            })
                                            .finally(() => setLoading(false));
                                    } else if (count === 1) {
                                        axios
                                            .get(
                                                "https://codingapple1.github.io/shop/data3.json"
                                            )
                                            .then((res) => {
                                                console.log(res.data);
                                                let copy = [...shoes];
                                                copy.push(...res.data);
                                                setShoes(copy);
                                            })
                                            .catch(() => {
                                                //예외처리
                                                console.log("실패함 ㅅㄱ");
                                            })
                                            .finally(() => setLoading(false));
                                    } else if(count === 2) {

                                    } else {
                                        setIsDone(true);
                                        setLoading(false);
                                    }
                                }}
                                style={{
                                    cursor: isDone ? "not-allowed" : "pointer",
                                }}
                            >
                                {isDone ? (
                                    "더 이상 상품 없음"
                                ) : loading ? (
                                    <Spinner
                                        animation="border"
                                        size="sm"
                                        role="status"
                                    />
                                ) : (
                                    `더 보기 ${count}`
                                )}
                            </Button>
                        </>
                    }
                />
                {/* {
                shoes.map((a,i) => {
                    return (
                            <Route path='/detail' element={
                            <Detail shoes={shoes} i = {i}/>
                            }/>
                        )
                    })
                } */}
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="cart" element={<Cart />} />
                {/* <Route path="/event" element={
                        <>
                            <h1>오늘의 이벤트</h1>
                            <Outlet />
                        </>
                    }>
                    <Route
                        path="one"
                        element={<h2>첫 주문시 양배추즙 서비스</h2>}/>
                    <Route path="two" element={<h2>생일기념 쿠폰 받기</h2>} />
                </Route> */}
            </Routes>
        </div>
    );
}

export default App;
//상세페이지 컴포넌트로 만들기
//app.js에서 안에 넣으려고 한다 => 너무 지저분할거같다 => 다른 파일로 빼서 하는 것도 방법
