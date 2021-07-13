import React from 'react';
import styled from 'styled-components';

import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const getDay = (today) => {
    let day = ''

    switch(today.getDay()) {
        case 1: {
            day = '월';
            break;
        }
        case 2: {
            day = '화';
            break;
        }
        case 3: {
            day = '수';
            break;
        }
        case 4: {
            day = '목';
            break;
        }
        case 5: {
            day = '금';
            break;
        }
        case 6: {
            day = '토';
            break;
        }
        case 7: {
            day = '일';
            break;
        }
        default:
    }
    return day;
}

function TodoHead() {
    const today = new Date();
    const _today = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        date: today.getDate(),
        day: getDay(today)
    }
    const todos = useTodoState();
    console.log(todos);

    return (
        <TodoHeadBlock>
            <h1>{_today.year}년 {_today.month}월 {_today.date}일</h1>
            <div className="day">{_today.day}요일</div>
            <div className="tasks-left">할 일 {2}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;