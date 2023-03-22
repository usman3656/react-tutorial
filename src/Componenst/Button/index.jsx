import {Button} from 'react-bootstrap';

export const TestButton = ({buttonname}) =>{
    return(
        <div className='TestButton'>
            <Button> {buttonname}</Button>
        

            </div>

    )
}
export const PrimaryButton = () =>{
    return(
        <div className='PrimaryButton'>
            <Button variant="primary">Primary</Button>{' '}        
        </div>
            
    )
}
