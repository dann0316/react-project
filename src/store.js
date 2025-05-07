import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name: "user",
    initialState: "kim",
    reducers: {
        // 함수1() {

        // }
        changeName(state, action) {
            return "john" + state;
        },
    },
});

export const { changeName } = user.actions; //액션 생성자 export

const stock = createSlice({
    name: "stock",
    initialState: [10, 11, 12],
});

// 예시 데이터
const data = createSlice({
    name: "data",
    initialState: [
        { id: 11, name: "White and Black", count: 2 },
        { id: 12, name: "Grey Yordan", count: 1 },
        { id: 13, name: "Red Nike", count: 3 },
        { id: 14, name: "Blue Adidas", count: 1 },
        { id: 15, name: "Green Converse", count: 4 },
        { id: 16, name: "Yellow Puma", count: 2 },
        { id: 17, name: "Purple Vans", count: 1 },
        { id: 18, name: "Orange Reebok", count: 3 },
        { id: 19, name: "Black Sketchers", count: 2 },
        { id: 20, name: "Silver Fila", count: 1 },
        { id: 21, name: "Gold Asics", count: 2 },
    ],
    reducers: {
        addCount(state, action) {
            state[action.payload].count += 1;
        },
        sortProduct(state, action) {
            state.sort((a, b) => {
                return a[action.payload] > b[action.payload] ? 1 : -1;
            });
        },
        reverseSortProduct(state, action) {
            state.sort((a, b) => {
                return a[action.payload] > b[action.payload] ? -1 : 1;
            });
        },
        addProduct(state, action) {
            const item = state.find((item) => item.id === action.payload?.id);
            if (!item) {
                state.push({
                    id: action.payload?.id,
                    name: action.payload?.title,
                    count: 1
                });
                alert("장바구니에 담겼습니다.");
            } else {
                const index = state.findIndex((a) => a.id === action.payload?.id);
                state[index].count += 1;
                alert("이미 장바구니에 담긴 상품입니다.");
            }
        },
        deleteProduct(state, action) {
            // 쓰는 곳에 item.id 보내면 그거 받고 그걸 같은 id를 삭제
            const id = action.payload;
            let copy = [...state];
            const index = copy.findIndex((a) => a.id === id );
            copy.splice(index, 1);
            alert("장바구니에서 삭제되었습니다.");
            return copy;
        }
    },
});

export const { addCount, sortProduct, reverseSortProduct, addProduct, deleteProduct } = data.actions;

const store = configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        data: data.reducer,
    },
});

export default store;
