import { useEffect, useState } from "react";
// 1) callback функция
// 2) массив зависимостей
const styles = {
    width: "100%",
    height: "400px",
    border: "2px solid black",
  };
export function Test() {
  const [value, setValue] = useState(false);
// console.log("состаяние ", value);
  // 1) монтирование (рождение)
//   useEffect(() => {
//     // тело функции
//     console.log("монтирование Test");
//   }, []);

// //   // 2) обновление (изменение)
//  useEffect(() => {
//     console.log('изменения ТЕСТ ')
//  },[value]);

// //  смерть размортирование 
// useEffect(() => {
//    return ()=>{
//     console.log('размонтирование Test')
//    }
    
//   }, []);

// обьединить в одном useEffect можно только рождения и смерть(монтирования и размонтирование )
// передовать в useEffect второмым аргументов как минимум пустой массив 

// рождения и смерть
useEffect(()=>{
    console.log('mount ')
    return ()=>{
    console.log('размонтирование Test')}
},[])

// изменения
 useEffect(() => {
    console.log('изменения ТЕСТ ')
 },[value]);

  return (
    <div style={styles}>
      Тестовый компонент
      <button onClick={() => setValue((prev) => !prev)}>click</button>
    </div>
  );
}