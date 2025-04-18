import './Button.css';

 export const Button = ({btnType,btnText}) => {
    if (btnType === 'success'){
        return <button className='green-button'>{btnText}</button>
    }
    else if (btnType ==='danger'){
        return <button className='red-button'>{btnText}</button>;
    }else {
        return <button className='blue-button'>{btnText}</button>
    }
}