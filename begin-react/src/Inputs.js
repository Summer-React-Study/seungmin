import React, { useRef } from 'react';

function Inputs({ onCreate }) {
    const $name = useRef();
    const $sweetness = useRef();

    const getNewFruitValue = () => {
        const name = $name.current.value;
        const sweetness = $sweetness.current.value;
        const newFruit = {
            name,
            sweetness,
        }

        return newFruit;
    }

    const resetInputs = () => {
        $name.current.value = "";
        $sweetness.current.value = "A";
    }

    const onCreateBtnClick = () => {
        const { name, sweetness } = getNewFruitValue();
        onCreate(name, sweetness);
        resetInputs();
    }

    return (
        <div className="input">
            <input type="text" className="name" ref={$name}></input>
            <select className="sweetness" ref={$sweetness}>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
            <button className="create-btn" onClick={onCreateBtnClick}>과일 추가</button>
        </div>
    )
}

export default Inputs;