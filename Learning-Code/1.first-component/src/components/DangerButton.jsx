import './Button.css'

export const DangerButton = () => {
    return (
        <button className="red-button">Delete</button>
    );
}

export function SuccessButton() {
    return (
        <button className='green-button'>Success</button>
    )
}
